<?php

/**
 * Front controller.
 */

require '../app/include/init.php';
require '../lib/Loader.php';

$appCfgMain = parse_ini_file('../app/config/site/main.ini', true);

// Application general status
if ($appCfgMain['framework']['status'] == 'offline') {
    die(json_encode('Site offline'));
}

Loader::lib(array('Utils', 'Slim/Slim'));
use Slim\Slim;
Slim::registerAutoloader();

Loader::hp(array('View'));

// The session must be started here because otherwise already saved objects would not be recognized
session_name('iMaat_Main');
session_start();

// System config
$appCfg = array(
    'main' => $appCfgMain,
    'front' => parse_ini_file('../app/config/site/front.ini', true),
    'paths' => parse_ini_file('../app/config/site/paths.ini', true),
    'cache' => parse_ini_file('../app/config/site/cache.ini', true),
    'databases' => parse_ini_file('../app/config/site/databases.ini', true)
);

// Main SLIM object
$Slim = new Slim(array(
    'appCfg' => $appCfg,
    'cookies.secret_key' => 'PRONTO_shake',
    'cookies.lifetime' => '25 years',
    'session.handler' => null,
    'mode' => $appCfg['main']['framework']['mode']
));

// Environment
require '../app/modes/production.php';

// Controllers
require '../app/hooks/slimBeforeRouter.php';
require '../app/routes/site/ajax/contact.php';

$Slim->run();
