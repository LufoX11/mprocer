<?php

/**
 * Interface for data sources.
 */

interface Ds_Interface
{
	/**
	 * Searches for lowest fare flights.
	 */
	public function fetchFlights($departureLocation,
        $arrivalLocation,
        $departureDate,
        array $travellers = array(),
        $returnDate = null,
        array $options = array());
}