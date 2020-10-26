<?php

/**
 * Helper file for checking the type of the files.
 */

Loader::hp(array('Base'), true);

class Hp_FileTypes extends Hp_Base
{
    /**
     * @var array Header types.
     */
    protected static $_headers = array(
        'csv' => array(
            'text/csv',
            'text/plain',
            'application/csv',
            'text/comma-separated-values',
            'application/excel',
            'application/vnd.ms-excel',
            'application/vnd.msexcel',
            'text/anytext',
            'application/octet-stream',
            'application/txt'
        )
    );

    /**
     * @var array File associations.
     */
    protected static $_extensions = array(
        'movie' => array('avi', 'mpeg', 'mpg', 'mp4', 'fla', 'aaf', '3gp', 'asf', 'flv', 'm1v', 'm2v',
            'm4v', 'mkv', 'mov', 'mpe', 'ogg', 'rm', 'swf', 'wmv'),
        'image' => array('bmp', 'gif', 'ico', 'jpg', 'jpeg', 'png', 'tiff'),
        'compressed' => array('apk', 'bz', 'bz2', 'tar', 'tgz', 'gzip', 'zip', 'rar', 'gz', 'jar'),
        'written' => array('pdf', 'doc', 'xls', 'ppt', 'xlsx', 'ods', 'docx', 'csv', 'odt', 'txt',
            'html', 'xml', 'xhtml'),
        'audio' => array('mp3', 'wav', 'm4a', 'wma', 'ra', 'mid', 'midi')
    );

    /**
     * Gets the file type name.
     *
     * @param $fileExtension string File extension.
     * @return string File type if found; "unknown" otherwise.
     */
    public static function getFileType($fileExtension)
    {
        $res = 'unknown';
        foreach (self::$_extensions as $k => $v) {
            if (in_array(strtolower($fileExtension), $v)) {
                $res = $k;
                break;
            }
        }

        return $res;
    }

    /**
     * Checks if the file is a valid CSV file.
     *
     * @param $file mixed File path / resource / string.
     * @param $fieldsAmount integer The exact amount of fields the file should have on each row.
     * @param $header string File header.
     * @return boolean TRUE if valid; FALSE otherwise.
     */
    public static function isCsv($file, $fieldsAmount = null, $header = null)
    {
        $res = false;

        // Header checking
        if ($header && !in_array($header, self::$_headers['csv'])) {
            return false;
        }

        if (($raw = self::_getRaw($file)) && strpos($raw, "\n") !== false && strpos($raw, ',') !== false) {
            $csv = explode("\n", $raw);

            // Fields checking
            if ($fieldsAmount && ($csv = str_getcsv(current($csv))) && count($csv) <> $fieldsAmount) {
                return false;
            }

            $res = true;
        }

        return $res;
    }

    /**
     * Returns the file as string.
     *
     * @param $file mixed File path / resource / string.
     * @return array File as array on sucess; FALSE otherwise.
     */
    protected static function _getRaw($file)
    {
        $res = false;

        // Path: /path/to/file
        if (is_string($file) && file_exists($file)) {
            $res = file_get_contents($file);

        // String: Entire file passed as string
        } else if (is_string($file)) {
            $res = $file;

        // Resource: fopen("...")
        } else if (is_resource($file)) {
            while (!feof($file)) {
                $res .= fgets($file);
            }
        }

        return $res;
    }
}
