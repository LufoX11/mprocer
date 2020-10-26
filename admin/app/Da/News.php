<?php

/**
 * News data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_News extends Da_BaseMysql
{
    /**
     * Fetchs news by their checksums.
     *
     * @param $serviceId integer Service ID.
     * @param $fields array Search fields.
     * @return mixed An ARRAY of news on success; FALSE otherwise.
     */
    public function fetchNews($serviceId, array $fields = array())
    {
        $whereClause = array(
            sprintf('services_id = %d', $serviceId)
        );
        $handler = $this->getHandler();
        if (isset($fields['launching'])) {
            $whereClause[] = sprintf('launching <= "%s"', $handler->escape($fields['launching']));
        }
        if (isset($fields['expiration'])) {
            $whereClause[] = sprintf('expiration > "%s"', $handler->escape($fields['expiration']));
        }
        if (isset($fields['notified'])) {
            $whereClause[] = sprintf('notified = %d', $fields['notified']);
        }
        $whereClause = implode(' AND ', $whereClause);
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $res = $this->query(sprintf(''
            . "SELECT *\n"
            . "FROM news\n"
            . "%s", // WHERE
            ($whereClause ? "WHERE {$whereClause}\n" : '')));

        return $res;
    }

    /**
     * Fetchs news by their checksums.
     *
     * @param $checksums array An array of news checksums.
     * @return mixed An ARRAY of news on success; FALSE otherwise.
     */
    public function fetchByChecksum(array $checksums)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $handler = $this->getHandler();
        array_walk($checksums, function (&$v) use ($handler) { $v = $handler->quote($v); });
        $res = $this->query(sprintf(''
            . 'SELECT * '
            . 'FROM news '
            . 'WHERE checksum IN (%s)',
            implode(',', $checksums)));

        return $res;
    }
}
