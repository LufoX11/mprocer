<?php

/**
 * This library contains functions to access the Yandex Translator service API.
 */

require dirname(__FILE__) . '/CurlService.php';

class YandexTranslatorApiException extends Exception {}

class YandexTranslatorApi
{
    /**
     * @var array Config.
     */
    protected $_cfg = array(
        'key' => null,
        'uri' => 'https://translate.yandex.net/api/v1.5/tr.json/translate'
    );

    /**
     * @var object CURL object.
     */
    private $_curl;

    /**
     * Builds a new YandexTranslatorApi.
     *
     * @param array $options Initialization options.
     *                       'key': API key.
     * @return void.
     */
    public function __construct(array $options = null)
    {
        $this->_curl = new CurlService(array(
            CURLOPT_CONNECTTIMEOUT => 20,
            CURLOPT_USERAGENT => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
                . '(KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36',
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTPHEADER => array(
                'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Language: es-419,es;q=0.8',
                'Accept-Encoding: gzip,deflate',
                'Accept-Charset: windows-1251,utf-8;q=0.7,*;q=0.7',
                'Host: translate.yandex.net',
                'Connection: keep-alive',
            )));
        $this->_cfg['key'] = (isset($options['key']) ? $options['key'] : null);
    }

    /**
     * Retrieves the weather from a specific location.
     *
     * @param $fromLang string Source lang code.
     * @param $toLang string Target lang code.
     * @param $text string Text to translate.
     * @return mixed Translated string on success; FALSE otherwise.
     */
    public function translate($fromLang, $toLang, $text)
    {
        $res = false;
        $params = array(
            'key' => $this->_cfg['key'],
            'lang' => "{$fromLang}-{$toLang}",
            'text' => $text
        );
        try {
            if (($raw = $this->_curl->exec($this->_cfg['uri'], $params)) && $raw = json_decode($raw, true)) {
                $res = current($raw['text']);
            } else {
                throw new YandexTranslatorApiException('Connection error.');
            }
        } catch (CurlServiceException $e) {
            throw new YandexTranslatorApiException($e);
        }

        return $res;
    }
}
