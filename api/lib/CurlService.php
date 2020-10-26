<?php

/**
 * This library contains Curl PHP extension related functions.
 *
 * ---
 * Use:
 *
 * $curl = new CurlService(array(
 *     [Curl OPTIONS]));
 * $result = $curl->exec(URL, [PARAMS], [HTTP METHOD]);
 *
 * Ie.:
 *
 * $curl = new CurlService(array(
 *     CURLOPT_HTTPHEADER => array(
 *         'Content-type: application/json')));
 * $result = $curl->exec(
 *     'http://example.com',
 *     array(
 *         'param1' => 'value1',
 *         'param2' => 'value2'),
 *     'post');
 */

if (!class_exists('CurlService')) {
    class CurlServiceException extends Exception {}
    class CurlService
    {
        /**
         * @const Connection retries.
         */
        const RETRIES = 1;

        /**
         * @var object Curl handler.
         */
        private $_handler;

        /**
         * @var array Main config.
         */
        private $_cfg = array(
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 60,
            CURLOPT_USERAGENT => 'iMaat-1.0',
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTPHEADER => array(
                // DON'T modify the items order. Add new elements at the end.
                'Content-type: application/x-www-form-urlencoded'));

        /**
         * Initializes CurlService.
         *
         * @param $options array Additional Curl options.
         * @return void
         */
        public function __construct(array $options = null)
        {
            $this->_handler = curl_init();
            if ($options) {

                // This must be done this way to overwrite default cfg properties.
                $this->_cfg = $options + $this->_cfg;
            }
        }

        /**
         * Executes Curl and retrieves data from desired URL.
         *
         * @param $url string URL to get / set data from.
         * @param $params array Data to post.
         * @param $httpMethod string HTTP method [get|set].
         * @return mixed Obtained data.
         */
        public function exec($url, $params = array(), $httpMethod = 'get')
        {
            // Sets Curl config
            $params = $this->_buildQuery($params);
            if ($httpMethod == 'post') {
                $cfg =
                    $this->_cfg +
                    array(
                        CURLOPT_URL => $url,
                        CURLOPT_POST => true,
                        CURLOPT_POSTFIELDS => $params);
            } else {
                $cfg =
                    $this->_cfg +
                    array(
                        CURLOPT_URL => ($params ? "{$url}?{$params}" : $url));
            }

            // Executes Curl
            $attemps = self::RETRIES + 1;
            curl_setopt_array($this->_handler, $cfg);
            while ($attemps > 0) {
                $res = curl_exec($this->_handler);
                $requestInfo = curl_getinfo($this->_handler);
                if ($res === false || $requestInfo['http_code'] >= 400) {
                    $attemps --;
                } else {
                    return $res;
                }
            }

            throw new CurlServiceException(
                "URL: '{$requestInfo['url']}', HTTP_CODE: '{$requestInfo['http_code']}', RESPONSE: '{$res}'",
                $requestInfo['http_code']);
        }

        /**
         * Returns info about the last transaction. This is just a wrapper for curl_getinfo().
         *
         * @param $option integer A CURL option. See: http://php.net/manual/es/function.curl-getinfo.php
         * @return array.
         */
        public function getInfo($option = null) {

            // Note: This is done this way because if $option is set (null, false, 0) it will allways return false.
            // It looks like there's no default value for $option or at least I don't know what is it.
            if ($option) {
                $res = curl_getinfo($this->_handler, $option);
            } else {
                $res = curl_getinfo($this->_handler);
            }

            return $res;
        }

        /**
         * Builds HTTP query depending on HTTP header choosed.
         * Default is "application/x-www-form-urlencoded".
         * You can specify other in Curl option: CURLOPT_HTTPHEADER.
         *
         * @param $params array Params we want to send.
         * @return string Encoded params for sending.
         */
        private function _buildQuery(array $params = null)
        {
            $header = preg_replace('/^(.*:[ ]*)/', '', $this->_cfg[CURLOPT_HTTPHEADER][0]);
            switch ($header) {
                case 'application/x-www-form-urlencoded': default:
                    $res = http_build_query($params, null, '&');
                    break;

                case 'application/json':
                    $res = json_encode($params);
                    break;
            }

            return $res;
        }
    }
}
