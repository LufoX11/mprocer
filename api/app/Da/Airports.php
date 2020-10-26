<?php

/**
 * Airports data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_Airports extends Da_BaseMysql
{
    /**
     * @see parent.
     */
    public function __construct(array $cfg)
    {
        parent::__construct($cfg);
        $this->setDbDriver('airports');
    }

    /**
     * Tells whether a name appears to be a country or not.
     *
     * @param $name string The name to check.
     * @return boolean TRUE if country; FALSE otherwise.
     */
    public function isCountry($name)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();

        $query = sprintf(''
            . 'SELECT id '
            . 'FROM countries '
            . 'WHERE name_en LIKE "%s" '
                . 'OR name_es LIKE "%s" '
            . 'LIMIT 1',
            $handler->escape($name),
            $handler->escape($name));

        $res = (bool) $handler->count($query);

        return $res;
    }

    /**
     * Retrieves similar airports by searching for: .
     *
     * @param $regionName string Complete or partial name of the region.
     * @param $countryName string Complete or partial name of the country.
     * @param $limit integer Resulset limit.
     * @param $all boolean If FALSE, only common commercial flights will be returned.
     * @return mixed An ARRAY with all similar cities on success; FALSE otherwise.
     */
    public function fetchAirports($regionName, $countryName = null, $limit = null, $all = false)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();

        // Query vars escaping and format
        $regionName = $handler->escape($regionName);
        if ($countryName) {
            $countryName = $handler->escape($countryName);
        }

        $query = ''
            . 'SELECT '

                // Airports
                . 'a.ident identity, '
                . 'a.type, '
                . 'a.name name, '
                . 'a.latitude, '
                . 'a.longitude, '
                . 'a.municipality_en municipalityEn, '
                . 'a.municipality_es municipalityEs, '
                . 'a.iata, '
                . 'a.home_link homeLink, '
                . 'a.wikipedia_link wikipediaLink, '

                // Regions
                . 'r.code regionCode, '
                . 'r.name_en regionNameEn, '
                . 'r.name_es regionNameEs, '

                // Countries
                . 'c.code countryCode, '
                . 'c.name_en countryNameEn, '
                . 'c.name_es countryNameEs '

            . 'FROM airports a '
            . 'INNER JOIN regions r ON a.regions_code = r.code '
            . 'INNER JOIN countries c ON r.countries_code = c.code '
            . 'WHERE '

                // Airports or Regions
                . '('
                    . sprintf('a.name LIKE "%%%s%%" ', $regionName)
                    . sprintf('OR a.municipality_en LIKE "%%%s%%" ', $regionName)
                    . sprintf('OR a.municipality_es LIKE "%%%s%%" ', $regionName)
                    . sprintf('OR r.name_en LIKE "%%%s%%" ', $regionName)
                    . sprintf('OR r.name_es LIKE "%%%s%%"', $regionName)
                . ') '

                // Countries
                . ($countryName ? sprintf('AND (c.name_en LIKE "%%%s%%" OR c.name_es LIKE "%%%s%%") ',
                    $countryName, $countryName) : '')

                // Airport types
                . 'AND a.type IN ("large_airport", "medium_airport", "small_airport") '
                . (!$all ? 'AND commercial_flights = 1 ' : '')
            . 'ORDER BY '
                . 'CASE '

                    // Priority 0: <match> and type = large_airport
                    . sprintf('WHEN municipalityEs = "%s" THEN 0 ', $regionName)
                    . sprintf('WHEN municipalityEn = "%s" THEN 0 ', $regionName)
                    . sprintf('WHEN regionNameEs = "%s" THEN 1 ', $regionName)
                    . sprintf('WHEN regionNameEn = "%s" THEN 1 ', $regionName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs = "%s" THEN 2 ', $countryName)
                        . sprintf('WHEN countryNameEn = "%s" THEN 2 ', $countryName)
                        : '')
                    . 'WHEN a.type = "large_airport" THEN 3 '
                    . sprintf('WHEN name = "%s" THEN 4 ', $regionName)

                    // Priority 1: <match>%
                    . sprintf('WHEN municipalityEs LIKE "%s%%" THEN 5 ', $regionName)
                    . sprintf('WHEN municipalityEn LIKE "%s%%" THEN 5 ', $regionName)
                    . sprintf('WHEN regionNameEs LIKE "%s%%" THEN 6 ', $regionName)
                    . sprintf('WHEN regionNameEn LIKE "%s%%" THEN 6 ', $regionName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs LIKE "%s%%" THEN 7 ', $countryName)
                        . sprintf('WHEN countryNameEn LIKE "%s%%" THEN 7 ', $countryName)
                        : '')
                    . sprintf('WHEN name LIKE "%s%%" THEN 8 ', $regionName)

                    // Priority 2: %<match>%
                    . sprintf('WHEN municipalityEs LIKE "%%%s%%" THEN 9 ', $regionName)
                    . sprintf('WHEN municipalityEn LIKE "%%%s%%" THEN 9 ', $regionName)
                    . sprintf('WHEN regionNameEs LIKE "%%%s%%" THEN 10 ', $regionName)
                    . sprintf('WHEN regionNameEn LIKE "%%%s%%" THEN 10 ', $regionName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs LIKE "%%%s%%" THEN 11 ', $countryName)
                        . sprintf('WHEN countryNameEn LIKE "%%%s%%" THEN 11 ', $countryName)
                        : '')
                    . sprintf('WHEN name LIKE "%%%s%%" THEN 12 ', $regionName)

                    // Priority 3: %<match>
                    . sprintf('WHEN municipalityEs LIKE "%%%s" THEN 13 ', $regionName)
                    . sprintf('WHEN municipalityEn LIKE "%%%s" THEN 13 ', $regionName)
                    . sprintf('WHEN regionNameEs LIKE "%%%s" THEN 14 ', $regionName)
                    . sprintf('WHEN regionNameEn LIKE "%%%s" THEN 14 ', $regionName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs LIKE "%%%s" THEN 15 ', $countryName)
                        . sprintf('WHEN countryNameEn LIKE "%%%s" THEN 15 ', $countryName)
                        : '')
                    . sprintf('WHEN name LIKE "%%%s" THEN 16 ', $regionName)

                    . 'ELSE 17 '
                . 'END '
            . ($limit ? sprintf('LIMIT %d', $limit) : '');

        if ($res = $handler->query($query)) {
            if (!($res = $handler->fetchArray($res))) {
                $res = null;
            }
        }

        return $res;
    }
}
