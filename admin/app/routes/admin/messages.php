<?php

/**
 * Renders the application interface for Messages.
 */

$Slim->get('/messages', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_APP_MESSAGES),
    function () use ($Slim)
{
    Loader::mo(array('ContactMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    // Fetch contact messages
    $Mo_ContactMapper = new Mo_ContactMapper($appCfg);
    $messages = $Mo_ContactMapper->fetch();

    $Slim->render(
        'messagesContent.tpl',
        array(
            'messages' => $messages
        )
    );
});

