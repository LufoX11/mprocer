<?php

/**
 * Currencies object model.
 */

Loader::mo(array('Base'), true);

class Mo_Currencies extends Mo_Base
{
    /**
     * @var string Last update time (unix).
     */
    protected $_timestamp;

    /**
     * @var string Base currency (USD, ARS...).
     */
    protected $_base;

    /**
     * @var array All currencies rates.
     */
    protected $_rates;

    /**
     * @var array All currencies names.
     */
    protected $_names;

    ////
    // Setters and Getters
    ////

    public function setTimestamp($timestamp)
    {
        $this->_timestamp = (integer) $timestamp;
    }

    public function getTimestamp()
    {
        return $this->_timestamp;
    }

    public function setBase($base)
    {
        $this->_base = (string) $base;
    }

    public function getBase()
    {
        return $this->_base;
    }

    public function setRates($rates)
    {
        $this->_rates = (array) $rates;
    }

    public function getRates()
    {
        return $this->_rates;
    }

    public function setNames($names)
    {
        $this->_names = (array) $names;
    }

    public function getNames()
    {
        return $this->_names;
    }
}
