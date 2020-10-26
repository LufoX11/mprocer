<?php

/**
 * Weather mapper. Displays data about the current weather conditions.
 */

Loader::mo(array('Abstract', 'Weather'), true);

class Mo_WeatherMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_BY_LOCATION = 'Mo_WeatherMapper::location-%s::v2::1';
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
     * Retrieves weather data.
     *
     * @param $location string Location to get data from.
     * @return mixed ARRAY with weather data on success; FALSE otherwise.
     */
    public function find($location)
    {
        try {
            $mcKey = sprintf(self::MC_KEY_BY_LOCATION, $location);
            $cacheHandler = $this->getCacheHandler();

            // From Cache
            if (($res = $cacheHandler->fetch($mcKey)) === null) {

                // From API
                if ($res = $this->_ds->fetch($location)) {
                    $res = new Mo_Weather(array(
                        'location' => $res['location'],
                        'current' => $res['current'],
                        'forecast' => $res['forecast']
                    ));
                }
                $cacheHandler->store($mcKey, $res, self::MC_TIME);
            }
        } catch (Exception $e) {

            // Save to avoid hitting ds again
            $res = false;
            $cacheHandler->store($mcKey, $res, self::MC_TIME);

            throw new Exception($e);
        }

        return $res;
    }
}
