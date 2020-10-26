<?php

/**
 * Geography mapper.
 */

Loader::mo(array('Abstract'), true);
Loader::da(array('Geography'), true);

class Mo_GeographyMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_CITY_BY_CODE = 'Mo_GeographyMapper::city::code-%s::v2::1';
    const MC_KEY_CITY_FULL_BY_CODE = 'Mo_GeographyMapper::cityFull::code-%s::v2::1';

    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Geography');
        }

        return $this->_dbHandler;
    }

    /**
     * Retrieves similar cities by name.
     *
     * @param $name string Complete or partial name of the country.
     * @param $limit integer Resulset limit.
     * @return mixed An ARRAY with all similar countries on success; FALSE otherwise.
     */
    public function fetchCountriesLike($name, $limit = null)
    {
        // Required fields
        if (!$limit || !is_numeric($limit)) {
            $limit = 10;
        }

        // From Database
        $res = $this->getDbHandler()->fetchCountriesLike($name, $limit);

        return $res;
    }

    /**
     * Retrieves similar cities by name.
     *
     * @param $cityName string Complete or partial name of the city.
     * @param $countryName string Complete or partial name of the country.
     * @param $limit integer Resulset limit.
     * @return mixed An ARRAY with all similar cities on success; FALSE otherwise.
     */
    public function fetchCitiesLike($cityName, $countryName, $limit = null)
    {
        if (!$limit || !is_numeric($limit)) {
            $limit = 10;
        }

        // From Database
        $res = $this->getDbHandler()->fetchCitiesLike($cityName, $countryName, $limit);

        return $res;
    }

    /**
     * Retrieves a city by code.
     *
     * @param $code string City code.
     * @return mixed An ARRAY with city data on success; FALSE otherwise.
     */
    public function findCity($code)
    {
        $cacheHandler = $this->getCacheHandler();
        $mcKey = sprintf(self::MC_KEY_CITY_BY_CODE, $code);

        // From Cache
        if (!$res = $cacheHandler->fetch($mcKey)) {

            // From Database
            if ($res = $this->getDbHandler()->fetchRow('cities', array('code' => $code))) {

                // Save in MC
                $cacheHandler->store($mcKey, $res);
            }
        }

        return $res;
    }

    /**
     * Retrieves a city by code but includes also location data.
     *
     * @param $code string City code.
     * @return mixed An ARRAY with city data on success; FALSE otherwise.
     */
    public function findCityWithLocationData($code)
    {
        $cacheHandler = $this->getCacheHandler();
        $mcKey = sprintf(self::MC_KEY_CITY_FULL_BY_CODE, $code);

        // From Cache
        if (!$res = $cacheHandler->fetch($mcKey)) {

            // From Database
            $res = $this->getDbHandler()->fetchRow(
                'cities c',
                array('c.code' => $code),
                array(
                    'c.code code',
                    'c.name_es nameEs',
                    'c.name_en nameEn',
                    'n.code countryCode',
                    'n.name_en countryNameEn',
                    'n.name_es countryNameEs',
                    't.code continentCode',
                    't.name_en continentNameEn',
                    't.name_es continentNameEs'
                ),
                array(
                    'join' => array(
                        array('countries n', 'c.countries_code = n.code'),
                        array('continents t', 'n.continents_code = t.code'),
                    )
                ));

            if ($res) {

                // Save in MC
                $cacheHandler->store($mcKey, $res);
            }
        }

        return $res;
    }
}
