<?php

/**
 * Helper file for parsing strings.
 */

Loader::hp(array('Base'), true);

class Hp_String extends Hp_Base
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
     * Adds miles separator and decimals to a number.
     *
     * @param $str mixed String or Number to prettify.
     * @return string Prettified number.
     */
    public static function numPrettifier($str)
    {
        $res = preg_replace('/\B(?=(\d{3})+(?!\d))/', '.', strtr($str, '.', ','));

        return $res;
    }
}
