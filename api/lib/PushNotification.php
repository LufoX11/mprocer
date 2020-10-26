<?php

class PushNotification
{
    /** 
     * Get functionality by platform.
     * @param string $platform.
     * @param array $options.
     * @return object. 
     */
    public static function factory($platform, $options)
    {
        Loader::lib(array("Push/{$platform}"), true);

        return new $platform($options);
    }
}