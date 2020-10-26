<?php

/**
 * Main data source for Consult-Ar API.
 */

Loader::ds(array('Base', 'Interface'), true);
Loader::hp(array('DateTime', 'Email'), true);
Loader::mo(array('Flights', 'Flight', 'Journeys', 'Segment', 'AirlinesMapper', 
    'AirportsMapper', 'Pricing', 'Cabin', 'GeographyMapper'), true);

class Ds_Consultar extends Ds_Base implements Ds_Interface
{
    /**
     * @const Memcached keys.
     */
    const MC_KEY_FLIGHTS_BY_MULTIFIELDS = 'Ds_Consultar::flights::multiFields-%s::v2::2';
    const MC_KEY_FLIGHTS_TIME = 600; // 10 Mins

    /**
     * Saves data for a flight booking in DB.
     *
     * @param $data array Booking data:
     *                    departureLocation string.
     *                    arrivalLocation string.
     *                    passengers array (ADT => array(), CH => array(), INF => array()).
     *                    contact array User contact data.
     *                    segments array Flight segments.
     *                    pricing array Pricing details (total, tax, agentFee...).
     * @return array Booking data on success; Error code and details otherwise.
     */
    public function saveBooking(array $data)
    {
        // Defaults
        $data = array_merge(
            array(
                'passengers' => array(
                    'ADT' => array(),
                    'CH' => array(),
                    'INF' => array()
                ),
                'contact' => array(),
                'segments' => array(
                    'departure' => array(),
                    'return' => array()
                ),
                'pricing' => array(
                    'details' => array(
                        'ADT' => array(),
                        'CH' => array(),
                        'INF' => array()
                    ),
                    'zk' => 0
                )
            ),
            $data
        );
        $res = array(
            'error' => array(
                'code' => 100001,
                'message' => 'Error al conectar con el proveedor remoto.'
            ),
            'data' => array(
                'booking' => array(
                    'code' => ""
                )
            )
        );

        // prepare
        $queryString = array();

        // check pricing
        if (count($data['pricing'])) {
            $queryString['tarifa']['FareType'] = $data['pricing']['fareType'];
            $queryString['tarifa']['currency'] = "ARS";
            $queryString['tarifa']['value'] = $data['pricing']['total'];
            $queryString['tarifa']['original'] = $data['pricing']['original'];
            $queryString["tarifa"]["ValidatingCarrier"] = $data['pricing']['carrier'];
        }

        // check segments
        if (count($data['segments'])) {
            foreach ($data['segments'] as $k => $segments) {
                foreach ($segments as $kk => $segment) {
                    $queryString['vuelos'][$k][$kk]['fechasalida'] = date('Y-m-d', strtotime($segment['departure']));
                    $queryString['vuelos'][$k][$kk]['origen'] = $segment['departureLocation'];
                    $queryString['vuelos'][$k][$kk]['destino'] = $segment['arrivalLocation'];
                    $queryString['vuelos'][$k][$kk]['aerolinea'] = $segment['company'];
                    $queryString['vuelos'][$k][$kk]['numero'] = $segment['flightNumber'];
                    $queryString['vuelos'][$k][$kk]['clase'] = $segment['classCode'];
                    $queryString['vuelos'][$k][$kk]['asientos'] = $segment['passengers'];
                }
            }
        }

        // check contact
        if (count($data['contact'])) {
            if (isset($data['contact']['email'])) {
                $queryString['camposextras']['email'] = $data['contact']['email'];
            }
            if (isset($data['contact']['phone'])) {
                $queryString['camposextras']['telefono'] = $data['contact']['phone'];
            }
        }

        // check passengers
        if (count($data['passengers'])) {
            $c = 0;
            foreach ($data['passengers'] as $passengerType => $passengerList) {
                foreach ($passengerList as $passenger) {
                    $queryString['pasajeros'][$c]['ptc'] = $passengerType;
                    $queryString['pasajeros'][$c]['apellido'] = $passenger['lastname'];
                    $queryString['pasajeros'][$c]['nombre'] = $passenger['name'];
                    $queryString['pasajeros'][$c]['nacimiento'] = date('Y-m-d', strtotime($passenger['birthdate']));
                    $c++;
                }
            }
        }

        // requirements
        $queryString['key'] = $this->_options['key'];

        // build url
        $url = $this->_options['url'] . 'booking.php?' . rawurldecode(http_build_query($queryString, '&'));

        // call url
        try {
            $raw = $this->_curlService->exec($url);
            $raw = json_decode($raw, true);
        } catch (Exception $e) {
            error_log($e);
            $httpCode = $this->_curlService->getInfo(CURLINFO_HTTP_CODE);
            $message = 'Bad response format.';
            if (preg_match("/RESPONSE: '(.*)'/", $e->getMessage(), $raw)) {
                $raw = json_decode($raw[1], true);
                if (isset($raw['error']) && is_array($raw['error'])) {
                    $message = '[Original] - ' . implode(', ', $raw['error']);
                }
            }
            $res['error']['rawMessage'] = $message;
            switch ($httpCode) {

                case 406: // Error in data sent
                    $res['error']['code'] = 100004;
                    $res['error']['message'] = 'Error en el proveedor remoto al validar los datos.';
                    break;

                case 500: // Server error
                    $res['error']['code'] = 100001;
                    $res['error']['message'] = 'Error al conectar con el proveedor remoto.';
                    break;

                default: // Unknown error by local server (error is specified by remote data source)
                    $res['error']['code'] = 100002;
                    $res['error']['message'] = 'Error desconocido.';
            }

            // Send alert email
            $Hp_Email = new Hp_Email($this->_cfg);
            $Hp_Email->sendPartnerAlert(
                "MPROCER_PARTNER_ERROR: Unknown [{$res['error']['code']}].",
                ''
                    . "Code: {$res['error']['code']}\n"
                    . "Message: {$res['error']['rawMessage']}\n"
                    . "Request: \n"
                    . "    URL: {$url} \n"
                    . "Response:\n\n" . print_r($res, true));
        }

        if (isset($raw['codigo'])) {
            $res['error']['code'] = 0;
            $res['error']['message'] = '';
            $res['data'] = array('booking' => array('code' => $raw['codigo']));
        }

        return $res;
    }

    /**
     * Search flights.
     *
     * @param $departureLocation mixed IATA code of departure location.
     *                                 If multiple, an array with more than one location can be provided.
     * @param $arrivalLocation mixed IATA code of arrival location.
     *                               If multiple, an array with more than one location can be provided.
     * @param $departureDate mixed Date of departure (in "dmy" format).
     *                             If multiple, an array with more than one location can be provided.
     * @param $travellers array Flight travellers:
     *                          "A" => integer Amount of adults (1 at least).
     *                          "C" => integer Amount of childs.
     *                          "IN" => integer Amount of infants.
     * @param $returnDate string Date of return (in "dmy" format).
     * @param $options array Additional options:
     *                       limit integer Results limit (default 50).
     *                       currency string Conversion rate (default ARS).
     * @return array Available flights.
     */
    public function fetchFlights(
        $departureLocation,
        $arrivalLocation,
        $departureDate,
        array $travellers = array(),
        $returnDate = null,
        array $options = array())
    {
        // Defaults
        $res = array(
            'flights' => array(),
            'error' => array(
                'code' => 0,
                'message' => ''
            )
        );

        $cacheHandler = $this->getCacheHandler();
        if (is_array($departureLocation)) { // Will suppose that arrivalLocation and departureDate are too
            $mcKey = sprintf(self::MC_KEY_FLIGHTS_BY_MULTIFIELDS,
                md5(''
                    . json_encode($departureLocation)
                    . json_encode($arrivalLocation)
                    . json_encode($departureDate)
                    . json_encode($travellers)
                    . json_encode($options)));
        } else {
            $mcKey = sprintf(self::MC_KEY_FLIGHTS_BY_MULTIFIELDS,
                md5("{$departureLocation}{$arrivalLocation}{$departureDate}{$returnDate}"
                    . json_encode($travellers)
                    . json_encode($options)));
        }
        if ($options['cache'] && $raw = $cacheHandler->fetch($mcKey)) {

            return $raw;
        }

        // prepare destinos
        $queryString = array();
        if (!is_array($departureLocation)) {
            $departureLocation = array($departureLocation);
        }
        if (!is_array($arrivalLocation)) {
            $arrivalLocation = array($arrivalLocation);
        }
        foreach ($departureLocation as $key => $value) {
            if (isset($arrivalLocation[$key])) {
                $queryString[] = "destinos[]=" . $value;
                $queryString[] = "destinos[]=" . $arrivalLocation[$key];
            }
        }
        // prepare fechas
        if (!is_array($departureDate)) {
            $departureDate = array($departureDate);
        }
        if (empty($returnDate)) {
            $returnDate = array();
        } elseif (!is_array($returnDate)) {
            $returnDate = array($returnDate);
        }
        foreach (array_merge($departureDate, $returnDate) as $value) {
            $queryString[] = "fechas[]=" . Hp_DateTime::toIso($value);
        }
        $queryString[] = "adultos=" . $travellers['A'];
        $queryString[] = "menores=" . $travellers['C'];
        $queryString[] = "bebes=" . $travellers['IN'];
        $queryString[] = "clase=Economy";
        $queryString[] = "key=" . $this->_options['key'];

        // build url
        $url = $this->_options['url'] . 'availability.php?' . implode('&', $queryString);

        // Read Consult-Ar response from api. Temporarily commented.
        try {
            $raw = $this->_curlService->exec($url);
            $raw = json_decode($raw);

            // Error on results ($raw == null | "" | array(0 => "<error message>")
            if (!$raw || (count($raw) == 1 && (is_string($raw[0]) || !$raw[0]))) {
                $httpCode = $this->_curlService->getInfo(CURLINFO_HTTP_CODE);
                switch ($httpCode) {

                    case 204: // No available flights
                        $res['error']['code'] = 100003;
                        $res['error']['message'] = 'No se encontraron vuelos disponibles.';
                        break;

                    default: // Unknown error by local server (error is specified by remote data source)
                        $res['error']['code'] = 100002;
                        $res['error']['message'] = (is_array($raw) && $raw[0] ? $raw[0] : 'Error desconocido.');

                        // Send alert email
                        $Hp_Email = new Hp_Email($this->_cfg);
                        $Hp_Email->sendPartnerAlert(
                            "MPROCER_PARTNER_ERROR: Unknown [{$res['error']['code']}].",
                            ''
                                . "Code: {$res['error']['code']}\n"
                                . "Message: {$res['error']['message']}\n"
                                . "Request: \n"
                                . "    Departure Location: " . json_encode($departureLocation) . "\n"
                                . "    Arrival Location: " . json_encode($arrivalLocation) . "\n"
                                . "    Departure Date: " . json_encode($departureDate) . "\n"
                                . "    Return Date: " . json_encode($returnDate) . "\n"
                                . "    Travellers: " . json_encode($travellers) . "\n"
                                . "    Options: " . json_encode($options) . "\n"
                                . "    URL: http://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}  \n"
                                . "    Raw URL: {$url} \n"
                                . "Response:\n\n" . print_r($res, true));
                }
            }
        } catch (Exception $e) {
            $httpCode = $this->_curlService->getInfo(CURLINFO_HTTP_CODE);
            $sendEmail = false;
            $message = '';
            if (preg_match("/RESPONSE: '(.*)'/", $e->getMessage(), $raw)) {
                $raw = json_decode($raw[1], true);
                if (isset($raw['error'])) {
                    if (is_array($raw['error'])) {
                        $message = '[Original] - ' . implode(', ', $raw['error']);
                    } else {
                        $message = "[Original] - {$raw['error']}";
                    }
                }
            }
            $res['error']['rawMessage'] = $message;
            switch ($httpCode) {

                case 406: // Error in data sent
                    $res['error']['code'] = 100004;
                    if ($res['error']['rawMessage']) {
                        preg_match("/(\[.*\] -)( ?\[.*\])? ?(Error en consulta.)? ?(.*)/", $message, $raw);
                        $res['error']['message'] = end($raw);
                    } else {
                        $res['error']['message'] = 'Error en el proveedor remoto al validar los datos.';
                    }
                    break;

                case 500: // Server error
                    $sendEmail = true;
                    $res['error']['code'] = 100001;
                    $res['error']['message'] = 'Error al conectar con el proveedor remoto.';
                    break;

                default: // Unknown error by local server (error is specified by remote data source)
                    $sendEmail = true;
                    $res['error']['code'] = 100002;
                    $res['error']['message'] = 'Error desconocido.';
            }

            // Send alert email
            if ($sendEmail) {
                $Hp_Email = new Hp_Email($this->_cfg);
                $Hp_Email->sendPartnerAlert(
                    "MPROCER_PARTNER_ERROR: Unknown [{$res['error']['code']}].",
                    ''
                        . "Code: {$res['error']['code']}\n"
                        . "Message: {$res['error']['rawMessage']}\n"
                        . "Request: \n"
                        . "    URL: {$url} \n"
                        . "Response:\n\n" . print_r($res, true));
            }
        }

        // Something gone wrong
        if ($res['error']['code']) {

            return $res;
        }

        // Some inits
        $Mo_GeographyMapper = new Mo_GeographyMapper($this->_cfg);
        $Mo_AirportsMapper = new Mo_AirportsMapper($this->_cfg);

        if (count($raw)) {
            foreach ($raw as $k => $v) {
                // Inner Inits
                $flights = new Mo_Flights();

                // play with prices
                if (count($v->price)) {
                    foreach ($v->price as $priceData) {
                        if ($priceData->currency == $options['currency']) {
                            // prepare object with price details by passengers
                            // API doesn't show a total, so we should calculate according
                            // to each passenger's tax.
                            $totalTaxes = 0;
                            // object to store price details per passenger type
                            $passengers = array();
                            if (count($priceData->PTC_FareBreakdowns)) {
                                foreach ($priceData->PTC_FareBreakdowns as $passengerType => $priceDetails) {
                                    $travellerType = Mo_Cabin::getTitleByType($passengerType);
                                    $passenger = new Mo_Passenger();
                                    $passenger->setAmount($travellers[$travellerType]);
                                    $passenger->setType($passengerType);
                                    $passenger->setUnitPriceTotal($priceDetails->TotalFare);
                                    $passenger->setUnitPriceTax($priceDetails->Taxes);
                                    // Insert each passenger as Mo_Passenger, so later we can
                                    // add them to the journey.
                                    $passengers[] = $passenger;
                                    unset($passenger);
                                    // Acumulate taxes, so later we can add them to the Mo_Pricing
                                    // inside journey.
                                    $totalTaxes+= $priceDetails->Taxes;
                                }
                            }
                            break;
                        }
                    }
                }

                // get original price
                $original = null;
                if (count($v->bookingdata)) {
                    foreach ($v->bookingdata->montos as $monto) {
                        if ($monto->currency === $options['currency']) {
                            $flights->setPrice($monto->value);
                            $original = (float) $monto->original;
                        }
                    }
                    if (isset($v->bookingdata->ValidatingCarrier)) {
                        $flights->setCarrier($v->bookingdata->ValidatingCarrier);
                    }
                    if (isset($v->bookingdata->FareType)) {
                        $flights->setFareType($v->bookingdata->FareType);
                    }
                }

                if (count($v->flights)) {
                    $onlyFirst = false;

                    // get journeys
                    $companies = array();

                    // Is the main airline to show in the result.
                    // First airline from the API.
                    $mainAirline = null;

                    foreach ($v->flights as $flightData) {
                        /**
                         * NOTA: parece haber un error.
                         * La cantidad de $v->flights es igual a la cantidad de segmentos
                         * que haya dentro de cada uno (en $flightData->segments).
                         * Es información repetida, por eso solo se itera sobre el primer
                         * $flightData hasta confirmar como proceder.
                         * Se itera solo por el primero para obtener los tramos del vuelo.
                         * Se saltean los restantes.
                         */
                        if ($onlyFirst) {
                            continue;
                        }
                        $onlyFirst = true;

                        // Prepare data from the first airline.
                        if (is_null($mainAirline)) {
                            $mainAirline = new Mo_Airline(array(
                                'iata' => $flightData->airline
                            ));
                        }

                        // Group each flight section here in order to combine them later.
                        // Note: group by RefNumber.
                        $flightsSections = array();

                        // Check each segment.
                        // This contains info about every flight section. We should combine them.
                        if (count($flightData->segments)) {
                            foreach ($flightData->segments as $segmentData) {
                                // Create flight
                                $flight = new Mo_Flight();
                                $flight->setTime($this->_parseDuration($segmentData->duration));

                                // Store each company to check later if it's always the same, 
                                // or if there are multiple airlines involved.
                                if (isset($segmentData->airline)) {
                                    if (!in_array($segmentData->airline, $companies, true)) {
                                        array_push($companies, $segmentData->airline);
                                    }
                                }

                                // Add airline
                                $airline = new Mo_Airline(array(
                                    'iata' => $segmentData->airline
                                ));
                                $airline->removeAttributes(array('_multiple'));
                                $flight->setCompany($airline);
                                unset($airline);

                                // Set pricing
                                $pricing = $this->_parsePricing($flights->getPrice(), $original, $totalTaxes);
                                $flight->setPricing($pricing);
                                unset($pricing);

                                // Temporal place for segments, we need to check changeAirport
                                // before add them to the flight.
                                $segments = array();

                                // Iterate for flights and create each segment (tramo)
                                if (count($segmentData->flights)) {
                                    foreach ($segmentData->flights as $flightSegmentData) {

                                        // Create a segment
                                        $segment = new Mo_Segment();
                                        $segment->setDepartureLocation($flightSegmentData->DepartureAirportLocationCode);
                                        $segment->setArrivalLocation($flightSegmentData->ArrivalAirportLocationCode);
                                        $segment->setNumber($flightSegmentData->FlightNumber);
                                        $segment->setDeparture($flightSegmentData->DepartureDateTime);
                                        $segment->setArrival($flightSegmentData->ArrivalDateTime);

                                        // Set Id
                                        $flight->setId($segmentData->RefNumber);

                                        // Create Airport From
                                        $airportData = $Mo_AirportsMapper->findWithLocationData( // lang!!!
                                            $flightSegmentData->DepartureAirportLocationCode);
                                        $airport = $this->_parseAirport($airportData);
                                        $segment->setLocationFrom($airport);
                                        unset($airport);

                                        // Create Airport To
                                        $airportData = $Mo_AirportsMapper->findWithLocationData( // lang!!!
                                            $flightSegmentData->ArrivalAirportLocationCode);
                                        $airport = $this->_parseAirport($airportData);
                                        $segment->setLocationTo($airport);
                                        unset($airport);

                                        // Create Cabin
                                        foreach ($travellers as $k => $v) {
                                            if ($v > 0) {
                                                if ($type = Mo_Cabin::getTypeByTitle($k)) {
                                                    $cabin = $this->_parseCabin($flightSegmentData);
                                                    $segment->setCabin($type, $cabin);
                                                }
                                            }
                                        }

                                        // Create Company/Airline
                                        $airline = new Mo_Airline(array(
                                            'iata' => $flightSegmentData->OperatingAirlineCode,
                                            'name' => $flightSegmentData->OperatingAirlineCompanyShortName
                                        ));
                                        $airline->removeAttributes(array('_multiple'));
                                        $segment->setCompany($airline);

                                        // Fill airline name in $mainAirline / $flight->company if they match the IATA
                                        if ($mainAirline->iata == $airline->iata) {
                                            $mainAirline->name = $airline->name;
                                        }
                                        if ($flight->company->iata = $airline->iata) {
                                            $flight->company->name = $airline->name;
                                        }

                                        unset($airline);
                                        
                                        // Insert segment into current flight
                                        $segments[] = $segment;
                                        unset($segment);
                                    }
                                }

                                // We need to check if exists an aiport change. So we should
                                // compare airports between each segment, to check if the
                                // departure and the arrival are the same or not.
                                $changeAirport = false;
                                $temporalSegments = $this->_object_to_array($segments);
                                for ($fi = 0; $fi < count($temporalSegments) - 1 ; $fi ++) {
                                    $from = $temporalSegments[$fi];
                                    $to = $temporalSegments[$fi + 1];
                                    if ($from['arrivalLocation'] != $to['departureLocation']) {
                                        $changeAirport = true;
                                    } else {
                                        $changeAirport = false;
                                    }
                                }

                                // Add each segment
                                foreach ($segments as $segment) {
                                    $segment->setChangeAirport($changeAirport);
                                    $flight->setSegments($segment);
                                }
                                unset($segments);

                                // Set departure and arrival location
                                $flight->setDepartureLocation($segmentData->departure);
                                $flight->setArrivalLocation($segmentData->arrival);

                                // Group the flights according to it's section.
                                // So later we can combine them.
                                $flightsSections[$segmentData->RefNumber][] = $flight;
                                unset($flight);
                            }
                        }

                        /**
                         * Make the cartesian product of every flight section, so we can get 
                         * every combination between them.
                         * E.g:
                         *      If Consult-Ar returns:      We should combined them as:
                         *           Section A-1                Section A-1, B-1, C-1
                         *           Section B-1                Section A-1, B-1, C-2
                         *           Section B-2                Section A-1, B-2, C-1
                         *           Section B-3                Section A-1, B-2, C-2
                         *           Section C-1                Section A-1, B-3, C-1
                         *           Section C-2                etc... 
                         */
                        $flightsCombined = $this->_combineFlights($flightsSections);

                        // go over each combination and populate flights
                        if (count($flightsCombined)) {
                            foreach ($flightsCombined as $k => $v) {
                                if (count($v)) {
                                    $journeys = new Mo_Journeys();
                                    foreach ($v as $f) {
                                        // Set flight
                                        $journeys->setFlights($f);

                                        // Set pricing
                                        $pricing = $this->_parsePricing($f->getPricing()->getTotal(), $original, $totalTaxes);
                                        $journeys->setPricing($pricing);
                                        unset($pricing);

                                        // Set airline
                                        $airline = clone $mainAirline;
                                        $airline->removeAttributes(array('_multiple'));
                                        $journeys->setCompany($airline);
                                        unset($airline);

                                        // Add passengers
                                        if (count($passengers)) {
                                            foreach ($passengers as $passenger) {
                                                $journeys->setPassengers($passenger);
                                            }
                                        }
                                    }
                                    // Add journey
                                    $flights->setJourneys($journeys);
                                    unset($journeys);
                                }
                            }
                        }
                    }

                    // set to the main airline if it has multiple airports involved or not.
                    $mainAirline->setMultiple((count($companies) > 1));
                    $flights->setCompany($mainAirline);
                    unset($mainAirline);
                }

                if ($flights) {
                    $res['flights'][] = $flights;
                }

                unset($flights);
            } // end foreach raw
        }

        // We already iterate over each flight. Prepare the final array.
        if (count($res['flights'])) {
            $res['departureLocation'] = $departureLocation[0];
            $res['arrivalLocation'] = end($arrivalLocation);

            if (($data = $Mo_GeographyMapper->findCity($res['departureLocation'])) 
                || ($data = $Mo_AirportsMapper->findWithLocationData($res['departureLocation']))) {
                $res['departureCountry'] = (isset($data['countries_code'])
                    ? $data['countries_code']
                    : $data['country_code']);
            }

            if (($data = $Mo_GeographyMapper->findCity($res['departureLocation'])) 
                || ($data = $Mo_AirportsMapper->findWithLocationData($res['departureLocation']))) {
                $res['arrivalCountry'] = (isset($data['countries_code'])
                    ? $data['countries_code']
                    : $data['country_code']);
            }

            $res['total'] = count($res['flights']);
            $res['flights'] = $this->_object_to_array($res['flights']);
        }

        // Save in MC
        $cacheHandler->store($mcKey, $res, self::MC_KEY_FLIGHTS_TIME);

        // Final response.
        return $res;
    }

    /**
     * Combine flights.
     * 
     * @param  object $flights.
     * @return object.
     */
    protected function _combineFlights($flights)
    {
        $result = array();
        while (list($key, $values) = each($flights)) {
            if (empty($values)) {
                continue;
            }
            if (empty($result)) {
                foreach($values as $value) {
                    $result[] = array($key => $value);
                }
            }
            else {
                $append = array();
                foreach($result as &$product) {
                    $product[$key] = array_shift($values);
                    $copy = $product;
                    foreach($values as $item) {
                        $copy[$key] = $item;
                        $append[] = $copy;
                    }
                    array_unshift($values, $product[$key]);
                }
                $result = array_merge($result, $append);
            }
        }
        return $result;
    }

    /**
     * Parse an airport data.
     * 
     * @param  array  $airportData.
     * @return object Mo_Airport.
     */
    protected function _parseAirport($airportData)
    {
        $airport = new Mo_Airport();
            $airport->setName($airportData['name']);
            $airport->setRegionName($airportData['region_name_es']);
            $airport->setLatitude($airportData['latitude']);
            $airport->setLongitude($airportData['longitude']);
            $airport->setWikipediaLink($airportData['wikipedia_link']);
        // clean
        $airport->removeAttributes(array(
            '_id', '_ident', '_type', '_regionsCode', '_municipalityEn',
            '_municipalityEs', '_iata', '_homeLink', '_commercialFlights'
        ));
        return $airport;
    }

    /**
     * Parse duration.
     * 
     * @param  integer $duration
     * @return string
     */
    protected function _parseDuration($duration)
    {
        return sprintf("%02dhs %02dm", floor($duration/60), ($duration%60));
    }

    /**
     * Parse pricing.
     * 
     * @param  float  $total.
     * @param  float  $original.
     * @param  float  $tax.
     * @return object Mo_Pricing.
     */
    protected function _parsePricing($total, $original = null, $tax = null)
    {
        $pricing = new Mo_Pricing();
            $pricing->setTotal($total);
        if (is_null($original)) {
            $pricing->removeAttributes(array('_original'));
        } else {
            $pricing->setOriginal($original);
            $pricing->setAgentFee((float) $total - $original);
        }
        if (is_null($tax)) {
            $pricing->removeAttributes(array('_tax'));
        } else {
            $pricing->setTax($tax);
        }
        return $pricing;
    }

    /**
     * Parse cabin.
     *
     * @param  array $flightSegmentData.
     * @return object Mo_Cabin.
     */
    protected function _parseCabin($flightSegmentData)
    {
        $cabin = new Mo_Cabin();
        $cabin->setRbd($flightSegmentData->BookingClassAvailsResBookDesigCode);
        $cabin->setClass($flightSegmentData->BookingClassAvailsResBookDesigCode);
        $cabin->setClassName(Mo_Cabin::getClassNameByClass($flightSegmentData->BookingClassAvailsResBookDesigCode));
        return $cabin;
    }
}
