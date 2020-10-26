<?php

/**
 * This hook is part of Slim's default hooks.
 *
 * This hook is invoked after output buffering is turned on and before the router is dispatched.
 * This hook is invoked once during the Slim application lifecycle.
 */

$Slim->hook('slim.before.router', function () use ($Slim)
{
    Loader::mo([ 'ServiceMapper' ], true);

    $appCfg = $Slim->config('appCfg');

    ////
    // Language.
    //
    // Default locale: es_AR
    ////

    $_SESSION['locale'] = (isset($_SESSION['locale']) ? $_SESSION['locale'] : 'es_AR');
    $_SESSION['isoLang'] = (isset($_SESSION['isoLang']) ? $_SESSION['isoLang'] : 'es');
    if (isset($_GET['locale']) && in_array($_GET['locale'], array('es_AR'))) {
        $_SESSION['locale'] = $_GET['locale'];
        $_SESSION['isoLang'] = current(explode('_', $_GET['locale']));
    }

    ////
    // Admin.
    ////

    if (isset($_SESSION['AdminUser']) && $user = $_SESSION['AdminUser']) {
        $Mo_ServiceMapper = new Mo_ServiceMapper($appCfg['applications'][$user->application]);

        if ($user->service) {
            $Mo_Service = $Mo_ServiceMapper->findByName($user->service);
            $appCfg['applications'][$user->application]['serviceId'] = $Mo_Service->id;
        } else {
            // Admin user default service will be the first one
            if (isset($appCfg['applications'][$user->application]['main']['services'])
                && $serviceName = current($appCfg['applications'][$user->application]['main']['services']))
            {
                $Mo_Service = $Mo_ServiceMapper->findByName($serviceName);
                $appCfg['applications'][$user->application]['serviceId'] = $Mo_Service->id;
            }
        }

        $Slim->config('appCfg', $appCfg);
    }

    ////
    // API
    ////

    $headers = getallheaders();
    if (isset($headers['Imaat-Authorization']) && $headers['Imaat-Authorization']) {
        list($app, $serviceName) = explode('/', ltrim($Slim->request()->getResourceUri(), '/'));
        if (isset($appCfg['applications'][$app])) {
            $Mo_ServiceMapper = new Mo_ServiceMapper($appCfg['applications'][$app]);

            // Set Service ID Only if it's a valid service
            if (in_array($serviceName, $appCfg['applications'][$app]['main']['services'])) {
                $Mo_Service = $Mo_ServiceMapper->findByName($serviceName);
                $appCfg['applications'][$app]['serviceId'] = $Mo_Service->id;
            }

            $Slim->config('appCfg', $appCfg);
        }
    }
});
