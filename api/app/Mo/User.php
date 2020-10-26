<?php

/**
 * User object model.
 */

Loader::mo(array('Base', 'UserSetting'), true);

class Mo_User extends Mo_Base
{
    /**
     * @var integer User ID.
     */
    protected $_id;

    /**
     * @var integer Service ID.
     */
    protected $_services_id;

    /**
     * @var string A unique ID to identify the client.
     */
    protected $_deviceId;

    /**
     * @var string The type of the device from which the request is being made.
     */
    protected $_deviceType;

    /**
     * @var string The device version.
     */
    protected $_deviceVersion;

    /**
     * @var string Creation date.
     */
    protected $_creationDate;

    /**
     * @var string Last modification date date.
     */
    protected $_timestamp;

    /**
     * @var string Client's IP address.
     */
    protected $_ip;

    /**
     * @var string Client's browser headers.
     */
    protected $_browserHeaders;

    /**
     * @var string User's contact email.
     */
    protected $_email;

    /**
     * @var string User's phone number.
     */
    protected $_phone;

    /**
     * @var string User's fullname.
     */
    protected $_name;

    /**
     * @var array A collection of UserSetting objects.
     */
    protected $_settings;

    /**
     * Retrieves a value from settings.
     *
     * @param $settingKey string Setting key.
     * @return mixed Setting value on success; NULL otherwise.
     */
    public function getSetting($settingKey)
    {
        $res = null;
        if (array_key_exists($settingKey, $this->settings)) {
            $res = $this->settings[$settingKey]->value;
        }

        return $res;
    }

    ////
    // Setters and Getters
    ////

    public function setId($id)
    {
        $this->_id = (integer) $id;
    }

    public function getId()
    {
        return $this->_id;
    }

    public function setServices_id($id)
    {
        $this->_services_id = (integer) $id;
    }

    public function getServices_id()
    {
        return $this->_services_id;
    }

    public function setDeviceId($id)
    {
        $this->_deviceId = (string) $id;
    }

    public function getDeviceId()
    {
        return $this->_deviceId;
    }

    public function setDeviceType($type)
    {
        $this->_deviceType = (string) $type;
    }

    public function getDeviceType()
    {
        return $this->_deviceType;
    }

    public function setDeviceVersion($version)
    {
        $this->_deviceVersion = (string) $version;
    }

    public function getDeviceVersion()
    {
        return $this->_deviceVersion;
    }

    public function setCreationDate($creationDate)
    {
        $this->_creationDate = (string) $creationDate;
    }

    public function getCreationDate()
    {
        return $this->_creationDate;
    }

    public function setTimestamp($timestamp)
    {
        $this->_timestamp = (string) $timestamp;
    }

    public function getTimestamp()
    {
        return $this->_timestamp;
    }

    public function setIp($ip)
    {
        $this->_ip = (string) $ip;
    }

    public function getIp()
    {
        return $this->_ip;
    }

    public function setBrowserHeaders($headers)
    {
        $this->_browserHeaders = (string) $headers;
    }

    public function getBrowserHeaders()
    {
        return $this->_browserHeaders;
    }

    public function setEmail($email)
    {
        $this->_email = (string) $email;
    }

    public function getEmail()
    {
        return $this->_email;
    }

    public function setPhone($phone)
    {
        $this->_phone = (string) $phone;
    }

    public function getPhone()
    {
        return $this->_phone;
    }

    public function setName($name)
    {
        $this->_name = (string) $name;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function setSettings(array $settings)
    {
        $this->_settings = $settings;
    }

    public function getSettings()
    {
        return $this->_settings;
    }
}
