<?php

/**
 * Production mode.
 */

$Slim->configureMode('production', function () use ($Slim)
{
    Loader::vendor(array('Slim/Extras/LogWriter/TimestampLogFileWriter'));

    $Slim->config('debug', false);

    // Exceptions
    $Slim->error(function (Exception $e) use ($Slim)
    {
        $appCfg = $Slim->config('appCfg');
        $log = $Slim->getLog();
        $log->setWriter(new TimestampLogFileWriter(array('path' => dirname(__FILE__) . '/../../logs/')));
        $log->error($e);
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
