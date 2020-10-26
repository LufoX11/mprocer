<?php

/**
 * Fixes the names of the images.
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
    . "php fixImagesNames.php <images_directory> <size>\n\n";
$directory = (isset($argv[1]) ? $argv[1] : null);
$size = (isset($argv[2]) ? $argv[2] : null);

if ($directory && $directory == '--help') {
    exit($usage);
}
if (!$directory || !$size) {
    die("\nError: Missing required arguments.\n\n---{$usage}");
}

if (!is_dir($directory) || !is_readable($directory)) {
    die("\nError: Invalid or not readable directory.\n\n---{$usage}");
}

$TimestampLogFileWriter = new TimestampLogFileWriter(array('path' => "{$rootDir}/logs/scripts/"));
$logger = new Slim\Log($TimestampLogFileWriter);
$logger->setLevel(Slim\Log::INFO);

////
// Main
////

Loader::lib(array('Utils'));
Loader::vendor(array('WideImage/WideImage'));

$stats = array(
    'Report Date' => date('Y-m-d H:i:s'),
    'Total Time' => 0,

    // Images
    'Total Images' => 0,
    'Updated Images' => 0
);

Utils::time();
$images = scandir($directory);
$newSize = explode('x', substr($size, 1));
foreach ($images as $v) {
    $imageInfo = pathinfo($v);
    if (!is_dir("{$directory}/{$v}")
        && isset($imageInfo['extension'])
        && in_array(strtolower($imageInfo['extension']), WideImage::$supportedFormats)
        && stripos($v, '_') === false)
    {
        $stats['Total Images'] ++;
        $toFile = "{$directory}/{$imageInfo['filename']}{$size}.{$imageInfo['extension']}";
        if (!file_exists($toFile)) {

            // Create new resized image
            $fromFile = "{$directory}/{$v}";
            $resizeTo = array(
                'width' => $newSize[0],
                'height' => (isset($newSize[1]) ? $newSize[1] : null)
            );
            $imageHandler = WideImage::load($fromFile);
            $imageHandler = $imageHandler->resize($resizeTo['width'], $resizeTo['height'], 'fill');
            if (isset($imageInfo['extension']) && strtolower($imageInfo['extension']) == 'jpg') {
                $imageHandler->saveToFile($toFile, 80);
            } else {
                $imageHandler->saveToFile($toFile);
            }
            $stats['Updated Images'] ++;
        }
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
    sprintf('%s/data/reports/scripts/fixImagesNames-%s.txt', $rootDir, strtotime($stats['Report Date'])), $statsFile);
