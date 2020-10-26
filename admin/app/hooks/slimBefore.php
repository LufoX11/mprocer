<?php

/**
 * This hook is part of Slim's default hooks.
 *
 * This hook is invoked before the Slim application is run and before output buffering is turned on.
 * This hook is invoked once during the Slim application lifecycle.
 *
 * @link http://docs.slimframework.com/#Default-Hooks
 */

$Slim->hook('slim.before', function () use ($Slim)
{
    ////
    // Application firewall to protect against multiple / malicious requests.
    ////

    Loader::lib(array('MemcachedDriver', 'Firewall'), true);
    Loader::vendor(array('Slim/Extras/LogWriter/TimestampLogFileWriter'), true);

    $appCfg = $Slim->config('appCfg');
    $Firewall = new Firewall(
        $appCfg['main']['firewall'],
        array(
            'cache' => new MemcachedDriver($appCfg['cache']['memcached']),
            'id' => $Slim->request()->getIp()));

    // Blacklist
    if ($Firewall->isBlacklisted()) {
        $log = $Slim->getLog();
        $log->setWriter(new TimestampLogFileWriter(array('path' => dirname(__FILE__) . '/../../logs/firewall/')));
        $log->error("Blacklist (IP): {$Slim->request()->getIp()}");
        $Slim->halt(403, 'blacklist');
    }

    // Flood
    if ($Firewall->isFlooding()) {
        Loader::vendor(array('Slim/Extras/LogWriter/TimestampLogFileWriter'), true);

        $log = $Slim->getLog();
        $log->setWriter(new TimestampLogFileWriter(array('path' => dirname(__FILE__) . '/../../logs/firewall/')));
        $log->error("Flood (IP): {$Slim->request()->getIp()}");
        $Slim->halt(403, 'flood');
    }
});
