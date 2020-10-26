<?php

/**
 * Renders the application interface for Home (default).
 */

$Slim->get('/logout', function () use ($Slim)
{
    $sessionName = session_name();
    session_destroy();
    if (isset($_COOKIE[$sessionName])) {
        setcookie($sessionName, '', time() - 3600, '/');
    }
    $Slim->redirect('/login');
});
