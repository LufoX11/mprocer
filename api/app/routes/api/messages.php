<?php

/**
 * Common messages for the app.
 */

$Slim->get('/messages/:language',
    function ($language) use ($Slim)
{
    Loader::mo(array('LangMapper'));

    $appCfg = $Slim->config('appCfg');
    $Mo_LangMapper = new Mo_LangMapper($appCfg);
    $dictionary = $Mo_LangMapper->fetchDictionaryByLang($language);

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $dictionary));
});
