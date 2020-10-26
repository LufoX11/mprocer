<?php

/**
 * User settings object model.
 */

Loader::mo(array('Base'), true);

class Mo_UserSetting extends Mo_Base
{
    /**
     * @const Available user settings.
     */
    const RECEIVE_NEWSLETTER = 'receiveNewsletter';
    const WEATHER_LOCATION = 'weatherLocation';

    /**
     * @var array Available keys.
     */
    public static $keys = array(
        self::RECEIVE_NEWSLETTER,
        self::WEATHER_LOCATION
    );

    /**
     * @var integer Users ID.
     */
    protected $_users_id;

    /**
     * @var string An identify key for the value.
     */
    protected $_key;

    /**
     * @var mixed A value to save.
     */
    protected $_value;

    ////
    // Setters and Getters
    ////

    public function setUsers_id($id)
    {
        $this->_users_id = (integer) $id;
    }

    public function getUsers_id()
    {
        return $this->_users_id;
    }

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
        $this->_value = $value;
    }

    public function getValue()
    {
        return $this->_value;
    }
}
