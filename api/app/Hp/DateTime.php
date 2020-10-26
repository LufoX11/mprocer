<?php

/**
 * Helper file for date and time related functions.
 */

Loader::hp(array('Base'), true);

class Hp_DateTime extends Hp_Base
{
    /**
     * Converts number of seconds into days, hours, minutes and seconds.
     *
     * @param $seconds integer Amount of seconds for the calc.
     * @param $format string Results format. Use: $d (days), $H (hours), $i (mins), $s (secs).
     * @param $options array Options:
     *                       onlyHours boolean If TRUE, days won't be calculated
     *                                         and the amounts of hours will be increased.
     * @return mixed ARRAY or STRING if $format is passed.
     */
    public static function secondsToTime($seconds, $format = null, array $options = array())
    {
        // Defaults
        $options = array_merge(array(
            'onlyHours' => false
        ), $options);

        $secondsInAMinute = 60;
        $secondsInAnHour = 60 * $secondsInAMinute;
        $secondsInADay = 24 * $secondsInAnHour;

        // Days
        $days = floor($seconds / $secondsInADay);

        // Hours
        $hourSeconds = $seconds % $secondsInADay;
        $hours = floor($hourSeconds / $secondsInAnHour);
        if ($options['onlyHours']) {
            $hours = $hours + (24 * $days);
        }

        // Minutes
        $minuteSeconds = $hourSeconds % $secondsInAnHour;
        $minutes = floor($minuteSeconds / $secondsInAMinute);

        // Seconds
        $remainingSeconds = $minuteSeconds % $secondsInAMinute;
        $seconds = ceil($remainingSeconds);

        $res = array(
            'd' => (!$options['onlyHours'] ? (int) $days : null),
            'H' => str_pad((int) $hours, 2, '0', STR_PAD_LEFT),
            'i' => str_pad((int) $minutes, 2, '0', STR_PAD_LEFT),
            's' => str_pad((int) $seconds, 2, '0', STR_PAD_LEFT)
        );

        if ($format) {
            $res = strtr($format, array(
                '$d' => $res['d'],
                '$H' => $res['H'],
                '$i' => $res['i'],
                '$s' => $res['s']
            ));
        }

        return $res;
    }

    /**
     * Converts a date to ISO format.
     *
     * @param $str string Date (and/or) Time to convert.
     * @return string Date & Time in ISO format.
     */
    public static function toIso($str)
    {
        $res = $str;

        // Format: 2011132015 (20-11-2013 20:15)
        if (preg_match('/^[\d]{10}$/', $res)) {
            $res = DateTime::createFromFormat('dmyHi', $res)->format('Y-m-d H:i:s');
        }

        // Format: 201113 (20-11-2013)
        if (preg_match('/^[\d]{6}$/', $res)) {
            $res = DateTime::createFromFormat('dmy', $res)->format('Y-m-d');
        }

        return $res;
    }

    /**
     * Returns the date and/or time in MySQL format.
     *
     * @param $type string The MySQL format.
     * @return string.
     */
    public static function getMysqlFormat($type = 'datetime')
    {
        switch ($type) {
            case 'datetime': default:
                $res = date('Y-m-d H:i:s');
                break;
        }

        return $res;
    }
}
