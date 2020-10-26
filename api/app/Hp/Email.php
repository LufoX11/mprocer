<?php

/**
 * Helper file for emails related functions.
 */

Loader::hp(array('Base'), true);
Loader::lib(array('Email'), true);

class Hp_Email extends Hp_Base
{
    /**
     * Sends a task alert.
     *
     * @param $subject string Email subject.
     * @param $body string Email body.
     * @return boolean TRUE if the email was successfully sent; FALSE otherwise.
     */
    public function sendTaskAlert($subject, $body)
    {
        $to = explode('|', $this->_cfg['main']['alerts']['tasks']['toEmail']);
        array_walk($to, function (&$v) { $v = array($v); });
        $from = array(
            $this->_cfg['main']['alerts']['tasks']['fromEmail'],
            $this->_cfg['main']['alerts']['tasks']['fromName']
        );
        $res = $this->_send($subject, $body, $from, $to);

        return $res;
    }

    /**
     * Sends a partner alert.
     *
     * @param $subject string Email subject.
     * @param $body string Email body.
     * @return boolean TRUE if the email was successfully sent; FALSE otherwise.
     */
    public function sendPartnerAlert($subject, $body)
    {
        $to = explode('|', $this->_cfg['main']['alerts']['partner']['toEmail']);
        array_walk($to, function (&$v) { $v = array($v); });
        $from = array(
            $this->_cfg['main']['alerts']['partner']['fromEmail'],
            $this->_cfg['main']['alerts']['partner']['fromName']
        );
        $res = $this->_send($subject, $body, $from, $to);

        return $res;
    }

    /**
     * Sends a Contact alert.
     *
     * @param $subject string Email subject.
     * @param $body string Email body.
     * @param $to array Receiver's emails.
     * @return boolean TRUE if the email was successfully sent; FALSE otherwise.
     */
    public function sendContact($subject, $body, array $to)
    {
        $emails = $this->_cfg['emails'][$this->_cfg['serviceName']]['contact'];
        $from = array($emails['fromEmail'], $emails['fromName']);
        $res = $this->_send($subject, $body, $from, $to);

        return $res;
    }

    /**
     * Sends a log report.
     *
     * @param $subject string Email subject.
     * @param $body string Email body.
     * @param $to array Receiver's emails.
     * @return boolean TRUE if the email was successfully sent; FALSE otherwise.
     */
    public function sendLogReport($subject, $body, array $to)
    {
        $emails = $this->_cfg['main']['alerts']['tasks'];
        $from = array($emails['fromEmail'], $emails['fromName']);
        $res = $this->_send($subject, $body, $from, $to);

        return $res;
    }

    /**
     * Sends the email.
     *
     * @param $subject string Email's subject.
     * @param $body string Email's body.
     * @param $from array Senders.
     * @param $to array Receivers.
     * @return boolean TRUE if the email was successfully sent; FALSE otherwise.
     */
    protected function _send($subject, $body, array $from, array $to)
    {
        $Email = new Email(array(
            'sendingSettings' => $this->_cfg['main']['emails']
        ));
        $res = $Email->send(array(
            'from' => $from,
            'to' => $to,
            'subject' => $subject,
            'htmlMessage' => $body));

        return $res;
    }
}
