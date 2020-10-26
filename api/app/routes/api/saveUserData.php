<?php

/**
 * Updates user data.
 */

$Slim->post(
    '/:package/saveUserData/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    // Validations
    if (!filter_var($email = $Slim->request()->post('email'), FILTER_VALIDATE_EMAIL)) {
        Ajax::setBadRequest($Slim, array('data' => 'El email ingresado no es válido.'));

        return;
    }

    $Mo_User->email = $email;
    $Mo_User->phone = $Slim->request()->post('phone');
    $Mo_User->name = $Slim->request()->post('name');
    if ($Mo_UsersMapper->save($Mo_User)) {
        Ajax::setSuccess($Slim, array(
            'success' => true,
            'data' => $Slim->request()->post('data')
        ));
    } else {
        Ajax::setError($Slim, array('data' => 'No se pudieron guardar los datos.'));
    }
});
