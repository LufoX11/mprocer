<?php

/**
 * Flights object model.
 */

Loader::mo(array('Base', 'Pricing', 'Airline', 'Passenger', 'Flight'), true);

class Mo_Journeys extends Mo_Base
{
    /**
     * @var object Pricing.
     */
    protected $_pricing;

    /**
     * @var object Company.
     */
    protected $_company;

    /**
     * @var array Passengers.
     */
    protected $_passengers;

    /**
     * @var array Flights.
     */
    protected $_flights;

    ////
    // Setters and Getters
    ////

    public function setPricing(Mo_Pricing $pricing)
    {
        $this->_pricing = $pricing;
    }

    public function getPricing()
    {
        return $this->_pricing;
    }

    public function setCompany(Mo_Airline $company)
    {
        $this->_company = $company;
    }

    public function getCompany()
    {
        return $this->_company;
    }

    public function setPassengers(Mo_Passenger $passenger)
    {
        $this->_passengers[$passenger->getType()] = $passenger;
    }

    public function getPassengers()
    {
        return $this->_passengers;
    }

    public function setFlights(Mo_Flight $flight)
    {
        $this->_flights[] = $flight;
    }

    public function getFlights()
    {
        return $this->_flights;
    }
}