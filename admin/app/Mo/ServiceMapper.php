<?php

/**
 * Services mapper.
 */

Loader::mo(array('Abstract', 'Service'), true);

class Mo_ServiceMapper extends Mo_Abstract
{
    /**
     * Finds a service by its name.
     *
     * @param $name string Service name.
     * @return mixed Mo_Service if found; NULL otherwise.
     */
    public function findByName($name)
    {
        if ($res = $this->getDbHandler()->fetchRow('services', array('name' => $name))) {
            $res = new Mo_Service(array(
                'id' => $res['id'],
                'name' => $res['name'],
                'fullname' => $res['fullname']
            ));
        }

        return $res;
    }

    /**
     * Finds a service by ID.
     *
     * @param $id integer Service ID.
     * @return mixed Mo_Service if found; NULL otherwise.
     */
    public function findById($id)
    {
        if ($res = $this->getDbHandler()->fetchRow('services', array('id' => $id))) {
            $res = new Mo_Service(array(
                'id' => $res['id'],
                'name' => $res['name'],
                'fullname' => $res['fullname']
            ));
        }

        return $res;
    }
}
