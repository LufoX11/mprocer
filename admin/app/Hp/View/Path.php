<?php

/**
 * Helper file for building elements for the front-end layer.
 */

Loader::hp(array('Base', 'Path'), true);

class Hp_View_Path extends Hp_Base
{
    /**
     * Alias of Hp_Path::getFile().
     *
     * @see Hp_Path::getFile().
     */
    public function getFile($file)
    {
        $res = Hp_Path::getFile($file);

        return $res;
    }

    /**
     * Alias of Hp_Path::getJs().
     *
     * @see Hp_Path::getJs().
     */
    public function getJs($file)
    {
        $res = Hp_Path::getJs($file);

        return $res;
    }

    /**
     * Alias of Hp_Path::getCss().
     *
     * @see Hp_Path::getCss().
     */
    public function getCss($file)
    {
        $res = Hp_Path::getCss($file);

        return $res;
    }

    /**
     * Alias of Hp_Path::getImg().
     *
     * @see Hp_Path::getImg().
     */
    public function getImg($file)
    {
        $res = Hp_Path::getImg($file);

        return $res;
    }

    /**
     * Alias of Hp_Path::getMovie().
     *
     * @see Hp_Path::getMovie().
     */
    public function getMovie($file)
    {
        $res = Hp_Path::getMovie($file);

        return $res;
    }

    /**
     * Alias of Hp_Path::getLink().
     *
     * @see Hp_Path::getLink().
     */
    public function getLink($resource = null, array $params = null, array $options = null)
    {
        $res = Hp_Path::getLink($resource, $params, $options);

        return $res;
    }
}
