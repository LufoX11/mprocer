<?php

/**
 * News data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_PushData extends Da_BaseMysql
{
    /**
     * Fetchs all push data by platform and email.
     *
     * @param $serviceId integer Service ID.
     * @param $platform string Platform type (Android | Ios).
     * @param $emails array User emails.
     * @return mixed An ARRAY of Mo_PushData objects on success; FALSE otherwise.
     */
    public function fetchAllByPlatformAndEmail($serviceId, $platform, array $emails)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();
        array_walk($emails, function (&$v) use ($handler) { $v = $handler->quote($v); });
        $res = $this->query(sprintf(''
            . 'SELECT '
                . 'pd.id id, '
                . 'pd.users_id users_id, '
                . 'pd.platform platform, '
                . 'pd.datetime datetime, '
                . 'pd.registrationId, '
                . 'u.email email, '
                . 'u.services_id services_id '
            . 'FROM push_data pd '
            . 'INNER JOIN users u ON u.id = pd.users_id '
            . 'WHERE '
                . 'platform = "%s" '
                . 'AND u.email IN (%s) '
                . 'AND u.services_id = %d',
            $handler->escape($platform),
            implode(',', $emails),
            $serviceId));

        return $res;
    }

}
