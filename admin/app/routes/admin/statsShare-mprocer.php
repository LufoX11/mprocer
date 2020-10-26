<?php

/**
 * Renders the application interface for Stats.
 */

$Slim->map('/stats/mprocer/share/:service', function ($service) use ($Slim)
{
    Loader::mo(array('StatMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($Slim->config('appCfg'));
    $user = $Mo_AdminUsersMapper->generateSpecialSession(array(
        'name' => 'Externo',
        'service' => $service,
        'application' => 'mprocer',
        'status' => Mo_AdminUser::STATUS_ENABLED
    ));
    $appCfg = $imaatAppCfg['applications'][$user->application];

    $Mo_StatMapper = new Mo_StatMapper($appCfg);
    $raw = $Mo_StatMapper->fetchAll();

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

    View_RendererMobile::setLayout('externalLayout.tpl');
    View_RendererMobile::setHeader(null);
    $Slim->render(
        'statsShare-mprocerContent.tpl',
        array(
            'user' => $user,
            'stats' => $stats,
            'service' => $service,
            'isGuestUser' => true
        )
    );
})->via('GET', 'POST')->name('stats-mprocer');
