<?php

/**
 * Main Fetches Flights.
 *
 * ---
 * Params:
 *
 * [Options]
 * -> lang
 * -> currency
 * -> limit
 * -> offset
 * -> noCache
 *
 * [Flight]
 * -> departureLocation
 * -> arrivalLocation
 * -> departureDate
 * -> returnDate
 * -> travellers
 */

$Slim->get('/:package/fetchFlights', function ($service) use ($Slim)
{
    Loader::mo(array('FlightsMapper'));

    $appCfg = $Slim->config('appCfg');
    $lang = (($lang = $Slim->request()->get('lang')) ? $lang : 'es');
    $currency = (($currency = $Slim->request()->get('currency')) ? $currency : 'ARS');
    $limit = 150; // Until we can paginate results
    //$limit = (($limit = $Slim->request()->get('limit')) ? $limit : 50);
    $cache = !$Slim->request()->get('noCache');
    $offset = $Slim->request()->get('offset');
    $departureLocation = $Slim->request()->get('departureLocation');
    $arrivalLocation = $Slim->request()->get('arrivalLocation');
    $departureDate = $Slim->request()->get('departureDate');
    $returnDate = $Slim->request()->get('returnDate');
    $travellers = array_merge(
        array(
            'A' => 1,
            'C' => 0,
            'IN' => 0
        ),
        json_decode($Slim->request()->get('travellers'), true));

    // Validations
    if (!$departureLocation || !$arrivalLocation || !$departureDate || !$travellers['A'] || !$lang) {
        Ajax::setBadRequest($Slim, array('data' =>
            'Campos requeridos: "lang", "departureLocation", "arrivalLocation", "departureDate", "travellers".'));

        return;
    }

    // init
    $Mo_FlightsMapper = new Mo_FlightsMapper($appCfg, array('lang' => $lang));
    $options = array(
        'limit' => $limit,
        'currency' => $currency,
        'cache' => $cache
    );
    $res = $Mo_FlightsMapper->fetchFlights(
        $departureLocation, $arrivalLocation, $departureDate, $travellers, $returnDate, $options);
    if ($res['error']['code']) {
        Ajax::setError($Slim, array('data' => $res['error']['message']));
    } else {

        // Pagination
        if ($offset) {
            if (isset($res['flights'][$offset])) {
                $res['flights'] = array_slice($res['flights'], $offset);
            } else {
                $res['flights'] = array();
            }
        }
        $res['flights'] = array_slice($res['flights'], 0, $limit);

        Ajax::setSuccess($Slim, array('success' => true, 'data' => $res));
    }
});
