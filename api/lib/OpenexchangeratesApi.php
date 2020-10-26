<?php

/**
 * This library contains functions to access the Wunderground Weather API.
 */

require_once dirname(__FILE__) . '/CurlService.php';

class OpenexchangeratesApiException extends Exception {}

class OpenexchangeratesApi
{
    /**
     * @var array Config.
     */
    protected $_cfg = array(
        'key' => null,
        'namesUri' => 'http://openexchangerates.org/api/currencies.json?app_id=%KEY%',
        'ratesUri' => 'http://openexchangerates.org/api/latest.json?app_id=%KEY%'
    );

    /**
     * @var object CURL object.
     */
    private $_curl;

    /**
     * Builds a new OpenexchangeratesApi.
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
     * Fetches all currencies names.
     *
     * @return mixed List of all available currencies names on success; FALSE otherwise.
     */
    public function fetchNames()
    {
        $res = $this->_fetch($this->_cfg['namesUri']);

        return $res;
    }

    /**
     * Fetches all currencies rates.
     *
     * @return mixed Currencies rates data on success; FALSE otherwise.
     */
    public function fetchRates()
    {
        $res = $this->_fetch($this->_cfg['ratesUri']);

        return $res;
    }

    /**
     * Retrieves currencies data.
     *
     * @return mixed Currencies data on success; FALSE otherwise.
     */
    protected function _fetch($uri)
    {
        $res = false;
        $uri = str_replace(array('%KEY%'), array($this->_cfg['key']), $uri);
        try {
            if (!(($res = $this->_curl->exec($uri)) && $res = json_decode($res, true))) {
                throw new OpenexchangeratesApiException('Connection error.');
            }
        } catch (CurlServiceException $e) {
            throw new OpenexchangeratesApiException($e);
        }

        return $res;
    }
}

