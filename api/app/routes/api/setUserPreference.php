<?php

/**
 * Saves a user preference.
 */

$Slim->post(
    '/:package/setUserPreference/:deviceId/:deviceType/:deviceVersion/:key',
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
    $Mo_UserSetting = new Mo_UserSetting(array(
        'users_id' => $Mo_User->id,
        'key' => $key,
        'value' => $Slim->request()->post('data')
    ));
    if ($Mo_UsersMapper->saveSetting($Mo_User, $Mo_UserSetting)) {
        Ajax::setSuccess($Slim, array(
            'success' => true,
            'data' => $Slim->request()->post('data')
        ));
    } else {
        Ajax::setError($Slim, array('data' => 'No se pudieron guardar los datos.'));
    }
});
