/**
 * Functions file for Flights.
 */

var Flights = (function () {

    /*** Private **************************************************************/

    /**
     * @var object Object instance.
     */
    var _instance,
        self;

    /**
     * Initialization.
     *
     * @param opts array Initialization options.
     * @return object An object instance.
     */
    function init(opts) {

        return self = {

            /*** Public *******************************************************/

            /**
             * @var array Stops titles.
             */
            segmentsTitles: [
                _("Primer segmento"),
                _("Segundo segmento"),
                _("Tercer segmento"),
                _("Cuarto segmento"),
                _("Quinto segmento"),
                _("Sexto segmento")
            ],

            /**
             * @var object Flight type titles.
             */
            flightTypeTitles: {
                "departure": _("Ida"),
                "return": _("Vuelta"),
                "multiple": _("Tramo")
            },

            /**
             * @var object Passengers titles.
             */
            passengersTitles: {
                "singular": {
                    "ADT": _("Adulto"),
                    "CH": _("Menor"),
                    "INF": _("Bebé")
                },
                "plural": {
                    "ADT": _("Adultos"),
                    "CH": _("Menores"),
                    "INF": _("Bebés")
                }
            },

            /**
             * @var object Results of a performed search.
             */
            searchResults: {},

            /**
             * @var object Parameters of the search.
             */
            searchParams: {},

            /**
             * @var object Booking details.
             */
            bookingDetails: {},

            /**
             * Load flight data inside servicesFlights page.
             *
             * @param data object Data to load:
             *                    from string FROM location (BUE)
             *                    to string TO location (USH)
             *                    departureDate string DEPARTURE date (YMD)
             *                    returnDate string RETURN date (YMD)
             *                    adults integer Amount of adults (1)
             *
             * @return self.
             */
            loadFlights: function (data) {

                var forms = Forms.getInstance(),
                    maxKids = 7;

                // From
                if (data.from) {
                    Main.ajax({
                        url: Main.getApiPath("findAirport"),
                        spinnerMessage: _("Inicializando datos."),
                        data: {
                            lang: Main.language,
                            code: data.from
                        },
                        success: function (res) {

                            var data = {
                                    id: res.data.iata,
                                    title: res.data.countryName,
                                    subtitle: res.data.regionName,
                                    image: Main.baseUrl + "img/countries/" + res.data.countryCode.toLowerCase() + ".svg"
                                };

                            // Update button text and hidden element for all boxes
                            $.each(["oneway", "roundtrip"], function (k, v) {

                                var inst = $("#page-servicesFlights-" + v + "-from").mobiscroll("getInst");

                                $("#page-servicesFlights-" + v + "-from_dummy").val(data.title + ", " + data.subtitle);
                                $("#page-servicesFlights-" + v + "-from-data").val(data.id);
                                inst.settings.data = forms.Components.Autocomplete.createSelectOptions([ data ]);
                                inst.refresh();
                            });
                        }
                    });
                }

                // To
                if (data.to) {
                    Main.ajax({
                        url: Main.getApiPath("findAirport"),
                        spinnerMessage: _("Inicializando datos."),
                        data: {
                            lang: Main.language,
                            code: data.to
                        },
                        success: function (res) {

                            var data = {
                                    id: res.data.iata,
                                    title: res.data.countryName,
                                    subtitle: res.data.regionName,
                                    image: Main.baseUrl + "img/countries/" + res.data.countryCode.toLowerCase() + ".svg"
                                };

                            // Update button text and hidden element for all boxes
                            var inst = $("#page-servicesFlights-roundtrip-to").mobiscroll("getInst");

                            $("#page-servicesFlights-roundtrip-to_dummy").val(data.title + ", " + data.subtitle);
                            $("#page-servicesFlights-roundtrip-to-data").val(data.id);
                            inst.settings.data = forms.Components.Autocomplete.createSelectOptions([ data ]);
                            inst.refresh();
                        }
                    });
                }

                // Departure date
                if (data.departureDate) {
                    date = moment(data.departureDate, "DDMMYY");

                    // Oneway
                    $("#page-servicesFlights-oneway-departure-data").val(date.format("DDMMYY"));
                    $("#page-servicesFlights-oneway-departure")
                        .html(date.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-oneway-departure").mobiscroll("setDate", date.toDate(), true);

                    // Roundtrip
                    $("#page-servicesFlights-roundtrip-departure-data").val(date.format("DDMMYY"));
                    $("#page-servicesFlights-roundtrip-departure")
                        .html(date.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-roundtrip-departure").mobiscroll("setDate", date.toDate(), true);
                }

                // Return date
                if (data.returnDate) {
                    date = moment(data.returnDate, "DDMMYY");

                    // Roundtrip
                    $("#page-servicesFlights-roundtrip-return-data").val(date.format("DDMMYY"));
                    $("#page-servicesFlights-roundtrip-return")
                        .html(date.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", date.toDate(), true);
                }


                // Adults
                if (data.adults) {

                    // Oneway
                    $("#page-servicesFlights-oneway-adults")
                        .text(data.adults)
                        .mobiscroll("setValue", data.adults);

                    // Roundtrip
                    $("#page-servicesFlights-roundtrip-adults")
                        .text(data.adults)
                        .mobiscroll("setValue", data.adults);

                    // Multiple
                    $("#page-servicesFlights-multiple-adults")
                        .text(data.adults)
                        .mobiscroll("setValue", data.adults);
                }

                // Kids (reset to 0)
                $("#page-servicesFlights-oneway-kids").text(0).mobiscroll("setValue", 0);
                for (i = 1; i <= maxKids; i ++) {
                    $("#page-servicesFlights-oneway-kids-" + i).hide();
                }
                $("#page-servicesFlights-roundtrip-kids").text(0).mobiscroll("setValue", 0);
                for (i = 1; i <= maxKids; i ++) {
                    $("#page-servicesFlights-roundtrip-kids-" + i).hide();
                }
                $("#page-servicesFlights-multiple-kids").text(0).mobiscroll("setValue", 0);
                for (i = 1; i <= maxKids; i ++) {
                    $("#page-servicesFlights-multiple-kids-" + i).hide();
                }

                // Panels
                if (data.to) {

                    // Open Roundtrip
                    $("#page-servicesFlights-container .ui-collapsible.roundtrip").collapsible("expand");

                } else {

                    // Open Oneway
                    $("#page-servicesFlights-container .ui-collapsible.oneway").collapsible("expand");
                }

                return self;
            },

            /**
             * Displays the page to search for flights.
             *
             * @return void.
             */
            showFlights: function () {

                var storage = Storage.getInstance(),
                    forms = Forms.getInstance(),
                    html,
                    maxFlightSegments = 5,
                    maxKids = 7,
                    currDate = moment(moment().format("MM-DD-YYYY"), "MM-DD-YYYY"),
                    labelKid = _("Menor"),
                    labelKid1 = _("0 a 24 meses (en brazos) - tarifa bebé"),
                    labelKid2 = _("0 a 24 meses (en asiento) - tarifa niño"),
                    labelKid3 = _("2 a 11 años - tarifa niño"),
                    labelKid4 = _("12 años en adelante - tarifa adulto"),
                    lastpanel = storage.get("flights.search.panel"),
                    preloadedData = {
                        "from": storage.get("flights.search.from"),
                        "to": storage.get("flights.search.to"),
                        "departure": storage.get("flights.search.departure"),
                        "return": storage.get("flights.search.return"),
                        "adults": storage.get("flights.search.adults"),
                        "kids": storage.get("flights.search.kids"),
                        "kidsOptions": storage.get("flights.search.kids.options"),
                        "multipleSegments": storage.get("flights.search.multiple.segments")
                    };

                // Open last panel
                $("#page-servicesFlights-container .ui-collapsible." + lastpanel).collapsible("expand");

                // Fix past dates
                if (preloadedData.departure && moment(preloadedData.departure).isBefore(moment(), "day")) {
                    storage.set("flights.search.departure", currDate);
                    preloadedData.departure = storage.get("flights.search.departure");
                }
                if (preloadedData.return
                        && moment(preloadedData.return).isBefore(moment(preloadedData.departure), "day")) {
                    storage.set("flights.search.return", moment(preloadedData.departure));
                    preloadedData.return = storage.get("flights.search.return");
                }
                // TODO: Fix for multiple too

                ////
                // Oner way.
                ////

                // Kids select boxes
                html = "";
                for (var i = 1; i <= maxKids; i ++) {
                    html += ""
                        + '<div id="page-servicesFlights-oneway-kids-' + i + '" '
                                + 'class="scroller-wrapper" style="display: none;">'
                            + '<select class="oneway-kids ui-btn-raised" data-mini="true">'
                                + '<option value="1" selected="selected">' + labelKid1 + '</option>'
                                + '<option value="2">' + labelKid2 + '</option>'
                                + '<option value="3">' + labelKid3 + '</option>'
                                + '<option value="4">' + labelKid4 + '</option>'
                            + "</select>"
                        +  "</div>";
                }
                $("#page-servicesFlights-oneway-kids-options").html(html);
                forms.Components.Select.bind($("select.oneway-kids"), {
                    label: _("Edad del Menor"),
                    rowSize: 16,
                    onSelect: function () {

                        var val = [];

                        // Save for preload
                        $.each($("select.oneway-kids"), function (k, v) { val.push(k + "|" + $(this).val()); });
                        storage.set("flights.search.kids.options", val);
                    }
                });

                // Default values
                $("#page-servicesFlights-oneway-departure-data").val(moment().format("DDMMYY"));
                $("#page-servicesFlights-oneway-departure")
                    .text(moment().format("ddd D MMM YYYY").replace(/\./g, ""))
                    .mobiscroll("setDate", new Date(), true);

                // Triggers
                $("#page-servicesFlights-oneway-submit").on("click", function () {

                    self.onewaySearch();
                });

                // Scrollers
                forms.Components.Number
                    .bind($("#page-servicesFlights-oneway-adults"), {
                        step: 1,
                        min: 1,
                        max: 8,
                        headerText: _("Adultos: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $("#page-servicesFlights-roundtrip-adults").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-multiple-adults").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.adults", val);
                        }
                    })
                    .bind($("#page-servicesFlights-oneway-kids"), {
                        step: 1,
                        min: 0,
                        max: 7,
                        headerText: _("Menores: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $.each(["oneway", "roundtrip", "multiple"], function (k, v) {
                                for (i = 1; i <= val; i ++) {
                                    $("#page-servicesFlights-" + v + "-kids-" + i).show();
                                }
                                if (val < maxKids) {
                                    for (i = parseInt(val) + 1; i <= maxKids; i ++) {
                                        $("#page-servicesFlights-" + v + "-kids-" + i).hide();
                                    }
                                }
                            });
                            $("#page-servicesFlights-roundtrip-kids").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-multiple-kids").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.kids", val);
                        }
                    });
                forms.Components.Calendar.bind($("#page-servicesFlights-oneway-departure"), {
                    minDate: new Date(),
                    maxDate: new Date((new Date()).setDate((new Date()).getDate() + 282)),
                    onSelect: function (val) {

                        var curReturnDate = moment($("#page-servicesFlights-roundtrip-return-data").val(), "DDMMYY"),
                            newReturnDate = moment(val, "DD-MM-YYYY").add(1, "days");

                        val = moment(val, "DD-MM-YYYY");

                        // Update both, oneway and roundtrip controls
                        $("#page-servicesFlights-oneway-departure")
                            .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                        $("#page-servicesFlights-oneway-departure-data").val(val.format("DDMMYY"));
                        $("#page-servicesFlights-oneway-departure").mobiscroll("setDate", val.toDate(), true);
                        $("#page-servicesFlights-roundtrip-departure")
                            .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                        $("#page-servicesFlights-roundtrip-departure-data").val(val.format("DDMMYY"));
                        $("#page-servicesFlights-roundtrip-departure").mobiscroll("setDate", val.toDate(), true);

                        // Update with the min date the return flight control in roundtrip
                        $("#page-servicesFlights-roundtrip-return").mobiscroll('option', {
                            minDate: new Date(val.format("MM/DD/YYYY"))
                        });
                        if (!curReturnDate || curReturnDate.isBefore(val, "day")) {
                            $("#page-servicesFlights-roundtrip-return")
                                .text(newReturnDate.format("ddd D MMM YYYY").replace(/\./g, ""));
                            $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", newReturnDate.toDate(), true);
                            $("#page-servicesFlights-roundtrip-return-data").val(newReturnDate.format("DDMMYY"));
                            storage.set("flights.search.return", newReturnDate);
                        }

                        // Save for preload
                        storage.set("flights.search.departure", val);
                    }
                });

                // Data preload
                if (preloadedData.departure) {
                    var data = moment(preloadedData.departure);

                    $("#page-servicesFlights-oneway-departure-data").val(data.format("DDMMYY"));
                    $("#page-servicesFlights-oneway-departure")
                        .html(data.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-oneway-departure").mobiscroll("setDate", data.toDate(), true);
                }
                if (preloadedData.adults) {
                    $("#page-servicesFlights-oneway-adults")
                        .text(preloadedData.adults)
                        .mobiscroll("setValue", preloadedData.adults);
                }
                if (preloadedData.kids) {
                    $("#page-servicesFlights-oneway-kids")
                        .text(preloadedData.kids)
                        .mobiscroll("setValue", preloadedData.kids);
                    for (i = 1; i <= preloadedData.kids; i ++) {
                        if (preloadedData.kidsOptions) {
                            $("#page-servicesFlights-oneway-kids-" + i)
                                .show()
                                .find("select")
                                .mobiscroll("setValue", preloadedData.kidsOptions[i - 1].split("|")[1], true);
                        }
                    }
                }

                ////
                // Round trip.
                ////

                // Kids select boxes
                html = "";
                for (var i = 1; i <= maxKids; i ++) {
                    html += ""
                        + '<div id="page-servicesFlights-roundtrip-kids-' + i + '" '
                                + 'class="scroller-wrapper" style="display: none;">'
                            + '<select class="roundtrip-kids ui-btn-raised" data-mini="true">'
                                + '<option value="1" selected="selected">' + labelKid1 + '</option>'
                                + '<option value="2">' + labelKid2 + '</option>'
                                + '<option value="3">' + labelKid3 + '</option>'
                                + '<option value="4">' + labelKid4 + '</option>'
                            + "</select>"
                        +  "</div>";
                }
                $("#page-servicesFlights-roundtrip-kids-options").html(html);
                forms.Components.Select.bind($("select.roundtrip-kids"), {
                    label: _("Edad del Menor"),
                    rowSize: 16,
                    onSelect: function () {

                        var val = [];

                        // Save for preload
                        $.each($("select.roundtrip-kids"), function (k, v) { val.push(k + "|" + $(this).val()); });
                        storage.set("flights.search.kids.options", val);
                    }
                });

                // Default values
                $("#page-servicesFlights-roundtrip-departure-data, #page-servicesFlights-roundtrip-return-data")
                    .val(moment().format("DDMMYY"));
                $("#page-servicesFlights-roundtrip-departure, #page-servicesFlights-roundtrip-return")
                    .text(moment().format("ddd D MMM YYYY").replace(/\./g, ""))
                    .mobiscroll("setDate", new Date(), true);

                // Triggers
                $("#page-servicesFlights-roundtrip-submit").on("click", function () {

                    self.roundtripSearch();
                });

                // Scrollers
                forms.Components.Number
                    .bind($("#page-servicesFlights-roundtrip-adults"), {
                        step: 1,
                        min: 1,
                        max: 8,
                        headerText: _("Adultos: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $("#page-servicesFlights-oneway-adults").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-multiple-adults").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.adults", val);
                        }
                    })
                    .bind($("#page-servicesFlights-roundtrip-kids"), {
                        step: 1,
                        min: 0,
                        max: 7,
                        headerText: _("Menores: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $.each(["oneway", "roundtrip", "multiple"], function (k, v) {
                                for (i = 1; i <= val; i ++) {
                                    $("#page-servicesFlights-" + v + "-kids-" + i).fadeIn("fast");
                                }
                                if (val < maxKids) {
                                    for (i = parseInt(val) + 1; i <= maxKids; i ++) {
                                        $("#page-servicesFlights-" + v + "-kids-" + i).fadeOut("fast");
                                    }
                                }
                            });
                            $("#page-servicesFlights-oneway-kids").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-multiple-kids").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.kids", val);
                        }
                    });
                    forms.Components.Calendar
                        .bind($("#page-servicesFlights-roundtrip-departure"), {
                            minDate: new Date(),
                            maxDate: new Date((new Date()).setDate((new Date()).getDate() + 282)),
                            onSelect: function (val) {

                                var curReturnDate = moment($("#page-servicesFlights-roundtrip-return-data").val(), "DDMMYY"),
                                    newReturnDate = moment(val, "DD-MM-YYYY").add(1, "days");

                                val = moment(val, "DD-MM-YYYY");

                                // Update both, oneway and roundtrip controls
                                $("#page-servicesFlights-oneway-departure")
                                    .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                                $("#page-servicesFlights-oneway-departure-data").val(val.format("DDMMYY"));
                                $("#page-servicesFlights-oneway-departure").mobiscroll("setDate", val.toDate(), true);
                                $("#page-servicesFlights-roundtrip-departure")
                                    .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                                $("#page-servicesFlights-roundtrip-departure-data").val(val.format("DDMMYY"));
                                $("#page-servicesFlights-roundtrip-departure").mobiscroll("setDate", val.toDate(), true);

                                // Update with the min date the return flight control
                                $("#page-servicesFlights-roundtrip-return").mobiscroll('option', {
                                    minDate: new Date(val.format("MM/DD/YYYY"))
                                });
                                if (!curReturnDate || curReturnDate.isBefore(val, "day")) {
                                    $("#page-servicesFlights-roundtrip-return")
                                        .text(newReturnDate.format("ddd D MMM YYYY").replace(/\./g, ""));
                                    $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", newReturnDate.toDate(), true);
                                    $("#page-servicesFlights-roundtrip-return-data").val(newReturnDate.format("DDMMYY"));
                                    storage.set("flights.search.return", newReturnDate);
                                }

                                // Save for preload
                                storage.set("flights.search.departure", val);
                            }
                        })
                        .bind($("#page-servicesFlights-roundtrip-return"), {
                            minDate: new Date(),
                            maxDate: new Date((new Date()).setDate((new Date()).getDate() + 282)),
                            onSelect: function (val) {

                                val = moment(val, "DD-MM-YYYY");
                                $("#page-servicesFlights-roundtrip-return")
                                    .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                                $("#page-servicesFlights-roundtrip-return-data").val(val.format("DDMMYY"));
                                $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", val.toDate(), true);

                                // Save for preload
                                storage.set("flights.search.return", val);
                            }
                        });

                // Data preload
                if (preloadedData.departure) {
                    var data = moment(preloadedData.departure);

                    $("#page-servicesFlights-roundtrip-departure")
                        .html(data.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-roundtrip-departure-data").val(data.format("DDMMYY"));
                    $("#page-servicesFlights-roundtrip-departure").mobiscroll("setDate", data.toDate(), true);

                    // Update with the min date the return flight control
                    $("#page-servicesFlights-roundtrip-return").mobiscroll('option', {
                        minDate: new Date(data.format("MM/DD/YYYY"))
                    });
                }
                if (preloadedData.return) {
                    var data = moment(preloadedData.return);

                    $("#page-servicesFlights-roundtrip-return")
                        .html(data.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-roundtrip-return-data").val(data.format("DDMMYY"));
                    $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", data.toDate(), true);
                }
                if (!preloadedData.return && preloadedData.departure) {
                    var data = moment(preloadedData.departure);

                    // Return date must be >= departure date
                    $("#page-servicesFlights-roundtrip-return")
                        .html(data.format("ddd D MMM YYYY").replace(/\./g, ""));
                    $("#page-servicesFlights-roundtrip-return-data").val(data.format("DDMMYY"));
                    $("#page-servicesFlights-roundtrip-return").mobiscroll("setDate", data.toDate(), true);
                }
                if (preloadedData.adults) {
                    $("#page-servicesFlights-roundtrip-adults")
                        .text(preloadedData.adults)
                        .mobiscroll("setValue", preloadedData.adults);
                }
                if (preloadedData.kids) {
                    $("#page-servicesFlights-roundtrip-kids")
                        .text(preloadedData.kids)
                        .mobiscroll("setValue", preloadedData.kids);
                    for (i = 1; i <= preloadedData.kids; i ++) {
                        if (preloadedData.kidsOptions) {
                            $("#page-servicesFlights-roundtrip-kids-" + i)
                                .show()
                                .find("select")
                                .mobiscroll("setValue", preloadedData.kidsOptions[i - 1].split("|")[1], true);
                        }
                    }
                }

                ////
                // Multiple.
                ////

                // Kids select boxes
                html = "";
                for (var i = 1; i <= maxKids; i ++) {
                    html += ""
                        + '<div id="page-servicesFlights-multiple-kids-' + i + '" '
                                + 'class="scroller-wrapper" style="display: none;">'
                            + '<select class="multiple-kids ui-btn-raised" data-mini="true">'
                                + '<option value="1" selected="selected">' + labelKid1 + '</option>'
                                + '<option value="2">' + labelKid2 + '</option>'
                                + '<option value="3">' + labelKid3 + '</option>'
                                + '<option value="4">' + labelKid4 + '</option>'
                            + "</select>"
                        +  "</div>";
                }
                $("#page-servicesFlights-multiple-kids-options").html(html);
                forms.Components.Select.bind($("select.multiple-kids"), {
                    label: _("Edad del Menor"),
                    rowSize: 16,
                    onSelect: function () {

                        var val = [];

                        // Save for preload
                        $.each($("select.multiple-kids"), function (k, v) { val.push(k + "|" + $(this).val()); });
                        storage.set("flights.search.kids.options", val);
                    }
                });

                // Triggers
                $("#page-servicesFlights-multiple-submit").on("click", function () {

                    self.multipleSearch();
                });

                // Scrollers
                forms.Components.Number
                    .bind($("#page-servicesFlights-multiple-adults"), {
                        step: 1,
                        min: 1,
                        max: 8,
                        headerText: _("Adultos: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $("#page-servicesFlights-oneway-adults").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-roundtrip-adults").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.adults", val);
                        }
                    })
                    .bind($("#page-servicesFlights-multiple-kids"), {
                        step: 1,
                        min: 0,
                        max: 7,
                        headerText: _("Menores: {value}"),
                        onSelect: function (val) {

                            // Update control text
                            $(this).text(val);

                            // Update all controls
                            $.each(["oneway", "roundtrip", "multiple"], function (k, v) {
                                for (i = 1; i <= val; i ++) {
                                    $("#page-servicesFlights-" + v + "-kids-" + i).fadeIn("fast");
                                }
                                if (val < maxKids) {
                                    for (i = parseInt(val) + 1; i <= maxKids; i ++) {
                                        $("#page-servicesFlights-" + v + "-kids-" + i).fadeOut("fast");
                                    }
                                }
                            });
                            $("#page-servicesFlights-oneway-kids").text(val).mobiscroll("setValue", val);
                            $("#page-servicesFlights-roundtrip-kids").text(val).mobiscroll("setValue", val);

                            // Save for preload
                            storage.set("flights.search.kids", val);
                        }
                    });

                // Data preload
                if (preloadedData.adults) {
                    $("#page-servicesFlights-multiple-adults")
                        .text(preloadedData.adults)
                        .mobiscroll("setValue", preloadedData.adults);
                }
                if (preloadedData.kids) {
                    $("#page-servicesFlights-multiple-kids")
                        .text(preloadedData.kids)
                        .mobiscroll("setValue", preloadedData.kids);
                    for (i = 1; i <= preloadedData.kids; i ++) {
                        if (preloadedData.kidsOptions) {
                            $("#page-servicesFlights-multiple-kids-" + i)
                                .show()
                                .find("select")
                                .mobiscroll("setValue", preloadedData.kidsOptions[i - 1].split("|")[1], true);
                        }
                    }
                }
                if (preloadedData.multipleSegments) {
                    $.each(preloadedData.multipleSegments, function (k, v) {

                        var html = $("<div>")
                                .addClass("scroller-wrapper segment")
                                .append([
                                    $("<input>")
                                        .attr({ "type": "hidden" })
                                        .addClass("segment-data")
                                        .val(serialize(v)),
                                    $("<img>").attr({ "src": "../../img/travel-from.svg" }),
                                    $("<label>")
                                        .attr({ "for": "page-servicesFlights-multiple-segment-" + k })
                                        .addClass("clickable")
                                        .text(v.from.id + " - " + v.to.id + " - "
                                            + moment(v.date, "DDMMYY").format("ddd D MMM YYYY").replace(/\./g, ""))
                                        .on("click", function () {
                                            Main.setUrlParams("segment", v).changePage("servicesFlightsMultiple");
                                        }),
                                    $("<a>")
                                        .attr({
                                            "id": "page-servicesFlights-multiple-segment-" + k,
                                            "href": "#",
                                            "data-role": "button",
                                            "data-index": k
                                        })
                                        .addClass("segment-delete ui-btn-raised ui-mini "
                                            + "ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-right ui-corner-all")
                                        .text(_("Quitar"))
                                ]);

                        $("#page-servicesFlights-multiple-segments").append(html).enhanceWithin();
                    });
                }

                html = $("<div>")
                    .addClass("scroller-wrapper")
                    .append([
                        $("<img>").attr({ "src": "../../img/flight-board.svg" }),
                        $("<label>")
                            .attr({ "for": "page-servicesFlights-multiple-segment" })
                            .text(_("Nuevo Tramo")),
                        $("<a>")
                            .attr({
                                "id": "page-servicesFlights-multiple-segment",
                                "href": "#",
                                "data-role": "button",
                                "data-icon": "plus",
                                "data-inline": "true",
                                "data-iconpos": "right",
                                "data-mini": "true"
                            })
                            .addClass("segment-choose ui-btn-raised")
                            .text(_("Agregar"))
                    ]);
                $("#page-servicesFlights-multiple-segments").append(html).enhanceWithin();

                // Add segment.
                $("#page-servicesFlights-multiple-segments .segment-choose").on("click", function () {

                    Main.changePage("servicesFlightsMultiple");
                });

                // Delete segment
                $("#page-servicesFlights-multiple-segments .segment-delete").on("click", function () {

                    var segments = storage.get("flights.search.multiple.segments", []);

                    // Delete object from array and save it again
                    segments.splice(this.dataset.index, 1);
                    storage.set("flights.search.multiple.segments", segments);

                    // Delete element from view
                    $(this).parents(".scroller-wrapper:first").fadeOut("normal", function () { $(this).remove(); });
                });

                ////
                // Common components.
                ////

                // From / To flight search.
                $.each(["#page-servicesFlights-roundtrip-from", "#page-servicesFlights-roundtrip-to",
                    "#page-servicesFlights-oneway-from", "#page-servicesFlights-oneway-to"], function (k, v) {

                    var src = v.split("-").pop();

                    forms.Components.Autocomplete.bind(
                        v,

                        // Search results "success" callback
                        function (res) {

                            var filtered = [],
                                inst = this.markupInst;

                            if (res.data && res.data.length) {

                                // Preformat to properly build the rows
                                filtered = $.map(res.data, function (v) {

                                    var res = {
                                        id: v.iata
                                    }

                                    if (v.type == "city") {
                                        res.title = v.countryName;
                                        res.subtitle = [v.regionName, v.municipality].clean().join(", ");
                                        res.image = Main.baseUrl + "img/countries/" + v.countryCode.toLowerCase() + ".svg";
                                    } else {
                                        res.title =  _("Aeropuerto") + " " + v.name;
                                        res.subtitle = [v.regionName, v.municipality, v.countryName].clean().join(", ");
                                        res.image = Main.baseUrl + "img/airlines/default.svg";
                                    }

                                    return res;
                                });

                                inst.settings.data = forms.Components.Autocomplete.createSelectOptions(filtered);
                            } else {
                                inst.settings.data = forms.Components.Autocomplete
                                    .createSelectOptions([{
                                        id: "",
                                        title: _("Sin Resultados"),
                                        subtitle: _("No hay resultados para la búsqueda."),
                                        image: Main.baseUrl + "img/warning-icon.svg"
                                    }]);
                            }
                            inst.settings.parseValue(inst.settings.data[0].value);
                            inst.refresh();
                        },

                        // Component options
                        {
                            data: (preloadedData[src]
                                ? forms.Components.Autocomplete.createSelectOptions([unserialize(preloadedData[src])])
                                : forms.Components.Autocomplete.createSelectOptions([{
                                    id: "",
                                    title: _("Búsqueda"),
                                    subtitle: _("Ingresá al menos tres letras."),
                                    image: Main.baseUrl + "img/warning-icon.svg"
                                  }])),
                            onSelect: function (html, inst) {

                                var inputDummy = $("#" + this.id + "_dummy"),
                                    inputData = $("#" + this.id + "-data"),
                                    html = $(inputDummy.val()),
                                    data = {
                                        id: html.attr("data-id"),
                                        title: html.find(".title").text(),
                                        subtitle: html.find(".subtitle").text(),
                                        image: html.find(".image>img").attr("src"),
                                    };

                                // Save for preload
                                storage.set("flights.search." + src, serialize(data));

                                // Update button text and hidden element for all boxes
                                $.each(["oneway", "roundtrip"], function (k, v) {

                                    var inst = $("#page-servicesFlights-" + v + "-" + src).mobiscroll("getInst");

                                    $("#page-servicesFlights-" + v + "-" + src + "_dummy").val(data.title + ", " + data.subtitle);
                                    $("#page-servicesFlights-" + v + "-" + src + "-data").val(data.id);
                                    inst.settings.data = forms.Components.Autocomplete.createSelectOptions([data]);
                                    inst.refresh();
                                });
                            }
                        });
                });

                ////
                // Triggers.
                ////

                // Save last opened panel
                $("#page-servicesFlights-container .ui-collapsible").on("collapsibleexpand", function () {

                    storage.set("flights.search.panel", $(this).data("panel"))
                });
            },

            /**
             * Retrieves all flights according to the desired params.
             *
             * @param departureLocation mixed IATA code of departure location.
             * @param arrivalLocation mixed IATA code of arrival location.
             * @param departureDate mixed Date of departure (in "dmy" format).
             * @param returnDate string Date of return (in "dmy" format).
             * @param travellers array Flight travellers.
             * @return void.
             */
            search: function (departureLocation, arrivalLocation, departureDate, returnDate, travellers) {

                this.searchParams = {
                    "departureLocation": departureLocation,
                    "arrivalLocation": arrivalLocation,
                    "departureDate": departureDate,
                    "returnDate": returnDate,
                    "travellers": travellers
                };

                Main.ajax({
                    url: Main.getApiPath("fetchFlights"),
                    actionBtns: $("#page-servicesFlights-oneway-submit, #page-servicesFlights-roundtrip-submit"),
                    spinnerMessage:
                        _("Por favor aguardá un instante, estamos buscando las mejores opciones para tu viaje."),
                    spinnerExtra: '<div class="brands"></div>',
                    modal: true,
                    data: {
                        lang: Main.language,
                        currency: "ARS",
                        limit: 20,
                        departureLocation: departureLocation,
                        arrivalLocation: arrivalLocation,
                        departureDate: departureDate,
                        returnDate: returnDate,
                        travellers: JSON.stringify(travellers)
                    },
                    success: function (res) {

                        // Allow a new flight with a same idx selected before to be used
                        delete self.bookingDetails.flightId;

                        self.searchResults = res;
                        Main.changePage("servicesFlightsSearchResults");
                    }
                });
            },

            /**
             * Performs a oneway search.
             *
             * @return void.
             */
            onewaySearch: function () {

                var departureLocation = $("#page-servicesFlights-oneway-from-data").val(),
                    arrivalLocation = $("#page-servicesFlights-oneway-to-data").val(),
                    departureDate = $("#page-servicesFlights-oneway-departure-data").val(),
                    travellers = {
                        "A": parseInt($("#page-servicesFlights-oneway-adults").text()) +
                            parseInt($(".oneway-kids")
                                .filter(function () {
                                    return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "4"; })
                                .length),
                        "C": $(".oneway-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select")
                                    && ($(this).val() == "2" || $(this).val() == "3"); })
                            .length,
                        "IN": $(".oneway-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "1"; })
                            .length
                    };

                // Dummy search
                if (Config.get("dummyData.single.enabled")) {
                    if (Config.get("dummyData.single.advanceToPage")) {

                        return Main.changePage(Config.get("dummyData.single.advanceToPage"));
                    } else {

                        return Main.changePage("servicesFlightsSearchResults");
                    }
                }

                // Some validations
                if (!departureLocation) {

                    return alert(_("Por favor, seleccioná el orígen del vuelo."));
                }
                if (!arrivalLocation) {

                    return alert(_("Por favor, seleccioná el destino del vuelo."));
                }
                if (arrivalLocation == departureLocation) {

                    return alert(_("Por favor, seleccioná un destino diferente al de orígen."));
                }
                if (travellers.A + travellers.C > 9) {

                    return alert(_("Se aceptan nueve pasajeros como máximo."));
                }
                if (travellers.IN > (travellers.A + travellers.C)) {

                    return alert(
                        _("El número de infantes no puede exceder el número de adultos."));
                }

                this.search(departureLocation, arrivalLocation, departureDate, null, travellers);
            },

            /**
             * Performs a roundtrip search.
             *
             * @return void.
             */
            roundtripSearch: function () {

                var departureLocation = $("#page-servicesFlights-roundtrip-from-data").val(),
                    arrivalLocation = $("#page-servicesFlights-roundtrip-to-data").val(),
                    departureDate = $("#page-servicesFlights-roundtrip-departure-data").val(),
                    returnDate = $("#page-servicesFlights-roundtrip-return-data").val(),
                    travellers = {
                        "A": parseInt($("#page-servicesFlights-roundtrip-adults").text()) +
                            parseInt($(".roundtrip-kids")
                                .filter(function () {
                                    return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "4"; })
                                .length),
                        "C": $(".roundtrip-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select")
                                    && ($(this).val() == "2" || $(this).val() == "3"); })
                            .length,
                        "IN": $(".roundtrip-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "1"; })
                            .length
                    };

                // Dummy search
                if (Config.get("dummyData.round.enabled")) {
                    if (Config.get("dummyData.round.advanceToPage")) {

                        return Main.changePage(Config.get("dummyData.round.advanceToPage"));
                    } else {

                        return Main.changePage("servicesFlightsSearchResults");
                    }
                }

                // Some validations
                if (!departureLocation) {

                    return alert(_("Por favor, seleccioná el orígen del vuelo."));
                }
                if (!arrivalLocation) {

                    return alert(_("Por favor, seleccioná el destino del vuelo."));
                }
                if (arrivalLocation == departureLocation) {

                    return alert(_("Por favor, seleccioná un destino diferente al de orígen."));
                }
                if (travellers.A + travellers.C > 9) {

                    return alert(_("Se aceptan nueve pasajeros como máximo."));
                }
                if (travellers.IN > (travellers.A + travellers.C)) {

                    return alert(
                        _("El número de infantes no puede exceder el número de adultos."));
                }

                this.search(departureLocation, arrivalLocation, departureDate, returnDate, travellers);
            },

            /**
             * Performs a "multiple segments" search.
             *
             * @return void.
             */
            multipleSearch: function () {

                var data = $("#page-servicesFlights-multiple-segments .scroller-wrapper.segment .segment-data")
                        .map(function () { return unserialize(this.value); });
                    departureLocation = []
                    arrivalLocation = [],
                    departureDate = [],
                    travellers = {
                        "A": parseInt($("#page-servicesFlights-multiple-adults").text()) +
                            parseInt($(".multiple-kids")
                                .filter(function () {
                                    return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "4"; })
                                .length),
                        "C": $(".multiple-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select")
                                    && ($(this).val() == "2" || $(this).val() == "3"); })
                            .length,
                        "IN": $(".multiple-kids")
                            .filter(function () {
                                return !$(this).is(":hidden") && $(this).is("select") && $(this).val() == "1"; })
                            .length
                    };

                $.each(data, function (k, v) {

                    departureLocation.push(v.from.id);
                    arrivalLocation.push(v.to.id);
                    departureDate.push(v.date);
                });

                // Some validations
                if (!$("#page-servicesFlights-multiple-segments .scroller-wrapper.segment").length) {

                    return alert(_("Por favor, seleccioná al menos un tramo para tu vuelo."));
                }
                if (moment(departureDate[0], "DDMMYY").isBefore(moment(), "day")) {

                    return alert(_("La fecha de salida no puede ser anterior a la fecha actual. Por favor, actualizá "
                        + "la fecha del primer tramo."));
                }
                if (travellers.A + travellers.C > 9) {

                    return alert(_("Se aceptan nueve pasajeros como máximo."));
                }
                if (travellers.IN > (travellers.A + travellers.C)) {

                    return alert(_("El número de infantes no puede exceder el número de adultos."));
                }

                this.search(departureLocation, arrivalLocation, departureDate, null, travellers);
            },

            /**
             * Display multiple flights page for selecting a destination.
             *
             * @return self.
             */
            showMultiple: function () {

                var forms = Forms.getInstance(),
                    events = Events.getInstance(),
                    storage = Storage.getInstance(),
                    segments = storage.get("flights.search.multiple.segments", []),
                    preloadedSegment = Main.getUrlParams("segment"),
                    data = {
                        from: {},
                        to: {},
                        date: null
                    };

                // Reading an existent segment
                if (preloadedSegment) {
                    Main.clearUrlParams("segment");
                }

                ////
                // Initialize components
                ////

                // For now, preloaded segments are read only
                if (preloadedSegment) {

                    // From / To
                    $.each(["#page-servicesFlightsMultiple-from", "#page-servicesFlightsMultiple-to"], function (k, v) {

                        var src = v.split("-").pop(), // from / to
                            data = preloadedSegment[src];

                        $(v).replaceWith(
                            $("<div>")
                                .addClass("info")
                                .append([
                                    $("<img>").attr("src", data.image),
                                    $("<div>")
                                        .addClass("text")
                                        .html(data.title + ", " + data.subtitle)
                                ])
                        );
                    });

                    // Departure
                    $("#page-servicesFlightsMultiple-departure").replaceWith(
                        $("<div>")
                            .addClass("info")
                            .append([
                                $("<div>")
                                    .addClass("text")
                                    .html(
                                        moment(preloadedSegment.date, "DDMMYY")
                                        .format("dddd, D [" + _("de") + "] MMMM [" + _("de") + "] YYYY").replace(/\./g, "")
                                    )
                            ])
                    );

                    // Hide submit button
                    $("#page-servicesFlightsMultiple-submit").hide();

                } else {

                    // Autocomplete (From / To)
                    $.each(["#page-servicesFlightsMultiple-from", "#page-servicesFlightsMultiple-to"], function (k, v) {

                        var src = v.split("-").pop(), // from / to
                            preloadedData = (src == "from" && segments.length // Load last segment TO as FROM
                                ? forms.Components.Autocomplete.createSelectOptions([ segments.slice(-1)[0]["to"] ])
                                : forms.Components.Autocomplete.createSelectOptions([{
                                    id: "",
                                    title: _("Búsqueda"),
                                    subtitle: _("Ingresá al menos tres letras."),
                                    image: Main.baseUrl + "img/warning-icon.svg"
                                  }]));

                        forms.Components.Autocomplete.bind(
                            v,

                            // Search results "success" callback
                            function (res) {

                                var filtered = [],
                                    inst = this.markupInst;

                                if (res.data && res.data.length) {

                                    // Preformat to properly build the rows
                                    filtered = $.map(res.data, function (v) {

                                        var res = {
                                            id: v.iata
                                        }

                                        if (v.type == "city") {
                                            res.title = v.countryName;
                                            res.subtitle = [v.regionName, v.municipality].clean().join(", ");
                                            res.image = Main.baseUrl + "img/countries/" + v.countryCode.toLowerCase() + ".svg";
                                        } else {
                                            res.title =  _("Aeropuerto") + " " + v.name;
                                            res.subtitle = [v.regionName, v.municipality, v.countryName].clean().join(", ");
                                            res.image = Main.baseUrl + "img/airlines/default.svg";
                                        }

                                        return res;
                                    });

                                    inst.settings.data = forms.Components.Autocomplete.createSelectOptions(filtered);
                                } else {
                                    inst.settings.data = forms.Components.Autocomplete
                                        .createSelectOptions([{
                                            id: "",
                                            title: _("Sin Resultados"),
                                            subtitle: _("No hay resultados para la búsqueda."),
                                            image: Main.baseUrl + "img/warning-icon.svg"
                                        }]);
                                }
                                inst.settings.parseValue(inst.settings.data[0].value);
                                inst.refresh();
                            },

                            // Component options
                            {
                                data: preloadedData,
                                onSelect: function (html, inst) {

                                    var inputDummy = $("#" + this.id + "_dummy"),
                                        inputData = $("#" + this.id + "-data"),
                                        html = $(inputDummy.val()),
                                        data = {
                                            id: html.attr("data-id"),
                                            title: html.find(".title").text(),
                                            subtitle: html.find(".subtitle").text(),
                                            image: html.find(".image>img").attr("src"),
                                        },
                                        inst = $("#page-servicesFlightsMultiple-" + src).mobiscroll("getInst");

                                    // Update button text and hidden element
                                    $("#page-servicesFlightsMultiple-" + src + "_dummy").val(data.title + ", " + data.subtitle);
                                    $("#page-servicesFlightsMultiple-" + src + "-data").val(serialize(data));
                                    inst.settings.data = forms.Components.Autocomplete.createSelectOptions([data]);
                                    inst.refresh();
                                }
                            });
                    });

                    // Calendar (Departure)
                    forms.Components.Calendar
                        .bind($("#page-servicesFlightsMultiple-departure"), {
                            minDate: (segments.length ? new Date(moment(segments.slice(-1)[0].date, "DDMMYY")) : new Date()),
                            maxDate: new Date((new Date()).setDate((new Date()).getDate() + 282)),
                            onSelect: function (val) {

                                // Update control
                                val = moment(val, "DD-MM-YYYY");
                                $("#page-servicesFlightsMultiple-departure")
                                    .html(val.format("ddd D MMM YYYY").replace(/\./g, ""));
                                $("#page-servicesFlightsMultiple-departure-data").val(val.format("DDMMYY"));
                                $("#page-servicesFlightsMultiple-departure").mobiscroll("setDate", val.toDate(), true);
                            }
                        });
                }

                ////
                // Triggers.
                ////

                // Trigger: Add new / Update segment
                $("#page-servicesFlightsMultiple-submit").on("click", function () {

                    // Validations: empty fields
                    if ($("#page-servicesFlightsMultiple-from-data").val() == "") {

                        return alert(_("Por favor, seleccioná el orígen del vuelo."));
                    }
                    if ($("#page-servicesFlightsMultiple-to-data").val() == "") {

                        return alert(_("Por favor, seleccioná el destino del vuelo."));
                    }
                     if ($("#page-servicesFlightsMultiple-departure-data").val() == "") {

                        alert(_("Por favor, seleccioná la fecha de salida para el vuelo."));

                        return;
                    }

                    // Fill data object
                    data.from = unserialize($("#page-servicesFlightsMultiple-from-data").val());
                    data.to = unserialize($("#page-servicesFlightsMultiple-to-data").val());
                    data.date = $("#page-servicesFlightsMultiple-departure-data").val();

                    // From and To must be different destinations
                    if (data.from.id == data.to.id) {

                        return alert(_("Por favor, seleccioná un destino diferente al de orígen."));
                    }

                    // Save new segment
                    segments.push(data);
                    storage.set("flights.search.multiple.segments", segments);

                    // Redirect to servicesFlights
                    Main.changePage("servicesFlights");
                });

                return self;
            },

            /**
             * Displays a form to complete the booking.
             *
             * @param flight object Flight data.
             * @param flightOptions object Flight options.
             * @return void.
             */
            showBuy: function (flight, flightOptions) {

                var html = "",
                    flightType,
                    flightLastArrivalDatetime,
                    stopsAmount,
                    totalTime,
                    title,
                    lastBuyDate = Storage.getInstance().get("flights.buy.last.date"),
                    lastBuyCode = Storage.getInstance().get("flights.buy.last.code"),
                    fareType = flightOptions.fareType,
                    carrier = flightOptions.carrier,
                    flightsAmount = flight.flights.length,
                    currentFlight = 0,
                    entireFlight = flight.flights,
                    price = Math.ceil(flight.pricing.total).withMilesSeparator(),
                    priceAdt = Math.ceil(flight.passengers.ADT.unitPriceTotal - flight.passengers.ADT.unitPriceTax).withMilesSeparator(),
                    taxes = Math.ceil(flight.pricing.tax).withMilesSeparator(),
                    agentFee = Math.ceil(flight.pricing.agentFee).withMilesSeparator(),
                    now = new Date(),
                    preloadedData = Storage.getInstance().get("flights.buy.form"),
                    searchType = this._getSearchType(),
                    events = Events.getInstance(),
                    forms = Forms.getInstance(),
                    flightItinerary = forms.Parts.FlightItinerary.get(flight, {
                        "searchType": searchType,
                        "showPrice": false,
                        "embeded": false
                    }).outerHTML();

                html += ""
                    + '<div data-role="collapsible-set" data-inset="true" data-iconpos="right" data-content-theme="a">';

                // Totals
                html += ""
                        + '<div data-role="collapsible" data-collapsed="false" class="total">'
                            + "<h3>"
                                + '<span class="title">' + _("TOTAL") + "</span>"
                                + '<span class="price">$ ' + price + "</span>"
                            + "</h3>"
                            + '<ul data-role="listview">'
                                + '<li class="adt">'
                                    + '<span class="title">' + _("Tarifa por adulto") + "</span>"
                                    + '<span class="price"><span class="bubble">$ ' + priceAdt + "</span></span>"
                                + "</li>";
                $.each(flight.passengers, function (k, v) {

                    var noun = (v.amount > 1 ? "plural" : "singular"),
                        title = self.passengersTitles[noun][k],
                        price = Math.ceil((v.unitPriceTotal * v.amount) - (v.unitPriceTax * v.amount)).withMilesSeparator();

                    html += ""
                                + '<li>'
                                    + '<span class="title">' + v.amount + " " + title + "</span>"
                                    + '<span class="price"><span class="bubble">$ ' + price + "</span></span>"
                                + "</li>"
                });
                html += ""
                                + '<li>'
                                    + '<span class="title">' + _("Impuestos y Tasas") + "</span>"
                                    + '<span class="price"><span class="bubble">$ ' + taxes + "</span></span>"
                                + "</li>"
                                + '<li>'
                                    + '<span class="title">' + _("Cargos") + "</span>"
                                    + '<span class="price"><span class="bubble">$ ' + agentFee + "</span></span>"
                                + "</li>"
                html += ""
                            + "</ul>"
                        + "</div>";

                // Passengers
                html += ""
                        + '<div data-role="collapsible" class="formData form-enhanced">'
                            + "<h3>"
                                + '<span class="title">1. ' + _("Pasajeros") + "</span>"
                            + "</h3>"
                            + '<ul data-role="listview">';
                $.each(flight.passengers, function (k, v) {

                    for (var i = 0; i < v.amount; i ++) {
                        html += ""
                                + '<li class="divider">'
                                    + self.passengersTitles.singular[k] + " " + (i + 1)
                                + "</li>"
                                + '<li data-role="fieldcontain" class="ui-mini">'
                                    + '<div data-role="fieldcontain">'
                                        + '<input type="text" class="formEl" name="passengers[' + k + '][' + i + '][name]"'
                                            + 'placeholder="' + _("Nombre/s") + '" />'
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<input type="text" class="formEl" name="passengers[' + k + '][' + i + '][lastname]"'
                                            + 'placeholder="' + _("Apellido/s") + '" />'
                                    + '</div>'
                                    + '<div data-role="fieldcontain" class="birthDate">'
                                        + '<input type="hidden" class="formEl" '
                                            + 'name="passengers[' + k + '][' + i + '][birthdate]" />'
                                        + '<a href="#" data-role="button" data-icon="carat-d" class="mbsc-jqm-select" '
                                            + 'data-iconpos="right">' + _("Fecha de nacimiento") + "</a>"
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<select class="formEl gender" name="passengers[' + k + '][' + i + '][gender]" >'
                                            + '<option value="male">' + _("Masculino") + "</option>"
                                            + '<option value="female">' + _("Femenino") + "</option>"
                                        + "</select>"
                                    + '</div>'
                                    + '<div data-role="fieldcontain" class="countriesAutocomplete">'
                                        + '<input type="hidden" class="formEl country" name="passengers[' + k + '][' + i + '][country]" />'
                                        + '<input type="hidden" class="formEl countryName" name="passengers[' + k + '][' + i + '][countryName]" />'
                                        + '<input type="hidden" class="formEl raw" name="passengers[' + k + '][' + i + '][countryData]" />'
                                        + '<a id="page-servicesFlightsBuy-passengers-nationality-' + k + '-' + i + '" href="#" '
                                            + 'data-role="button" data-icon="carat-d" data-iconpos="right" '
                                            + 'data-method="fetchCountries" data-placeholder="' + _("País de Nacimiento") + '" '
                                            + '>' + _("Nacionalidad") + '</a>'
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<span class="doc">'
                                            + '<select class="formEl docType" name="passengers[' + k + '][' + i + '][docType]">'
                                                + '<option value="dni">' + _("D.N.I.") + "</option>"
                                                + '<option value="passport">' + _("Pasaporte") + "</option>"
                                            + "</select>"
                                            + '<input type="text" class="formEl" name="passengers[' + k + '][' + i + '][doc]"'
                                                + 'placeholder="' + _("Número de documento") + '" />'
                                        + "</span>"
                                    + '</div>'
                                + "</li>"
                    }
                });
                html += ""
                            + "</ul>"
                        + "</div>";

                // Contact info
                html += ""
                        + '<div data-role="collapsible" class="formData form-enhanced">'
                            + "<h3>"
                                + '<span class="title">2. ' + _("Información de contacto") + "</span>"
                            + "</h3>"
                            + '<ul data-role="listview">'
                                + '<li data-role="fieldcontain" class="ui-mini">'
                                    + '<div data-role="fieldcontain">'
                                        + '<input type="email" class="formEl" name="contact[name]"'
                                            + 'placeholder="' + _("Ingresá tu nombre") + '" />'
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<input type="email" class="formEl" name="contact[email]"'
                                            + 'placeholder="' + _("Ingresá tu E-mail") + '" />'
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<input type="tel" class="formEl" name="contact[phone]"'
                                            + 'placeholder="' + _("Ingresá un Teléfono (Ej: 54 11 43211234)") + '" />'
                                    + '</div>'
                                    + '<div data-role="fieldcontain">'
                                        + '<select class="formEl salesman" name="contact[salesman]">'
                                            + '<option value="' + _("Sin Vendedor Asignado") + '">'
                                                + _("Sin Vendedor Asignado") + "</option>";
                $.each(Data.flightSalesmen, function (k, v) {

                    html += ""
                                            + '<option value="' + v + '">' + v + "</option>";
                });
                html += ""
                                        + "</select>"
                                    + '</div>'
                                + "</li>"
                            + "</ul>"
                        + "</div>";

                // Booking details
                html += ""
                        + '<div data-role="collapsible">'
                            + "<h3>"
                                + '<span class="title">3. ' + _("Detalle de la reserva") + "</span>"
                            + "</h3>"
                            + flightItinerary
                        + "</div>"
                    + "</div>";

                // Buy button
                html += ""
                    + '<a data-role="button" href="#" class="ui-btn-raised ui-btn-margin clr-primary zmdi-icon submit">'
                        + '<i class="zmdi zmdi-search"></i>' + _("Reservar") + '</i>'
                    + '</div>'

                // Refresh and bind components
                $("#page-servicesFlightsBuy-details").jqmi("html", html);
                $("#page-servicesFlightsBuy-details").fadeIn("fast");

                $.each($(".countriesAutocomplete a"), function (k, v) {

                    forms.Components.Autocomplete.bind(
                        v,

                        // Search results "success" callback
                        function (res) {

                            var filtered = [],
                                inst = this.markupInst;

                            if (res.data && res.data.length) {

                                // Preformat to properly build the rows
                                filtered = $.map(res.data, function (v) {

                                    var res = {
                                        id: v.code.toLowerCase(),
                                        title: v.name,
                                        subtitle: v.continent_name,
                                        image: Main.baseUrl + "img/countries/" + v.code.toLowerCase() + ".svg"
                                    }

                                    return res;
                                });

                                inst.settings.data = forms.Components.Autocomplete.createSelectOptions(filtered);
                            } else {
                                inst.settings.data = forms.Components.Autocomplete
                                    .createSelectOptions([{
                                        id: "",
                                        title: _("Sin Resultados"),
                                        subtitle: _("No hay resultados para la búsqueda."),
                                        image: Main.baseUrl + "img/warning-icon.svg"
                                    }]);
                            }
                            inst.settings.parseValue(inst.settings.data[0].value);
                            inst.refresh();
                        },
                        {
                            onSelectAfter: function (data, component, inst) {

                                var raw = $(component).parentsUntil("li").find(".formEl.raw"),
                                    country = $(component).parentsUntil("li").find(".formEl.country"),
                                    countryName = $(component).parentsUntil("li").find(".formEl.countryName");

                                // Update formEl fields
                                raw.val(serialize(data));
                                country.val(data.id);
                                countryName.val(data.title);
                            }
                        });
                });

                forms.Components.Calendar.bind($(".birthDate a"), {
                    startYear: now.getFullYear() - 110,
                    endYear: now.getFullYear(),
                    dateOrder: "ddM yy",
                    onSelect: function (val) {

                        val = moment(val, "DD-MM-YYYY");

                        $(this)
                            .html(val.format("D MMM YYYY").replace(/\./g, ""))
                            .prev()
                            .val(val.format("DD-MM-YYYY"));
                    }
                });

                forms.Components.Select
                    .bind($("select.formEl.salesman"), {
                        label: _("Nombre del Vendedor"),
                        rowSize: 16
                    })
                    .bind($("select.formEl.gender"), {
                        label: _("Género")
                    })
                    .bind($("select.formEl.docType"), {
                        label: _("Tipo de Documento")
                    });

                // Save booking
                $("#page-servicesFlightsBuy-details .submit").on("click", function () {

                    // Save for preload
                    Storage.getInstance().set("flights.buy.form", $(".formData .formEl").serializeObject());

                    function save() {

                        var data = $(".formData .formEl:not(.raw)").serializeObject(), // passengers, contact (except "raw" data fields)
                            pricing = flight.pricing;

                        $.extend(pricing, {
                            "details": flight.passengers,
                            "fareType": fareType,
                            "carrier": carrier
                        });
                        $.extend(data, {
                            "lang": Main.language,
                            "segments": self._formatSegmentsForQuery(flight),
                            "pricing": pricing
                        });

                        Main.ajax({
                            url: Main.getApiPath("saveBooking"),
                            type: "POST",
                            actionBtns: $("#page-servicesFlightsBuy-details .submit"),
                            data: data,
                            spinnerMessage: _("Por favor aguardá un instante mientras generamos tu reserva."),
                            success: function (res) {

                                // Save last buy date to alert user if it's trying to buy again very soon
                                // (going back and submitting again)
                                Storage.getInstance().set("flights.buy.last.date", moment().toJSON());
                                Storage.getInstance().set("flights.buy.last.code", res.data.booking.code);

                                self.bookingDetails = res.data.booking;
                                self.bookingDetails.flightId = Main.getUrlParams("id");
                                Main.changePage("servicesFlightsBuyDone");
                            }
                        });
                    }

                    // Some validations
                    if (lastBuyDate && moment().diff(lastBuyDate, "minutes") < 10) {
                        Ui.confirm(
                            {
                                title: "Reserva",
                                description: _("Se efectuó una reserva muy recientemente (" + lastBuyCode + ").<br /><br />"
                                    + "¿Seguro que querés realizar una nueva?")
                            },
                            {},
                            {
                                confirmCallback: save
                            }
                        );
                    } else {
                        save();
                    }
                });

                // Data preload
                if (preloadedData) {
                    $.each(preloadedData, function (tK, tV) { // contact, passengers

                        if (tK == "contact") {
                            $.each(tV, function (k, v) { // name, email, ...

                                if (k == "salesman") {
                                    $(".formData select.formEl[name=contact\\[" + k +  "\\]]")
                                        .mobiscroll("setValue", v, true);
                                }
                                $("[name=contact\\[" + k + "\\]]").val(v);
                            });
                        } else {
                            $.each(tV, function (gK, gV) { // ADT, CH, INF

                                $.each(gV, function (fK, fV) { // 0, 1, ...

                                    $.each(fV, function (k, v) { // name, lastname, ...

                                        if (k == "country") {
                                            var container = $("[name=passengers\\[" + gK + "\\]\\[" + fK + "\\]\\[" + k + "\\]]").parent(),
                                                autocompleteInst = container.find("a").mobiscroll("getInst"),
                                                data = unserialize(fV.countryData),
                                                inputDummy = $("#" + container.find("a").attr("id") + "_dummy");

                                            if (container.length && data) {
                                                container.find(".country").val(data.id);
                                                container.find(".countryName").val(data.title);
                                                container.find(".raw").val(fV.countryData);
                                                inputDummy.val(data.title);
                                                autocompleteInst.settings.data = forms.Components.Autocomplete.createSelectOptions([data]);
                                                autocompleteInst.refresh();
                                            }
                                        } else if ($.inArray(k, ["gender", "docType"]) > -1) {
                                            $("[name=passengers\\[" + gK + "\\]\\[" + fK + "\\]\\[" + k + "\\]]")
                                                .mobiscroll("setValue", v, true)
                                        } else {
                                            $("[name=passengers\\[" + gK + "\\]\\[" + fK + "\\]\\[" + k + "\\]]").val(v);
                                            if (k == "birthdate" && v) {
                                                $("[name=passengers\\[" + gK + "\\]\\[" + fK + "\\]\\[" + k + "\\]]")
                                                    .next("a")
                                                    .text(moment(v, "DD-MM-YYYY").format("D MMM YYYY").replace(/\./g, ""))
                                                    .mobiscroll("setDate", new Date(moment(v, "DD-MM-YYYY")), true);
                                            }
                                        }
                                    });
                                });
                            });
                        }
                    });
                    $("select.formEl").selectmenu("refresh");
                }

                Enhancements.getInstance().page();
            },

            /**
             * Displays data about the selected flight in the search.
             *
             * @param flight object Flight data.
             * @return void.
             */
            showSelected: function (flight) {

                var itinerary = Forms.getInstance().Parts.FlightItinerary.get(flight, { "searchType": this._getSearchType() }),
                    buyBtn =  $("<a>")
                        .attr({
                            "data-role": "button",
                            "href": "#",
                            "class": "submit ui-btn-raised ui-btn-margin zmdi-icon clr-primary"
                        })
                        .append(
                            $("<i>").attr({
                                "class": "zmdi zmdi-check"
                            })
                        )
                        .append(_("Solicitar Reserva"))
                        .on("click", function () { Main.changePage("servicesFlightsBuy"); });

                // Refresh elements
                $("#page-servicesFlightsSelected-data").jqmi("append", itinerary, buyBtn);
                $("#page-servicesFlightsSelected-data").fadeIn("fast");

                Enhancements.getInstance().page();
            },

            /**
             * Displays the search results.
             *
             * @param results object Search results.
             * @param params object Search params.
             * @return void.
             */
            listSearchResults: function (results, params) {

                var html = "",
                    flightId,
                    searchType = this._getSearchType();

                // Search data info
                if (searchType == "single" || searchType == "round") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-info.row1").html(""
                        + params.departureLocation
                        + '<span class="flight-to"><i class="zmdi static zmdi-airplane rotate-90"></i></span>'
                        + params.arrivalLocation);
                } else if (searchType == "multiple") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-info.row1").html(_("MÚLTIPLES"));
                }
                $("#page-servicesFlightsSearchResults-data table td.flight-info.row2").html(""
                    + results.data.total
                    + _(" Vuelos"));
                if (searchType == "single") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row1").html(
                        moment(params.departureDate, "DDMMYY").format("D MMM").toLowerCase().replace(/\./g, ""));
                } else if (searchType == "round") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row1").html(
                        moment(params.departureDate, "DDMMYY").format("D MMM").toLowerCase().replace(/\./g, "")
                            + " / "
                            + moment(params.returnDate, "DDMMYY").format("D MMM").toLowerCase().replace(/\./g, ""));
                } else if (searchType == "multiple") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row1").html(
                        moment(params.departureDate[0], "DDMMYY").format("D MMM").toLowerCase().replace(/\./g, ""));
                }
                if (searchType == "single") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row2").html(_("Sólo Ida"));
                } else if (searchType == "round") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row2").html(_("Ida y Vuelta"));
                } else if (searchType == "multiple") {
                    $("#page-servicesFlightsSearchResults-data table td.flight-date.row2").html(_("Salida"));
                }
                $("#page-servicesFlightsSearchResults-data table td.flight-passengers.row1.man")
                    .html(params.travellers.A);
                $("#page-servicesFlightsSearchResults-data table td.flight-passengers.row1.kids")
                    .html(params.travellers.C);
                $("#page-servicesFlightsSearchResults-data table td.flight-passengers.row1.babys")
                    .html(params.travellers.IN);

                // List
                $("#page-servicesFlightsSearchResults-list").empty().hide();
                $.each(results.data.flights, function (k, v) { //  Group of flights

                    var img = (v.company.multiple ?
                            "../../img/airlines/multiple-airlines.svg" :
                            "../../img/airlines/" + v.company.iata.toLowerCase() + ".svg"),
                        airlineName = (v.company.multiple ? _("Múltiples aerolíneas") : v.company.name);

                    flightId = k;
                    html += ""
                        + '<div data-role="collapsible" data-iconpos="right" data-inset="false" data-content-theme="a">'
                            + "<h3>"
                                + '<span class="company-logo">'
                                    + '<img src="' + img + '" class="fb" data-path="airlines" />'
                                + "</span>"
                                + '<span class="company-name">' + airlineName + '</span>'
                                + '<span class="bubble price">$ '
                                    + Math.ceil(v.price).withMilesSeparator()
                                + "</span>"
                            + "</h3>"
                            + '<ul data-role="listview" data-inset="true">';
                    $.each(v.journeys, function (k, v) { // Flight

                        var resultsIdx = flightId + "|" + k,
                            groupCount = v.flights.length,
                            currentGroupCounter = 0;
                            html += '<li><a href="servicesFlightsSelected.html" '
                                            + 'data-params=\'{"id":"' + resultsIdx + '"}\'>';

                        $.each(v.flights, function (k, v) { // Group of flights for the flight

                            var stops = v.segments.length - 1,
                                firstStop = v.segments[0],
                                lastStop = v.segments[stops],
                                departureHour = moment(firstStop.departure).format("HH:mm"),
                                arrivalHour = moment(lastStop.arrival).format("HH:mm"),
                                stopsText = (stops ?
                                    stops + " " + (stops > 1 ? _("escalas") : _("escala")) :
                                    _("Directo")),
                                time = v.time,
                                flightIconRotation = "";

                            if (groupCount == 2 && ++ currentGroupCounter == 2 && searchType == "round") {
                                flightIconRotation = "rotateX-180";
                            }

                            html += ""
                                        + '<span class="flight-dpt"><i class="zmdi static zmdi-airplane ' + flightIconRotation + '"></i></span>'
                                        + '<span class="bubble mini">' + departureHour + '</span>'
                                        + '<span class="flight-rtn"><i class="zmdi static zmdi-airplane rotate-90"></i></span>'
                                        + '<span class="bubble mini">' + arrivalHour + '</span>'
                                        + '<span class="flight-time"><i class="zmdi static zmdi-time-interval"></i></span>'
                                        + '<span class="bubble mini">' + time + '</span>'
                                        + " "
                                        + '<span class="stops">' + stopsText + '</span>';
                            if (currentGroupCounter < groupCount) {
                                html    += "<br />";
                            }
                        });
                        html    += ""
                                + "</a></li>";
                    });
                    html    += "</ul>"
                        + "</div>";
                });
                $("#page-servicesFlightsSearchResults-list").jqmi("html", html);

                // Refresh elements
                $("#page-servicesFlightsSearchResults-list, "
                    + "#page-servicesFlightsSearchResults-info, "
                    + "#page-servicesFlightsSearchResults-data").fadeIn("fast");
                Enhancements.getInstance().page();
            },

            /**
             * Checks for missing data in the page.
             *
             * @param page string Page for the checkings.
             * @return boolean TRUE if data is consistent; FALSE otherwise.
             */
            isPageDataConsistent: function (page) {

                var res = true;

                switch (page) {
                    case "selected":
                    case "buy":
                        var flightIdx = (Main.getUrlParams("id") ? Main.getUrlParams("id").split("|") : null);

                        res = !(!flightIdx
                            || $.isEmptyObject(this.searchResults)
                            || $.isEmptyObject(this.searchParams)
                            || !$(this.searchResults.data.flights[flightIdx[0]]).length
                            || !$(this.searchResults.data.flights[flightIdx[0]].journeys[flightIdx[1]]).length
                            || (typeof self.bookingDetails.flightId != "undefined"
                                && self.bookingDetails.flightId == Main.getUrlParams("id")));
                        break;

                    case "searchResults":
                        res = !($.isEmptyObject(self.searchResults)
                            || $.isEmptyObject(self.searchParams)
                            || (typeof self.bookingDetails.flightId != "undefined"
                                && self.bookingDetails.flightId == Main.getUrlParams("id")));
                        break;

                    case "buyDone":
                        res = !$.isEmptyObject(self.bookingDetails);
                        break;

                    default:
                        throw new Error("Wrong 'page' specification.");
                }

                return res;
            },

            /**
             * Formats a block of flight segments for querying the API.
             *
             * @param flight object Flight data.
             * @return array
             */
            _formatSegmentsForQuery: function (flight) {

                var res = [],
                    flightType,
                    passengersForBookingCount = 0,
                    entireFlight = flight.flights;

                $.each(flight.passengers, function (k, v) {

                    if (k == "ADT" || k == "CH") {
                        passengersForBookingCount += v.amount;
                    }
                });
                $.each(entireFlight, function (k, v) {

                    var currentFlight = k;

                    res.push([]);
                    $.each(v.segments, function (k, v) {

                        res[currentFlight].push({
                            "departure": v.departure,
                            "departureDate": moment(v.departure).format("DDMMYY"),
                            "departureLocation": v.departureLocation,
                            "arrival": v.arrival,
                            "arrivalLocation": v.arrivalLocation,
                            "company": v.company.iata,
                            "companyName": v.company.name,
                            "flightNumber": v.number,
                            "class": v.cabin.ADT.rbd,
                            "className": v.cabin.ADT.className,
                            "classCode": v.cabin.ADT.class,
                            "passengers": passengersForBookingCount,
                            "location": v.location
                        });
                    });
                });

                return res;
            },

            /**
             * Returns the type of the search performed.
             *
             * @return string.
             */
            _getSearchType: function () {

                var res = "unknown",
                    departureDate = typeof this.searchParams.departureDate != "undefined",
                    returnDate = typeof this.searchParams.returnDate != "undefined"
                        && this.searchParams.returnDate;

                if (departureDate && returnDate) {
                    res = "round";
                } else if (departureDate && typeof this.searchParams.departureDate == "string") {
                    res = "single";
                } else if (departureDate && $.isArray(this.searchParams.departureDate)) {
                    res = "multiple";
                }

                return res;
            }
        }
    }

    return {

        /**
         * (Creates and) Gets the current instance.
         *
         * @param opts array Initialization options.
         * @return object An object instance.
         */
        getInstance: function (opts) {

            if (_instance === undefined) {
                _instance = init(opts);
            }

            return _instance;
        }
    };
})();
