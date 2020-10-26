<?php

/**
 * Push data object model.
 */

Loader::mo(array('Base'), true);

class Mo_PushData extends Mo_Base
{
    /**
     * @var integer Push ID.
     */
    protected $_id;

    /** 
     * @var integer Users ID. 
     */
    protected $_users_id;

    /** 
     * @var string Platform. 
     */
    protected $_platform;

    /**
     * @var string Registration id.
     */
    protected $_registrationId;

    /**
     * @var string Creation datetime.
     */ 
    protected $_datetime;

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

    public function setUsers_id($id)
    {
        $this->_users_id = (integer) $id;
    }

    public function getUsers_id()
    {
        return $this->_users_id;
    }

    public function setPlatform($platform)
    {
        $this->_platform = trim(ucwords($platform));
    }

    public function getPlatform()
    {
        return $this->_platform;
    }

    public function setRegistrationId($registrationId)
    {
        $this->_registrationId = trim($registrationId);
    }

    public function getRegistrationId()
    {
        return $this->_registrationId;
    }

    public function setDatetime($datetime)
    {
        $this->_datetime = date('Y-m-d H:i:s', strtotime($datetime));
    }

    public function getDatetime()
    {
        return $this->_datetime;
    }
}
