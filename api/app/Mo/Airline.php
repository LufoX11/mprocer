<?php

/**
 * Airline object model.
 */

Loader::mo(array('Base'), true);

class Mo_Airline extends Mo_Base
{
    /**
     * @var string IATA code (2 chars).
     */
    protected $_iata;

    /**
     * @var string Airline's name.
     */
    protected $_name;

    /**
     * @var boolean Multiple.
     */
    protected $_multiple;

    ////
    // Setters and Getters
    ////

    public function setIata($iata)
    {
        $this->_iata = (string) $iata;
    }

    public function getIata()
    {
        return $this->_iata;
    }

    public function setName($name)
    {
        $this->_name = (string) $name;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function setMultiple($multiple)
    {
        $this->_multiple = (boolean) $multiple;
    }

    public function getMultiple()
    {
        return $this->_multiple;
    }
}
