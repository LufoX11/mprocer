<?php

/**
 * Log mapper.
 */

Loader::mo(array('Log'), true);

class Mo_LogMapper extends Mo_Abstract
{
    /**
     * @var string Current service name.
     */
    protected $_service;

    /**
     * @var array A collection of Log data object.
     */
    protected static $_log = array();

    /**
     * @See Mo_Abstract
     */
    public function __construct(array $cfg, array $options = null)
    {
        parent::__construct($cfg);
        if (isset($options['service'])) {
            $this->_service = $options['service'];
        }
    }

    /** 
     * Send report via email.
     *
     * @param $log array A collection of Log objects.
     * @param $email string "To" email.
     * @return boolean.
     */
    public function sendReport(array $log, $email)
    {
        Loader::hp(array('Email'), true);

        $report = '<h1>Log Report</h1>'
            . '<h3>Service</h3>'
            . $this->_service
            . '<h3>Log</h3>';
        foreach ($log as $v) {
            $report .= "<strong>[{$v->key}]</strong> {$v->value}<br />"; 
        }

        // User email
        $Hp_Email = new Hp_Email($this->_cfg);
        $res = $Hp_Email->sendLogReport('Log Report', $report, array(array($email)));

        return $res;
    }
}
