<?php

/**
 * Helper file with image functionalities.
 */

Loader::hp(array('Base', 'View'), true);
Loader::vendor(array('WideImage/WideImage'), true);

class Hp_Image extends Hp_Base
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
     * Save an uploaded image.
     * 
     * @param  $_FILES $file
     * @param  string  $to
     * @return array
     */
    public function generateByUpload($file, $to)
    {
        $from = $file['tmp_name'];
        $imgInfo = pathinfo($file['name']);
        $error = false;
        $message = '';

        // Validations
        if ($file['error']) {
            $error = true;
            $message = Utils::escape('No se pudo guardar la imágen.');
        } else if ($file['size'] > 2097152) { // 2 MB
            $error = true;
            $message = Utils::escape('Solo se admiten imágenes de hasta 2 MB.');
        } else if (!WideImage::isValidFormat($file['name'])) {
            $error = true;
            $message = Utils::escape('Solo se admiten formatos: '
                . implode(', ', WideImage::$supportedFormats));
        }

        if ($error) {
            return array(
                'status' => 'error',
                'message' =>  $message
            );
        } else {
            return $this->generate($from, $to, $imgInfo['filename']);
        }
    }

    /**
     * Save an image by a given url.
     * 
     * @param  string $url
     * @param  string $to
     * @return array
     */
    public function generateByUrl($from, $to)
    {
        $imgInfo = pathinfo($from);
        $error = false;
        $size = null;
        $message = '';

        // Get size
        $header = get_headers($from);
        foreach ($header as $head) {
            if (preg_match('/Content-Length: /', $head)) {
                $size = (int) trim(substr($head, 15));
            }
        }

        // Validations
        if (!is_array($imgInfo) || !isset($imgInfo['extension'])) {
            $error = true;
            $message = Utils::escape('No se pudo guardar la imágen.');
        } else if (is_null($size) || $size > 2097152) { // 2 MB
            $error = true;
            $message = Utils::escape('Solo se admiten imágenes de hasta 2 MB.');
        } else if (!WideImage::isValidFormat($from)) {
            $error = true;
            $message = Utils::escape('Solo se admiten formatos: '
                . implode(', ', WideImage::$supportedFormats));
        }

        if ($error) {
            return array(
                'status' => 'error',
                'message' =>  $message
            );
        } else {
            return $this->generate($from, $to, $imgInfo['filename']);
        }
    }

    /**
     * Save an image.
     * 
     * @param  string $from
     * @param  string $to
     * @param  string $filename
     * @return array
     */
    public function generate($from, $to, $filename)
    {
        // Save Medium image
        $imageHandler = WideImage::load($from);
        if ($imageHandler->getHeight() > $imageHandler->getWidth()) {
            $imageHandler
                ->resize(81)
                ->crop('center', 'center', 80, 80)
                ->saveToFile("{$to}/{$filename}-md.jpg");
        } else {
            $imageHandler
                ->resize(null, 81)
                ->crop('center', 'center', 80, 80)
                ->saveToFile("{$to}/{$filename}-md.jpg");
        }

        // Save large image
        $imageHandler = WideImage::load($from);
        if ($imageHandler->getHeight() > 280) {
            $imageHandler = $imageHandler->resize(null, 280);
        }
        if ($imageHandler->getWidth() > 280) {
            $imageHandler = $imageHandler->resize(280);
        }
        $imageHandler->saveToFile("{$to}/{$filename}-bg.jpg");
        
        // Save original
        $imageHandler = WideImage::load($from);
        $imageHandler
            ->saveToFile("{$to}/{$filename}-og.jpg", 90);

        if (file_exists("{$to}/{$filename}-md.jpg")
                && file_exists("{$to}/{$filename}-bg.jpg")
                && file_exists("{$to}/{$filename}-og.jpg")) {
            $error = false;
            $message = Utils::escape('Se guardó la imágen.');
            $filename = "{$filename}-bg.jpg";
            $image = "{$to}/{$filename}";
            $Hp_View = new Hp_View(array('Path'), $this->_cfg);
            $url = $Hp_View->getImg("services://{$this->_service}/$filename");
        } else {
            $error = true;
            $message = Utils::escape('No se pudo guardar la imágen.');
            $image = null;
            $url = '';
        }

        return array(
            'status' => ($error) ? 'error' : 'success',
            'message' => $message,
            'image' => $image,
            'url' => $url
        );
    }
}
