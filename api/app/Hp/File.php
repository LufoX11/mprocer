<?php

/**
 * Helper file for files related functions.
 */

Loader::hp(array('Base'), true);

class Hp_File extends Hp_Base
{
    /**
     * Writes data to a file on disk.
     *
     * @param $path string File path and name.
     * @param $stream string File content.
     * @param $mode string File open mode.
     * @return boolean TRUE on success; FALSE otherwise.
     */
    public static function write($path, $stream = null, $mode = 'a')
    {
        $res = false;
        if ($file = @fopen($path, $mode)) {
            $res = (fwrite($file, $stream) !== false);
            fclose($file);
        } else {
            error_log("Permission denied to write in file: '{$path}'");
        }

        return $res;
    }
}
