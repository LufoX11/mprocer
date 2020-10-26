<?php

/**
 * Renders the application interface for Home (default).
 */

$Slim->get('/(home)', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_HOME),
    function () use ($Slim)
{
    $Slim->render('homeContent.tpl');
});
