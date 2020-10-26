<?php

/**
 * Memcached handler.
 */

Loader::lib(array('MemcachedDriver'), true);

class Da_Handler_MemcachedException extends Exception {}

class Da_Handler_Memcached
{
    /**
     * @const Default time lapses.
     */
    const TIME_1_MIN = 60;
    const TIME_1_HOUR = 3600;
    const TIME_1_DAY = 86400;

    /**
     * @var string Default driver to use.
     */
    public $defaultDriver = 'memcached';

    /**
     * @var array Configuration for the handler.
     */
    protected $_cfg;

    /**
     * @var object Memcached handler.
     */
    private $_handler;

    /**
     * Builds a new handler.
     *
     * @param $cfg array Configuration for the handler.
     * @return void.
     */
    public function __construct(array $cfg)
    {
        $this->_cfg = $cfg;
    }

    /**
     * Sets the cache driver to use.
     *
     * @param $driver string Driver name.
     * @return object Self object.
     */
    public function setCacheDriver($driver)
    {
        $this->defaultDriver = $driver;

        return $this;
    }

    /**
     * Gets the cache driver.
     *
     * @return string Cache driver.
     */
    public function getCacheDriver()
    {
        if (!$this->defaultDriver) {
            $this->setCacheDriver('memcached');
        }

        return $this->defaultDriver;
    }

    /**
     * Fetchs a stored value from cache.
     *
     * @param $key string The key used to store the value.
     * @return mixed The stored value on success; NULL otherwise.
     */
    public function fetch($key)
    {
        $handler = $this->getHandler();
        $res = $handler->get($key);
        if ($errorCode = $handler->getResultCode()) {
            $res = null;
        }

        return $res;
    }

    /**
     * Stores a value in cache.
     *
     * @param $key string Data identifier label.
     * @param $value mixed Value to store.
     * @param $ttl integer Time to live in memory in seconds (0 means forever).
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function store($key, $value, $ttl = 0)
    {
        $handler = $this->getHandler();
        $res = $handler->set($key, $value, $ttl);
        if ($errorCode = $handler->getResultCode()) {
            $res = false;
        }

        return $res;
    }

    /**
     * Removes a stored variable from cache.
     *
     * @param $key string Data identifier label.
     * @param $ttl integer Time to live in memory before you be able to use this key again (0 means forever).
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function delete($key, $ttl = 0)
    {
        $handler = $this->getHandler();
        $res = $handler->delete($key);
        if ($errorCode = $handler->getResultCode()) {
            $res = false;
        }

        return $res;
    }

    /**
     * Increments numeric item's value.
     *
     * @param $key string The key of the item to increment. 
     * @param $offset The amount by which to increment the item's value.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function increment($key, $offset = 1)
    {
        $handler = $this->getHandler();
        $res = $handler->increment($key, $offset);
        if ($errorCode = $handler->getResultCode()) {
            $res = false;
        }

        return $res;
    }

    /**
     * Decrements numeric item's value.
     *
     * @param $key string The key of the item to decrement. 
     * @param $offset The amount by which to decrement the item's value.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function decrement($key, $offset = 1)
    {
        $handler = $this->getHandler();
        $res = $handler->decrement($key, $offset);
        if ($errorCode = $handler->getResultCode()) {
            $res = false;
        }

        return $res;
    }

    /**
     * Gets connection handler.
     *
     * @param $driver string Cache driver to use.
     * @return object Connection handler.
     */
    public function getHandler($driver = null)
    {
        $cfg = $this->_cfg;
        if (!$driver) {
            $driver = $this->getCacheDriver();
        }
        if (!$cfg) {
            throw new Da_Handler_MemcachedException('$cfg not initializated.');
        }
        if (!isset($this->_handler)) {
            $this->_handler = new MemcachedDriver($cfg['cache'][$driver]);
        }

        return $this->_handler;
    }
}
