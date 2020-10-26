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
        if ($Slim->request()->isAjax() || $Slim->config('domain') == 'api') {
            Ajax::setError($Slim);
            $Slim->stop();
        } else {
            if (class_exists('View_Renderer')) {
                View_Renderer::setHeader(null);
                View_Renderer::setLayout('errorLayout.tpl');
            } else if (class_exists('View_RendererMobile')) {
                View_RendererMobile::setHeader(null);
                View_RendererMobile::setLayout('errorLayout.tpl');
            }
            $Slim->render(
                'errorContent.tpl',
                array(
                    'supportEmail' => $appCfg['main']['sys']['emails']['email'],
                    'boot' => $Slim->request()->get('boot'),
                    'errorCode' => 500,
                    'errorMessage' => Utils::escape('Error interno') . ' (500).'
                ),
                200);
        }
    });

    // Page not found
    $Slim->notFound(function () use ($Slim)
    {
        $appCfg = $Slim->config('appCfg');
        if ($Slim->request()->isAjax() || $Slim->config('domain') == 'api') {
            Ajax::setNotFound($Slim);
            $Slim->stop();
        } else {
            if (class_exists('View_Renderer')) {
                View_Renderer::setHeader(null);
                View_Renderer::setLayout('errorLayout.tpl');
            } else if (class_exists('View_RendererMobile')) {
                View_RendererMobile::setHeader(null);
                View_RendererMobile::setLayout('errorLayout.tpl');
            }
            $Slim->render(
                'errorContent.tpl',
                array(
                    'supportEmail' => $appCfg['main']['sys']['emails']['email'],
                    'errorCode' => 404,
                    'errorMessage' => Utils::escape('Página no disponible') . ' (404).'
                ),
                200);
        }
    });
});
