<?php

/**
 * AdminUsers mapper.
 */

Loader::mo(array('Abstract', 'AdminUser'), true);

class Mo_AdminUsersMapper extends Mo_Abstract
{
    /**
     * Checks user login data and retrieves all necessary data for the user session.
     *
     * @param $username string User name.
     * @param $application string Application name.
     * @param $password string User password (not hashed).
     * @return mixed User session data on success; FALSE otherwise.
     */
    public function doLogin($username, $application, $password = null)
    {
        $res = false;
        if ($userData = $this->findByUsernameApplication($username, $application)) {
            if (!is_null($password)) {
                $password = self::generatePassword($password);
                if ($password !== $userData['password']) {
                    return false;
                }
            }
            $aclData = $this->fetchAclDataByUserId($userData['id']);
            $res = new Mo_AdminUser(array(
                'id' => $userData['id'],
                'name' => $userData['name'],
                'username' => $userData['username'],
                'password' => $userData['password'],
                'application' => $userData['application'],
                'service' => $userData['service'],
                'status' => $userData['status'],
                'acl' => ($aclData ? $aclData : array()),
                'accessToken' => $userData['access_token']
            ));
        }

        return $res;
    }

    /**
     * Generate a special session for an external user and retrieve necessary information
     *
     * @param array $params with necessary information
     * @return mixed User session data on success; FALSE otherwise.
     */
    public function generateSpecialSession(array $params = array())
    {
        $res = new Mo_AdminUser(array(
            'id' => (isset($params['id']) ? $params['id'] : ''),
            'name' => (isset($params['name']) ? $params['name'] : ''),
            'application' => (isset($params['application']) ? $params['application'] : ''),
            'service' => (isset($params['service']) ? $params['service'] : ''),
            'status' => (isset($params['status']) ? $params['status'] : ''),
            'acl' => (isset($params['acl']) ? $params['acl'] : array(
                'groups' => array(),
                'permissions' => array()
            )),
            'isGuestUser' => (isset($params['isGuestUser']) ? $params['isGuestUser'] : true)
        ));

        return $res;
    }

    /**
     * Finds a User by username.
     *
     * @param $username string User username.
     * @param $application string Application name.
     * @return mixed User data on success; FALSE otherwise.
     */
    public function findByUsernameApplication($username, $application)
    {
        // From Database
        $res = $this->getDbHandler()->fetchRow(
            'admin_users', array(
                'username' => $username,
                'application' => $application,
                'status' => Mo_AdminUser::STATUS_ENABLED));

        return $res;
    }

    /**
     * Finds a User by a given Access Token.
     * 
     * @param  string $accessToken.
     * @param  string $service.
     * @param  string $application.
     * @return mixed User data on success; FALSE otherwise.
     */
    public function findByAccessToken($accessToken, $service, $application)
    {
        // From Database
        $res = $this->getDbHandler()->fetchRow(
            'admin_users', array(
                'access_token' => $accessToken,
                'application' => $application,
                'service' => $service,
                'status' => Mo_AdminUser::STATUS_ENABLED));

        return $res;
    }

    /**
     * Validate a current access token.
     *
     * @param string $accessToken.
     * @param string $service.
     * @param string $application.
     * @return boolean.
     */
    public function validateAccessToken($accessToken, $service, $application)
    {
        if ($res = $this->findByAccessToken($accessToken, $service, $application)) {
            return $res;
        }
        return false;
    }

    /**
     * Renew access token by a username.
     * 
     * @return string Access Token on success, false otherwise.
     */
    public function renewAccessToken(Mo_AdminUser $user)
    {
        $data = array();
        $data['access_token'] = sha1(
            $user->getId() .
            $user->getApplication() .
            $user->getService() .
            $user->getPassword() .
            $user->getName() .
            $user->getUsername() .
            uniqid() .
            time()
        );
        if ($res = $this->getDbHandler()->update(
                'admin_users', $data, array('id' => $user->getId()))) {
            $_SESSION['AdminUser']->accessToken = $data['access_token'];
        } else {
            return false;
        }
    }

    /**
     * Fetches the ACL data for the user.
     *
     * @param $userId integer User ID.
     * @return mixed User ACL data on success; FALSE otherwise.
     */
    public function fetchAclDataByUserId($userId)
    {
        // From Database
        $res = false;
        $raw = $this->getDbHandler()->fetchAll(
            'admin_users_groups aug',
            array('aug.users_id' => $userId),
            array(
                'ag.name groupName',
                'ag.title groupTitle',
                'ap.name permissionName',
                'ap.title permissionTitle'
            ),
            array(
                'join' => array(
                    array('admin_groups ag', 'aug.groups_id = ag.id'),
                    array('admin_groups_permissions agp', 'aug.groups_id = agp.groups_id', 'LEFT JOIN'),
                    array('admin_permissions ap', 'agp.permissions_id = ap.id', 'LEFT JOIN'),
                )));
        if ($raw) {

            // Format ACL data
            $res = array(
                'groups' => array(),
                'permissions' => array()
            );
            foreach ($raw as $v) {
                $res['groups'][$v['groupName']] = $v['groupTitle'];
                if ($v['permissionName']) {
                    $res['permissions'][$v['permissionName']] = $v['permissionTitle'];
                }
            }
        }

        return $res;
    }

    /**
     * Generates a storable password from a plain text string.
     *
     * @param $str string Plain text password.
     * @return string Hash.
     */
    public static function generatePassword($str)
    {
        $res = sha1("::Holmes::{$str}");

        return $res;
    }
}
