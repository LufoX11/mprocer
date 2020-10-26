<?php

/**
 * Helper file for template with usefull and common forms blocks.
 */

Loader::hp(array('Base', 'Form'), true);

class Hp_View_Form extends Hp_Base
{
    /**
     * Alias of Hp_Form::selectCurrency().
     *
     * @see Hp_Form::selectCurrency().
     */
    public function selectCurrency($name, $options = array(), $selected = null)
    {
        $res = Hp_Form::selectCurrency($name, $options, $selected);

        return $res;
    }

    /**
     * Alias of Hp_Form::selectType().
     *
     * @see Hp_Form::selectType().
     */
    public function selectType($name, $options = array(), $selected = null)
    {
        $res = Hp_Form::selectType($name, $options, $selected);

        return $res;
    }

    /**
     * Alias of Hp_Form::selectTrainCompanies();
     *
     * @see Hp_Form::selectTrainCompanies();
     */
    public function selectTrainCompanies($name, $options = array(), $selected = null)
    {
        $res = Hp_Form::selectTrainCompanies($name, $options, $selected);

        return $res;
    }

    /**
     * Alias of Hp_Form::listJsTrainCompanies();
     *
     * @see Hp_Form::listJsTrainCompanies();
     */
    public function listJsTrainCompanies()
    {
        $res = Hp_Form::listJsTrainCompanies();

        return $res;
    }

    /**
     * Alias of Hp_Form::select().
     *
     * @see Hp_Form::select().
     */
    public function select($name, $values = array(), $options = array(), $selected = null)
    {
        $res = Hp_Form::select($name, $values, $options, $selected);

        return $res;
    }

    /**
     * Alias of Hp_Form::selectRange().
     *
     * @see Hp_Form::selectRange().
     */
    public function selectRange($name, $start, $end, $options = array(), $selected = null)
    {
        $res = Hp_Form::selectRange($name, $start, $end, $options, $selected);

        return $res;
    }
}
