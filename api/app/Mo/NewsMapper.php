<?php

/**
 * News mapper.
 */

Loader::mo(array('Abstract', 'News'), true);
Loader::da(array('News'), true);

class Mo_NewsMapper extends Mo_Abstract
{
    /**
     * @var array Allowed filter types for retrieving groups of news.
     */
    protected $_newsFilters = array(
        'feed' => array( // To display news on client's feed (basic displaying rules applied)
            'name' => 'FEED',
            'fields' => array(
                'launching' => '',
                'expiration' => '',
                'notified' => true
            )
        ),
        'all' => array( // To get all news (no filter applied)
            'name' => 'ALL',
            'fields' => array()
        ),
        'push' => array( // To get news that needs to be pushed to user devices
            'name' => 'PUSH',
            'fields' => array(
                'launching' => '',
                'expiration' => '',
                'notified' => false
            )
        )
    );

    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_News');
        }

        return $this->_dbHandler;
    }

    /**
     * @See Mo_Abstract
     */
    public function __construct(array $cfg, array $options = null)
    {
        parent::__construct($cfg);

        // Some defaults
        $this->_newsFilters['feed']['fields']['launching'] = date('Y-m-d H:i:s');
        $this->_newsFilters['feed']['fields']['expiration'] = date('Y-m-d H:i:s');
        $this->_newsFilters['push']['fields']['launching'] = date('Y-m-d H:i:s');
        $this->_newsFilters['push']['fields']['expiration'] = date('Y-m-d H:i:s');
    }

   /**
     * Adds / Updates a news.
     *
     * @param $Mo_News object A Mo_News object.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function saveNews(Mo_News $Mo_News)
    {
        $data = array(
            'services_id' => $Mo_News->services_id,
            'admin_users_id' => $Mo_News->admin_users_id,
            'title' => $Mo_News->title,
            'summary' => $Mo_News->summary,
            'description' => $Mo_News->description,
            'datetime' => $Mo_News->datetime,
            'launching' => $Mo_News->launching,
            'expiration' => $Mo_News->expiration,
            'notified' => $Mo_News->notified,
            'link' => $Mo_News->link,
            'shortlink' => $Mo_News->shortlink,
            'image' => $Mo_News->image,
            'checksum' => $Mo_News->checksum
        );

        if ($res = $Mo_News->id) {
            $this->getDbHandler()->update('news', $data, array('id' => $Mo_News->id));
        } else {
            $res = $this->getDbHandler()->insert('news', $data);
        }

        return $res;
    }

    /**
     * Deletes a news by its checksum (physical delete).
     *
     * @param $checksum string News checksum.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function deleteNewsByChecksum($checksum)
    {
        $res = false;
        if ($news = $this->findNewsByChecksum($checksum)) {
            $where = [
                'services_id' => $this->_cfg['serviceId'],
                'checksum' => $checksum
            ];
            $res = $this->getDbHandler()->delete('news', $where);
        }

        return $res;
    }

    /**
     * Deletes a news by its id (physical delete).
     *
     * @param $id integer News id.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function deleteNewsById($id)
    {
        $res = false;
        $where = [
            'services_id' => $this->_cfg['serviceId'],
            'id' => $id
        ];
        if ($news = $this->findNewsById($id)) {
            $res = $this->getDbHandler()->delete('news', $where);
        }

        return $res;
    }

    /**
     * Finds a single news by its id.
     *
     * @param $id id News id
     * @return mixed News object on success; FALSE otherwise.
     */
    public function findNewsById($id)
    {
        // From Database
        $where = [
            'services_id' => $this->_cfg['serviceId'],
            'id' => $id
        ];
        if ($res = $this->getDbHandler()->fetchRow('news', $where)) {
            $res = new Mo_News(array(
                'id' => $res['id'],
                'services_id' => $res['services_id'],
                'admin_users_id' => $res['admin_users_id'],
                'title' => $res['title'],
                'summary' => $res['summary'],
                'description' => $res['description'],
                'datetime' => $res['datetime'],
                'launching' => $res['launching'],
                'expiration' => $res['expiration'],
                'notified' => $res['notified'],
                'link' => $res['link'],
                'shortlink' => $res['shortlink'],
                'image' => $res['image'],
                'checksum' => $res['checksum']
            ));
        }

        return $res;
    }

    /**
     * Finds a single news by its checksum.
     *
     * @param $checksum string News checksum
     * @return mixed News object on success; FALSE otherwise.
     */
    public function findNewsByChecksum($checksum)
    {
        // From Database
        $where = [
            'services_id' => $this->_cfg['serviceId'],
            'checksum' => $checksum
        ];
        if ($res = $this->getDbHandler()->fetchRow('news', $where)) {
            $res = new Mo_News(array(
                'id' => $res['id'],
                'services_id' => $res['services_id'],
                'admin_users_id' => $res['admin_users_id'],
                'title' => $res['title'],
                'summary' => $res['summary'],
                'description' => $res['description'],
                'datetime' => $res['datetime'],
                'launching' => $res['launching'],
                'expiration' => $res['expiration'],
                'notified' => $res['notified'],
                'link' => $res['link'],
                'shortlink' => $res['shortlink'],
                'image' => $res['image'],
                'checksum' => $res['checksum']
            ));
        }

        return $res;
    }

    /**
     * Fetchs all (last saved) news.
     *
     * @param $filterType string Filter type:
     *                       all: (default) Fetch all available news.
     *                       feed: Fetch news for feed.
     *                       push: Fetch news for pushing to user devices.
     * @return mixed An ARRAY of news objects on success; FALSE otherwise.
     */
    public function fetchNews($filterType = null)
    {
        $filter = $this->_newsFilters['all']['name'];
        $fields = $this->_newsFilters['all']['fields'];
        if ($filterType && array_key_exists($filterType, $this->_newsFilters)) {
            $filter = $this->_newsFilters[$filterType]['name'];
            $fields = $this->_newsFilters[$filterType]['fields'];
        }

        // From Database
        $res = false;
        if ($raw = $this->getDbHandler()->fetchNews($this->_cfg['serviceId'], $fields)) {
            $res = array();
            foreach ($raw as $v) {
                $res[$v['checksum']] = new Mo_News(array(
                    'id' => $v['id'],
                    'services_id' => $v['services_id'],
                    'admin_users_id' => $v['admin_users_id'],
                    'title' => $v['title'],
                    'summary' => $v['summary'],
                    'description' => $v['description'],
                    'datetime' => $v['datetime'],
                    'launching' => $v['launching'],
                    'expiration' => $v['expiration'],
                    'notified' => $v['notified'],
                    'link' => $v['link'],
                    'shortlink' => $v['shortlink'],
                    'image' => $v['image'],
                    'checksum' => $v['checksum']
                ));
            }
        }

        return $res;
    }

    /**
     * Generates a checksum for the news.
     *
     * @param $title string News title.
     * @return string A hash for the news.
     */
    public function generateChecksum($title)
    {
        $serviceId = $this->_cfg['serviceId'];
        $res = sha1("iMaat::{$serviceId}::{$title}");

        return $res;
    }
}
