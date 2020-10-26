<?php

/**
 * AJAX responser for contact messages.
 */

$Slim->map('/ajax/messages/:action', $mdwCheckLogin(true),
    $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_APP_MESSAGES, true),
    function ($action) use ($Slim)
{
    Loader::mo(array('ContactMapper'), true);

    $appCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $applicationAppCfg = $appCfg['applications'][$user->application];
    $Mo_ContactMapper = new Mo_ContactMapper($applicationAppCfg);

    switch ($action) {
        case 'delete':
            if ($message = $Mo_ContactMapper->findById($Slim->request()->post('data'))) {
                $message->status = Mo_Contact::STATUS_DELETED;
                $Mo_ContactMapper->save($message);
                Ajax::setSuccess($Slim, array(
                    'msg' => Utils::escape('El mensaje se eliminó.'),
                    'data' => $Slim->request()->post('data')
                ));
            } else {
                Ajax::setError($Slim);
            }
            break;

        case 'setRead':
             if ($message = $Mo_ContactMapper->findById($Slim->request()->post('data'))) {
                $message->status = Mo_Contact::STATUS_READ;
                $Mo_ContactMapper->save($message);
                Ajax::setSuccess($Slim, array(
                    'msg' => Utils::escape('El mensaje se marcó como leído.'),
                    'data' => $Slim->request()->post('data')
                ));
            } else {
                Ajax::setError($Slim);
            }
            break;

        default:
            Ajax::setError($Slim, array(sprintf(Utils::escape('Faltan datos: "%s".'), 'action')));
    }
})->via('GET', 'POST');
