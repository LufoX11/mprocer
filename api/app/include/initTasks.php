<?php

/**
 * Init file for tasks.
 */

$rootDir = realpath(__DIR__ . '/../../');
require "{$rootDir}/lib/Loader.php";

/**
 * General exception handler.
 */
set_exception_handler(function ($exception) {

    Loader::lib(array('Email'), true);

    $cfg = parse_ini_file(dirname(__FILE__) . '/../../app/config/main.ini', true);
    $fileName = $exception->getFile();
    $receivers = explode('|', $cfg['alerts']['tasks']['toEmail']);
    array_walk($receivers, function (&$v) { $v = array($v); });

    // Send an alert email
    $Email = new Email(array(
        'sendingSettings' => $cfg['emails']
    ));
    $res = $Email->send(array(
        'from' => array(
            $cfg['alerts']['tasks']['fromEmail'],
            $cfg['alerts']['tasks']['fromName']
        ),
        'to' => $receivers,
        'subject' => "MPROCER_TASK_ALERT: Uncaught Exception in: {$fileName}",
        'htmlMessage' => $exception));
});

require "{$rootDir}/tasks/Task.php";
