<?php

/**
 * Retrieves user data.
 */

$Slim->get(
    '/:package/findUserData/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    $res = array(
        'name' => $Mo_User->name,
        'email' => $Mo_User->email,
        'phone' => $Mo_User->phone
    );

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
