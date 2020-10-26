<?php

require_once dirname(__FILE__) . '/base.php';
require_once dirname(dirname(__FILE__)) . '/CurlService.php';

class GoogleGcm implements PushBase
{
    /**
     * @var string.
     */
    protected $apiUrl = 'https://android.googleapis.com/gcm/send';

    /** 
     * @var object CURL object. 
     */
    private $_curl;

    /** 
     * Build a new PushGoogleGcm.
     * @param array $options Initialization options.
     *                      'key': API key for Google GCM.
     *                      'data': what to send.
     *                      'send_to': send to.
     * @return void.
     */
    public function __construct($options)
    {
        $this->_curl = new CurlService(array(
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/json", 
                "Authorization:key=" . $options['api_key']
            ),
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_RETURNTRANSFER => true
        ));
    }

    /** 
     * Sends the message.
     * @param array $params.
     *              array(
     *                  data => array(
     *                      'title' => string Title for the notification.
     *                      'message' => string Message for the notification.
     *                      ... // Custom data
     *                  ),
     *                  registration_ids => array User IDs to send the notification.
     *              )
     * @return void.
     */
    public function send(array $params)
    {
        try {
            $params['data']['title'] = mb_strimwidth($params['data']['title'], 0, 40, '...');
            $params['data']['message'] = mb_strimwidth($params['data']['message'], 0, 80, '...');
            if (!$this->_curl->exec($this->apiUrl, $params, 'post')) {
                throw new Exception("Something gone wrong during the sending.");
            }
        } catch (CurlServiceException $e) {
            throw new Exception($e);
        }
    }
}
