<?php

/**
 * Helper file for translating strings.
 */

Loader::hp(array('Base'), true);

class Hp_Translation extends Hp_Base
{
    /**
     * Translates a string.
     *
     * @param $str string String to translate.
     * @return string The translated string.
     */
    public static function translate($str)
    {
        return $str;
    }
}
