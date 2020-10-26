<?php

/**
 * Saves a new message from the user.
 */

$Slim->post(
    '/:package/saveContact/:deviceId/:deviceType/:deviceVersion',
    function ($service, $deviceId, $deviceType, $deviceVersion) use ($Slim)
{
    Loader::mo(array('ContactMapper'), true);
    Loader::lib(array('Email'), true);
    Loader::hp(array('Email'), true);

    $appCfg = $Slim->config('appCfg');
    $Mo_UsersMapper = new Mo_UsersMapper($appCfg);
    $Mo_ContactMapper = new Mo_ContactMapper($appCfg);
    $Email = new Email(array(
        'whitelistDomains' => explode(',', $appCfg['main']['emails']['whitelistDomains']),
        'exclude' => explode(',', $appCfg['main']['emails']['exclude']),
        'blacklist' => explode(',', $appCfg['main']['emails']['blacklist'])));
    extract($Slim->request()->post());

    // User session
    if (!$Mo_User = $Mo_UsersMapper->sessionUp($deviceId, $deviceType, $deviceVersion)) {
        Ajax::setBadRequest($Slim, array('data' => 'No se pudo levantar la sesión.'));

        return;
    }

    // Some basic validations
    if (!isset($name) || !isset($email) || !isset($reason) || !isset($description)) {
        Ajax::setBadRequest($Slim, array('data' => 'Faltan datos requeridos.'));

        return;
    }
    $possibleReasons = array(
        Mo_Contact::REASON_ASK,
        Mo_Contact::REASON_COMPLAINT,
        Mo_Contact::REASON_SUGGESTION
    );
    if (!in_array($reason, $possibleReasons)) {
        Ajax::setBadRequest($Slim, array('data' => 'El motivo de la consulta no es válido.'));
        return;
    }
    if (!$Email->validateEmail($email, false)) {
        Ajax::setBadRequest($Slim, array('data' => 'El email parece no ser válido.'));
        return;
    }

    // Save user data
    $Mo_User->email = $email;
    $Mo_User->name = $name;
    $Mo_User->phone = $phone;
    $Mo_UsersMapper->save($Mo_User);

    // Save contact
    $status = (strlen($description) > 10 && strlen($name) > 5 && $Email->validateEmail($email) ?
        Mo_Contact::STATUS_UNREAD : Mo_Contact::STATUS_SUSPECT);
    $Mo_Contact = new Mo_Contact($data = array(
        'services_id' => $appCfg['serviceId'],
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'reason' => $reason,
        'description' => $description,
        'deviceData' => "{$deviceId}|{$deviceType}|{$deviceVersion}",
        'ip' => $_SERVER['REMOTE_ADDR'],
        'userAgent' => $_SERVER['HTTP_USER_AGENT'],
        'status' => $status));
    if ($Mo_ContactMapper->save($Mo_Contact)) {

        // Send email notification to the service owner
        $Hp_Email = new Hp_Email($appCfg);
        $to = explode('|', $appCfg['emails'][$appCfg['serviceName']]['contact']['toEmail']);
        array_walk($to, function (&$v) { $v = array($v); });
        $reasonTranslated = 'Consulta';
        if ($reason == Mo_Contact::REASON_COMPLAINT) {
            $reasonTranslated = 'Queja o Reclamo';
        } else if (Mo_Contact::REASON_SUGGESTION) {
            $reasonTranslated = 'Sugerencia';
        }
        $data['reason'] = $reasonTranslated;
        $Slim->view()->setData($data);
        $Hp_Email->sendContact(
            "Nuevo contacto desde la aplicación",
            $Slim->view()->fetch("emails/contactForService.tpl"),
            $to);

        Ajax::setSuccess($Slim, array(
            'success' => true,
            'data' => 'Se guardaron los datos.'
        ));
    } else {
        Ajax::setError($Slim, array('data' => 'No se pudieron guardar los datos.'));
    }
});
