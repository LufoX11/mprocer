<?php

/**
 * Helper file for getting and parsing data from YouTube.com.
 */

Loader::hp(array('Base'), true);

class Hp_Youtube extends Hp_Base
{
    /**
     * @var array Gets info about an error occurred. List of possible errors (<key> => <description>):
     *            "json": Invalid JSON received.
     *            "curl": A CURL related error (might be connection related).
     *            "unknown": An unhandled error.
     */
    protected $_error = array();

    /**
     * Retrieves data from a single video by ID.
     *
     * @param $videoId string Video ID.
     * @return mixed ARRAY of video data on success; FALSE otherwise. You can get the error with getError().
     */
    public function fetchVideoData($videoId)
    {
        Loader::Lib(array('CurlService'));

        $CurlService = new CurlService();
        try {
            $raw = $CurlService->exec(
                "http://gdata.youtube.com/feeds/api/videos/{$videoId}",
                array(
                    'v' => 2,
                    'alt' => 'json'));
            $res = json_decode($raw, true);
            if (json_last_error() != JSON_ERROR_NONE) {
                $this->_error = array('json' => 'Invalid JSON response.');
                $res = false;
            }
        } catch (CurlServiceException $e) {
            $this->_error = array('curl' => $e);
            $res = false;
        } catch (Exception $e) {
            $this->_error = array('unknown' => $e);
            $res = false;
        }

        return $res;
    }

    /**
     * Gets the current error.
     *
     * @return array.
     */
    public function getError()
    {
        return $this->_error;
    }
}
