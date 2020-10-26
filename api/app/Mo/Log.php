<?php

/**
 * Log object model.
 */

Loader::mo(array('Base'), true);

class Mo_Log extends Mo_Base
{
    /**
     * @var string Key.
     */
    protected $_key;

    /** 
     * @var string Value.
     */
    protected $_value;

    ////
    // Setters and Getters
    ////

    public function setKey($key)
    {
        $this->_key = (string) $key;
    }

    public function getKey()
    {
        return $this->_key;
    }
    
    public function setValue($value)
    {
        $this->_value = (string) $value;
    }

    public function getValue()
    {
        return $this->_value;
    }
}
