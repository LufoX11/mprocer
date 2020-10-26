<?php

/**
 * Flight object model. Big model with all the info for one flight.
 */

Loader::mo(array('Base', 'Airline'), true);

class Mo_Segment extends Mo_Base
{
    /**
     * @var string Departure Location.
     */
    protected $_departureLocation;

    /**
     * @var string Arrival Location.
     */
    protected $_arrivalLocation;

    /**
     * @var string Departure.
     */
    protected $_departure;

    /**
     * @var string Arrival.
     */
    protected $_arrival;

    /**
     * @var string Number of flight.
     */
    protected $_number;

    /**
     * @var array Location.
     */
    protected $_location;

    /**
     * @var object Company.
     */
    protected $_company;

    /**
     * @var array Cabin.
     */
    protected $_cabin;

    /**
     * @var boolean Change Airport.
     */
    protected $_changeAirport;

    ////
    // Setters and Getters
    ////

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

    public function setDeparture($departure)
    {
        $this->_departure = (string) $departure;
    }

    public function getDeparture()
    {
        return $this->_departure;
    }

    public function setArrival($arrival)
    {
        $this->_arrival = (string) $arrival;
    }

    public function getArrival()
    {
        return $this->_arrival;
    }

    public function setNumber($number)
    {
        $this->_number = (string) $number;
    }

    public function setLocationFrom(Mo_Airport $airport)
    {
        $this->_location['from']['airport'] = $airport;
    }

    public function setLocationTo(Mo_Airport $airport)
    {
        $this->_location['to']['airport'] = $airport;
    }

    public function getLocation()
    {
        return $this->_location;
    }

    public function getNumber()
    {
        return $this->_number;
    }

    public function setCompany(Mo_Airline $company)
    {
        $this->_company = $company;
    }

    public function getCompany()
    {
        return $this->_company;
    }

    public function setCabin($type, Mo_Cabin $cabin)
    {
        $this->_cabin[$type] = $cabin;
    }

    public function getCabin()
    {
        return $this->_cabin;
    }

    public function setChangeAirport($changeAirport)
    {
        $this->_changeAirport = (bool) $changeAirport;
    }

    public function getChangeAirport()
    {
        return $this->_changeAirport;
    }
}