<?php

/**
 * AJAX responser.
 */

require '../../lib/Loader.php';
Loader::lib(array('Utils', 'Ajax', 'Slim/Slim'));
use Slim\Slim;
Slim::registerAutoloader();

Loader::mo(array('AdminUsersMapper'));
Loader::hp(array('Name', 'Form'));

// The session must be started here because otherwise already saved objects would not be recognized
session_name('iMaat_mProcer');
session_start();

// System config
$appCfg = array(
    'main' => parse_ini_file('../../app/config/main.ini', true),
    'front' => parse_ini_file('../../app/config/front.ini', true),
    'paths' => parse_ini_file('../../app/config/paths.ini', true),
    'cache' => parse_ini_file('../../app/config/cache.ini', true),
    'databases' => parse_ini_file('../../app/config/databases.ini', true)
);

$appCfg['paths']['web']['site']['base'] = '';
$cfgFiles = array('main', 'front', 'paths', 'appearance', 'services', 'applets', 'crawler', 'cache', 'databases', 'push');
foreach (Hp_Name::fetchApplicationsNames() as $k => $v1) {
    foreach ($cfgFiles as $v) {
        if (file_exists("{$appCfg['paths']['fs'][$k]}/app/config/{$v}.ini")) {
            $appCfg['applications'][$k][$v] =
                parse_ini_file("{$appCfg['paths']['fs'][$k]}/app/config/{$v}.ini", true);
        }
    }
}

// Framework initialization
$Slim = new Slim(array(
    'appCfg' => $appCfg,
    'cookies.secret_key' => 'PRONTO_shake',
    'session.handler' => null,
    'mode' => $appCfg['main']['framework']['mode']
));

////
// Controllers (routes)
////

require '../../app/modes/production.php';
require '../../app/hooks/slimBeforeRouter.php';
require '../../app/middlewares/admin/checkLogin.php';
require '../../app/middlewares/admin/acl.php';
require '../../app/routes/admin/ajax/messages.php';
require '../../app/routes/admin/ajax/news.php';
require '../../app/routes/admin/ajax/translations.php';

$Slim->run();
