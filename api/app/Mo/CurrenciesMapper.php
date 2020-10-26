<?php

/**
 * Currencies mapper.
 */

Loader::mo(array('Abstract', 'Currencies'), true);

class Mo_CurrenciesMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_CURRENCIES = 'Mo_CurrenciesMapper::currencies::v2::1';
    const MC_TIME = 10800; // 3 Hours.

    /**
     * @var object Datasource to use (library).
     */
    protected $_ds;

    /**
     * Initializes the object.
     *
     * @param $options array Options for the Applet.
     *                       'ds' => array(
     *                           'name': Library class name to initialize (from /lib).
     *                           'options' => Initialization options for the library.
     *                       )
     * @return void.
     */
    public function __construct(array $cfg, array $options = null)
    {
        parent::__construct($cfg);

        Loader::lib(array($options['ds']['name']), true);

        $this->_ds = new $options['ds']['name']($options['ds']['options']);
    }

    /**
     * Retrieves all available currencies data.
     *
     * @return mixed ARRAY with currencies data on success; FALSE otherwise.
     */
    public function fetchCurrencies()
    {
        try {
            $cacheHandler = $this->getCacheHandler();

            // From Cache
            if (($res = $cacheHandler->fetch(self::MC_KEY_CURRENCIES)) === null) {

                // From API
                if (($rates = $this->_ds->fetchRates()) && ($names = $this->_ds->fetchNames())) {
                    $res = new Mo_Currencies(array(
                        'timestamp' => $rates['timestamp'],
                        'base' => $rates['base'],
                        'rates' => $rates['rates'],
                        'names' => $names
                    ));
                }
                $this->getCacheHandler()->store(self::MC_KEY_CURRENCIES, $res, self::MC_TIME);
            }
        } catch (Exception $e) {

            // Save to avoid hitting ds again
            $res = false;
            $this->getCacheHandler()->store(self::MC_KEY_CURRENCIES, $res, self::MC_TIME);

            throw new Exception($e);
        }

        return $res;
    }
}
