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
    $serviceName = current(explode('/', ltrim($Slim->request()->getResourceUri(), '/')));
    $Mo_ServiceMapper = new Mo_ServiceMapper($appCfg);

    // Set Service ID Only if it's a valid service
    if (in_array($serviceName, $appCfg['main']['services'])) {
        $Mo_Service = $Mo_ServiceMapper->findByName($serviceName);
        $appCfg['serviceId'] = $Mo_Service->id;
    }

    $Slim->config('appCfg', $appCfg);
});
