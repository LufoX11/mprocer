<?php

/**
 * Fetches all currencies.
 */

$Slim->get('/:package/fetchCurrencies', function ($service) use ($Slim)
{
    Loader::mo(array('CurrenciesMapper'), true);

    $appCfg = $Slim->config('appCfg');

    // Fetch currencies
    $Mo_CurrenciesMapper = new Mo_CurrenciesMapper(
        $appCfg,
        array(
            'ds' => array(
                'name' => $appCfg['main']['sys']['currenciesSource'],
                'options' => array(
                    'key' => $appCfg['main']['framework']['OpenexchangeratesCurrenciesApiKey']
                )
            )
        )
    );

    if ($res = $Mo_CurrenciesMapper->fetchCurrencies()) {
        $res = array(
            'datetime' => strftime('%e de %B de %Y - %H:%M:%S', $res->timestamp),
            'base' => $res->base,
            'rates' => $res->rates,
            'names' => $res->names
        );
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
