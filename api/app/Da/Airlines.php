<?php

/**
 * Airlines data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_Airlines extends Da_BaseMysql
{
    /**
     * @see parent.
     */
    public function __construct(array $cfg)
    {
        parent::__construct($cfg);
        $this->setDbDriver('airlines');
    }
}
