<?php

/**
 * Returns the weather for a city.
 */

$Slim->get(
    '/:package/findWeather/:deviceId/:deviceType/:deviceVersion(/:searchData)',
    function ($package, $deviceId, $deviceType, $deviceVersion, $searchData = null) use ($Slim)
{
    Loader::mo(array('WeatherMapper'), true);

    $appCfg = $Slim->config('appCfg');
    $service = $appCfg['services'][$package];
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    // Fetch from user settings
    if (!$searchData && !$searchData = $Mo_User->getSetting(Mo_UserSetting::WEATHER_LOCATION)) {
        $searchData = $service['sys']['defaultWeather']; // Default location
    } else {
        $searchData = str_replace('__', '/', $searchData);
    }

    // Fetch weather data
    $Mo_WeatherMapper = new Mo_WeatherMapper($appCfg,
        array('ds' =>
            array(
                'name' => $appCfg['main']['sys']['weatherSource'],
                'options' => array(
                    'key' =>$appCfg['main']['framework']['wundergroundWeatherApiKey']))));
    if ($res = $Mo_WeatherMapper->find($searchData)) {
        $res = array(
            'location' => $res->location,
            'current' => $res->current,
            'forecast' => $res->forecast
        );

        // Save in user session
        $Mo_UserSetting = new Mo_UserSetting(array(
            'users_id' => $Mo_User->id,
            'key' => Mo_UserSetting::WEATHER_LOCATION,
            'value' => $searchData
        ));
        $Mo_UsersMapper->saveSetting($Mo_User, $Mo_UserSetting);
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
