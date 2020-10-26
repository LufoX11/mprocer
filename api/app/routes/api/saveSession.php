<?php

/**
 * Creates / Updates an user session.
 */

$Slim->post(
    '/:package/saveSession/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);

    // User session
    if ($Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setSuccess($Slim);
    } else {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión del usuario.'));
    }
});
