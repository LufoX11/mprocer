<?php

/**
 * Renders the application interface for seeing a single message.
 */

$Slim->get('/message/:id', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_APP_MESSAGES),
    function ($messageId) use ($Slim)
{
    Loader::mo(array('ContactMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    // Fetch the message
    $Mo_ContactMapper = new Mo_ContactMapper($appCfg);
    $message = $Mo_ContactMapper->findById($messageId);

    $Slim->render(
        'messageContent.tpl',
        array(
            'message' => $message
        )
    );
});

