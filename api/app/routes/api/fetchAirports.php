<?php

/**
 * Fetches cities like input.
 */

$Slim->get('/:package/fetchAirports', function ($service) use ($Slim)
{
    Loader::mo(array('AirportsMapper', 'GeographyMapper'), true);

    $appCfg = $Slim->config('appCfg');

    if (!$lang = ucfirst(strtolower($Slim->request()->get('lang')))) {
        $lang = 'Es';
    }
    $regionName = $Slim->request()->get('name');
    $limit = 10;
    $countryName = null;
    $Mo_AirportsMapper = new Mo_AirportsMapper($appCfg);
    $Mo_GeographyMapper = new Mo_GeographyMapper($appCfg);

    // Valid formats: region | region, | region,country
    if (count(array_filter(explode(',', $regionName))) > 1) {
        list($regionName, $countryName) = array_filter(explode(',', $regionName, 2));
        $countryName = trim($countryName);
    }
    $regionName = trim(strtr($regionName, ',', ' ')); // "regionName," => "regionName"

    // Validations - Min length: 3 chars
    if (strlen($regionName) < 3 && strlen($countryName) < 3) {
        Ajax::setBadRequest($Slim, array('data' => 'Caracteres mínimos: 3.'));

        return;
    }

    // Check if the selected region is a country
    if ($regionName && !$countryName && strlen($regionName) >= 4
        && $Mo_AirportsMapper->isCountry($regionName))
    {
        $countryName = $regionName;
        $regionName = '%';
    }

    $res = array();

    // Fetch Cities
    $howManyCities = round(.7 * $limit); // 70% of entire resultset as max
    if (!$rawCities = $Mo_GeographyMapper->fetchCitiesLike($regionName, $countryName, $howManyCities)) {
        $rawCities = array();
    }

    // Fetch Airports
    $howManyAirports = $limit - count($rawCities);
    $rawAirports = $Mo_AirportsMapper->fetchAirports($regionName, $countryName, $howManyAirports);
    if (count($rawAirports) < $howManyAirports) {

        // Try non common commercial flights
        $rawAirports = $Mo_AirportsMapper->fetchAirports($regionName, $countryName, $howManyAirports, true);

        // In case regionName is also a country besides part of/or a city, try as city
        if ($regionName == '%' && count($rawAirports) < $howManyAirports) {
            $regionName = $countryName;
            $countryName = null;
            $rawAirports = $Mo_AirportsMapper->fetchAirports($regionName, $countryName, $howManyAirports, true);
        }

        if (!$rawAirports) {
            $rawAirports = array();
        }
    }

    // Normalize
    $raw = array_merge($rawCities, $rawAirports);
    foreach ($raw as $k => $v) {
        $res[$k] = array(
            'identity' => (isset($v['identity']) ? $v['identity'] : ''),
            'type' => (isset($v['type']) ? $v['type'] : 'city'),
            'name' => (isset($v['name']) ? $v['name'] : ''),
            'latitude' => (isset($v['latitude']) ? $v['latitude'] : ''),
            'longitude' => (isset($v['longitude']) ? $v['longitude'] : ''),
            'iata' => (isset($v['iata']) ? $v['iata'] : $v['code']),
            'homeLink' => (isset($v['homeLink']) ? $v['homeLink'] : ''),
            'wikipediaLink' => (isset($v['wikipediaLink']) ? $v['wikipediaLink'] : ''),
            'regionCode' => (isset($v['regionCode']) ? $v['regionCode'] : ''),
            'countryCode' => $v['countryCode']
        );

        $res[$k]['municipality'] = (isset($v["municipality{$lang}"]) ? $v["municipality{$lang}"] : '');
        $res[$k]['regionName'] = (isset($v["regionName{$lang}"]) ? $v["regionName{$lang}"] : $v["name{$lang}"]);
        $res[$k]['countryName'] = $v["countryName{$lang}"];
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $res));
});
