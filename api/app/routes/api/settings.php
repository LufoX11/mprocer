<?php

/**
 * Common PHP Settings for the services.
 */

$Slim->map('/:package/:method(/:target+)',
    function ($package, $method) use ($Slim)
{
    $appCfg = $Slim->config('appCfg');
    if (isset($appCfg['services'][$package]) && $service = $appCfg['services'][$package]) {

        // PHP settings
        setlocale(LC_ALL, isset($service['sys']['locale']) ? $service['sys']['locale'] : 'es_AR.UTF-8');
        setlocale(LC_NUMERIC, 'en_US');
        date_default_timezone_set(isset($service['sys']['timezone']) ?
            $service['sys']['timezone'] : 'America/Argentina/Buenos_Aires');

        // Set current service data
        $appCfg['service'] = $service;
        $appCfg['serviceName'] = $package;

        $Slim->config('appCfg', $appCfg);
    }
    $Slim->pass();
})->via('GET', 'POST');
