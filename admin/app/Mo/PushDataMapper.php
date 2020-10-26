<?php

/**
 * Push data mapper.
 */

Loader::mo(array('PushData'), true);
Loader::da(array('PushData'), true);

class Mo_PushDataMapper extends Mo_Abstract
{
    /**
     * @var array A collection of Push data object.
     */
    protected static $_push = array();

    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Pushdata');
        }

        return $this->_dbHandler;
    }

    /** 
     * Fetchs all push data. 
     *
     * @return mixed An ARRAY of Mo_PushData objects on success; FALSE otherwise.
     */
    public function fetchAll()
    {
        $res = array();
        $cols = [ 'p.*', 'u.services_id services_id' ];
        $where = [ 'u.services_id' => $this->_cfg['serviceId'] ];
        $options = [
            'join' => [
                [ 'users u', 'p.users_id = u.id' ]
            ]
        ];
        if ($raw = $this->getDbHandler()->fetchAll('push_data p', $where, $cols, $options)) {
            foreach ($raw as $v) {
                $res[$v['users_id']] = new Mo_PushData(array(
                    'registrationId' => $v['registrationId'],
                    'platform' => $v['platform'],
                    'datetime' => $v['datetime']
                ));
            }
        }

        return $res;
    }

    /**
     * Fetchs all push data by platform [and email].
     *
     * @param $platform string Platform type (Android | Ios).
     * @param $emails array User's emails.
     * @return mixed An ARRAY of Mo_PushData objects on success; FALSE otherwise.
     */
    public function fetchAllByPlatform($platform, array $emails = array())
    {
        $res = array();
        $cols = [ 'p.*', 'u.services_id services_id' ];
        $where = [
            'u.services_id' => $this->_cfg['serviceId'],
            'platform' => $platform
        ];
        $options = [
            'join' => [
                [ 'users u', 'p.users_id = u.id' ]
            ]
        ];
        if ($emails) {
            $raw = $this->getDbHandler()->fetchAllByPlatformAndEmail($this->_cfg['serviceId'], $platform, $emails);
        } else {
            $raw = $this->getDbHandler()->fetchAll('push_data p', $where, $cols, $options);
        }
        if ($raw) {
            foreach ($raw as $v) {
                $res[$v['users_id']] = new Mo_PushData(array(
                    'id' => $v['id'],
                    'users_id' => $v['users_id'],
                    'registrationId' => $v['registrationId'],
                    'platform' => $v['platform'],
                    'datetime' => $v['datetime']
                ));
            }
        }

        return $res;
    }

    /** 
     * Save a new PushData. 
     */
    public function save(Mo_PushData $Mo_PushData)
    {
        $data = array(
            'users_id' => $Mo_PushData->users_id,
            'platform' => $Mo_PushData->platform,
            'registrationId' => $Mo_PushData->registrationId,
            'datetime' => $Mo_PushData->datetime
        );
        
        if ($res = $Mo_PushData->id) {
            $this->getDbHandler()->update('push_data', $data, array('id' => $Mo_PushData->id));
        } else {
            $res = $this->getDbHandler()->insert('push_data', $data);
        }

        return $res;
    }

    /** 
     * Find by user_id. 
     */
    public function find($users_id)
    {
        // From DB
        if ($res = $this->getDbHandler()->fetchRow('push_data', array('users_id' => $users_id))) {
            $res = new Mo_PushData(array(
                'id' => $res['id'],
                'users_id' => $res['users_id'],
                'registrationId' => $res['registrationId'],
                'platform' => $res['platform'],
                'datetime' => $res['datetime']
            ));
        }

        return $res;
    }
}
