<?php

/**
 * Helper file for template for processing strings.
 */

Loader::hp(array('Base', 'String', 'Translation'), true);

class Hp_View_String extends Hp_Base
{
    /**
     * Alias of Hp_String::escape().
     *
     * @see Hp_String::escape().
     */
    public function e($str, $strip_tags = false, $nl2br = true, $htmlentities = true)
    {
        $res = Hp_String::escape($str, $strip_tags, $nl2br, $htmlentities);

        return $res;
    }

    /**
     * Alias of Hp_String::translate().
     *
     * @see Hp_String::translate().
     */
    public function t($str)
    {
        $res = Hp_Translation::translate($str);

        return $res;
    }

    /**
     * Translates and escapes a string.
     *
     * @param $str string String to translate and then escape.
     * @see Hp_String::escape().
     * @see Hp_String::translate().
     * @return string Translated and escaped string.
     */
    public function te($str, $strip_tags = false, $nl2br = true, $htmlentities = true)
    {
        $res = $this->e($this->t($str), $strip_tags, $nl2br, $htmlentities);

        return $res;
    }

    /**
     * Alias of Hp_String::numPrettifier().
     *
     * @see Hp_String::numPrettifier().
     */
    public static function numPrettifier($str)
    {
        $res = Hp_String::numPrettifier($str);

        return $res;
    }
}
