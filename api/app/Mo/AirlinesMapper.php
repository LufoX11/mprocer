<?php

/**
 * Airlines mapper.
 */

Loader::mo(array('Abstract', 'Airline'), true);
Loader::da(array('Airlines'), true);

class Mo_AirlinesMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_AIRLINE_BY_IATA = 'Mo_AirlinesMapper::airline::iata-%s::v2::1';

    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Airlines');
        }

        return $this->_dbHandler;
    }

    /**
     * Retrieves an air company by IATA code.
     *
     * @para $iataCode string IATA code.
     * @return Mo_Airline
     */
    public function find($iataCode)
    {
        $cacheHandler = $this->getCacheHandler();
        $mcKey = sprintf(self::MC_KEY_AIRLINE_BY_IATA, $iataCode);

        // From Cache
        if (!$res = $cacheHandler->fetch($mcKey)) {

            // From DB
            if ($res = $this->getDbHandler()->fetchRow('airlines', array('iata' => $iataCode))) {
                $res = new Mo_Airline(array(
                    'iata' => $res['iata'],
                    'name' => $res['name']
                ));

                // Save in MC
                $cacheHandler->store($mcKey, $res);
            }
        }

        return $res;
    }
}
