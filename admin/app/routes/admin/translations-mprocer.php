<?php

/**
 * Renders the application interface for Translations (M-Procer).
 */

$Slim->map('/translations/mprocer', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_TRANSLATIONS),
    function () use ($Slim)
{
    Loader::mo(array('LangMapper'));
    Loader::hp(array('FileTypes'));

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    $Mo_LangMapper = new Mo_LangMapper($appCfg);

    // Save dictionary
    $importedCsvData = array();
    if (isset($_FILES['catalogCSV']))
    {
        if ($_FILES['catalogCSV']['error']
            || ($h = fopen($_FILES['catalogCSV']['tmp_name'], 'r')) === false
            || !Hp_FileTypes::isCsv($_FILES['catalogCSV']['tmp_name'], 3, $_FILES['catalogCSV']['type']))
        {
            $Slim->flashNow('error',
                Utils::escape('Error al subir el archivo. Puede que el archivo no sea válido.'));
        } else {
            $i = 0;
            $csvData = array(
                'ready' => array(),
                'withError' => array()
            );

            // Cleaning
            while (($d = fgetcsv($h)) !== FALSE) {
                if (++ $i == 1) {
                    continue; // Omitting the first line (titles)
                }

                // 0: Lang | 1: Key | 2: Value

                // Missing data
                if (count($d) < 3) {
                    $csvData['withError'][] = Utils::escape('Faltan datos en la línea')
                        . " {$i}: " . implode(', ', $d);
                }

                // Inexistent language
                else if (!array_key_exists($d[0], $Mo_LangMapper->fetchAvailableLangs())) {
                    $csvData['withError'][] = Utils::escape('Lengua incorrecta en la línea')
                        . " {$i}: '{$d[0]}'";
                }

                else {
                    $csvData['ready'][] = new Mo_Lang(array(
                        'lang' => $d[0],
                        'key' => $d[1],
                        'value' => $d[2]
                    ));
                }
            }

            // Saving
            if ($csvData['ready']) {
                $Mo_LangMapper->save($csvData['ready']);
                $Slim->flashNow('success', Utils::escape('Se exportaron correctamente los datos') . ".\n\n"
                    . Utils::escape('Filas Totales') . ': ' . (count($csvData['ready']) + count($csvData['withError']))
                    . "\n" . Utils::escape('Filas exportadas') . ': ' . count($csvData['ready'])
                    . ($csvData['withError'] ? "\n\n" . Utils::escape('Errores') . ":\n"
                        . '-> ' . implode("\n -> ", $csvData['withError']) : ''));
            } else {
                $Slim->flashNow('error', Utils::escape('Se detectaron demasiados errores, no se exportaron los datos') . ".\n\n"
                    . '-> ' . implode("\n -> ", $csvData['withError']));
            }
        }
    }

    // Fetch dictionary
    $availableLangs = $Mo_LangMapper->fetchAvailableLangs();
    $dictionaries = array();
    foreach (array_keys($availableLangs) as $v) {
        if ($data = $Mo_LangMapper->fetchDictionaryByLang($v, false)) {
            $dictionaries[$v] = $data;
        }
    }

    $Slim->render(
        'translations-mprocerContent.tpl',
        array(
            'availableLangs' => $availableLangs,
            'dictionaries' => $dictionaries
        )
    );
})->via('GET', 'POST')->name('translations-mprocer');
