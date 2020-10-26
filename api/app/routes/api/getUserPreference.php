<?php

/**
 * Retrieves a user preference.
 */

$Slim->get(
    '/:package/getUserPreference/:deviceId/:deviceType/:deviceVersion/:key',
    function ($service, $deviceId, $deviceType, $deviceVersion, $key) use ($Slim)
{
    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    if (isset($key) && !in_array($key, Mo_UserSetting::$keys)) {
        Ajax::setBadRequest($Slim, array('data' => 'Preferencia inexistente.'));

        return;
    }
    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $Mo_User->getSetting($key)
    ));
});
