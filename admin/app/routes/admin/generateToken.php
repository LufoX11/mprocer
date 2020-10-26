<?php

/**
 * Renders the application interface for the client custom News.
 */

$Slim->get('/token', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS),
    function () use ($Slim)
{
    $imaatAppCfg = $Slim->config('appCfg');
    Loader::mo(array('AdminUsersMapper'), true);
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $user = $_SESSION['AdminUser'];

    if (!in_array($user->application, array('mprocer'))) {
        $Slim->redirect('/home');
    }

    // Generate a new token
    $resp = $Mo_AdminUsersMapper->renewAccessToken($user);

    $Slim->redirect('/more');
});

