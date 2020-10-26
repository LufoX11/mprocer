<?php

/**
 * Helper file for template for processing strings.
 */

Loader::hp(array('Base', 'DateTime'), true);

class Hp_View_DateTime extends Hp_Base
{
    /**
     * Alias of Hp_DateTime::secondsToTime().
     *
     * @see Hp_DateTime::secondsToTime().
     */
    public function secondsToTime($seconds, $format = null, array $options = array())
    {
        $res = Hp_DateTime::secondsToTime($seconds, $format, $options);

        return $res;
    }

    /**
     * Alias of Hp_DateTime::toIso().
     *
     * @see Hp_DateTime::toIso().
     */
    public function toIso($str)
    {
        $res = Hp_DateTime::toIso($str);

        return $res;
    }
}
