<?php

/**
 * This library contains functions to access the Wunderground Weather API.
 */

require_once dirname(__FILE__) . '/CurlService.php';

class WundergroundWeatherApiException extends Exception {}

class WundergroundWeatherApi
{
    /**
     * @var array Custom icons for weather condition.
     */
    private $_customIcons = array(
        'sunny' => 'weather-sun.png',
        'clear' => 'weather-sun.png',
        'mostlysunny' => 'weather-sun.png',
        'partlysunny' => 'weather-sun.png',
        'chancetstorms' => 'weather-storm.png',
        'tstorms' => 'weather-storm.png',
        'unknown' => 'weather-storm.png',
        'cloudy' => 'weather-cloud.png',
        'mostlycloudy' => 'weather-cloud.png',
        'partlycloudy' => 'weather-cloud.png',
        'chancerain' => 'weather-rain.png',
        'rain' => 'weather-rain.png',
        'rain_snow' => 'weather-rain.png',
        'fog' => 'weather-fog.png',
        'hazy' => 'weather-fog.png',
        'chancesnow' => 'weather-snow.png',
        'flurries' => 'weather-snow.png',
        'chanceflurries' => 'weather-snow.png',
        'snow' => 'weather-snow.png',
        'sleet' => 'weather-snow.png',
        'chancesleet' => 'weather-snow.png'
    );

    /**
     * @var array Config.
     */
    protected $_cfg = array(
        'key' => null,
        'uri' => 'http://api.wunderground.com/api/%KEY%/conditions/forecast/lang:SP/q/%LOCATION%.json'
    );

    /**
     * @var object CURL object.
     */
    private $_curl;

    /**
     * Builds a new WundergroundWeatherApi.
     *
     * @param array $options Initialization options.
     *                       'key': API key.
     * @return void.
     */
    public function __construct(array $options = null)
    {
        $this->_curl = new CurlService();
        $this->_cfg['key'] = (isset($options['key']) ? $options['key'] : null);
    }

    /**
     * Retrieves the weather from a specific location.
     *
     * @param $location string Location to retrieve data from.
     * @return array Data about the weather from the specified location on success; FALSE otherwise.
     */
    public function fetch($location)
    {
        $res = false;
        $uri = str_replace(
            array('%KEY%', '%LOCATION%'),
            array($this->_cfg['key'], $location),
            $this->_cfg['uri']);
        try {
            if ($raw = $this->_curl->exec($uri)) {

                // Fix encoding
                if (!mb_detect_encoding($raw, 'UTF-8', true)) {
                    $raw = utf8_encode($raw);
                }

                $raw = json_decode($raw, true);
                if (isset($raw['response']['error'])) {
                    $error = $raw['response']['error'];
                    throw new WundergroundWeatherApiException(
                        "Type: '{$error['type']}' - Message: '{$error['description']}' - "
                        . "Location: '{$location}'.");
                }
                if (!isset($raw['current_observation']) || !$raw['current_observation']
                    || !isset($raw['forecast']['simpleforecast']['forecastday'])
                    || !$raw['forecast']['simpleforecast']['forecastday'])
                {
                    throw new WundergroundWeatherApiException(
                        "Message: 'current_observation or simpleforecast not present.' - "
                        . "Location: '{$location}'.");
                }
                $wC = $raw['current_observation'];
                $wFc = $raw['forecast']['simpleforecast']['forecastday'];
                $res = array(
                    'location' => $location,
                    'current' => array(
                        'description' => $wC['weather'],
                        'temperature' => $wC['temp_c'],
                        'humidity' => $wC['relative_humidity'],
                        'icon' => (isset($this->_customIcons[$wC['icon']]) ?
                            $this->_customIcons[$wC['icon']] : 'question.png'),
                    ),
                    'forecast' => array()
                );
                foreach ($wFc as $k => $v) {
                    $res['forecast'][] = array(
                        'day' => $v['date']['weekday'],
                        'low' => $v['low']['celsius'],
                        'high' => $v['high']['celsius'],
                        'icon' => (isset($this->_customIcons[$v['icon']]) ?
                            $this->_customIcons[$v['icon']] : 'question.png'),
                        'description' => $v['conditions']
                    );
                }

                // This is to remove "Humedad: ...%" from data
                preg_match('/(\d)+/', $res['current']['humidity'], $matches);
                $res['current']['humidity'] = current($matches);
            } else {
                throw new WundergroundWeatherApiException('Connection error.');
            }
        } catch (CurlServiceException $e) {
            throw new WundergroundWeatherApiException($e);
        }

        return $res;
    }
}
