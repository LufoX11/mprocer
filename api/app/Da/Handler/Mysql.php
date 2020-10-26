<?php

/**
 * MySQL handler.
 */

Loader::lib(array('MysqlDriver'), true);

class Da_Handler_MysqlException extends Exception {}

class Da_Handler_Mysql
{
    /**
     * @const MYSQL handler types.
     */
    const HANDLER_READ = 'read';
    const HANDLER_WRITE = 'write';

    /**
     * @var string Default driver to use.
     */
    public $defaultDriver = 'default';

    /**
     * @var string Default handler type to access the database.
     */
    public $defaultAccessHandlerType = self::HANDLER_READ;

    /**
     * @var array Configuration for the handler.
     */
    protected $_cfg;

    /**
     * @var array Database handler.
     */
    protected $_handler = array();

    /**
     * Builds a new handler.
     *
     * @param $cfg array Configuration for the handler.
     * @return void.
     */
    public function __construct(array $cfg)
    {
        $this->_cfg = $cfg;
    }

    /**
     * Sets the database driver to use.
     *
     * @param $driver string Driver name.
     * @return object Self object.
     */
    public function setDbDriver($driver)
    {
        $this->defaultDriver = $driver;

        return $this;
    }

    /**
     * Gets the database driver.
     *
     * @return string Database driver.
     */
    public function getDbDriver()
    {
        if (!$this->defaultDriver) {
            $this->setDbDriver('default');
        }

        return $this->defaultDriver;
    }

    /**
     * Sets the handler type to access the database.
     *
     * @param $accessHandler string [self::HANDLER_READ | self::HANDLER_WRITE].
     * @return object Self object.
     */
    public function setDbAccessHandlerType($accessHandlerType)
    {
        $this->defaultAccessHandlerType = $accessHandlerType;

        return $this;
    }

    /**
     * Gets the database access handler type.
     *
     * @return string Database access handler type.
     */
    public function getDbAccessHandlerType()
    {
        if (!$this->defaultAccessHandlerType) {
            $this->setDbAccessHandlerType(self::HANDLER_READ);
        }

        return $this->defaultAccessHandlerType;
    }

    /**
     * Makes a new MYSQL query.
     *
     * @param $query string Query string.
     * @param $accessHandlerType string Operation handler type.
     * @param $driver string MySQL driver to use.
     * @return array Resultset.
     */
    public function query($query, $driver = null, $accessHandlerType = null)
    {
        $mysqliResult = $this->getHandler($accessHandlerType, $driver)->query($query);
        $res = array();
        while ($row = $mysqliResult->fetch_assoc()) {
            $res[] = $row;
        }

        return $res;
    }

    /**
     * Updates rows.
     *
     * @param $table string Table name.
     * @param $set array Data to update: 'key' => 'value'.
     * @param $where array Where clause: 'key' => 'value'.
     * @param $options array Insert options:
     *           Array(
     *               'driver' => (string) <default>: MySQL driver to use
     *           )
     * @return boolean TRUE if successfull; FALSE otherwise.
     */
    public function update($table, array $set, array $where, array $options = null)
    {
        if (empty($set)) {
            return false;
        }

        $driver = (isset($options['driver']) ? $options['driver'] : null);
        $handler = $this->getHandler(self::HANDLER_WRITE, $driver);
        $setClause = array();
        $whereClause = array();

        foreach ($set as $k => $v) {
            $setClause[] = sprintf(
                "`%s` = '%s'",
                $handler->escape($k),
                $handler->escape($v));
        }

        foreach ($where as $k => $v) {
            $whereClause[] = sprintf(
                "`%s` = '%s'",
                $handler->escape($k),
                $handler->escape($v));
        }

        $query = sprintf(''
            . 'UPDATE `%s` '
            . 'SET %s '
            . 'WHERE %s',
            $handler->escape($table),
            implode(', ', $setClause),
            implode(' AND ', $whereClause));

        $res = (bool) $handler->query($query);

        return $res;
    }

    /**
     * Inserts rows.
     *
     * @param $table string Table to update.
     * @param $data array A collection of rows to insert (Array of Arrays allowed).
     * @param $options array Insert options:
     *           Array(
     *               'driver' => (string) <default>: MySQL driver to use,
     *               'ignore' => (bool) false: INSERT IGNORE,
     *               'update' => (array) null: ON DUPLICATE KEY UPDATE - Cols to update
     *           )
     * @return mixed TRUE or LAST_ID on success; FALSE otherwise.
     */
    public function insert($table, array $data, array $options = null)
    {
        if (empty($data)) {
            return false;
        }

        $driver = (isset($options['driver']) ? $options['driver'] : null);
        $handler = $this->getHandler(self::HANDLER_WRITE, $driver);
        $columnsClause = array();
        $valuesClause = array();
        if (!isset($options['ignore'])) {
            $options['ignore'] = false;
        }
        if (isset($options['update'])) {
            array_walk($options['update'], function(&$v)
            {
                $v = "`{$v}` = VALUES(`{$v}`)";
            });
        } else {
            $options['update'] = null;
        }

        if (is_array(current($data))) {

            ////
            // Bulk mode.
            ////

            $fields = array_keys((array) current($data));
            foreach ($fields as $v) {
                $columnsClause[] = sprintf('`%s`', $handler->escape($v));
            }

            foreach ($data as $rowK => $rowV) {
                foreach ($rowV as $v) {
                    $valuesClause[$rowK][] = sprintf('"%s"', $handler->escape($v));
                }
                $valuesClause[$rowK] = '(' . implode(', ', $valuesClause[$rowK]) . ')';
            }
            $valuesClause = implode(', ', $valuesClause);
        } else {

            ////
            // Simple mode.
            ////

            $fields = array_keys($data);
            foreach ($fields as $v) {
                $columnsClause[] = sprintf('`%s`', $handler->escape($v));
            }

            foreach ($data as $k => $v) {
                $valuesClause[] = sprintf('"%s"', $handler->escape($v));
            }
            $valuesClause = '(' . implode(', ', $valuesClause) . ')';
        }

        $query = sprintf(''
            . '%s INTO %s '
                . '(%s) '
            . 'VALUES '
                . '%s '
            . '%s',
            ($options['ignore'] ? 'INSERT IGNORE' : 'INSERT'),
            $handler->escape($table),
            implode(', ', $columnsClause),
            $valuesClause,
            ($options['update'] ? 'ON DUPLICATE KEY UPDATE ' . implode(', ', $options['update']) : ''));

        if ($res = $handler->query($query)) {
            if (!($res = $handler->insert_id)) {
                $res = true;
            }
        }

        return $res;
    }

    /**
     * Fetchs a rowset.
     *
     * @param $table string Table name.
     * @param $where array Conditions for retrieving. Ie.: Array('id' => 1, 'name' => 'Peter').
     * @param $cols array Return only from specific columns. Ie.: Array('id', 'name').
     * @param $options array Options for the fetch.
     *                       Array(
     *                           'driver' => (string) <default>: MySQL driver to use,
     *                           'join' => array(
     *                               array([table2], '[table1.col] = [table2.col]', [JOIN, INNER JOIN...]),
     *                               array('table3', 'table1.col = table3.col', 'clause')),
     *                           'order' => [col name|position [order type ASC|DESC]] null,
     *                           'limit' => [offset[, rowcount]] null,
     *                           'group' => [col name|position [order type ASC|DESC]] null
     *                       )
     * @return array A rowset on success; NULL otherwise.
     */
    public function fetchAll($table, array $where = null, array $cols = null, array $options = null)
    {
        $driver = (isset($options['driver']) ? $options['driver'] : null);
        $handler = $this->getHandler(self::HANDLER_READ, $driver);
        $whereClause = null;
        if (is_array($where)) {
            $w = array();
            foreach ($where as $k => $v) {
                $w[] = sprintf('%s = "%s"', $k, $handler->escape($v));
            }
            $whereClause = implode(' AND ', $w);
        }
        $colsClause = null;
        if (is_array($cols)) {
            $colsClause = implode(', ', $cols);
        }
        if (isset($options['join'])) {
            $j = array();
            $allJoins = (is_array(current($options['join'])) ? $options['join'] : array($options['join']));
            foreach ($allJoins as $v) {
                $j[] = (isset($v[2]) ? $v[2] . ' ' : 'JOIN ') . "{$v[0]} ON {$v[1]}";
            }
            $options['join'] = implode(' ', $j);
        }
        if (isset($options['group'])) {
            $options['group'] = $handler->escape($options['group']);
        }
        if (isset($options['order'])) {
            $options['order'] = $handler->escape($options['order']);
        }
        if (isset($options['limit'])) {
            $options['limit'] = $handler->escape($options['limit']);
        }

        $query = sprintf(''
            . 'SELECT %s'
            . 'FROM %s'
            . '%s' // JOIN
            . '%s' // WHERE
            . '%s' // GROUP BY
            . '%s' // ORDER BY
            . '%s', // LIMIT
            ($colsClause ? $colsClause : '*') . "\n",
            $handler->escape($table) . "\n",
            (isset($options['join']) ? "{$options['join']}\n" : ''),
            ($whereClause ? "WHERE {$whereClause}\n" : ''),
            (isset($options['group']) ? "GROUP BY {$options['group']}\n" : ''),
            (isset($options['order']) ? "ORDER BY {$options['order']}\n" : ''),
            (isset($options['limit']) ? "LIMIT {$options['limit']}" : '' ));

        if ($res = $handler->query($query)) {
            if (!($res = $handler->fetchArray($res))) {
                $res = null;
            }
        }

        return $res;
    }

    /**
     * Fetchs a single row.
     *
     * @param $table string Table name.
     * @param $where array Conditions for retrieving. Ie.: Array('id' => 1, 'name' => 'Peter').
     * @param $cols array Return only from specific columns. Ie.: Array('id', 'name').
     * @param $options array Options for the fetch.
     *                       Array(
     *                           'driver' => (string) <default>: MySQL driver to use,
     *                           'join' => array(
     *                               array([table2], '[table1.col] = [table2.col]', [JOIN, INNER JOIN...]),
     *                               array('table3', 'table1.col = table3.col', 'clause')),
     *                           'order' => [col name|position [order type ASC|DESC]] null
     *                       )
     * @return array A single row on success; NULL otherwise.
     */
    public function fetchRow($table, array $where = null, array $cols = null, array $options = null)
    {
        $options = array('limit' => '1') + (array) $options;
        if ($res = $this->fetchAll($table, $where, $cols, $options)) {
            $res = current($res);
        } else {
            $res = null;
        }

        return $res;
    }

    /**
     * Deletes row(s).
     *
     * @param $table string Table name.
     * @param $where array Where clause: 'key' => 'value'.
     * @param $options array Options for the fetch.
     *                       Array(
     *                           'driver' => (string) <default>: MySQL driver to use,
     *                           'order' => [col name|position [order type ASC|DESC]] null,
     *                           'limit' => [offset[, rowcount]] null
     *                       )
     * @return boolean TRUE if successfull; FALSE otherwise.
     */
    public function delete($table, array $where = null, array $options = null) {

        $driver = (isset($options['driver']) ? $options['driver'] : null);
        $handler = $this->getHandler(self::HANDLER_WRITE, $driver);
        if (is_array($where)) {
            $whereClause = array();
            foreach ($where as $k => $v) {
                $whereClause[] = sprintf(
                    "`%s` = '%s'",
                    $handler->escape($k),
                    $handler->escape($v));
            }
        }
        if (isset($options['order'])) {
            $options['order'] = $handler->escape($options['order']);
        }
        if (isset($options['limit'])) {
            $options['limit'] = $handler->escape($options['limit']);
        }

        $query = sprintf(''
            . 'DELETE FROM %s'
            . '%s' // WHERE
            . '%s' // ORDER BY
            . '%s', // LIMIT
            $handler->escape($table) . "\n",
            (isset($whereClause) ? 'WHERE ' . implode(' AND ', $whereClause) . "\n" : ''),
            (isset($options['order']) ? "ORDER BY {$options['order']}\n" : ''),
            (isset($options['limit']) ? "LIMIT {$options['limit']}" : '' ));

        $res = (bool) $handler->query($query);

        return $res;
    }

    /**
     * Returns the total of rows matched.
     *
     * @param $table string Table name.
     * @param $where array Where clause: 'key' => 'value'.
     * @param $driver string MySQL driver to use.
     * @return integer Rows count.
     */
    public function count($table, array $where = null, $driver = null)
    {
        $raw = $this->fetchRow($table, $where, array('COUNT(*) total'), array('driver' => $driver));
        $res = (int) $raw['total'];

        return $res;
    }

    /**
     * Gets connection handler.
     *
     * @param $accessHandlerType string Operation handler type.
     * @param $driver string MySQL driver to use.
     * @return object Connection handler.
     */
    public function getHandler($accessHandlerType = null, $driver = null)
    {
        $cfg = $this->_cfg;
        if (!$accessHandlerType) {
            $accessHandlerType = $this->getDbAccessHandlerType();
        }
        if (!$driver) {
            $driver = $this->getDbDriver();
        }
        if (!$cfg) {
            throw new Da_Handler_MysqlException('$cfg not initializated.');
        }
        if (!isset($this->_handler[$driver][$accessHandlerType])) {
            $this->_handler[$driver][$accessHandlerType] = new MysqlDriver(
                $cfg['databases'][$driver][$accessHandlerType]);
            $this->_handler[$driver][$accessHandlerType]->set_charset('utf8');
        }

        return $this->_handler[$driver][$accessHandlerType];
    }
}
