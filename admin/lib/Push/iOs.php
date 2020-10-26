<?php

require_once dirname(__FILE__) . '/base.php';

class IosErrorException extends Exception {}
class Ios implements PushBase
{
    /**
     * @var string.
     */
    protected $_apnsHost = 'gateway.push.apple.com';

    /**
     * @var string.
     */
    protected $_apnsPort = 2195;

    /** 
     * @var object APNS object. 
     */
    private $_apns;

    /** 
     * Build a new PushiOs.
     *
     * @param array $options Initialization options.
     *                      'token': token for iOs Push.
     *                      'message': what to send.
     * @return void.
     */
    public function __construct($options)
    {
        $streamContext = stream_context_create(
            array(
                'ssl' => array(
                    'local_cert' => $options['cert'],
                    'passphrase' => $options['passphrase']
                )
            )
        );

        try {
            $this->_apns = stream_socket_client(
                'ssl://' . $this->_apnsHost . ':' . $this->_apnsPort,
                $errorCode,
                $errorString,
                10,
                STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT,
                $streamContext
            );
        } catch (Exception $e) {
            error_log($e);
            throw new IosErrorException($e);
        }
        if ($errorCode) {
            error_log($errorCode . ' - ' . $errorString);
            throw new IosErrorException($errorString, $errorCode);
        }
        if (!$this->_apns) {
            throw new IosErrorException('Connection to gateway FAILED.');
        }

        // Ensure that blocking is disabled
        stream_set_blocking($this->_apns, 0);
    }

    /** 
     * Sends the message.
     *
     * @link https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html
     * @link http://codular.com/sending-ios-push-notifications-with-php
     * @param array $params.
     *              array(
     *                  data => array(
     *                      'message' => string Message for the notification.
     *                                          // If this property is included, the system displays a standard alert.
     *                                          // If you specify a string, it becomes the message text of an alert
     *                                          // with two buttons: Close and View.
     *                                          // If the user taps View, the app is launched.
     *                      'badge' => integer The number to display as the badge of the app icon.
     *                                         // If this property is absent, the badge is not changed.
     *                                         // To remove the badge, set the value of this property to 0.
     *                      'sound' => string The name of a sound file in the app bundle.
     *                                        // The sound in this file is played as an alert.
     *                                        // If the sound file doesn't exist or default is specified as the value,
     *                                        // the default alert sound is played.
     *                      ... // Custom data
     *                  ),
     *                  pushData => Mo_PushData object.
     *              )
     * @return void.
     */
    public function send(array $params)
    {
        $data = array_merge(
            array(
                'alert' => mb_strimwidth($params['data']['message'], 0, 80, '...'),
                'badge' => 1,
                'sound' => 'default'
            ),
            $params['data']
        );
        unset($data['message']);
        $payload = json_encode([ 'aps' => $data ]);

        try {
            $inner =

                // Device Token
                chr(1) // Id of 1
                . pack('n', 32) // The length (32 bytes)
                . pack('H*', str_replace(' ', '', $params['pushData']->registrationId)) // Hex String of Device Token

                // Payload
                . chr(2) // Id of 2
                . pack('n', strlen($payload)) // Length of the payload
                . $payload // Payload that we're sending

                // Notification Identifier
                . chr(3) // Id of 3
                . pack('n', 4) // Length of integer is 4
                . pack('N', $params['pushData']->id) // Pack notifier to length of 4

                // Expiration Date
                // . chr(4) // Id of 4
                // . pack('n', 4) // Length of 4
                // . pack('N', time() + 259200) // Set expiration to 3 day from now

                // Priority
                . chr(5) // Id of 5
                . pack('n', 1) // Length of 1
                . chr(10); // Send immediately

            $apnsMessage = 

                // Sending command
                chr(2)
                . pack('N', strlen($inner))
                . $inner;

            fwrite($this->_apns, $apnsMessage, strlen($apnsMessage));
            fclose($this->_apns);
        } catch (Exception $e) {
            error_log($e);
            throw new IosErrorException($e);
        }
    }
}
