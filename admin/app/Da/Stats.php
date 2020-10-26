<?php

/**
 * Stats data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_Stats extends Da_BaseMysql
{
    /**
     * Fetches NEW_USERS by time lapse.
     *
     * @param $serviceId integer Service ID.
     * @param $by string [day|week|month|year].
     * @return array An array of users on success; FALSE otherwise.
     */
    public function fetchNewUsers($serviceId, $by = 'day')
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        switch ($by) {
            case 'day': default:
                $by = 'DATE';
                $creationdate = date('Y-m-d', strtotime('-1 month'));
                break;

            case 'week':
                $by = 'WEEK';
                $creationdate = date('Y-m-d', strtotime('-3 month'));
                break;

            case 'month':
                $by = 'MONTH';
                $creationdate = date('Y-m-d', strtotime('-6 month'));
                break;

            case 'year':
                $by = 'YEAR';
                $creationdate = date('Y-m-d', strtotime('-1 year'));
                break;
        }

        $res = $this->query(sprintf(''
            . 'SELECT COUNT(*) total, DATE(creationdate) creationdate '
            . 'FROM users '
            . 'WHERE '
                . 'services_id = %d '
                . 'AND deviceid NOT LIKE "guest-%%" '
                . 'AND deviceid NOT LIKE "123%%" '
                . 'AND creationdate >= "%s"'
            . 'GROUP BY %s(creationdate) '
            . 'ORDER BY creationdate DESC',
            $serviceId,
            $creationdate,
            $by
        ));

        return $res;
    }

    /**
     * Fetches BY_DEVICETYPE.
     *
     * @param $serviceId integer Service ID.
     * @return array An array of device types stats on success; FALSE otherwise.
     */
    public function fetchByDevicetype($serviceId)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $res = $this->query(sprintf(''
            . 'SELECT COUNT(*) total, devicetype '
            . 'FROM users '
            . 'WHERE '
                . 'services_id = %d '
                . 'AND deviceid NOT LIKE "guest-%%" '
                . 'AND deviceid NOT LIKE "123%%" '
            . 'GROUP BY devicetype',
            $serviceId
        ));

        return $res;
    }

    /**
     * Fetches USERS_CUSTOMIZATION.
     *
     * @param $serviceId integer Service ID.
     * @return array An array with totals of users customizations on success; FALSE otherwise.
     */
    public function fetchUsersCustomization($serviceId)
    {
        Loader::mo(array('UserSetting'), true);

        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $inClause = array(
            $this->getHandler()->quote(Mo_UserSetting::WEATHER_LOCATION),
            $this->getHandler()->quote(Mo_UserSetting::RECEIVE_NEWSLETTER)
        );
        $sql = sprintf(''
            . 'SELECT COUNT(*) total, s.key, u.deviceid '
            . 'FROM users_settings s '
            . 'INNER JOIN users u ON s.users_id = u.id '
            . 'WHERE '
                . 'u.services_id = %d '
                . 'AND u.deviceid NOT LIKE "guest-%%" '
                . 'AND u.deviceid NOT LIKE "123%%" '
            . 'GROUP BY s.key '
            . 'HAVING s.key IN (%s)',
            $serviceId,
            implode(',', $inClause)
        );
        if ($res = $this->query($sql)) {
            array_walk($res, function (&$v) { unset($v['deviceid']); });
        }

        return $res;
    }

    /**
     * Fetches USERS_TOTALS.
     *
     * @param $serviceId integer Service ID.
     * @return array Summary of total of users on success; FALSE otherwise.
     */
    public function fetchUsersTotals($serviceId)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $sql = sprintf(''
            . 'SELECT COUNT(deviceid) total, "mobile" type '
            . 'FROM users '
            . 'WHERE '
                . 'services_id = %d '
                . 'AND deviceid NOT LIKE "guest-%%" '
                . 'AND deviceid NOT LIKE "123%%" '
            . 'UNION '
                . 'SELECT COUNT(deviceid) total, "web" type '
                . 'FROM users '
                . 'WHERE '
                    . 'services_id = %d '
                    . 'AND '
                    . '('
                        . 'deviceid LIKE "guest-%%" '
                        . 'OR deviceid LIKE "123%%"'
                    . ')',
            $serviceId,
            $serviceId
        );

        if ($res = $this->query($sql)) {
            $res[] = array(
                'total' => $res[0]['total'] + $res[1]['total'],
                'type' => 'total'
            );
        }

        return $res;
    }
}
