<?php

/**
 * Passenger object model.
 */

Loader::mo(array('Base'), true);

class Mo_Passenger extends Mo_Base
{
    /**
     * @var string Type. [ADT, CHI, INT]
     */
    protected $_type;

    /**
     * @var integer Amount.
     */
    protected $_amount;

    /**
     * @var float Unit Price Total.
     */
    protected $_unitPriceTotal;

    /**
     * @var float Unit Price Tax.
     */
    protected $_unitPriceTax;

    ////
    // Setters and Getters
    ////

    public function setType($type)
    {
        $this->_type = (string) $type;
    }

    public function getType()
    {
        return $this->_type;
    }

    public function setAmount($amount)
    {
        $this->_amount = (integer) $amount;
    }

    public function getAmount()
    {
        return $this->_amount;
    }

    public function setUnitPriceTotal($unitPriceTotal)
    {
        $this->_unitPriceTotal = $unitPriceTotal;
    }

    public function getUnitPriceTotal()
    {
        return $this->_unitPriceTotal;
    }

    public function setUnitPriceTax($unitPriceTax)
    {
        $this->_unitPriceTax = $unitPriceTax;
    }

    public function getUnitPriceTax()
    {
        return $this->_unitPriceTax;
    }
}