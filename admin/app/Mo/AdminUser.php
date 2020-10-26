<?php

/**
 * AdminUser object model.
 */

Loader::mo(array('Base'), true);

class Mo_AdminUser extends Mo_Base
{
    /**
     * @const Account status.
     */
    const STATUS_ENABLED = 'enabled';
    const STATUS_DISABLED = 'disabled';
    const ADMIN_GROUP_ADMIN = 'admin';
    const ADMIN_GROUP_MPROCER = 'mprocer';
    const ADMIN_PERMISSION_HOME = 'home';
    const ADMIN_PERMISSION_APP_MESSAGES = 'app-messages';
    const ADMIN_PERMISSION_CLIENT_STATS = 'client-stats';
    const ADMIN_PERMISSION_CLIENT_NEWS = 'client-news';
    const ADMIN_PERMISSION_SERVICES = 'services';
    const ADMIN_PERMISSION_TRANSLATIONS = 'translations';

    /**
     * @var integer AdminUser ID.
     */
    protected $_id;

    /**
     * @var string User real name.
     */
    protected $_name;

    /**
     * @var string Login nickname.
     */
    protected $_username;

    /**
     * @var string Login password.
     */
    protected $_password;

    /**
     * @var string Application name.
     */
    protected $_application;

    /**
     * @var string Service name.
     */
    protected $_service;

    /**
     * @var string Account status.
     */
    protected $_status;

    /**
     * @var array ACL data.
     */
    private $_acl;

    /**
     * @var string IsGuestUser
     */
    protected $_isGuestUser;

    /**
     * @var string AccessToken
     */
    protected $_accessToken;

    /**
     * Retrieves ACL groups.
     *
     * @return array ACL groups.
     */
    public function fetchAclGroups()
    {
        return $this->_acl['groups'];
    }

    /**
     * Tells whether the ACL was successfully loaded or not.
     *
     * @return boolean TRUE if it's loaded; FALSE otherwise.
     */
    public function aclIsLoaded()
    {
        $res = (isset($this->_acl) && isset($this->_acl['groups']) && $this->_acl['groups']);

        return $res;
    }

    /**
     * Checks if the user has access to the item.
     *
     * @param $permissionName string Name of the permission in database for the item.
     * @return boolean TRUE if has access; FALSE otherwise.
     */
    public function aclHasAccess($permissionName)
    {
        $res = false;

        // Mobile apps admin user can access all
        if (isset($this->_acl['groups'])
            && array_key_exists(self::ADMIN_GROUP_ADMIN, $this->_acl['groups']))
        {
            $res = true;
        } else {

            // Check for the permission required to access
            $res = (isset($this->_acl['permissions'])
                && array_key_exists($permissionName, $this->_acl['permissions']));

            // Exceptions
            if ($permissionName == self::ADMIN_PERMISSION_CLIENT_NEWS
                    && $this->application != 'mprocer') {
                $res = false;
            }
        }

        return $res;
    }

    /**
     * Gets the current user administrated service.
     *
     * @return string Service name if the user administer a service; "all" if the user can handle all services..
     */
    public function aclGetServiceAccess()
    {
        $res = 'all';
        if ($this->service) {
            $res = $this->service;
        }

        return $res;
    }

    ////
    // Setters and Getters
    ////

    public function setId($id)
    {
        $this->_id = (integer) $id;
    }

    public function getId()
    {
        return $this->_id;
    }

    public function setName($name)
    {
        $this->_name = (string) $name;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function setUsername($username)
    {
        $this->_username = (string) $username;
    }

    public function getUsername()
    {
        return $this->_username;
    }

    public function setPassword($password)
    {
        $this->_password = (string) $password;
    }

    public function getPassword()
    {
        return $this->_password;
    }

    public function setApplication($name)
    {
        $this->_application = (string) $name;
    }

    public function getApplication()
    {
        return $this->_application;
    }

    public function setService($name)
    {
        $this->_service = (string) $name;
    }

    public function getService()
    {
        return $this->_service;
    }

    public function setStatus($status)
    {
        if ($status != self::STATUS_ENABLED && $status != self::STATUS_DISABLED) {
            throw new Exception('Invalid account status.');
        }
        $this->_status = $status;
    }

    public function getStatus()
    {
        return $this->_status;
    }

    public function setIsLoggedIn($status)
    {
        $this->_isLoggedIn = (bool) $status;
    }

    public function getIsLoggedIn()
    {
        return $this->_isLoggedIn;
    }

    public function setAcl($acl)
    {
        $this->_acl = (array) $acl;
    }

    public function getAcl()
    {
        return $this->_acl;
    }

    public function setIsGuestUser($isGuestUser)
    {
        $this->_isGuestUser = (string) $isGuestUser;
    }

    public function getIsGuestUser()
    {
        return $this->_isGuestUser;
    }

    public function setAccessToken($accessToken)
    {
        $this->_accessToken = (string) $accessToken;
    }

    public function getAccessToken()
    {
        return $this->_accessToken;
    }
}
