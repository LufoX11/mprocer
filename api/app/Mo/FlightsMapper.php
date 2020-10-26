<?php

/**
 * Main Flights Mapper.
 */
class Mo_FlightsMapper extends Mo_Abstract
{
    /**
     * @var array Names of passengers types.
     */
    public static $passengerTitles = array(
        'ADT' => 'Adulto',
        'CH' => 'Menor',
        'INF' => 'Bebé'
    );

    /**
     * @var object Data source to use.
     */
    protected $_ds;

    /**
     * {@inherit}.
     */
    public function __construct(array $cfg, array $options = null)
    {
        parent::__construct($cfg, $options);

        // get data source to use
        $apiSource = $this->_cfg['services'][$cfg['serviceName']]['apiSource'];
        $ds = ucwords($apiSource);
        Loader::ds(array($ds), true);
        $ds = "Ds_{$ds}";

        $this->_ds = new $ds($cfg, $this->_cfg['services'][$cfg['serviceName']][$apiSource]);
    }

    /**
     * Searches for lowest fare flights.
     *
     * @param $departureLocation mixed IATA code of departure location.
     *                                 If multiple, an array with more than one location can be provided.
     * @param $arrivalLocation mixed IATA code of arrival location.
     *                               If multiple, an array with more than one location can be provided.
     * @param $departureDate mixed Date of departure (in "dmy" format).
     *                             If multiple, an array with more than one location can be provided.
     * @param $travellers array Flight travellers:
     *                          "A" => integer Amount of adults (1 at least).
     *                          "C" => integer Amount of childs.
     *                          "IN" => integer Amount of infants.
     * @param $returnDate string Date of return (in "dmy" format).
     * @param $options array Additional options:
     *                       limit integer Results limit (default 50).
     *                       currency string Conversion rate (default ARS).
     *
     * @return array Available flights.
     */
    public function fetchFlights(
        $departureLocation,
        $arrivalLocation,
        $departureDate,
        array $travellers = array(),
        $returnDate = null,
        array $options = array())
    {
        $flights = $this->_ds->fetchFlights($departureLocation,
            $arrivalLocation,
            $departureDate,
            $travellers,
            $returnDate,
            $options);

        return $flights;
    }

    /**
     * Saves data for a flight booking in DB.
     *
     * @param $data array Booking data:
     *                    departureLocation string.
     *                    arrivalLocation string.
     *                    passengers array (ADT => array(), CH => array(), INF => array()).
     *                    contact array User contact data.
     *                    segments array Flight segments.
     *                    pricing array Pricing details (total, tax, agentFee...).
     * @return array Booking data on success; Error code and details otherwise.
     */
    public function saveBooking(array $data)
    {
        $res = $this->_ds->saveBooking($data);

        return $res;
    }
}
