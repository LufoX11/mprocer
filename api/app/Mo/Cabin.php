<?php

/**
 * Flights object model.
 */

Loader::mo(array('Base'), true);

class Mo_Cabin extends Mo_Base
{
    const TYPE_ADT = 'ADT';
    const TYPE_CHI = 'CH';
    const TYPE_INF = 'INF';

    public static $types = array(
        'A' => self::TYPE_ADT,
        'C' => self::TYPE_CHI,
        'IN' => self::TYPE_INF
    );

    public static $classNames = array(
        'C' => 'Negocios',
        'F' => 'Primera',
        'H' => 'Económico',
        'K' => 'Económico',
        'V' => 'Económico',
        'M' => 'Económico',
        'W' => 'Económico',
        'S' => 'Económico',
        'Q' => 'Económico',
        'Y' => 'Económico'
    );

    public static function getTypeByTitle($title)
    {
        return isset(self::$types[$title])
            ? self::$types[$title]
            : null;
    }

    public static function getTitleByType($type)
    {
        foreach (self::$types as $key => $value) {
            if ($value == $type) {
                return $key;
            }
        }
        return false;
    }

    public static function getClassNameByClass($class)
    {
        return isset(self::$classNames[$class])
            ? self::$classNames[$class]
            : null;
    }

    /**
     * @var string Rbd.
     */
    protected $_rbd;

    /**
     * @var string Class.
     */
    protected $_class;

    /**
     * @var string ClassName.
     */
    protected $_className;

    ////
    // Setters and Getters
    ////

    public function setRbd($rbd)
    {
        $this->_rbd = $rbd;
    }

    public function getRbd()
    {
        return $this->_rbd;
    }

    public function setClass($class)
    {
        $this->_class = $class;
    }

    public function getClass()
    {
        return $this->_class;
    }

    public function setClassName($className)
    {
        $this->_className = $className;
    }

    public function getClassName()
    {
        return $this->_className;
    }
}
