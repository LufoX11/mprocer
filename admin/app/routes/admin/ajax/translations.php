<?php

/**
 * AJAX responser for translations.
 */

$Slim->map('/ajax/translations/:action', $mdwCheckLogin(true),
    $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_TRANSLATIONS, true),
    function ($action) use ($Slim)
{
    Loader::mo(array('LangMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    $Mo_LangMapper = new Mo_LangMapper($appCfg);

    switch ($action) {
        case 'delete':
            if ($res = $Mo_LangMapper->deleteTranslation($Slim->request()->post('data'))) {
                Ajax::setSuccess($Slim, array(
                    'msg' => Utils::escape('Se eliminó la traducción.'),
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
