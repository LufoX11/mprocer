<?php

/**
 * Airport object model.
 */

Loader::mo(array('Base'), true);

class Mo_Airport extends Mo_Base
{
    /**
     * @var integer Airport's ID.
     */
    protected $_id;

    /**
     * @var string Airport's identity.
     */
    protected $_ident;

    /**
     * @var string Platform type.
     */
    protected $_type;

    /**
     * @var string Airport's name.
     */
    protected $_name;

    /**
     * @var string Latitude (degrees).
     */
    protected $_latitude;

    /**
     * @var string Longitude (degrees).
     */
    protected $_longitude;

    /**
     * @var string Origin regionsCode.
     */
    protected $_regionsCode;

    /**
     * @var string Origin regionName.
     */
    protected $_regionName;

    /**
     * @var string Municipality (english).
     */
    protected $_municipalityEn;

    /**
     * @var string Municipality (spanish).
     */
    protected $_municipalityEs;

    /**
     * @var string Airport's IATA code.
     */
    protected $_iata;

    /**
     * @var string Home link.
     */
    protected $_homeLink;

    /**
     * @var string Wikipedia link.
     */
    protected $_wikipediaLink;

    /**
     * @var boolean Whether the airports is available for commercial flights.
     */
    protected $_commercialFlights;

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

    public function setIdent($ident)
    {
        $this->_ident = (string) $ident;
    }

    public function getIdent()
    {
        return $this->_ident;
    }

    public function setType($type)
    {
        $this->_type = (string) $type;
    }

    public function getType()
    {
        return $this->_type;
    }

    public function setName($name)
    {
        $this->_name = (string) $name;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function setLatitude($latitude)
    {
        $this->_latitude = (string) $latitude;
    }

    public function getLatitude()
    {
        return $this->_latitude;
    }

    public function setLongitude($longitude)
    {
        $this->_longitude = (string) $longitude;
    }

    public function getLongitude()
    {
        return $this->_longitude;
    }

    public function setRegionsCode($regions_code)
    {
        $this->_regionsCode = (string) $regions_code;
    }

    public function getRegionsCode()
    {
        return $this->_regionsCode;
    }

    public function setRegionName($region_name)
    {
        $this->_regionName = (string) $region_name;
    }

    public function getRegionName()
    {
        return $this->_regionName;
    }

    public function setMunicipalityEn($name)
    {
        $this->_municipalityEn = (string) $name;
    }

    public function getMunicipalityEn()
    {
        return $this->_municipalityEn;
    }

    public function setMunicipalityEs($name)
    {
        $this->_municipalityEs = (string) $name;
    }

    public function getMunicipalityEs()
    {
        return $this->_municipalityEs;
    }

    public function setIata($code)
    {
        $this->_iata = (string) $code;
    }

    public function getIata()
    {
        return $this->_iata;
    }

    public function setHomeLink($link)
    {
        $this->_homeLink = (string) $link;
    }

    public function getHomeLink()
    {
        return $this->_homeLink;
    }

    public function setWikipediaLink($link)
    {
        $this->_wikipediaLink = (string) $link;
    }

    public function getWikipediaLink()
    {
        return $this->_wikipediaLink;
    }

    public function setCommercialFlights($commercialFlights)
    {
        $this->_commercialFlights = (boolean) $commercialFlights;
    }

    public function getCommercialFlights()
    {
        return $this->_commercialFlights;
    }
}
