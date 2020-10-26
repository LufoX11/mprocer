<?php

/**
 * Save Log data.
 */

$Slim->post(
    '/:package/saveLog/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    Loader::mo(array('LogMapper'));

    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);
    $Mo_LogMapper = new Mo_LogMapper($appCfg);

    extract($Slim->request()->post());

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));
        return;
    }

    // Send email to current user
    $data = array();
    foreach (json_decode($Slim->request()->post('log')) as $v) {
        $data[] = new Mo_Log(array(
            'key' => $v->key,
            'value' => $v->value
        ));
    }
    if ($Mo_LogMapper->sendReport($data, $Mo_User->email)) {
        Ajax::setSuccess($Slim, array(
            'success' => true,
            'data' => 'Reporte enviado.'
        ));
    } else {
        Ajax::setError($Slim, array('data' => 'No se pudo enviar el reporte.'));
    }
});
