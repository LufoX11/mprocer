<?php

/**
 * Renders the application interface for Stats.
 */

$Slim->map('/stats/mprocer', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_STATS),
    function () use ($Slim)
{
    Loader::hp(array('Path'), true);
    Loader::mo(array('StatMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $Hp_Path = new Hp_Path($imaatAppCfg);
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    $Mo_StatMapper = new Mo_StatMapper($appCfg);
    $raw = $Mo_StatMapper->fetchAll();

    if (($service = $_SESSION['AdminUser']->aclGetServiceAccess()) === 'all') {
        $service = ($Slim->request()->post('service') ?
            $Slim->request()->post('service') : current($appCfg['main']['services']));
        $services = array();
        foreach ($appCfg['main']['services'] as $v) {
            $services[$v] = $appCfg['services'][$v]['title'];
        }
    } else {
        $services = array($service => $appCfg['services'][$service]['title']);
    }

    // Format data
    $stats = array();
    foreach ($raw as $tK => $tV) { // users-total, ...
        foreach ($tV as $sK => $sV) { // laarena, ...
            $rawData = $sV->data;
            switch ($sV->type) {
                case Mo_Stat::NEW_USERS:
                    $data = array();
                    foreach ($rawData as $byK => $byV) { // byDay, byMonth, ...
                        foreach ($byV as $k => $v) { // data rows with: total, creationdate
                            $data[$byK][] = array(
                                date('n/j/Y', strtotime($v->creationdate)),
                                (int) $v->total
                            );
                        }
                        if (isset($data[$byK])) {
                            $data[$byK] = array_reverse($data[$byK]);
                        }
                    }
                    $stats[$sV->type][$sV->service] = $data;
                    break;

                case Mo_Stat::BY_DEVICETYPE:
                    $data = array();
                    foreach ($rawData as $k => $v) {
                        $deviceName = ucwords(strtr(Mo_Client::getDeviceTypeName($v->devicetype), '_', ' '));
                        $data[] = array(
                            "{$deviceName} ({$v->total})",
                            (int) $v->total
                        );
                    }
                    $stats[$sV->type][$sV->service] = $data;
                    break;

                case Mo_Stat::USERS_TOTALS:
                    $data = array();
                    foreach ($rawData as $k => $v) {
                        $data[] = array(
                            ucfirst($v->type) . " ({$v->total})",
                            (int) $v->total
                        );
                    }
                    $stats[$sV->type][$sV->service] = $data;
                    break;
            }
        }
    }

    $Slim->render(
        'stats-mprocerContent.tpl',
        array(
            'stats' => $stats,
            'publicLink' => $Hp_Path->getLink("stats/mprocer/share/{$service}", array(), 
                array('base' => $imaatAppCfg['paths']['web']['site']['admin'])),
            'service' => $service,
            'services' => $services
        )
    );
})->via('GET', 'POST')->name('stats-mprocer');
