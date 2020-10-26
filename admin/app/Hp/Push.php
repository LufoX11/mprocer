<?php

/**
 * Helper file for getting readable names from internal ones.
 */

Loader::hp(array('Base'), true);
Loader::mo(array('PushDataMapper'), true);
Loader::lib(array('PushNotification'), true);

class Hp_Push extends Hp_Base
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
     * Sends a push notification to all specified devices in DB.
     *
     * @link https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html
     * @param array $data Data to be sent (you can add custom fields to be sent):
     *                    array(
     *
     *                        // Required fields for All devices
     *                        'message' => string Notification description.
     *                                            // iOS: If this property is included,
     *                                            // the system displays a standard alert.
     *                                            // If you specify a string, it becomes the message text of an alert
     *                                            // with two buttons: Close and View.
     *                                            // If the user taps View, the app is launched.
     *
     *                        // Required fields for Android
     *                        'title' => string Title for the notification.
     *
     *                        // Additional fields for iOS
     *                        'badge' => integer The number to display as the badge of the app icon.
     *                                           // If this property is absent, the badge is not changed.
     *                                           // To remove the badge, set the value of this property to 0.
     *                        'sound' => string The name of a sound file in the app bundle.
     *                                          // The sound in this file is played as an alert.
     *                                          // If the sound file doesn't exist or default is specified as the value,
     *                                          // the default alert sound is played.
     *                    )
     * @param options array Sending options:
     *                      array(
     *                          'platform' => string [ALL|Android|iOS] Device platforms to send the message.
     *                          'emails' => array User's Emails to send the notification.
     *                      )
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function send(array $data, array $options = array())
    {
        // Defaults
        $options = array_merge(
            array(
                'platform' => 'ALL',
                'emails' => array()
            ),
            $options
        );
        $Mo_PushDataMapper = new Mo_PushDataMapper($this->_cfg);
        $res = false;

        // Android
        if ($options['platform'] == 'ALL' || $options['platform'] == 'Android') {
            $pushData = $Mo_PushDataMapper->fetchAllByPlatform('Android', $options['emails']);
            if ($pushData) {
                foreach (array_chunk($pushData, 1000, true) as $push) {
                    $registrationIds = array();
                    foreach ($push as $k => $v) {
                        $registrationIds[] = $v->registrationId;
                    }
                    if ($registrationIds) {
                        $pushAndroid = PushNotification::factory('GoogleGcm', array(
                            'api_key' => $this->_cfg['push'][$this->_service]['google']['api_key']
                        ));
                        $res = $pushAndroid->send(array(
                            'data' => $data,
                            'registration_ids' => $registrationIds
                        ));
                    }
                }
            }
        }

        // iOS
        if ($options['platform'] == 'ALL' || $options['platform'] == 'iOS') {
            $pushData = $Mo_PushDataMapper->fetchAllByPlatform('Ios', $options['emails']);
            if ($pushData) {
                foreach ($pushData as $push) {
                    $pushIos = PushNotification::factory('iOs', array(
                        'cert' => "{$this->_cfg['paths']['fs']['root']}/app/certificates/push/ios/"
                            . "{$this->_service}/{$this->_cfg['push'][$this->_service]['ios']['cert']}",
                        'passphrase' => $this->_cfg['push'][$this->_service]['ios']['passphrase']
                    ));
                    $res = $pushIos->send(array(
                        'data' => $data,
                        'pushData' => $push
                    ));
                }
            }
        }

        return $res;
    }
}
