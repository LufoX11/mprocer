<?php

/**
 * Lang mapper.
 */

Loader::mo(array('Abstract', 'Lang'), true);

class Mo_LangMapper extends Mo_Abstract
{
    /**
     * @const MC keys.
     */
    const MC_KEY_LANG = 'MPROCER::lang-%s::1';

    /**
     * @var array All available languages.
     */
    protected $availableLangs = array(
        'es' => 'Español',
        'en' => 'English'
    );

    /**
     * Fetches all available dictionaries.
     *
     * @return array Available dictionaries indexed by country code.
     */
    public function fetchAvailableLangs()
    {
        return $this->availableLangs;
    }

    /**
     * Saves data in DB.
     *
     * @param $data mixed An ARRAY of Mo_Lang objects or a single one.
     * @return boolean TRUE if success; FALSE otherwise.
     */
    public function save(array $data)
    {
        $raw = array();
        foreach ($data as $v) {
            $raw[] = array(
                'lang' => $v->lang,
                'key' => $v->key,
                'value' => $v->value
            );
        }

        if ($res = $this->getDbHandler()->insert('languages', $raw, array('update' => array('value')))) {

            // Clean lang cache
            foreach (array_keys($this->fetchAvailableLangs()) as $v) {
                $this->getCacheHandler()->delete(sprintf(self::MC_KEY_LANG, $v));
            }
        }

        return $res;
    }

    /**
     * Fetches a dictionary by lang code.
     *
     * @param $lang string Lang code.
     * @param $raw boolean TRUE for returning data as key-value instead of a collection of Mo_Lang objects.
     * @return mixed A key indexed dictionary on success; FALSE otherwise.
     */
    public function fetchDictionaryByLang($lang, $raw = true)
    {
        $cacheHandler = $this->getCacheHandler();
        $mcKey = sprintf(self::MC_KEY_LANG, $lang);
        $res = false;

        if ($raw) {

            // From Memcached
            if (!($res = $cacheHandler->fetch($mcKey))) {

                // From Database
                if ($raw = $this->getDbHandler()->fetchAll('languages', array('lang' => $lang))) {
                    $res = array();
                    foreach ($raw as $v) {
                        if (!mb_detect_encoding($v['key'], 'UTF-8', true)) {
                            $v['key'] = utf8_encode($v['key']);
                        }
                        if (!mb_detect_encoding($v['value'], 'UTF-8', true)) {
                            $v['value'] = utf8_encode($v['value']);
                        }
                        $res[$v['key']] = $v['value'];
                    }
                    $cacheHandler->store($mcKey, $res);
                }
            }
        } else {

            // From Database
            if ($raw = $this->getDbHandler()->fetchAll('languages', array('lang' => $lang))) {
                $res = array();
                foreach ($raw as $v) {
                    if (!mb_detect_encoding($v['key'], 'UTF-8', true)) {
                        $v['key'] = utf8_encode($v['key']);
                    }
                    if (!mb_detect_encoding($v['value'], 'UTF-8', true)) {
                        $v['value'] = utf8_encode($v['value']);
                    }
                    $res[$v['id']] = new Mo_Lang(array(
                        'id' => $v['id'],
                        'lang' => $v['lang'],
                        'key' => $v['key'],
                        'value' => $v['value']));
                }
            }
        }

        return $res;
    }

    /**
     * Deletes a translation by its ID (physical delete).
     *
     * @param $id integer Translation ID.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function deleteTranslation($id)
    {
        $res = false;
        if ($raw = $this->getDbHandler()->fetchRow('languages', array('id' => $id))) {
            if ($res = $this->getDbHandler()->delete('languages', array('id' => $id))) {
                $this->getCacheHandler()->delete(sprintf(self::MC_KEY_LANG, $raw['lang']));
            }
        }

        return $res;
    }
}
