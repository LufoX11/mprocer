<?php

/**
 * Helper file for getting the current service data.
 */

Loader::hp(array('Base'), true);

class Hp_Service extends Hp_Base
{
    /**
     * @var array Current service.
     */
    protected $_service;

    /**
     * Buils a new object.
     *
     * @param $cfg array Application config.
     * @param $options array You need to specify the service here: array('service' => <current_service>).
     */
    public function __construct(array $cfg = null, array $options = null)
    {
        parent::__construct($cfg, $options);
        $this->_service = $options['service'];
    }

    /**
     * Fetchs all the custom images.
     *
     * @param $options array Options:
     *     type (string) Image type. Available types are: big, medium, original.
     *     getNoImage (boolean) If we should retrieve also the "no image" picture.
     *     firstElement string The name of the file we want to retrieve as the first element.
     * @param $service string Service name.
     * @return array All the images retrieved from the service custom images directory.
     */
    public function fetchImages(array $options = null, $service = null)
    {
        Loader::Hp(array('View'), true);
        Loader::vendor(array('WideImage/WideImage'), true);

        // Defaults
        $options = (array) $options + array(
            'type' => 'big',
            'getNoImage' => true,
            'firstElement' => false
        );
        if (!$service) {
            $service = $this->_service;
        }

        $Hp_View = new Hp_View(array('Path'), $this->_cfg);
        $dir = $this->_cfg['paths']['fs']['root'] . "/public/static/img/services/{$service}";
        $res = array();
        if ($options['getNoImage']) {
            $res['Sin imágen'] = $Hp_View->getImg('local://no-image.png');
        }
        if (is_readable($dir) && $images = scandir($dir)) {
            foreach ($images as $k => $v) {
                $extension = mb_substr(basename($v), -3);
                $typeExtension = mb_substr(basename($v), -7, 3);
                switch ($options['type']) {
                    case 'big': default:
                        $isValidFormat = ($typeExtension == '-bg');
                        break;

                    case 'medium':
                        $isValidFormat = ($typeExtension == '-md');
                        break;

                    case 'original':
                        $isValidFormat = ($typeExtension == '-og');
                        break;

                }

                // Uploader will force (convert) any img.* to be img.jpg
                $isValidFormat = $isValidFormat && $extension == 'jpg';
                if (!is_dir("{$dir}/{$v}") && $isValidFormat) {
                    $res[mb_substr(basename($v), 0, strlen(basename($v)) - 7)] =
                        $Hp_View->getImg("services://{$service}/$v");
                }
            }
        }
        if ($options['firstElement']) {
            $fileName = array_shift(explode('?', basename($options['firstElement'])));
            $fileName = str_ireplace('%20', ' ', substr($fileName, 0, strlen($fileName) - 7));
            unset($res[$fileName]);
            $res = array($fileName => $options['firstElement']) + $res;
        }

        return $res;
    }

    /**
     * Fetchs all the custom files.
     *
     * @param $options array Options (No available options for now).
     * @param $service string Service name.
     * @return array All the files retrieved from the service custom files directory.
     */
    public function fetchFiles(array $options = null, $service = null)
    {
        Loader::Hp(array('View'), true);

        // Defaults
        if (!$service) {
            $service = $this->_service;
        }

        $Hp_View = new Hp_View(array('Path'), $this->_cfg);
        $dir = $this->_cfg['paths']['fs']['root'] . '/public/static/files/custom/';
        $res = array();
        if (is_readable($dir) && $files = scandir($dir)) {
            foreach ($files as $k => $v) {
                if (!is_dir("{$dir}/{$v}") && $v != 'README') {
                    $fileInfo = pathinfo($v);
                    $resources = explode('-', $fileInfo['filename']);
                    $res[$resources[0]][$resources[1]][$resources[2]] =
                        $Hp_View->getFile("custom/{$v}");
                    ksort($res[$resources[0]][$resources[1]]);
                }
            }
        }

        return $res;
    }

    /**
     * Sets the current service.
     *
     * @param $name string The active service name.
     * @return void.
     */
    public static function setService($name)
    {
        self::$_service = $name;
    }
}
