<?php

/**
 * Retrieves countries data.
 */

$Slim->get('/:package/fetchCountries', function ($service) use ($Slim)
{
    Loader::mo(array('GeographyMapper'), true);

    $appCfg = $Slim->config('appCfg');

    $lang = strtolower($Slim->request()->get('lang'));
    $name = $Slim->request()->get('name');
    $Mo_GeographyMapper = new Mo_GeographyMapper($appCfg);

    // Validations - Min length: 3 chars
    if (strlen($name) < 3) {
        Ajax::setBadRequest($Slim, array('data' => 'Caracteres mínimos: 3.'));

        return;
    }

    $res = array();
    if ($raw = $Mo_GeographyMapper->fetchCountriesLike($name)) {
        foreach ($raw as $k => $v) {
            if ($lang) {
                $res[$k] = array(
                    'code' => $v['code'],
                    'name' => $v["name_{$lang}"],
                    'continent_code' => $v['continents_code'],
                    'continent_name' => $v["continent_name_{$lang}"]
                );
            } else {
                unset($v['id']);
                unset($v['continents_code']);
                $res[$k] = $v;
            }
        }
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
