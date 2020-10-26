<?php

/**
 * Front controller.
 */

require '../app/include/init.php';
require '../lib/Loader.php';

$appCfgMain = parse_ini_file('../app/config/main.ini', true);

// Application general status
if ($appCfgMain['framework']['status'] == 'offline') {
    exit(header('HTTP/1.0 503 Offline API'));
}

Loader::mo(array('UsersMapper'));
Loader::lib(array('Slim/Slim', 'Ajax'));
use Slim\Slim;
Slim::registerAutoloader();

// System config
Ajax::$additionalHeaders['Cache-Control'] = 'no-cache';
$appCfg = array(
    'main' => $appCfgMain,
    'services' => parse_ini_file('../app/config/services.ini', true),
    'emails' => parse_ini_file('../app/config/emails.ini', true),
    'paths' => parse_ini_file('../app/config/paths.ini', true),
    'cache' => parse_ini_file('../app/config/cache.ini', true),
    'databases' => parse_ini_file('../app/config/databases.ini', true)
);

// Slim initialization
$Slim = new Slim(array(
    'templates.path' => realpath(dirname(__FILE__) . '/../app/View/tpl'),
    'appCfg' => $appCfg,
    'mode' => $appCfg['main']['framework']['mode']
));

// Config for environment
require '../app/modes/development.php';
require '../app/modes/production.php';

////
// Controllers
////

require '../app/hooks/slimBefore.php';
require '../app/hooks/slimBeforeRouter.php';
require '../app/filters/packages.php';
require '../app/routes/api/settings.php';
require '../app/routes/api/messages.php';

// v2
require '../app/routes/api/fetchNews.php';
require '../app/routes/api/fetchCountries.php';
require '../app/routes/api/fetchAirports.php';
require '../app/routes/api/fetchCurrencies.php';
require '../app/routes/api/findNews.php';
require '../app/routes/api/findWeather.php';
require '../app/routes/api/findUserData.php';
require '../app/routes/api/findAirport.php';
require '../app/routes/api/saveContact.php';
require '../app/routes/api/saveContact.php';
require '../app/routes/api/saveSession.php';
require '../app/routes/api/saveUserData.php';
require '../app/routes/api/saveLog.php';
require '../app/routes/api/savePushData.php';
require '../app/routes/api/setUserPreference.php';
require '../app/routes/api/getUserPreference.php';
require '../app/routes/api/fetchFlights.php';
require '../app/routes/api/saveBooking.php';

$Slim->run();
