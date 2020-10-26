<?php

/**
 * Generates usage statistics.
 */

////
// Options and Settings.
////

$rootDir = realpath(__DIR__ . '/../');
require "{$rootDir}/app/include/initTasks.php";

class Task_Stats extends Task
{
    /**
     * {@inheritdoc}
     */
    protected $_cmdOptionsStructure =
<<<XML
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<command>
    <description>Stats generator task</description>
    <version>1.00.0000</version>
    <command>
        <name>generate</name>
        <description>Generate stats for the desired service</description>
        <option name="serviceName">
			<short_name>-s</short_name>
			<long_name>--serviceName</long_name>
            <description>Name of the service to work with</description>
            <action>StoreString</action>
            <default>ALL</default>
            <help_name>SERVICE_NAME</help_name>
        </option>
        <option name="reportType">
			<short_name>-t</short_name>
			<long_name>--reportType</long_name>
            <description>Report type</description>
            <action>StoreString</action>
            <default>ALL</default>
            <choices>
                <choice>ALL</choice>
                <choice>USERS_TOTALS</choice>
                <choice>NEW_USERS</choice>
                <choice>BY_DEVICETYPE</choice>
                <choice>USERS_CUSTOMIZATION</choice>
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
     * Generate stats for the desired service.
     *
     * @return void.
     */
    protected function _generate()
    {
        Loader::mo(array('StatMapper', 'ServiceMapper'));

        $options = $this->_cmdOptions->command->options;
        $Mo_ServiceMapper = new Mo_ServiceMapper($this->_appCfg);
        $this->_report = array_merge($this->_report, array(
            'generate - Report Type selected' => $options['reportType'],
            'generate - Processed Stats' => 0,
            'generate - Failed Stats' => 0
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

            $Mo_StatMapper = new Mo_StatMapper($this->_appCfg);

            // USERS_TOTALS
            if ($options['reportType'] == 'ALL' || $options['reportType'] == 'USERS_TOTALS') {
                $usersTotal = $Mo_StatMapper->fetchUsersTotals();
                if ($Mo_StatMapper->save($usersTotal)) {
                    $this->_report['generate - Processed Stats'] ++;
                } else {
                    $this->_report['generate - Failed Stats'] ++;
                }
            }

            // NEW_USERS
            if ($options['reportType'] == 'ALL' || $options['reportType'] == 'NEW_USERS') {
                $newUsers = $Mo_StatMapper->fetchNewUsers();
                if ($Mo_StatMapper->save($newUsers)) {
                    $this->_report['generate - Processed Stats'] ++;
                } else {
                    $this->_report['generate - Failed Stats'] ++;
                }
            }

            // BY_DEVICETYPE
            if ($options['reportType'] == 'ALL' || $options['reportType'] == 'BY_DEVICETYPE') {
                $byDevicetype = $Mo_StatMapper->fetchByDevicetype();
                if ($Mo_StatMapper->save($byDevicetype)) {
                    $this->_report['generate - Processed Stats'] ++;
                } else {
                    $this->_report['generate - Failed Stats'] ++;
                }
            }

            // USERS_CUSTOMIZATION
            if ($options['reportType'] == 'ALL' || $options['reportType'] == 'USERS_CUSTOMIZATION') {
                $usersCustomization = $Mo_StatMapper->fetchUsersCustomization();
                if ($Mo_StatMapper->save($usersCustomization)) {
                    $this->_report['generate - Processed Stats'] ++;
                } else {
                    $this->_report['generate - Failed Stats'] ++;
                }
            }
        }
    }
}

$stats = new Task_Stats();
$stats->run();
