<?php

/**
 * Middleware for ACL checks.
 */

$mdwAcl = function ($permissionName, $isAjax = false) use ($Slim)
{
    return function () use ($permissionName, $isAjax, $Slim)
    {
        // Common pages
        if (!$_SESSION['AdminUser']->aclIsLoaded()
            || !$_SESSION['AdminUser']->aclHasAccess($permissionName))
        {
            if ($isAjax) {
                Ajax::setError($Slim, array('msg' => Utils::escape('No tenés acceso a este módulo.')));
            } else {
                if ($_SESSION['AdminUser']->aclIsLoaded()) {
                    $Slim->redirect('/home');
                } else {
                    $Slim->flash('error',
                        Utils::escape('No tenés credenciales de acceso suficientes para utilizar el sistema.'));
                    $Slim->redirect('/login');
                }
            }
        }

        // Exceptional pages that need specific application permission
        // Note: If AJAX request, it's supposed that the current service is being retrieved from user config,
        // so the user can't make requests to other ones.
        if (!$isAjax) {
            $routeName = $Slim->router()->getCurrentRoute()->getName();
            $userApplication = $_SESSION['AdminUser']->getApplication();
            if ($permissionName == Mo_AdminUser::ADMIN_PERMISSION_CLIENT_STATS
                && $routeName != "stats-{$userApplication}")
            {
                $Slim->redirect('/home');
            }
            if ($permissionName == Mo_AdminUser::ADMIN_PERMISSION_SERVICES
                && $routeName != "services-{$userApplication}")
            {
                $Slim->redirect('/home');
            }
            if ($permissionName == Mo_AdminUser::ADMIN_PERMISSION_TRANSLATIONS
                && $routeName != "translations-{$userApplication}")
            {
                $Slim->redirect('/home');
            }
        }
    };
};
