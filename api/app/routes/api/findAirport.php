<?php

/**
 * Retrieves an airport or city through IATA code.
 */

$Slim->get('/:package/findAirport', function ($service) use ($Slim)
{
    Loader::mo(array('AirportsMapper', 'GeographyMapper'), true);

    $appCfg = $Slim->config('appCfg');

    if (!$lang = ucfirst(strtolower($Slim->request()->get('lang')))) {
        $lang = 'Es';
    }
    $code = $Slim->request()->get('code');
    $Mo_AirportsMapper = new Mo_AirportsMapper($appCfg);
    $Mo_GeographyMapper = new Mo_GeographyMapper($appCfg);
    $res = [];

    // Try as CITY
    if (!$raw = $Mo_GeographyMapper->findCityWithLocationData($code)) {

        // Try as AIRPORT
        if ($raw = $Mo_AirportsMapper->findWithLocationData($code)) {

            // Normalize
            $raw = array(
                'identity' => $raw['ident'],
                'type' => $raw['type'],
                'name' => $raw['name'],
                'latitude' => $raw['latitude'],
                'longitude' => $raw['longitude'],
                'iata' => $raw['iata'],
                'homeLink' => $raw['home_link'],
                'wikipediaLink' => $raw['wikipedia_link'],
                'regionCode' => $raw['region_code'],
                'countryCode' => $raw['country_code'],
                'municipalityEs' => $raw['municipality_es'],
                'municipalityEn' => $raw['municipality_en'],
                'regionNameEs' => $raw['region_name_es'],
                'regionNameEn' => $raw['region_name_en'],
                'countryNameEs' => $raw['country_name_es'],
                'countryNameEn' => $raw['country_name_en']
            );
        }
    }

    // Normalize
    if ($raw) {
        $res = array(
            'identity' => (isset($raw['identity']) ? $raw['identity'] : ''),
            'type' => (isset($raw['type']) ? $raw['type'] : 'city'),
            'name' => (isset($raw['name']) ? $raw['name'] : ''),
            'latitude' => (isset($raw['latitude']) ? $raw['latitude'] : ''),
            'longitude' => (isset($raw['longitude']) ? $raw['longitude'] : ''),
            'iata' => (isset($raw['iata']) ? $raw['iata'] : $raw['code']),
            'homeLink' => (isset($raw['homeLink']) ? $raw['homeLink'] : ''),
            'wikipediaLink' => (isset($raw['wikipediaLink']) ? $raw['wikipediaLink'] : ''),
            'regionCode' => (isset($raw['regionCode']) ? $raw['regionCode'] : ''),
            'countryCode' => $raw['countryCode']
        );

        $res['municipality'] = (isset($raw["municipality{$lang}"]) ? $raw["municipality{$lang}"] : '');
        $res['regionName'] = (isset($raw["regionName{$lang}"]) ? $raw["regionName{$lang}"] : $raw["name{$lang}"]);
        $res['countryName'] = $raw["countryName{$lang}"];
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
