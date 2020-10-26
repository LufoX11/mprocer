<?php

/**
 * Save Push data.
 */

$Slim->post(
    '/:package/savePushData/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    Loader::mo(array('PushDataMapper'), true);

    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);
    $Mo_PushDataMapper = new Mo_PushDataMapper($appCfg);

    extract($Slim->request()->post());

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    // Some basic validations
    if (!isset($registrationId) || !isset($platform)) {
        Ajax::setBadRequest($Slim, array('data' => 'Faltan datos requeridos.'));

        return;
    }

    if (!$Mo_PushData = $Mo_PushDataMapper->find($Mo_User->id)) {
        $Mo_PushData = new Mo_PushData();
    }

    $Mo_PushData->users_id = $Mo_User->id;
    $Mo_PushData->registrationId = $registrationId;
    $Mo_PushData->platform = $platform;
    $Mo_PushData->datetime = date('Y-m-d H:i:s');

    if ($Mo_PushDataMapper->save($Mo_PushData)) {
        Ajax::setSuccess($Slim, array(
            'success' => true,
            'data' => 'Registrado exitosamente'
        ));
    } else {
        Ajax::setError($Slim, array('data' => 'No se pudieron guardar los datos.'));
    }
});
