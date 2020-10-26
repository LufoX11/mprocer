<?php

/**
 * Helper file with usefull and common forms blocks.
 */

Loader::hp(array('Base'), true);

class Hp_Form extends Hp_Base
{
    /**
     * @var array Currency types.
     */
    protected static $_currency = array(
        'USD',
        'EUR'
    );

    /**
     * @var array Companies
     */
    protected static $_trainCompanies = array(
        'BAHN',
        'ACP',
        'TRENIT',
        'RENFE'
    );

    /**
     * @var array Types
     */
    protected static $_types = array(
        'passenger' => 'Pasajero',
        'agency' => 'Agencia'
    );

    /**
     * Put a select combo with common currency.
     *
     * @param string $name Name for element.
     * @param array $options Options for this element.
     * @param string $selected Value of selected currency.
     * @return string With html select code.
     */
    public static function selectCurrency($name, $options = array(), $selected = null)
    {
        $res = self::select($name, array_combine(self::$_currency, self::$_currency), $options, $selected);

        return $res;
    }

    /**
     * Generate a select with types
     *
     * @param string $name Name for element.
     * @param array $options Options for this element.
     * @param string $selected Value of selected currency.
     * @return string With html select code.
     */
    public static function selectType($name, $options = array(), $selected = null)
    {
        $res = self::select($name, self::$_types, $options, $selected);

        return $res;
    }

    /**
     * Put a select combo with train companies.
     *
     * @param string $name Name for element.
     * @param array $options Options for this element.
     * @param string $selected Value of selected company.
     * @return string With html select code.
     */
    public static function selectTrainCompanies($name, $options = array(), $selected = null)
    {
        $res = self::select($name, array_combine(self::$_trainCompanies, self::$_trainCompanies), $options, $selected);

        return $res;
    }

    /**
     * reate a select combo with a range of values.
     *
     * @param string $name Name for element.
     * @param int $start Start value.
     * @param int $end End value.
     * @param array $options Options for this element.
     * @param string $selected Selected value.
     * @return string With html select code.
     */
    public static function selectRange($name, $start, $end, $options = array(), $selected = null)
    {
        // set options into params
        $params = self::optionsIntoParams($options);

        // build element
        $res = sprintf('<select name="%s" %s>', $name, $params);
        if ($start <= $end) {
            for ($i = $start; $i <= $end; $i++) {            
                $res .= sprintf('<option value="%s" %s>%s</option>',
                    $i,
                    ($selected == $i ? ' selected="selected"' : ''),
                    $i);
            }
        }
        $res .= '</select>';        

        return $res;
    }

    /**
     * Create a select combo.
     *
     * @param string $name Name for element.
     * @param array $values Values to show.
     * @param array $options Options for this element.
     * @param string $selected Selected value.
     * @return string With html select code.
     */
    public static function select($name, $values, $options = array(), $selected = null)
    {
        // set options into params
        $params = self::optionsIntoParams($options);

        // build element
        $res = sprintf('<select name="%s" %s>', $name, $params);
        if (count($values)) {
            foreach ($values as $key => $value) {
                $res .= sprintf('<option value="%s" %s>%s</option>',
                    $key,
                    ($selected == $key ? ' selected="selected"' : ''),
                    $value);
            }
        }
        $res .= '</select>';        

        return $res;
    }

    /**
     * List train companies for generate a select by js.
     *
     * @return array with train companies.
     */
    public static function listJsTrainCompanies()
    {        
        $res = sprintf("['%s']", implode("', '", self::$_trainCompanies));

        return $res;
    }

    /**
     * Convert an array of options into a string with element params
     *
     * @param array $options
     * @return string $params
     */
    public static function optionsIntoParams(array $options = array())
    {
        $params = "";
        if (is_array($options) && count($options)) {
            foreach ($options as $k => $v) {
                $params.= sprintf('%s="%s" ', $k, $v);
            }
        }
        return $params;
    }
}
