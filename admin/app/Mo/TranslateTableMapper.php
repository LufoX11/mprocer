<?php

/**
 * Model for script: TranslateTable.php.
 */

Loader::mo(array('Abstract'), true);
Loader::da(array('TranslateTable'), true);

class Mo_TranslateTableMapper extends Mo_Abstract
{
    /**
     * @see parent.
     */
    public function getDbHandler()
    {
        if (!$this->_dbHandler) {
            $this->setDbHandler('Da_TranslateTable');
        }

        return $this->_dbHandler;
    }

    /**
     * Fetchs the fields that need to be translated.
     *
     * @return array Fields to be translated.
     */
    public function fetchFieldsToTranslate()
    {
        // From Database
        $res = $this->getDbHandler()->fetchFieldsToTranslate(
            $this->_cfg['source']['table']['name'],
            $this->_cfg['source']['table']['fieldText'],
            $this->_cfg['source']['table']['fieldId'],
            $this->_cfg['source']['table']['fieldIdOffset'],
            $this->_cfg['source']['table']['limit']);

        return $res;
    }

    /**
     * Inserts the translation.
     *
     * @param $id mixed Source row ID reference.
     * @param $text string Translated text.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public function insertTranslation($id, $text)
    {
        $res = $this->getDbHandler()->insert(
            $this->_cfg['target']['table']['name'],
            array(
                $this->_cfg['target']['table']['fieldId'] => $id,
                $this->_cfg['target']['table']['fieldText'] => $text
            ),
            array(
                'update' => array($this->_cfg['target']['table']['fieldText'])
            ));

        return $res;
    }
}
