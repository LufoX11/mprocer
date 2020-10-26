<?php

/**
 * Renders the application interface for Home (default).
 */

$Slim->map('/login', function () use ($Slim)
{
    if (isset($_SESSION['AdminUser']) && $_SESSION['AdminUser']->aclIsLoaded()) {
        $Slim->redirect('/home');
    }

    // Try user login
    if ($userName = $Slim->request()->post('username')) {
        $userPassword = $Slim->request()->post('password');
        $userApp = $Slim->request()->post('application');
        $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($Slim->config('appCfg'));
        if ($user = $Mo_AdminUsersMapper->doLogin($userName, $userApp, $userPassword)) {
            $_SESSION['AdminUser'] = $user;
            $Slim->redirect('/home');
        } else {
            $Slim->flashNow('error', Utils::escape('Nombre de usuario o contraseña no válido.'));
        }
    }

    $Slim->view()->setHeader('loginHeader.tpl');
    $Slim->render(
        'loginContent.tpl',
        array(
            'applications' => Hp_Name::fetchApplicationsNames(),
            'application' => $Slim->request()->post('application'),
            'username' => $Slim->request()->post('username')
        )
    );
})->via('GET', 'POST');
