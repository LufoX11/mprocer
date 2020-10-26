<?php

/**
 * Lang object model.
 */

Loader::mo(array('Base'), true);

class Mo_Lang extends Mo_Base
{
    /**
     * @var integer Lang ID.
     */
    protected $_id;

    /**
     * @var string Language code.
     */
    protected $_lang;

    /**
     * @var string Traduction key.
     */
    protected $_key;

    /**
     * @var string Traduction.
     */
    protected $_value;

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

    public function setLang($lang)
    {
        $this->_lang = (string) $lang;
    }

    public function getLang()
    {
        return $this->_lang;
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
        $this->_value = (string) $value;
    }

    public function getValue()
    {
        return $this->_value;
    }
}
