<?php

/**
 * Sends push notifications to users.
 */

////
// Options and Settings.
////

$rootDir = realpath(__DIR__ . '/../');
require "{$rootDir}/app/include/initTasks.php";

class Task_PushNotifications extends Task
{
    /**
     * {@inheritdoc}
     */
    protected $_cmdOptionsStructure =
<<<XML
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<command>
    <description>Push notifications task</description>
    <version>1.00.0000</version>
    <command>
        <name>send</name>
        <description>Sends push notifications to every user matching the specified profile</description>
        <option name="serviceName">
			<short_name>-s</short_name>
			<long_name>--serviceName</long_name>
            <description>Name of the service to work with</description>
            <action>StoreString</action>
            <default>ALL</default>
            <help_name>SERVICE_NAME</help_name>
        </option>
        <option name="platform">
			<short_name>-p</short_name>
			<long_name>--platform</long_name>
            <description>Device platform to send</description>
            <action>StoreString</action>
            <default>ALL</default>
            <choices>
                <choice>ALL</choice>
                <choice>iOS</choice>
                <choice>Android</choice>
            </choices>
            <help_name>TYPE</help_name>
        </option>
    </command>
</command>
XML;

    /**
     * @var boolean Debugging mode.
     */
    protected $_debug = false;

    /**
     * Sets default configuration.
     *
     * @return void.
     */
    public function __construct()
    {
        parent::__construct();

        $this->_debug = ($this->_appCfg['main']['framework']['mode'] == 'development');

        // Special PHP config
        setlocale(LC_NUMERIC, 'en_US');
        date_default_timezone_set('America/Argentina/Buenos_Aires');
    }

    /**
     * Starts notifications sending.
     *
     * @return void.
     */
    protected function _send()
    {
        Loader::mo(array('NewsMapper', 'PushDataMapper', 'ServiceMapper'), true);
        Loader::Hp(array('Push'), true);

        $options = $this->_cmdOptions->command->options;
        $Mo_ServiceMapper = new Mo_ServiceMapper($this->_appCfg);
        $this->_report = array_merge($this->_report, array(
            'send - Device Type selected' => $options['platform'],
            'send - News in the Tail' => 0,
            'send - News Processed' => 0,
            'send - Errors' => 0
        ));

        // Set service name(s)
        if ($options['serviceName'] != 'ALL') {
            if (!in_array($options['serviceName'], $this->_appCfg['main']['services'])) {
                $this->_cmdParser->displayError('Invalid service name.');
                die;
            }
            $services = [ $options['serviceName'] ];
        } else {
            $services = $this->_appCfg['main']['services'];
        }

        foreach ($services as $v) {

            // Set the service ID
            $Mo_Service = $Mo_ServiceMapper->findByName($v);
            $this->_appCfg['serviceId'] = $Mo_Service->id;

            $Hp_Push = new Hp_Push($this->_appCfg, array('service' => $v));
            $Mo_NewsMapper = new Mo_NewsMapper($this->_appCfg);

            // Fetch news that needs to be sent
            $news = $Mo_NewsMapper->fetchNews('push');

            if ($news) {
                $this->_report['send - News in the Tail'] = count($news);
                foreach ($news as $v) {

                    // Send push notification
                    $Hp_Push->send(
                        array(
                            'id' => $v->id,
                            'title' => $v->title,
                            'message' => $v->summary,
                            'checksum' => $v->checksum,
                            'style' => 'inbox',
                            'image' => $v->image,
                            'summaryText' => 'Hay %n% notificaciones pendientes'
                        ),
                        array(
                            'platform' => $options['platform']
                        ));

                    // Set news as notified
                    $Mo_News = $v;
                    $Mo_News->notified = true;
                    $Mo_NewsMapper->saveNews($Mo_News);
                    $this->_report['send - News Processed'] ++;
                }
            }
        }
    }
}

$pushNotifications = new Task_PushNotifications();
$pushNotifications->run();
