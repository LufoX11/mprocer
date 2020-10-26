<?php

/**
 * Renders the application interface for Messages.
 */

$Slim->get('/more', $mdwCheckLogin(), function () use ($Slim)
{
    $Slim->render('moreContent.tpl');
});

