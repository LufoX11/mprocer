<?php

/**
 * Global utilities.
 */

abstract class Utils
{
    /**
     * Escapes a string to correctly displaying it.
     *
     * @param $str string String to escape.
     * @param $strip_tags boolean If we should remove all HTML tags.
     * @param $nl2br boolean If we should convert all line breaks into <br /> tags.
     * @param $htmlentities boolean If we should perform an htmlentities() on the string.
     * @return string The escaped string.
     */
    public static function escape($str, $strip_tags = false, $nl2br = true, $htmlentities = true)
    {
        if (!mb_detect_encoding($str, 'UTF-8', true)) {
            $str = utf8_encode($str);
        }
        if ($strip_tags) {
            $str = strip_tags($str);
        }
        if ($htmlentities) {
            $str = htmlentities($str, ENT_QUOTES, 'UTF-8');
        }
        if ($nl2br) {
            $str = nl2br($str);
        }

        return $str;
    }

    /**
     * Sets and Gets execution time lapses.
     *
     * @param $reset boolean On FALSE, timer will start; On TRUE, timer will return the lapse and resets.
     * @return float Time lapse.
     */
    public static function time($reset = false)
    {
        static $start;

        $res = 0;
        if ($reset) {
            $res = microtime(true) - $start;
        }
        $start = microtime(true);

        return $res;
    }

    /**
     * Writes data to a file on disk.
     *
     * @param $path string File path and name.
     * @param $stream string File content.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public static function fileWrite($path, $stream = null, $mode = 'a')
    {
        $res = false;
        if ($file = @fopen($path, $mode)) {
            $res = (fwrite($file, $stream) !== false);
            fclose($file);
        } else {
            error_log("Permission denied to write in file: '{$path}'");
        }

        return $res;
    }

    /**
     * Sanitizes a string.
     *
     * @param $str string String to sanitize.
     * @param $translations array A key-value array with words/phrases translations.
     * @param $strip_tags boolean If we should remove all HTML tags.
     * @return string The sanitized string.
     */
    public static function sanitizeString($str, array $translations = array(), $strip_tags = true)
    {
        if (!mb_detect_encoding($str, 'UTF-8', true)) {
            $res = utf8_encode($str);
        }
        if ($strip_tags) {
            $res = strip_tags(trim($str), '<br>');
        } else {
            $res = strip_tags(trim($str), '<br><ul><li><p><h1><h2><h3><strong><em><table><tr><td><th>');
            $res = str_ireplace(
                array('<h1>', '</h1>', '<h2>', '</h2>'),
                array('<h3>', '</h3>', '<h3>', '</h3>'),
                $res);
        }
        $translations = array_merge($translations, array(
            '&#13;' => '', '&nbsp;' => ''
        ));
        $res = strtr($res, $translations);
        $res = preg_replace('#<([a-z][a-z0-9]*)[^>]*?(/?)>#i','<$1$2>', $res); // remove tag attributes
        $res = preg_replace('/\s+/', ' ', $res); // remove extra spaces

        // Decode html-entitied text (if encoded)
        if (preg_match("/(&[a-zA-Z]{2,7};)|(&#[0-9]{1,4};)/", $res)) {
            $res = html_entity_decode($res, ENT_NOQUOTES);
        }

        return $res;
    }

    /**
     * Gets a value from the passed string following the config convention for special values.
     * Ie.: ":key1=value1:key2=value2".
     *
     * @param $str string The config string.
     * @param $key string The key we want retrieve from.
     * @return mixed The obtained value from the string if found; FALSE otherwise.
     */
    public static function getIniOption($str, $key)
    {
        preg_match("/:{$key}=([A-Za-z0-9\._\- ]*):?/", $str, $matches);
        $res = (isset($matches[1]) ? $matches[1] : false);

        return $res;
    }

    /**
     * Removes key-value pars from ini values allowing to retrieve real data.
     *
     * @param $str string Config value to clean.
     * @return mixed The real value from string; FALSE otherwise.
     */
    public static function getIniValue($str)
    {
        $res = $str;
        if (strpos($str, ':') !== false) {
            $res = substr($str, 0, strpos($str, ':'));
        }

        return $res;
    }

    /**
     * Returns whether en email is valid or not.
     *
     * @param $email string Email to validate.
     * @return boolean TRUE if valid; FALSE otherwise.
     */
    public static function isValidEmail($email)
    {
        $res = filter_var($email, FILTER_VALIDATE_EMAIL);

        return $res;
    }

    /**
     * Sends an email.
     *
     * @param $args array Data for the sending:
     *                    'fromName': (string) Sender's name.
     *                    'fromEmail': (string) Sender's email.
     *                    'toName': (string) Receiver's name.
     *                    * 'toEmail': (string) Receiver's email.
     *                    * 'subject': (string) Mail subject.
     *                    * 'message': (string) Mail body.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public static function sendEmail(array $args)
    {
        // Defaults
        $fromName = (isset($args['fromName']) ? $args['fromName'] : null);
        $fromEmail = (isset($args['fromEmail']) ? $args['fromEmail'] : null);
        $toName = (isset($args['toName']) ? $args['toName'] : null);
        $toEmail = (self::isValidEmail($args['toEmail']) ? $args['toEmail'] : null);
        $to = ($toName && $toEmail ? "{$toName} <{$toEmail}>" : ($toEmail ? $toEmail : null));
        $subject = trim($args['subject']);
        $message = trim($args['message']);
        $headers = ''
            . "MIME-Version: 1.0 \r\n"
            . "Content-type: text/html; charset=iso-8859-1 \r\n"
            . ($fromName && $fromEmail ? "From: {$fromName} <{$fromEmail}> \r\n" : '');

        if (!$to || !$subject || !$message) {
            return false;
        }
        $res = mail($to, $subject, $message, $headers);

        return $res;
    }
}
