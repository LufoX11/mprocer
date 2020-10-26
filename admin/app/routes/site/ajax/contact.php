<?php

/**
 * AJAX responder for contact form.
 */

$Slim->post('/ajax/contact', function () use ($Slim)
{
    Loader::lib(array('Email'));

    $appCfg = $Slim->config('appCfg');
    $name = ucwords(strtolower(trim($Slim->request()->post('name'))));
    $email = strtolower(trim($Slim->request()->post('email')));
    $message = trim($Slim->request()->post('message'));
    $Email = new Email(array(
        'whitelistDomains' => explode('|', $appCfg['main']['emails']['whitelistDomains']),
        'exclude' => explode('|', $appCfg['main']['emails']['exclude']),
        'blacklist' => explode('|', $appCfg['main']['emails']['blacklist'])));

    // Validations
    if (!$name || !$email || !$message) {
        Ajax::setBadRequest($Slim, array(
            'data' => Utils::escape('Por favor, verificá que todos los campos estén completos.')));
    } else if (!$Email->validateEmail($email, false)) {
        Ajax::setBadRequest($Slim, array(
            'data' => Utils::escape('Por favor, verificá que el email sea válido.')));
    } else {

        // Send email
        $Firewall = new Firewall(
            $appCfg['main']['firewall'],
            array(
                'cache' => new MemcachedDriver($appCfg['cache']['memcached']),
                'id' => $Slim->request()->getIp()));
        if ($Email->validateEmail($email) && !$Firewall->isBehindProxy()) { // Check against blacklist
            $to = explode('|', $appCfg['main']['emails']['contact']['toEmail']);
            $subject = $appCfg['main']['emails']['contact']['subject'];
        } else {
            if ($Email->isBlacklisted($email)) {

                return Ajax::setSuccess($Slim, array('data' => Utils::escape(
                    'Muchas gracias por escribirnos, nos pondremos en contacto cuanto antes.')));
            } else {
                $to = array('soporte@imaat.com.ar');
                $subject = 'Posible SPAM - Nuevo Contacto [imaat.com.ar]';
            }
        }
        $possibleSpam = ($Email->validateEmail($email) ? 'NO' : 'YES');
        $behindProxy = ($Firewall->isBehindProxy() ? 'YES' : 'NO');
        $res = $Email->send(array(
            'from' => array(
                $appCfg['main']['emails']['contact']['fromEmail'],
                $appCfg['main']['emails']['contact']['fromName']
            ),
            'to' => $to,
            'subject' => $subject,
            'htmlMessage' => '<h3>Datos del usuario</h3>'
                . "<strong>Nombre</strong>: {$name}<br />"
                . "<strong>Email</strong>: {$email}<br />"
                . "<strong>Mensaje</strong>: {$message}<br />"
                . '---<br />'
                . "<strong>Possible SPAM</strong>: {$possibleSpam}<br />"
                . "<strong>Behind Proxy</strong>: {$behindProxy}<br />"
                . "<strong>IP</strong>: {$Slim->request()->getIp()}"));
        if ($res) {
            Ajax::setSuccess($Slim, array('data' => Utils::escape(
                'Muchas gracias por escribirnos, nos pondremos en contacto cuanto antes.')));
        } else {
            Ajax::setError($Slim, array('data' => Utils::escape('Ocurrió un error. ¿Podrías reintentar?')));
        }
    }
});
