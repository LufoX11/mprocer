<?php

/**
 * Abstract model.
 */

Loader::lib(array('CurlService'), true);

Loader::da(array('Handler/Memcached', 'Handler/Mysql', 'Handler/Mongo'), true);

abstract class Ds_Base
{
    /**
     * @var array Configuration for the db handler.
     */
    protected $_cfg;

    /**
     * @var object Cache handler.
     */
    protected $_cacheHandler;

    /**
     * @var object Database handler.
     */
    protected $_dbHandler;

    /**
     * @var object CurlService.
     */
    protected $_curlService;

    /**
     * @var array Some extra options.
     */
    protected $_options;

    /**
     * Builds a new data source.
     *
     * @param $cfg array Configuration for the db handler.
     * @param $options array An array of options for the object initialization.
     * @return void.
     */
    public function __construct(array $cfg, array $options = null)
    {
        $this->_cfg = $cfg;
        $this->_options = $options;
        $this->_curlService = new CurlService();
    }

    /**
     * Gets the current db handler.
     *
     * @return object Db handler.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Handler_Mysql');
        }

        return $this->_dbHandler;
    }

    /**
     * Gets the current cache handler.
     *
     * @return object Cache handler.
     */
    public function getCacheHandler()
    {
        if (!$this->_cacheHandler) {
            $this->setCacheHandler('Da_Handler_Memcached');
        }

        return $this->_cacheHandler;
    }

    /**
     * Sets the database handler.
     *
     * @param $dbHandler mixed The name of the db handler or the already initializated handler.
     * @return object Self object.
     */
    public function setDbHandler($dbHandler)
    {
        if (is_string($dbHandler)) {
            $dbHandler = new $dbHandler($this->_cfg);
        }
        if (!$dbHandler instanceof Da_Handler_Mysql
                && !$dbHandler instanceof Da_Handler_Mongo) {
            throw new Exception('Invalid database handler provided.');
        }
        $this->_dbHandler = $dbHandler;

        return $this;
    }

    /**
     * Sets the cache handler.
     *
     * @param $cacheHandler mixed The name of the cache handler or the already initializated handler.
     * @return object Self object.
     */
    public function setCacheHandler($cacheHandler)
    {
        if (is_string($cacheHandler)) {
            $cacheHandler = new $cacheHandler($this->_cfg);
        }
        if (!$cacheHandler instanceof Da_Handler_Memcached) {
            throw new Exception('Invalid cache handler provided.');
        }
        $this->_cacheHandler = $cacheHandler;

        return $this;
    }

    public function _object_to_array($obj) {
        if (is_object($obj)) {
            $obj = (array) $obj;
        }
        if (is_array($obj)) {
            $new = array();
            foreach($obj as $key => $val) {
                // ugly temporal hack
                $strArr= str_replace('\u0000*\u0000_','',json_encode($key));
                $key = json_decode($strArr);
                $new[$key] = $this->_object_to_array($val);
            }
        } else {
            $new = $obj;
        }
        return $new;
    }

}
