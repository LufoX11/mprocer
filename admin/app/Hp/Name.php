<?php

/**
 * Helper file for getting readable names from internal ones.
 */

Loader::hp(array('Base'), true);

class Hp_Name extends Hp_Base
{
    /**
     * @var array Applications names.
     */
    protected static $_applications = array(
        'mprocer' => 'mProcer'
    );

    /**
     * Gets the application's cool name.
     *
     * @param $name string Internal name (in config file).
     * @return mixed Application cool name on success; Empty string if not found.
     */
    public static function getCoolName($name)
    {
        $res = '';
        if (array_key_exists($name, self::$_applications)) {
            $res = self::$_applications[$name];
        }

        return $res;
    }

    /**
     * Fetchs all the applications names.
     */
    public static function fetchApplicationsNames()
    {
        return self::$_applications;
    }
}
