<?php

/**
 * Flights object model. Group of flights.
 */

Loader::mo(array('Base', 'Airline', 'Journeys'), true);

class Mo_Flights extends Mo_Base
{
    /**
     * @var double Price.
     */
    protected $_price;

    /**
     * @var object Company.
     */
    protected $_company;

    /**
     * @var array Journeys.
     */
    protected $_journeys;

    /**
     * @var string Carrier.
     */
    protected $_carrier;

    /**
     * @var string FateType.
     */
    protected $_fareType;

    ////
    // Setters and Getters
    ////

    public function setPrice($price)
    {
        $this->_price = (float) $price;
    }

    public function getPrice()
    {
        return $this->_price;
    }

    public function setCompany(Mo_Airline $company)
    {
        $this->_company = $company;
    }

    public function getCompany()
    {
        return $this->_company;
    }

    public function setJourneys(Mo_Journeys $journeys)
    {
        $this->_journeys[] = $journeys;
    }

    public function getJourneys()
    {
        return $this->_journeys;
    }

    public function setCarrier($carrier)
    {
        $this->_carrier = $carrier;
    }

    public function getCarrier()
    {
        return $this->_carrier;
    }

    public function setFareType($fareType)
    {
        $this->_fareType = (array) $fareType;
    }

    public function getFareType()
    {
        return $this->_fareType;
    }
}