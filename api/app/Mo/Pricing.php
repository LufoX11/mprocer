<?php

/**
 * Pricing object model.
 */

Loader::mo(array('Base'), true);

class Mo_Pricing extends Mo_Base
{
    /**
     * @var float Total.
     */
    protected $_total;

    /**
     * @var float Tax.
     */
    protected $_tax;

    /**
     * @var float Agent Fee.
     */
    protected $_agentFee;

    /**
     * @var float Original.
     */
    protected $_original;

    ////
    // Setters and Getters
    ////

    public function setTotal($total)
    {
        $this->_total = (float) $total;
    }

    public function getTotal()
    {
        return $this->_total;
    }

    public function setTax($tax)
    {
        $this->_tax = (float) $tax;
    }

    public function getTax()
    {
        return $this->_tax;
    }

    public function setAgentFee($agentFee)
    {
        $this->_agentFee = $agentFee;
    }

    public function getAgentFee()
    {
        return $this->_agentFee;
    }

    public function setOriginal($original)
    {
        $this->_original = $original;
    }

    public function getOriginal()
    {
        return $this->_original;
    }
}