<?php

/**
 * Translates table fields.
 */

////
// Options and Settings.
////

$rootDir = realpath(dirname(__FILE__) . '/../');

require "{$rootDir}/lib/Loader.php";
Loader::lib(array('Slim/Log'));
Loader::vendor(array('Slim/Extras/LogWriter/TimestampLogFileWriter'));

$usage = ''
    . "\nUSAGE:\n\n"
    . "php translateTable.php <config.ini>\n\n";
$configFile = (isset($argv[1]) ? $argv[1] : null);

if ($configFile && $configFile == '--help') {
    exit($usage);
}
if (!$configFile) {
    die("\nError: Missing required arguments.\n\n---{$usage}");
}

if (!is_readable($configFile)) {
    die("\nError: Invalid or not readable config file.\n\n---{$usage}");
}

$TimestampLogFileWriter = new TimestampLogFileWriter(array('path' => "{$rootDir}/logs/scripts/"));
$logger = new Slim\Log($TimestampLogFileWriter);
$logger->setLevel(Slim\Log::INFO);

////
// Main
////

Loader::mo(array('TranslateTableMapper'));
Loader::lib(array('Utils'));

$stats = array(
    'Report Date' => date('Y-m-d H:i:s'),
    'Total Time' => 0,

    // Translations
    'Total Rows' => 0, // Total rows to translate
    'Updated Rows' => 0,
    'Same Words' => 0, // Origin and Target are the same words (might be a wrong or not translatable word)
    'Same Words List' => '', // List of words
    'Translation Errors' => 0, // Connection errors
    'Translation Errors List' => '' // List of errors
);

Utils::time();

// Config
$rawCfg = parse_ini_file($configFile, true);
$cfg = array(
    'databases' => array(
        'default' => array(
            'read' => $rawCfg['source']['database'],
            'write' => $rawCfg['target']['database']
        )
    ),
    'source' => array(
        'table' => $rawCfg['source']['table'],
        'lang' => $rawCfg['source']['lang']
    ),
    'target' => array(
        'table' => $rawCfg['target']['table'],
        'lang' => $rawCfg['target']['lang']
    ),
    'services' => $rawCfg['services']
);

// Init the current translation service
Loader::lib(array($currentTranslator = $cfg['services']['current']));
$Translator = new $currentTranslator(array('key' => $cfg['services'][$currentTranslator]['key']));

// Fetch data
$Mo_TranslateTableMapper = new Mo_TranslateTableMapper($cfg);
$fieldsToTranslate = $Mo_TranslateTableMapper->fetchFieldsToTranslate();
$stats['Total Rows'] = count($fieldsToTranslate);

// Translate and save
$translatedFields = array();
foreach ($fieldsToTranslate as $v) {
    try {
        if ($res = $Translator->translate($cfg['source']['lang'], $cfg['target']['lang'], $v['text'])) {
            if ($res == $v['text']) {
                $stats['Same Words'] ++;
                $stats['Same Words List'] .= "{$res}; ";
            }
            if ($Mo_TranslateTableMapper->insertTranslation($v['id'], $res)) {
                $stats['Updated Rows'] ++;
            }
        }
    } catch (Exception $e) {
        $stats['Translation Errors'] ++;
        $stats['Translation Errors List'] .= "\n\n---\n" . $e->getMessage();
        continue;
    }
}

$stats['Total Time'] = Utils::time(true);

////
// Stats and Reports
////

$statsFile = $stats;
array_walk($statsFile, function(&$v, $k) { $v = "{$k}: {$v}"; });
$statsFile = implode("\n", $statsFile);
echo "\n---\n{$statsFile}\n\n";
Utils::fileWrite(
    sprintf('%s/data/reports/scripts/translateTable-%s.txt', $rootDir, strtotime($stats['Report Date'])), $statsFile);
