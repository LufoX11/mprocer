<?php

/**
 * Emails library.
 */

Loader::vendor(array('PHPMailer/class.phpmailer', 'Html2Text/class.html2text'), true);

class Email
{
    /**
     * @var array Domains that are whitelisted as valid email domains (most popular).
     */
    protected $_whitelistDomains = array();

    /**
     * @var array Blacklisted emails.
     */
    protected $_blacklist = array();

    /**
     * @var array Email names containing these words will be filtered.
     */
    protected $_exclude = array();

    /**
     * @var array Sending engine settings.
     */
    protected $_sendingSettings = array(
        'driver' => 'sendmail', // [sendmail|smtp]
        'smtp' => array(
            'host' => 'localhost',
            'port' => 1025,
            'username' => '',
            'password' => '',
            'timeout' => 5
        )
    );

    /**
     * Builds a new email object.
     *
     * @param $options array Options for the object:
     *                       'whitelistDomains' array Whitelisted domains.
     *                       'blacklist' array Emails blacklist.
     *                       'exclude' array Words exclusion list.
     *                       'sendingSettings' array Sending engine settings.
     * @return void.
     */
    public function __construct(array $options = null)
    {
        if (isset($options['whitelistDomains'])) {
            $this->setWhitelistDomains($options['whitelistDomains']);
        }
        if (isset($options['blacklist'])) {
            $this->setBlacklist($options['blacklist']);
        }
        if (isset($options['exclude'])) {
            $this->setExclude($options['exclude']);
        }
        if (isset($options['sendingSettings'])) {
            $this->setSendingEngine($options['sendingSettings']);
        }
    }

    /**
     * Sends an email.
     *
     * @param $args array Data for the sending:
     *                    'from': (array) Sender's email and name.
     *                        array('rod@example.com', 'Optional name Rod')
     *                    'to': (array) Receiver's emails and names.
     *                        array(
     *                            array('jay@example.com', 'Optional name Jay'),
     *                            array('roy@example.com', 'Optional name Roy')
     *                            ...
     *                        )
     *                    'subject': (string) Mail subject.
     *                    'htmlMessage': (string) Mail body as HTML.
     *                    'plainMessage': (string) Mail body as plain text (will convert htmlMessage by default).
     *                    'attachments': (array) Absolute paths and names to attachments.
     *                        array(
     *                            array('/tmp/file1', 'Optional file name 1'),
     *                            array('/tmp/file2', 'Optional file name 2'),
     *                            ...
     *                        )
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function send(array $args)
    {
        // Defaults
        $args = array_merge(
            array(
                'from' => array('root@mailer'),
                'subject' => '',
                'htmlMessage' => ''
            ),
            $args
        );

        $html2text = new html2text($args['htmlMessage']);
        $PHPMailer = new PHPMailer();
        $PHPMailer->CharSet = 'UTF-8';

        // Engine
        switch ($this->_sendingSettings['driver']) {
            case 'sendmail': default:
                $PHPMailer->IsSendmail();
                break;

            case 'smtp':
                $PHPMailer->IsSMTP();
                $PHPMailer->Host = $this->_sendingSettings['smtp']['host'];
                $PHPMailer->Port = $this->_sendingSettings['smtp']['port'];
                $PHPMailer->Timeout = $this->_sendingSettings['smtp']['timeout'];
                if ($this->_sendingSettings['smtp']['username']) {
                    $PHPMailer->SMTPAuth = true;
                    $PHPMailer->Username = $this->_sendingSettings['smtp']['username'];
                    $PHPMailer->Password = $this->_sendingSettings['smtp']['password'];
                }
        }

        // Set data (from, to, subject, body & attachments)
        $PHPMailer->SetFrom(
            (isset($args['from'][0]) ? $args['from'][0] : 'root@localhost'),
            (isset($args['from'][1]) ? $args['from'][1] : ''));
        if (is_array(current($args['to']))) {
            foreach ($args['to'] as $v) {
                $PHPMailer->AddAddress($v[0], (isset($v[1]) ? $v[1] : ''));
            }
        } else {
            $PHPMailer->AddAddress($args['to'][0], (isset($args['to'][1]) ? $args['to'][1] : ''));
        }
        $PHPMailer->Subject = '=?utf-8?b?' . base64_encode($args['subject']) . '?=';
        $PHPMailer->MsgHTML($args['htmlMessage']);
        $PHPMailer->AltBody = $html2text->get_text();
        if (isset($args['attachments'])) {
            if (is_array(current($args['attachments']))) {
                foreach ($args['attachments'] as $v) {
                    $PHPMailer->AddAttachment($v[0], (isset($v[1]) ? $v[1] : ''));
                }
            } else {
                $PHPMailer->AddAttachment($args['attachments'][0],
                    (isset($args['attachments'][1]) ? $args['attachments'][1] : ''));
            }
        }

        // Send email
        if (!$res = $PHPMailer->Send()) {
            error_log("Mailer error: {$PHPMailer->ErrorInfo}");
        }

        return $res;
    }

    /**
     * Validates email directions.
     *
     * @param $email string Email to validate.
     * @param $strict boolean Domain validity check.
     * @return boolean TRUE if valid; FALSE otherwise.
     */
    public function validateEmail($email, $strict = true)
    {
        $res = (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
        if ($res && $strict) {
            list($name, $domain) = explode('@', $email);

            // Check against blacklist, exclusion list and domain validation
            $res = !$this->isBlacklisted($email)
                && !$this->shouldBeExcluded($email)
                && $this->isValidDomain($domain);
        }

        return $res;
    }

    /**
     * Tells whether the domain has the required MX record.
     *
     * @param $domain string Domain to validate.
     * @return boolean TRUE if the domain is valid; FALSE otherwise.
     */
    public function isValidDomain($domain)
    {
        $res = (in_array($domain, $this->_whitelistDomains) || checkdnsrr($domain, 'MX'));

        return $res;
    }

    /**
     * Tells whether the email is in the blacklist.
     *
     * @param $email string Email to validate.
     * @return boolean TRUE if it's in the blacklist; FALSE otherwise.
     */
    public function isBlacklisted($email)
    {
        $res = in_array($email, $this->_blacklist);

        return $res;
    }

    /**
     * Tells whether the email has excluded words.
     *
     * @param $email string Email to validate.
     * @return boolean TRUE if it contains exclusion words; FALSE otherwise.
     */
    public function shouldBeExcluded($email)
    {
        $res = false;
        foreach ($this->_exclude as $v) {
            if ($res = (stripos($email, $v) !== false)) {
                break;
            }
        }

        return $res;
    }

    ////
    // Setters and Getters from now on.
    ////

    /**
     * Sets the whitelist for domains.
     *
     * @param $domains array Domains list.
     * @return this.
     */
    public function setWhitelistDomains(array $domains)
    {
        $this->_whitelistDomains = $domains;

        return $this;
    }

    /**
     * Sets the blacklist of emails.
     *
     * @param $blacklist array Blacklist of emails.
     * @return this.
     */
    public function setBlacklist(array $emails)
    {
        $this->_blacklist = $emails;

        return $this;
    }

    /**
     * Sets the words exclusion list.
     *
     * @param $exclude array Exclusion list.
     * @return this.
     */
    public function setExclude(array $words)
    {
        $this->_exclude = $words;

        return $this;
    }

    /**
     * Sets the sending engine settings.
     *
     * @param $settings array Engine settings.
     * @return this.
     */
    public function setSendingEngine(array $settings)
    {
        $this->_sendingSettings = array_merge($this->_sendingSettings, $settings);

        return $this;
    }
}
