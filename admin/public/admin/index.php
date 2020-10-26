<?php

/**
 * Boot file.
 */

require '../../app/include/init.php';
require '../../lib/Loader.php';

$appCfgMain = parse_ini_file('../../app/config/main.ini', true);

// Application general status
if ($appCfgMain['framework']['status'] == 'offline') {
    include '../../app/View/tpl/offline.html';
    exit();
}

Loader::lib(array('Utils', 'Slim/Slim'));
use Slim\Slim;
Slim::registerAutoloader();

Loader::file('../../app/View/RendererMobile.php');
Loader::mo(array('AdminUsersMapper', 'Client'));
Loader::hp(array('View', 'Name'));

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
    'main', 'front', 'paths', 'appearance', 'services', 'applets', 'crawler', 'cache', 'databases', 'service', 'push');
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

// Main SLIM object
$Slim = new Slim(array(
    'view' => new View_RendererMobile(array(
        'appCfg' => $appCfg,
        'domain' => 'admin'
    )),
    'appCfg' => $appCfg,
    'templates.path' => realpath(dirname(__FILE__) . '/../../app/View/tpl/admin'),
    'cookies.secret_key' => 'PRONTO_shake',
    'session.handler' => null,
    'mode' => $appCfg['main']['framework']['mode']
));

////
// Controllers
////

require '../../app/modes/production.php';
require '../../app/hooks/slimBeforeRouter.php';
require '../../app/middlewares/admin/checkLogin.php';
require '../../app/middlewares/admin/acl.php';
require '../../app/routes/admin/home.php';
require '../../app/routes/admin/news.php';
require '../../app/routes/admin/newsEdit.php';
require '../../app/routes/admin/newsImages.php';
require '../../app/routes/admin/more.php';
require '../../app/routes/admin/generateToken.php';
require '../../app/routes/admin/message.php';
require '../../app/routes/admin/messages.php';
require '../../app/routes/admin/stats-mprocer.php';
require '../../app/routes/admin/statsShare-mprocer.php';
require '../../app/routes/admin/services-mprocer.php';
require '../../app/routes/admin/translations-mprocer.php';
require '../../app/routes/admin/login.php';
require '../../app/routes/admin/logout.php';

$Slim->run();
