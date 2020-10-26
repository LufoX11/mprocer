<?php

/**
 * Makes a new booking.
 */

$Slim->post('/:package/saveBooking', function ($service) use ($Slim)
{
    Loader::lib(array('Email'), true);
    Loader::mo(array('FlightsMapper'));

    $appCfg = $Slim->config('appCfg');

    $Email = new Email();
    $lang = (($lang = $Slim->request()->post('lang')) ? $lang : 'es');
    $data = array(
        'passengers' => $Slim->request()->post('passengers'),
        'contact' => $Slim->request()->post('contact'),
        'segments' => $Slim->request()->post('segments'),
        'pricing' => $Slim->request()->post('pricing')
    );

    ////
    // Validations.
    ////

    // passengers
    foreach ($data['passengers'] as $pT => $g) { // passengerType (ADT|CH|INF) | group
        foreach ($g as $k => $v) { // passengerNumber = $k + 1 | name, lastname...
            if (!isset($v['name']) || !$v['name']
                || !isset($v['lastname']) || !$v['lastname']
                || !isset($v['doc']) || !$v['doc']
                || !isset($v['docType']) || !$v['docType']
                || !isset($v['country']) || !$v['country']
                || !isset($v['birthdate']) || !$v['birthdate']
                || !isset($v['gender']) || !$v['gender'])
            {
                return Ajax::setBadRequest($Slim, array('data' =>
                    'Falta completar datos de pasajeros del '
                        . Mo_FlightsMapper::$passengerTitles[$pT] . ' ' . ($k + 1)));
            }
        }
    }

    // contact
    if (!isset($data['contact']['email']) || !$data['contact']['email']
        || !isset($data['contact']['name']) || !$data['contact']['name']
        || !isset($data['contact']['phone']) || !$data['contact']['phone'])
    {
        return Ajax::setBadRequest($Slim, array('data' => 'Falta completar datos de contacto.'));
    }
    if (!$Email->validateEmail($data['contact']['email'])) {
        return Ajax::setBadRequest($Slim, array('data' => 'El email de contacto parece no ser válido.'));
    }
    if (!isset($data['contact']['salesman']) || !$data['contact']['salesman']) {

        return Ajax::setBadRequest($Slim, array('data' => 'Por favor, seleccioná a tu vendedor.'));
    }

    // init
    $Mo_FlightsMapper = new Mo_FlightsMapper($appCfg, array('lang' => $lang));
    $res = $Mo_FlightsMapper->saveBooking($data);
    if ($res['error']['code']) {
        Ajax::setError($Slim, array('data' => "{$res['error']['message']} ({$res['error']['code']})."));
    } else {
        Ajax::setSuccess($Slim, array('success' => true, 'data' => $res['data']));
    }
});
