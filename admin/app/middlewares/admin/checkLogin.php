<?php

/**
 * Middleware to Check if the user has been logged in.
 */

$mdwCheckLogin = function ($isAjax = false) use ($Slim)
{
    return function () use ($isAjax, $Slim)
    {
        if (!isset($_SESSION['AdminUser'])) {
            if ($isAjax) {
                Ajax::setError($Slim, array('msg' => Utils::escape('El usuario no está no conectado.')));
            } else {
                $Slim->redirect('/login');
            }
        }
    };
};
