<?php

/**
 * Stat object model.
 */

Loader::mo(array('Base'), true);

class Mo_Stat extends Mo_Base
{
    /**
     * @const Count of total users by day / week / month / year.
     */
    const NEW_USERS = 'new-users-total';

    /**
     * @const Summary of total users by device types.
     */
    const BY_DEVICETYPE = 'users-by-devicetype';

    /**
     * @const Summary of customizations by users.
     */
    const USERS_CUSTOMIZATION = 'users-customizations';

    /**
     * @const Count of total of users.
     */
    const USERS_TOTALS = 'users-totals';

    /**
     * @var array Readable titles for stats types.
     */
    public static $titles = array(
        self::NEW_USERS => 'Nuevos usuarios',
        self::BY_DEVICETYPE => 'Usuarios por dispositivo',
        self::USERS_CUSTOMIZATION => 'Personalizaciones de usuarios',
        self::USERS_TOTALS => 'Total de usuarios'
    );

    /**
     * @var array Readable titles for timeline separation.
     */
    public static $timelineTitles = array(
        'byDay' => 'Por Día',
        'byWeek' => 'Por Semana',
        'byMonth' => 'Por Mes',
        'byYear' => 'Por Año'
    );

    /**
     * @var integer Stat ID.
     */
    protected $_id;

    /**
     * @var integer Service ID.
     */
    protected $_services_id;

    /**
     * @var string Service name.
     */
    protected $_service;

    /**
     * @var string Stat type.
     */
    protected $_type;

    /**
     * @var string Stat data.
     */
    protected $_data;

    /**
     * @var string Stat date and time.
     */
    protected $_timestamp;

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

    public function setService($name)
    {
        $this->_service = (string) $name;
    }

    public function getService()
    {
        return $this->_service;
    }

    public function setType($type)
    {
        $this->_type = (string) $type;
    }

    public function getType()
    {
        return $this->_type;
    }

    public function setData($data)
    {
        $this->_data = (array) $data;
    }

    public function getData()
    {
        return $this->_data;
    }

    public function setTimestamp($timestamp)
    {
        $this->_timestamp = (string) $timestamp;
    }

    public function getTimestamp()
    {
        return $this->_timestamp;
    }
}
