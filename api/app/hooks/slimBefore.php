<?php

/**
 * This hook is part of Slim's default hooks.
 *
 * This hook is invoked before the Slim application is run and before output buffering is turned on.
 * This hook is invoked once during the Slim application lifecycle.
 */

$Slim->hook('slim.before', function () use ($Slim)
{
    ////
    // Application firewall to protect against multiple / malicious requests.
    ////

    Loader::lib(array('Firewall'));

    $appCfg = $Slim->config('appCfg');
    $Firewall = new Firewall(
        $appCfg['main']['firewall'],
        array(
            'cache' => new MemcachedDriver($appCfg['cache']['memcached']),
            'id' => $Slim->request()->getIp()));

    // Blacklist
    if ($Firewall->isBlacklisted()) {
        $Slim->halt(403, 'blacklist');
    }

    // Whitelist
    if ($Firewall->isWhitelisted()) {
        return;
    }

    // Flood
    if ($Firewall->isFlooding()) {
        $Slim->halt(403, 'flood');
    }
});
