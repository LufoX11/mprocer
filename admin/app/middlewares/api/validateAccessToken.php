<?php

/**
 * Middleware to a given Access Token for an API request.
 */

$mdwValidateAccessToken = function () use ($Slim)
{
    return function () use ($Slim)
    {
        Loader::mo(array('AdminUsersMapper'), true);

        $headers = getallheaders();
        if (isset($headers['Imaat-Authorization']) && strlen($headers['Imaat-Authorization'])) {
            $imaatAppCfg = $Slim->config('appCfg');
            $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
            if ($res = $Mo_AdminUsersMapper->validateAccessToken(
                    $headers['Imaat-Authorization'],
                    $Slim->router()->getCurrentRoute()->getParam('package'),
                    $Slim->router()->getCurrentRoute()->getParam('app'))) {
                $Slim->apiUser = $res;

                return true;
            } else {
                Ajax::setForbidden($Slim, array('Invalid access token.'));
                $Slim->stop();
            }
        } else {
            Ajax::setBadRequest($Slim, array('Inexistent access token.'));
            $Slim->stop();
        }
    };
};
