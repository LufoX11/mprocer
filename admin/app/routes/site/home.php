<?php

/**
 * Renders the application interface for the "under construction" page.
 */

$Slim->get('/', function () use ($Slim)
{
    $appCfg = $Slim->config('appCfg');

    View_Renderer::setLayout(null);
    $Slim->render('homeContent.tpl');
});
