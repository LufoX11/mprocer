<?php

/**
 * Stat mapper.
 */

Loader::mo(array('Abstract', 'Stat'), true);
Loader::da(array('Stats'), true);

class Mo_StatMapper extends Mo_Abstract
{
    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Stats');
        }

        return $this->_dbHandler;
    }

    /**
     * Fetches NEW_USERS.
     *
     * @return Mo_Stat.
     */
    public function fetchNewUsers()
    {
        // From Database
        $handler = $this->getDbHandler();
        $raw = array();
        $raw['byDay'] = $handler->fetchNewUsers($this->_cfg['serviceId'], 'day');
        $raw['byWeek'] = $handler->fetchNewUsers($this->_cfg['serviceId'], 'week');
        $raw['byMonth'] = $handler->fetchNewUsers($this->_cfg['serviceId'], 'month');
        $raw['byYear'] = $handler->fetchNewUsers($this->_cfg['serviceId'], 'year');
        $res = new Mo_Stat(array(
            'services_id' => $this->_cfg['serviceId'],
            'type' => Mo_Stat::NEW_USERS,
            'data' => $raw,
            'timestamp' => date('Y-m-d H:i:s')
        ));

        return $res;
    }

    /**
     * Fetches BY_DEVICETYPE.
     *
     * @return Mo_Stat.
     */
    public function fetchByDevicetype()
    {
        // From Database
        $raw = $this->getDbHandler()->fetchByDevicetype($this->_cfg['serviceId']);
        $res = new Mo_Stat(array(
            'services_id' => $this->_cfg['serviceId'],
            'type' => Mo_Stat::BY_DEVICETYPE,
            'data' => $raw,
            'timestamp' => date('Y-m-d H:i:s')
        ));

        return $res;
    }

    /**
     * Fetches USERS_CUSTOMIZATION.
     *
     * @return Mo_Stat.
     */
    public function fetchUsersCustomization()
    {
        // From Database
        $raw = $this->getDbHandler()->fetchUsersCustomization($this->_cfg['serviceId']);
        $res = new Mo_Stat(array(
            'services_id' => $this->_cfg['serviceId'],
            'type' => Mo_Stat::USERS_CUSTOMIZATION,
            'data' => $raw,
            'timestamp' => date('Y-m-d H:i:s')
        ));

        return $res;
    }

    /**
     * Fetches USERS_TOTALS.
     *
     * @return Mo_Stat.
     */
    public function fetchUsersTotals()
    {
        // From Database
        $raw = $this->getDbHandler()->fetchUsersTotals($this->_cfg['serviceId']);
        $res = new Mo_Stat(array(
            'services_id' => $this->_cfg['serviceId'],
            'type' => Mo_Stat::USERS_TOTALS,
            'data' => $raw,
            'timestamp' => date('Y-m-d H:i:s')
        ));

        return $res;
    }

    /**
     * Retrieves all stats data.
     *
     * @param $fromCurrentService boolean Fetch data only from current service.
     * @return array A collection of Mo_Stat objects on success; EMPTY array otherwise.
     */
    public function fetchAll($fromCurrentService = false)
    {
        $res = array();
        $cols = [ 't.*', 's.name service' ];
        $options = [
            'join' => [
                [ 'services s', 't.services_id = s.id' ]
            ]
        ];
        if ($fromCurrentService) {
            $where = [ 't.services_id' => $this->_cfg['serviceId'] ];
            if ($raw = $this->getDbHandler()->fetchAll('stats', $where, $cols, $options)) {
                foreach ($raw as $v) {
                    $res[$v['type']] = new Mo_Stat(array(
                        'service' => $v['service'],
                        'services_id' => $v['services_id'],
                        'type' => $v['type'],
                        'data' => json_decode($v['data']),
                        'timestamp' => $v['timestamp']
                    ));
                }
            }
        } else {
            if ($raw = $this->getDbHandler()->fetchAll('stats t', null, $cols, $options)) {
                foreach ($raw as $v) {
                    $res[$v['type']][$v['service']] = new Mo_Stat(array(
                        'service' => $v['service'],
                        'services_id' => $v['services_id'],
                        'type' => $v['type'],
                        'data' => json_decode($v['data']),
                        'timestamp' => $v['timestamp']
                    ));
                }
            }
        }


        return $res;
    }

    /**
     * Saves the object in database.
     *
     * @return mixed Message ID on success; FALSE otherwise.
     */
    public function save(Mo_Stat $Mo_Stat)
    {
        $handler = $this->getDbHandler();
        $data = array(
            'services_id' => $Mo_Stat->services_id,
            'type' => $Mo_Stat->type,
            'data' => json_encode($Mo_Stat->data),
            'timestamp' => ($Mo_Stat->id ? $Mo_Stat->timestamp : date('Y-m-d H:i:s'))
        );

        if ($id = $Mo_Stat->id) {
            $handler->update('stats', $data, array('id' => $Mo_Stat->id));
        } else {
            $id = $handler->insert('stats', $data, array('update' => array('data', 'timestamp')));
        }

        return $id;
    }
}
