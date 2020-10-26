<?php

/**
 * Contacts data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_Contacts extends Da_BaseMysql
{
    /**
     * Fetchs all contact messages.
     *
     * @param $serviceId integer Service ID.
     * @param $all boolean Whether we should retrieve all messages, including 'deleted'.
     * @param $limit integer Amount of results to retrieve.
     * @param $offset integer Registers offset to start retrieving.
     * @return mixed Contact messages data on success; FALSE otherwise.
     */
    public function fetch($serviceId, $all = false, $limit = null, $offset = null)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $limit = (is_null($limit) ? 30 : $limit);
        $offset = (is_null($offset) ? 0 : $offset);
        $inClause = implode(', ', array(
            $this->getHandler()->quote(Mo_Contact::STATUS_READ),
            $this->getHandler()->quote(Mo_Contact::STATUS_UNREAD)));

        $res = $this->query(sprintf(''
            . 'SELECT * FROM contact '
            . 'WHERE services_id = %d '
            . (!$all ? "AND status IN ({$inClause}) " : '')
            . 'ORDER by id DESC '
            . 'LIMIT %d, %d',
            $serviceId,
            $offset,
            $limit
        ));

        return $res;
    }
}
