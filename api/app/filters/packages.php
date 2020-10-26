<?php

/**
 * Filter rules for API -> package: http://.../namespace/PACKAGE/method?...
 */

Slim\Route::setDefaultConditions(array(
    'package' => '(' . implode('|', $appCfg['main']['services']) . ')',
));
