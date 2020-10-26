<?php

/**
 * Users mapper.
 */

Loader::mo(array('Abstract', 'User'), true);

class Mo_UsersMapperException extends Exception {};

class Mo_UsersMapper extends Mo_Abstract
{
    /**
     * Fetchs a User by they device ID and type.
     *
     * @param $deviceId string User device ID.
     * @param $deviceType string User device type.
     * @return mixed User object on success; FALSE otherwise.
     */
    public function findByDeviceIdAndType($deviceId, $deviceType)
    {
        $dbHandler = $this->getDbHandler();

        // From Database
        $where = [
            'services_id' => $this->_cfg['serviceId'],
            'deviceid' => $deviceId,
            'devicetype' => $deviceType
        ];
        if ($res = $dbHandler->fetchRow('users', $where))
        {
            $settings = array();
            if ($raw = $dbHandler->fetchAll('users_settings', array('users_id' => $res['id']))) {
                foreach ($raw as $v) {
                    $settings[$v['key']] = new Mo_UserSetting(array(
                        'users_id' => $v['users_id'],
                        'key' => $v['key'],
                        'value' => unserialize($v['value'])
                    ));
                }
            }
            $res = new Mo_User(array(
                'id' => $res['id'],
                'services_id' => $res['services_id'],
                'deviceId' => $res['deviceid'],
                'deviceType' => $res['devicetype'],
                'deviceVersion' => $res['deviceversion'],
                'creationDate' => $res['creationdate'],
                'timestamp' => $res['timestamp'],
                'ip' => $res['ip'],
                'browserHeaders' => $res['browserheaders'],
                'email' => $res['email'],
                'phone' => $res['phone'],
                'name' => $res['name'],
                'settings' => $settings
            ));
        }

        return $res;
    }

    /**
     * Adds / Updates a new user.
     *
     * @param $Mo_User object A Mo_User object.
     * @return mixed TRUE (if the user exists) or new user ID on success; FALSE otherwise.
     */
    public function save(Mo_User $Mo_User)
    {
        $data = array(
            'services_id' => $Mo_User->services_id,
            'deviceid' => $Mo_User->deviceId,
            'devicetype' => $Mo_User->deviceType,
            'deviceversion' => $Mo_User->deviceVersion,
            'creationdate' => $Mo_User->creationDate,
            'timestamp' => $Mo_User->timestamp,
            'ip' => $Mo_User->ip,
            'browserheaders' => $Mo_User->browserHeaders,
            'email' => $Mo_User->email,
            'phone' => $Mo_User->phone,
            'name' => $Mo_User->name
        );

        if ($res = $Mo_User->id) {
            $this->getDbHandler()->update('users', $data, array('id' => $Mo_User->id));
        } else {
            $res = $this->getDbHandler()->insert('users', $data, array('ignore' => true));
        }

        return $res;
    }

    /**
     * Adds / Updates new user setting.
     *
     * @param $Mo_User object Mo_User object.
     * @param $Mo_UserSetting object A Mo_UserSetting object to save.
     * @return mixed TRUE (if the setting exists) or new setting ID on success; FALSE otherwise.
     */
    public function saveSetting(Mo_User $Mo_User, Mo_UserSetting $Mo_UserSetting)
    {
        $data = array(
            'users_id' => $Mo_UserSetting->users_id,
            'key' => $Mo_UserSetting->key,
            'value' => serialize($Mo_UserSetting->value)
        );

        $res = $this->getDbHandler()->insert('users_settings', $data, array('update' => array('value')));

        return $res;
    }

    /**
     * Creates a new user session.
     *
     * @param $deviceId integer User device ID.
     * @param $deviceType string User device type.
     * @param $deviceVersion string User device version.
     * @return Mo_User on success; FALSE otherwise.
     */
    public function sessionUp($deviceId, $deviceType, $deviceVersion)
    {
        Loader::hp(array('DateTime'));

        if ($Mo_User = $this->findByDeviceIdAndType($deviceId, $deviceType)) {

            // Update last login data
            $Mo_User->deviceVersion = $deviceVersion;
            $Mo_User->ip = $_SERVER['REMOTE_ADDR'];
            $Mo_User->browserHeaders = $_SERVER['HTTP_USER_AGENT'];
            $Mo_User->timestamp = Hp_DateTime::getMysqlFormat();
            $res = (bool) $this->save($Mo_User);
        } else {

            // Create a new session
            $res = (bool) $this->save(new Mo_User(array(
                'services_id' => $this->_cfg['serviceId'],
                'deviceId' => $deviceId,
                'deviceType' => $deviceType,
                'deviceVersion' => $deviceVersion,
                'ip' => $_SERVER['REMOTE_ADDR'],
                'creationDate' => Hp_DateTime::getMysqlFormat(),
                'browserHeaders' => $_SERVER['HTTP_USER_AGENT']
            )));
        }
        if ($res) {
            $res = $this->findByDeviceIdAndType($deviceId, $deviceType);
        }

        return $res;
    }
}
