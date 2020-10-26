<?php

/**
 * Front controller.
 */

require '../../app/include/init.php';
require '../../lib/Loader.php';

$appCfgMain = parse_ini_file('../../app/config/main.ini', true);

// Application general status
if ($appCfgMain['framework']['status'] == 'offline') {
    exit(header('HTTP/1.0 503 Offline API'));
}

Loader::lib(array('Utils', 'Ajax', 'Slim/Slim'));
Loader::hp(array('Name'));
use Slim\Slim;
Slim::registerAutoloader();

// The session must be started here because otherwise already saved objects would not be recognized
session_name('iMaat_mProcer');
session_start();

// System config
$appCfg = array(
    'main' => $appCfgMain,
    'front' => parse_ini_file('../../app/config/front.ini', true),
    'paths' => parse_ini_file('../../app/config/paths.ini', true),
    'cache' => parse_ini_file('../../app/config/cache.ini', true),
    'databases' => parse_ini_file('../../app/config/databases.ini', true)
);

$appCfg['paths']['web']['site']['base'] = '';
$cfgFiles = array(
    'main', 'paths', 'services', 'cache', 'front', 'databases', 'service');
foreach (Hp_Name::fetchApplicationsNames() as $k => $v1) {
    foreach ($cfgFiles as $v) {
        if (isset($appCfg['paths']['fs'][$k])
            && file_exists("{$appCfg['paths']['fs'][$k]}/app/config/{$v}.ini"))
        {
            $appCfg['applications'][$k][$v] =
                parse_ini_file("{$appCfg['paths']['fs'][$k]}/app/config/{$v}.ini", true);
        }
    }
}

// Slim initialization
$Slim = new Slim(array(
    'appCfg' => $appCfg,
    'mode' => $appCfg['main']['framework']['mode'],
    'domain' => 'api'
));

// Config for environment
require '../../app/modes/production.php';

////
// Controllers
////

require '../../app/middlewares/api/validateAccessToken.php';
require '../../app/hooks/slimBeforeRouter.php';

// v1
require '../../app/routes/api/mprocer/news.php';

$Slim->run();
