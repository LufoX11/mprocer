<?php

/**
 * Renders the application interface for the client custom News.
 */

$Slim->get('/news', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS),
    function () use ($Slim)
{
    Loader::mo(array('NewsMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    if (($service = $_SESSION['AdminUser']->aclGetServiceAccess()) == 'all') {
        $service = ($Slim->request()->post('service') ?
            $Slim->request()->post('service') : current($appCfg['main']['services']));
        $services = array();
        foreach ($appCfg['main']['services'] as $v) {
            $services[$v] = $appCfg['services'][$v]['title'];
        }
    } else {
        $services = array($service => $appCfg['services'][$service]['title']);
    }
    if (!in_array($user->application, array('mprocer'))) {
        $Slim->redirect('/home');
    }

    // Fetch news
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
    $news = $Mo_NewsMapper->fetchNews();

    $Slim->render(
        'newsContent.tpl',
        array(
            'news' => $news,
            'services' => $services
        )
    );
});

