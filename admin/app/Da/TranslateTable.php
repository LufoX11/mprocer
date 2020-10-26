<?php

/**
 * TranslateTable data access.
 */

Loader::da(array('BaseMysql'), true);

class Da_TranslateTable extends Da_BaseMysql
{
    /**
     * Fetchs the fields that need to be translated.
     *
     * @param $tableName string Source table name.
     * @param $fieldText string Field with text to translate.
     * @param $fieldId string Field with ID reference for source and target.
     * @param $fieldIdOffset integer Offset to start from (offset from fieldId).
     * @param $limit integer Fields limit to retrieve.
     * @return array Fields to be translated.
     */
    public function fetchFieldsToTranslate(
        $tableName, $fieldText, $fieldId = null, $fieldIdOffset = null, $limit = null)
    {
        $this->setDbAccessHandlerType(self::HANDLER_READ);
        $fieldId = (is_null($fieldId) ? 'id' : $fieldId);
        $fieldIdOffset = (is_null($fieldIdOffset) ? 0 : $fieldIdOffset);
        $limit = (is_null($limit) ? 100 : $limit);

        $res = $this->query(sprintf(''
            . 'SELECT `%s` id, `%s` text '
            . 'FROM `%s` '
            . 'WHERE `%s` > "%s" '
            . 'LIMIT %d',
            $fieldId,
            $fieldText,
            $tableName,
            $fieldId,
            $fieldIdOffset,
            $limit));

        return $res;
    }
}
