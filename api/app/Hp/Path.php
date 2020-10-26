<?php

/**
 * Helper file for building elements for the front-end layer.
 */

Loader::hp(array('Base'), true);

class Hp_Path extends Hp_Base
{
    /**
     * Builds a new Hp_View_Path object.
     * Important: We force to pass the config data because it's required for this helper to work properly.
     *
     * @param $cfg array Configuration required by the Helper.
     * @return void.
     */
    public function __construct(array $cfg)
    {
        parent::__construct($cfg);
    }

    /**
     * Returns the URL to download a file.
     *
     * @param $file string File name (without path).
     * @return string File path.
     */
    public function getFile($file)
    {
        $path = $this->_cfg['paths']['web']['static']['files'];
        $version = $this->_cfg['front']['versioning']['platform']
            . $this->_cfg['front']['versioning']['files'];
        $res = "{$path}/{$file}?{$version}";

        return $res;
    }

    /**
     * Returns the URL to load a Javascript file.
     *
     * @param $file string Javascript file name (without path).
     * @return string Javascript file path.
     */
    public function getJs($file)
    {
        $path = $this->_cfg['paths']['web']['static']['js'];
        $version = $this->_cfg['front']['versioning']['platform']
            . $this->_cfg['front']['versioning']['javascript'];
        $res = "{$path}/{$file}?{$version}";

        return $res;
    }

    /**
     * Returns the URL to load a CSS file.
     *
     * @param $file string CSS file name (without path).
     * @return string CSS file path.
     */
    public function getCss($file)
    {
        $path = $this->_cfg['paths']['web']['static']['css'];
        $version = $this->_cfg['front']['versioning']['platform']
            . $this->_cfg['front']['versioning']['css'];
        $res = "{$path}/{$file}?{$version}";

        return $res;
    }

    /**
     * Returns the URL to load an IMAGE file.
     *
     * @param $file string Image file name (without path).
     * @return string Image file path.
     */
    public function getImg($file)
    {
        $path = "{$this->_cfg['paths']['web']['static']['img']}/white";
        if (stripos($file, 'local://') === 0) {
            $file = str_ireplace('local://', '', $file);
            $path = $this->_cfg['paths']['web']['static']['img'];
        } else if (stripos($file, 'services://') === 0) {
            $file = str_ireplace('services://', '', $file);
            $path = "{$this->_cfg['paths']['web']['static']['img']}/services";
        } else if (stripos($file, 'site://') === 0) {
            $file = str_ireplace('site://', '', $file);
            $path = "{$this->_cfg['paths']['web']['static']['img']}/site";
        }
        $file = str_ireplace(' ', '%20', $file);
        $version = $this->_cfg['front']['versioning']['platform']
            . $this->_cfg['front']['versioning']['images'];
        $res = "{$path}/{$file}?{$version}";

        return $res;
    }

    /**
     * Returns the URL to a Movie file.
     *
     * @param $file string Movie file name (without path or with relative path).
     * @return string Movie file path.
     */
    public function getMovie($file)
    {
        $path = $this->_cfg['paths']['web']['static']['movies'];
        $version = $this->_cfg['front']['versioning']['platform']
            . $this->_cfg['front']['versioning']['movies'];
        $res = "{$path}/{$file}?{$version}";

        return $res;
    }

    /**
     * Builds an absolute link to the specified resource.
     *
     * @param $resource string Final relative path / resource for the link.
     * @param $params array Array of parameters for the resource.
     * @param $options array Special options.
     *                       'base': A custom base path for the resource.
     * @return string Generated link.
     */
    public function getLink($resource = null, array $params = null, array $options = null)
    {
        $base = (isset($this->_cfg['paths']['web']['site']['base']) ?
            $this->_cfg['paths']['web']['site']['base'] : '');

        // Options: Custom base
        if (isset($options['base'])) {
            $base = $options['base'];
        }

        $res = ''
            . $base // Domain
            . ($resource ? "/{$resource}" : '/') // Resource
            . ($params ? '?' . http_build_query($params) : ''); // Params

        // Replace double slashes
        $res = preg_replace('@^([a-zA-Z]+:/)+(.*)$@', '$1/$2', preg_replace('@(/)+@', '/', $res));

        return $res;
    }
}
