<?php

/**
 * Services object model.
 */

Loader::mo(array('Base'), true);

class Mo_Service extends Mo_Base
{
    /**
     * @var integer Service ID.
     */
    protected $_id;

    /**
     * @var string Service name.
     */
    protected $_name;

    /**
     * @var string Service fullname.
     */
    protected $_fullname;

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

    public function setName($name)
    {
        $this->_name = (string) $name;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function setFullname($fullname)
    {
        $this->_fullname = (string) $fullname;
    }

    public function getFullname()
    {
        return $this->_fullname;
    }
}
