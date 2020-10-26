<?php

/**
 * Renders the application interface for Services.
 */

$Slim->map('/services/mprocer', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_SERVICES),
    function () use ($Slim)
{
    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    switch ($Slim->request()->get('msg')) {
        case 'cmOk':
            $Slim->flashNow('success', Utils::escape('La configuración se guardó.'));
            break;

        case 'cmError':
            $Slim->flashNow('error', Utils::escape('No se pudo guardar la configuración.'));
            break;

        case 'genDirOk':
            $Slim->flashNow('success', Utils::escape('Se generó la estructura de directorios para ')
                . '<strong>' . Utils::escape($Slim->request()->get('service')) . '</strong>');
            break;

        case 'genDirErrorExistent':
            $Slim->flashNow('error', Utils::escape('Los directorios para') . ' <strong>'
                . Utils::escape($Slim->request()->get('service')) . '</strong> '
                . Utils::escape('ya existen.'));
            break;

        case 'genDirError':
            $Slim->flashNow('error', Utils::escape('No se pudieron generar los directorios para') . ' <strong>'
                . Utils::escape($Slim->request()->get('service')) , '</strong>.');
            break;

        case 'sqlgenErrorCfg':
            $Slim->flashNow('error', Utils::escape('No existe la configuración de la base de datos para ')
                . '<strong>' . Utils::escape($Slim->request()->get('service')) . '</strong>. '
                . Utils::escape('Por favor, agregala en "Bases de Datos".'));
            break;

        case 'sqlgenOk':
            $Slim->flashNow('success',
                Utils::escape('Se completó el comando para generar la base de datos de')
                . ' <strong>' . Utils::escape($Slim->request()->get('service')) . '</strong>. '
                . Utils::escape('Por favor, verificá que la base de datos se haya creado correctamente.'));
            break;

        case 'fileupOk':
            $Slim->flashNow('success', Utils::escape('Se guardó el archivo')
                . ' <strong>' . Utils::escape($Slim->request()->get('file')) . '</strong> '
                . Utils::escape('para')
                . ' <strong>' . Utils::escape($Slim->request()->get('service')) , '</strong>.');
            break;

        case 'fileupError':
            $Slim->flashNow('error', Utils::escape('Ocurrió un problema al guardar el archivo para')
                . ' <strong>'
                . Utils::escape($Slim->request()->get('service')) , '</strong>.');
            break;

        case 'filelistDelOk':
            $Slim->flashNow('success', Utils::escape('Se eliminaron correctamente los archivos del directorio de')
                . ' <strong>' . Utils::escape($Slim->request()->get('service')) , '</strong>.');
            break;
    }

    ////
    // Config Manager
    ////

    $mainFilePath = "{$appCfg['paths']['fs']['root']}/app/config/main.ini";
    $frontFilePath = "{$appCfg['paths']['fs']['root']}/app/config/front.ini";
    $servicesFilePath = "{$appCfg['paths']['fs']['root']}/app/config/services.ini";
    $dbFilePath = "{$appCfg['paths']['fs']['root']}/app/config/databases.ini";

    if ($Slim->request()->post('mainFile')) {
        $res = (copy($mainFilePath, "{$mainFilePath}.bak") &&
            file_put_contents($mainFilePath, $Slim->request()->post('mainFile')));
    }
    if ($Slim->request()->post('frontFile')) {
        $res = (copy($frontFilePath, "{$frontFilePath}.bak") &&
            file_put_contents($frontFilePath, $Slim->request()->post('frontFile')));
    }
    if ($Slim->request()->post('servicesFile')) {
        $res = (copy($servicesFilePath, "{$servicesFilePath}.bak") &&
            file_put_contents($servicesFilePath, $Slim->request()->post('servicesFile')));
    }
    if ($Slim->request()->post('dbFile')) {
        $res = (copy($dbFilePath, "{$dbFilePath}.bak") &&
            file_put_contents($dbFilePath, $Slim->request()->post('dbFile')));
    }
    if (isset($res)) {
        if ($res) {
            $Slim->redirect('/services/mprocer?msg=cmOk');
        } else {
            $Slim->redirect('/services/mprocer?msg=cmError');
        }
    }

    $mainFile = file_get_contents($mainFilePath);
    $mainSampleFile = file_get_contents("{$appCfg['paths']['fs']['root']}/app/config/main.ini.sample");
    $frontFile = file_get_contents($frontFilePath);
    $frontSampleFile = file_get_contents("{$appCfg['paths']['fs']['root']}/app/config/front.ini.sample");
    $servicesFile = file_get_contents($servicesFilePath);
    $servicesSampleFile = file_get_contents("{$appCfg['paths']['fs']['root']}/app/config/services.ini.sample");
    $dbFile = file_get_contents($dbFilePath);
    $dbSampleFile = file_get_contents("{$appCfg['paths']['fs']['root']}/app/config/databases.ini.sample");

    ////
    // Structure Creator
    ////

    if ($Slim->request()->post('structuregenServiceName') !== null
        && $structuregenServiceName =
            $appCfg['main']['services'][$Slim->request()->post('structuregenServiceName')]) {

        $imagesDir = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$structuregenServiceName}/cache";
        if (file_exists($imagesDir)) {
            $Slim->redirect("/services/mprocer?msg=genDirErrorExistent&service={$structuregenServiceName}");
        } else {
            if (mkdir($imagesDir, 0777, true)) {
                $Slim->redirect("/services/mprocer?msg=genDirOk&service={$structuregenServiceName}");
            } else {
                $Slim->redirect("/services/mprocer?msg=genDirError&service={$structuregenServiceName}");
            }
        }
    }

    ////
    // SQL Generator
    ////

    if ($Slim->request()->post('sqlgenServiceName') !== null
        && $sqlgenServiceName =
            $appCfg['main']['services'][$Slim->request()->post('sqlgenServiceName')]) {

        if (!isset($appCfg['databases'][$sqlgenServiceName]['read']['database'])) {
            $Slim->redirect("/services/mprocer?msg=sqlgenErrorCfg&service={$sqlgenServiceName}");
        }

        // Generate SQL file
        $dbName = $appCfg['databases'][$sqlgenServiceName]['read']['database'];
        $sqlDir = "{$appCfg['paths']['fs']['root']}/data/db/mysql";
        $sqlModelFile = file_get_contents("{$sqlDir}/mprocer_service.sql");
        $sqlFile = str_replace('%DB_NAME%', $dbName, $sqlModelFile);
        file_put_contents("{$sqlDir}/{$dbName}.sql", $sqlFile);

        // Dump to MySQL server (use default connection to execute SQL statements)
        $host = $appCfg['databases']['default']['write']['host'];
        $user = $appCfg['databases']['default']['write']['user'];
        $password = $appCfg['databases']['default']['write']['password'];
        $db = $appCfg['databases']['default']['write']['database'];
        $port = $appCfg['databases']['default']['write']['port'];
        shell_exec("mysql -h {$host} -u {$user} -P {$port} --password='{$password}' mprocer "
            . "< {$sqlDir}/{$dbName}.sql");
        $Slim->redirect("/services/mprocer?msg=sqlgenOk&service={$sqlgenServiceName}");
    }

    ////
    // File uploader
    ////

    $fileupServiceNameKey = ($Slim->request()->post('fileupServiceNameKey') !== null ?
        $Slim->request()->post('fileupServiceNameKey') : 0);
    $filelistImagesDir = "{$appCfg['paths']['fs']['root']}/public/static/img/services/"
        . $appCfg['main']['services'][$fileupServiceNameKey];
    if ($filelistImages = scandir($filelistImagesDir)) {
        foreach ($filelistImages as $k => $v) {
            if (is_dir("{$filelistImagesDir}/{$v}")) {
                unset($filelistImages[$k]);
            }
        }
    }

    // Upload file
    if ($Slim->request()->post('fileupServiceNameKey') !== null
        && $Slim->request()->post('fileupTrigger')
        && $fileupServiceName =
            $appCfg['main']['services'][$Slim->request()->post('fileupServiceNameKey')]) {

        if ($_FILES['fileupImgFile']['error']) {
            $Slim->redirect("/services/mprocer?msg=fileupError&service={$fileupServiceName}");
        } else {
            switch ($Slim->request()->post('fileupType')) {
                case 'img':
                    $from = $_FILES['fileupImgFile']['tmp_name'];
                    $to = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$fileupServiceName}"
                        . "/{$_FILES['fileupImgFile']['name']}";
                    break;
            }
            if (move_uploaded_file($from, $to)) {
                $Slim->redirect(
                    "/services/mprocer?msg=fileupOk&file={$_FILES['fileupImgFile']['name']}&service={$fileupServiceName}");
            } else {
                $Slim->redirect("/services/mprocer?msg=fileupError&service={$fileupServiceName}");
            }
        }
    }

    // Delete image
    if ($Slim->request()->post('fileupServiceNameKey') !== null
        && $Slim->request()->post('filelistImg') !== null
        && $fileupServiceName =
            $appCfg['main']['services'][$Slim->request()->post('fileupServiceNameKey')]) {

        foreach ($Slim->request()->post('filelistImg') as $v) {
            unlink("{$filelistImagesDir}/{$v}");
        }
        $Slim->redirect("/services/mprocer?msg=filelistDelOk&service={$fileupServiceName}");
    }

    $Slim->render(
        'services-mprocerContent.tpl',
        array(
            'mainFile' => $mainFile,
            'mainSampleFile' => $mainSampleFile,
            'frontFile' => $frontFile,
            'frontSampleFile' => $frontSampleFile,
            'servicesFile' => $servicesFile,
            'servicesSampleFile' => $servicesSampleFile,
            'dbFile' => $dbFile,
            'dbSampleFile' => $dbSampleFile,
            'services' => $appCfg['main']['services'],
            'fileupServiceNameKey' => $fileupServiceNameKey,
            'filelistImages' => $filelistImages
        )
    );
})->via('GET', 'POST')->name('services-mprocer');
