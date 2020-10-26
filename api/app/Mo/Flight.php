<?php

/**
 * Flight object model. Big model with all the info for one flight.
 */

Loader::mo(array('Base', 'Airline', 'Segment', 'Pricing'), true);

class Mo_Flight extends Mo_Base
{
    /**
     * @var integer Id.
     */
    protected $_id;

    /**
     * @var string Time.
     */
    protected $_time;

    /**
     * @var object Company.
     */
    protected $_company;

    /**
     * @var array Segments.
     */
    protected $_segments;

    /**
     * @var object Pricing.
     */
    protected $_pricing;

    /**
     * @var string Departure Location.
     */
    protected $_departureLocation;

    /**
     * @var string Arrival Location.
     */
    protected $_arrivalLocation;

    ////
    // Setters and Getters
    ////

    public function setId($id)
    {
        $this->_id = (integer) $id;
    }

    public function getId()
    {
        return $this->_id;
    }

    public function setTime($time)
    {
        $this->_time = (string) $time;
    }

    public function getTime()
    {
        return $this->_time;
    }

    public function setCompany(Mo_Airline $company)
    {
        $this->_company = $company;
    }

    public function getCompany()
    {
        return $this->_company;
    }

    public function setSegments(Mo_Segment $segment)
    {
        $this->_segments[] = $segment;
    }

    public function getSegments()
    {
        return $this->_segments;
    }

    public function setPricing(Mo_Pricing $pricing)
    {
        $this->_pricing = $pricing;
    }

    public function getPricing()
    {
        return $this->_pricing;
    }

    public function setDepartureLocation($departureLocation)
    {
        $this->_departureLocation = (string) $departureLocation;
    }

    public function getDepartureLocation()
    {
        return $this->_departureLocation;
    }

    public function setArrivalLocation($arrivalLocation)
    {
        $this->_arrivalLocation = (string) $arrivalLocation;
    }

    public function getArrivalLocation()
    {
        return $this->_arrivalLocation;
    }
}