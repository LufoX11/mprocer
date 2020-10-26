<?php

/**
 * Geography data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_Geography extends Da_BaseMysql
{
    /**
     * @see parent.
     */
    public function __construct(array $cfg)
    {
        parent::__construct($cfg);
        $this->setDbDriver('geography');
    }

    /**
     * Retrieves countries by name.
     *
     * @param $name string Complete or partial name of the country.
     * @param $limit integer Resultset limit.
     * @return mixed An ARRAY with all similar countries on success; FALSE otherwise.
     */
    public function fetchCountriesLike($name, $limit = null)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();

        // Query vars escaping and format
        $name = $handler->escape($name);

        $query = ''
            . 'SELECT '
                . 'co.*, '
                . 'cn.name_en continent_name_en, '
                . 'cn.name_es continent_name_es '
            . 'FROM countries co '
            . 'INNER JOIN continents cn ON co.continents_code = cn.code '
            . 'WHERE '
                . sprintf('co.name_es LIKE "%%%s%%" ', $name)
                . sprintf('OR co.name_en LIKE "%%%s%%" ', $name)
            . 'ORDER BY '
                . 'CASE '

                    // Priority 0: <match>%
                    . sprintf('WHEN co.name_es LIKE "%s%%" THEN 1 ', $name)
                    . sprintf('WHEN co.name_en LIKE "%s%%" THEN 1 ', $name)

                    // Priority 1: %<match>%
                    . sprintf('WHEN co.name_es LIKE "%%%s%%" THEN 2 ', $name)
                    . sprintf('WHEN co.name_en LIKE "%%%s%%" THEN 2 ', $name)

                    . 'ELSE 3 '
                . 'END '
            . ($limit ? sprintf('LIMIT %d', $limit) : '');

        if ($res = $handler->query($query)) {
            if (!($res = $handler->fetchArray($res))) {
                $res = null;
            }
        }

        return $res;
    }

    /**
     * Retrieves cities by name.
     *
     * @param $name string Complete or partial name of the country.
     * @param $limit integer Resulset limit.
     * @return mixed An ARRAY with all similar cities on success; FALSE otherwise.
     */
    public function fetchCitiesLike($cityName, $countryName, $limit = null)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();

        // Query vars escaping and format
        $cityName = $handler->escape($cityName);
        if ($countryName) {
            $countryName = $handler->escape($countryName);
        }

        $query = ''
            . 'SELECT '

                // Cities
                . 'c.code code, '
                . 'c.name_es nameEs, '
                . 'c.name_en nameEn, '
                . 'c.countries_code countryCode, '

                // Countries
                . 'co.name_es countryNameEs, '
                . 'co.name_en countryNameEn '
            . 'FROM cities c '
            . 'INNER JOIN countries co ON c.countries_code = co.code '
            . 'WHERE '

                // City name
                . '('
                    . sprintf('c.name_es LIKE "%%%s%%" ', $cityName)
                    . sprintf('OR c.name_en LIKE "%%%s%%"', $cityName)
                . ') '

                // Countries
                . ($countryName ? sprintf('AND (co.name_es LIKE "%%%s%%" OR co.name_en LIKE "%%%s%%") ',
                    $countryName, $countryName) : '')
            . 'ORDER BY '
                . 'CASE '

                    // Priority 0: <match>
                    . 'WHEN c.priority = 1 THEN 0 '
                    . sprintf('WHEN c.name_es = "%s" THEN 0 ', $cityName)
                    . sprintf('WHEN c.name_en = "%s" THEN 0 ', $cityName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs = "%s" THEN 1 ', $countryName)
                        . sprintf('WHEN countryNameEn = "%s" THEN 1 ', $countryName)
                        : '')

                    // Priority 1: <match>%
                    . sprintf('WHEN c.name_es LIKE "%s%%" THEN 2 ', $cityName)
                    . sprintf('WHEN c.name_en LIKE "%s%%" THEN 2 ', $cityName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEs LIKE "%s%%" THEN 3 ', $countryName)
                        . sprintf('WHEN countryNameEn LIKE "%s%%" THEN 3 ', $countryName)
                        : '')

                    // Priority 2: %<match>%
                    . sprintf('WHEN c.name_es LIKE "%%%s%%" THEN 4 ', $cityName)
                    . sprintf('WHEN c.name_en LIKE "%%%s%%" THEN 4 ', $cityName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEn LIKE "%%%s%%" THEN 5 ', $countryName)
                        . sprintf('WHEN countryNameEs LIKE "%%%s%%" THEN 5 ', $countryName)
                        : '')

                    // Priority 3: %<match>
                    . sprintf('WHEN c.name_es LIKE "%%%s" THEN 6 ', $cityName)
                    . sprintf('WHEN c.name_en LIKE "%%%s" THEN 6 ', $cityName)
                    . ($countryName ?
                        sprintf('WHEN countryNameEn LIKE "%%%s" THEN 7 ', $countryName)
                        . sprintf('WHEN countryNameEs LIKE "%%%s" THEN 7 ', $countryName)
                        : '')

                    . 'ELSE 8 '
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
