<?php

/**
 * Airports mapper.
 */

Loader::mo(array('Abstract', 'Airport'), true);
Loader::da(array('Airports'), true);

class Mo_AirportsMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_AIRPORT_FULL_BY_IATA = 'Mo_AirportMapper::airlineFull::iata-%s::v2::1';

    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Airports');
        }

        return $this->_dbHandler;
    }

    /**
     * Tells whether a name appears to be a country or not.
     *
     * @param $name string The name to check.
     * @return boolean TRUE if country; FALSE otherwise.
     */
    public function isCountry($name)
    {
        $res = $this->getDbHandler()->isCountry($name);

        return $res;
    }

    /**
     * Retrieves similar cities by name.
     *
     * @param $regionName string Complete or partial name of the region.
     * @param $countryName string Complete or partial name of the country.
     * @param $limit integer Resulset limit.
     * @param $all boolean If FALSE, only common commercial flights will be returned.
     * @return mixed An ARRAY with all similar cities on success; FALSE otherwise.
     */
    public function fetchAirports($regionName, $countryName = null, $limit = null, $all = false)
    {
        // Required fields
        if (!$limit || !is_numeric($limit)) {
            $limit = 10;
        }

        // From Database
        $res = $this->getDbHandler()->fetchAirports($regionName, $countryName, $limit, $all);

        return $res;
    }

    /**
     * Retrieves an airport data with additional location data by IATA code.
     *
     * @param $iataCode string IATA code.
     * @return Mo_Airport
     */
    public function findWithLocationData($iataCode)
    {
        $cacheHandler = $this->getCacheHandler();
        $mcKey = sprintf(self::MC_KEY_AIRPORT_FULL_BY_IATA, $iataCode);

        // From Cache
        if (!$res = $cacheHandler->fetch($mcKey)) {

            // From DB
            $res = $this->getDbHandler()->fetchRow(
                'airports a',
                array('iata' => $iataCode),
                array(
                    'a.*',
                    'r.code region_code',
                    'r.name_en region_name_en',
                    'r.name_es region_name_es',
                    'c.code country_code',
                    'c.name_en country_name_en',
                    'c.name_es country_name_es',
                    't.code continent_code',
                    't.name_en continent_name_en',
                    't.name_es continent_name_es'),
                array(
                    'join' => array(
                        array('regions r', 'a.regions_code = r.code'),
                        array('countries c', 'r.countries_code = c.code'),
                        array('continents t', 'c.continents_code = t.code'),
                    )
                ));

            // Save in MC
            if ($res) {
                $cacheHandler->store($mcKey, $res);
            }
        }

        return $res;
    }
}
