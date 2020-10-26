<?php

/**
 * Development mode.
 */

$Slim->configureMode('development', function () use ($Slim)
{
    $Slim->config('debug', true);

    // Disable SOAP wsd caching
    ini_set('soap.wsdl_cache_enabled', '0');
    ini_set('soap.wsdl_cache_ttl', '0');

    // Exceptions
    $Slim->error(function (Exception $e) use ($Slim)
    {
        Ajax::setError($Slim);
        $Slim->stop();
    });

    // Page not found
    $Slim->notFound(function () use ($Slim)
    {
        Ajax::setNotFound($Slim);
        $Slim->stop();
    });
});
