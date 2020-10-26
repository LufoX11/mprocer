<?php

/**
 * Contact mapper.
 */

Loader::mo(array('Abstract', 'Contact'), true);
Loader::da(array('Contacts'), true);

class Mo_ContactMapper extends Mo_Abstract
{
    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_Contacts');
        }

        return $this->_dbHandler;
    }

    /**
     * Fetchs all contact messages.
     *
     * @param $serviceId integer Service ID.
     * @param $limit integer Amount of results to retrieve.
     * @param $offset integer Registers offset to start retrieving.
     * @return array A collection of Mo_Contact objects on success; EMPTY ARRAY otherwise.
     */
    public function fetch($limit = null, $offset = null)
    {
        // From Database
        $res = array();
        if ($raw = $this->getDbHandler()->fetch($this->_cfg['serviceId'], false, $limit, $offset)) {
            foreach ($raw as $v) {
                $res[$v['id']] = new Mo_Contact(array(
                    'id' => $v['id'],
                    'services_id' => $v['services_id'],
                    'name' => $v['name'],
                    'email' => $v['email'],
                    'phone' => $v['phone'],
                    'reason' => $v['reason'],
                    'description' => $v['description'],
                    'deviceData' => $v['devicedata'],
                    'ip' => $v['ip'],
                    'userAgent' => $v['useragent'],
                    'timestamp' => $v['timestamp'],
                    'status' => $v['status']
                ));
            }
        }

        return $res;
    }

    /**
     * Finds a contact message by ID.
     *
     * @param $id integer Contact ID.
     * @return mixed Mo_Contact if found; NULL otherwise.
     */
    public function findById($id)
    {
        if ($res = $this->getDbHandler()->fetchRow('contact', array('id' => $id))) {
            $res = new Mo_Contact(array(
                'id' => $res['id'],
                'services_id' => $res['services_id'],
                'name' => $res['name'],
                'email' => $res['email'],
                'phone' => $res['phone'],
                'reason' => $res['reason'],
                'description' => $res['description'],
                'deviceData' => $res['devicedata'],
                'ip' => $res['ip'],
                'userAgent' => $res['useragent'],
                'timestamp' => $res['timestamp'],
                'status' => $res['status']
            ));
        }

        return $res;
    }

    /**
     * Saves the object in database.
     *
     * @return mixed Message ID on success; FALSE otherwise.
     */
    public function save(Mo_Contact $Mo_Contact)
    {
        $data = array(
            'services_id' => $Mo_Contact->services_id,
            'name' => $Mo_Contact->name,
            'email' => $Mo_Contact->email,
            'phone' => $Mo_Contact->phone,
            'reason' => $Mo_Contact->reason,
            'description' => $Mo_Contact->description,
            'devicedata' => $Mo_Contact->deviceData,
            'ip' => $Mo_Contact->ip,
            'useragent' => $Mo_Contact->userAgent,
            'ip' => $Mo_Contact->ip,
            'timestamp' => ($Mo_Contact->id ? $Mo_Contact->timestamp : date('Y-m-d H:i:s')),
            'status' => $Mo_Contact->status
        );

        if ($id = $Mo_Contact->id) {
            $this->getDbHandler()->update('contact', $data, array('id' => $Mo_Contact->id));
        } else {
            $id = $this->getDbHandler()->insert('contact', $data);
        }

        return $id;
    }
}
