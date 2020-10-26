<?php

/**
 * News object model.
 */

Loader::mo(array('Base'), true);

class Mo_News extends Mo_Base
{
    /**
     * @var integer News ID.
     */
    protected $_id;

    /**
     * @var integer Service ID.
     */
    protected $_services_id;

    /**
     * @var integer User Id. 
     */
    protected $_admin_users_id;

    /**
     * @var string News title.
     */
    protected $_title;

    /**
     * @var string News short description.
     */
    protected $_summary;

    /**
     * @var string News body.
     */
    protected $_description;

    /**
     * @var string Publication date and time.
     */
    protected $_datetime;

    /**
     * @var string Launching date and time.
     */
    protected $_launching;

    /**
     * @var string Expiration date and time.
     */
    protected $_expiration;

    /**
     * @var boolean Whether users were already notified or not.
     */
    protected $_notified;

    /**
     * @var string Link to access the original web news.
     */
    protected $_link;

    /**
     * @var string Short link to the news link.
     */
    protected $_shortlink;

    /**
     * @var string News image source.
     */
    protected $_image;

    /**
     * @var string News unique identity.
     */
    protected $_checksum;

    /**
     * Gets the image in medium size.
     *
     * @return string Image path.
     */
    public function getMdImage()
    {
        $res = '';
        if ($this->getImage()) {
            $img = pathinfo($this->getImage());
            $fileName = substr($img['filename'], 0, strlen($img['filename']) - 3);
            if (isset($img['extension'])) {
                $res = "{$img['dirname']}/{$fileName}-md.{$img['extension']}";
            }
        }

        return $res;
    }

    /**
     * Gets the image in big size.
     *
     * @return string Image path.
     */
    public function getBgImage()
    {
        $res = '';
        if ($this->getImage()) {
            $img = pathinfo($this->getImage());
            $fileName = substr($img['filename'], 0, strlen($img['filename']) - 3);
            if (isset($img['extension'])) {
                $res = "{$img['dirname']}/{$fileName}-bg.{$img['extension']}";
            }
        }

        return $res;
    }

    ////
    // Setters and Getters
    ////

    public function setId($id)
    {
        $this->_id = (integer) $id;
    }

    public function getId()
    {
        return $this->_id;
    }

    public function setServices_id($id)
    {
        $this->_services_id = (integer) $id;
    }

    public function getServices_id()
    {
        return $this->_services_id;
    }

    public function setAdmin_Users_id($id)
    {
        $this->_admin_users_id = (integer) $id;
    }

    public function getAdmin_Users_id()
    {
        return $this->_admin_users_id;
    }

    public function setTitle($name)
    {
        $this->_title = trim($name);
    }

    public function getTitle()
    {
        return $this->_title;
    }

    public function setSummary($text)
    {
        $this->_summary = trim($text);
    }

    public function getSummary()
    {
        return $this->_summary;
    }

    public function setDescription($text)
    {
        $this->_description = trim($text);
    }

    public function getDescription()
    {
        return $this->_description;
    }

    public function setDatetime($datetime)
    {
        $this->_datetime = date('Y-m-d H:i:s', strtotime($datetime));
    }

    public function getDatetime()
    {
        return $this->_datetime;
    }

    public function setLaunching($launching)
    {
        $this->_launching = date('Y-m-d H:i:s', strtotime($launching));
    }

    public function getLaunching()
    {
        return $this->_launching;
    }

    public function setExpiration($expiration)
    {
        $this->_expiration = date('Y-m-d H:i:s', strtotime($expiration));
    }

    public function getExpiration()
    {
        return $this->_expiration;
    }

    public function setNotified($notified)
    {
        $this->_notified = (integer) $notified;
    }

    public function getNotified()
    {
        return $this->_notified;
    }

    public function setLink($link)
    {
        $this->_link = trim($link);
    }

    public function getLink()
    {
        return $this->_link;
    }

    public function setShortlink($link)
    {
        $this->_shortlink = trim($link);
    }

    public function getShortlink()
    {
        return $this->_shortlink;
    }

    public function setImage($source)
    {
        $this->_image = trim($source);
    }

    public function getImage()
    {
        return $this->_image;
    }

    public function setChecksum($checksum)
    {
        $this->_checksum = $checksum;
    }

    public function getChecksum()
    {
        return $this->_checksum;
    }
}
