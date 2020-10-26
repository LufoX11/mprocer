/**
 * Functions file for Services in services.html.
 */

var Services = (function () {

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
             * Sets the user preference: receive newsletter.
             *
             * @param enabled boolean User newsletter status.
             * @return self.
             */
            setNewsletter: function (enabled) {

                Main.ajax({
                    url: Main.getApiPath("setUserPreference", "resource") + "/receiveNewsletter",
                    type: "POST",
                    data: {
                        "data": enabled
                    }
                });

                return self;
            },

            /**
             * Gets the user preference: receive newsletter.
             *
             * @param success function Success callback.
             * @param error function Error callback.
             * @return self.
             */
            getNewsletter: function (success, error) {

                var res = false;

                Main.ajax({
                    url: Main.getApiPath("getUserPreference", "resource") + "/receiveNewsletter",
                    noErrorMessages: true,
                    error: error,
                    success: success
                });

                return self;
            },

            /**
             * Saves data from the current user.
             *
             * @param data array User data. Allowed fields are:
             *                   @param email string
             *                   @param phone string
             * @return self.
             */
            saveUserData: function (data) {

                Main.ajax({
                    url: Main.getApiPath("saveUserData", "resource"),
                    data: data,
                    type: 'POST',
                    success: function (res) {

                        if (res) {
                            alert(_("Se actualizaron tus datos."));
                        }
                    }
                });

                return self;
            },

            /**
             * Retrieves user data.
             *
             * @param success function Success callback.
             * @param error function Error callback.
             * @return self.
             */
            findUserData: function (success, error) {

                var res = false;

                Main.ajax({
                    url: Main.getApiPath("findUserData", "resource"),
                    noErrorMessages: true,
                    error: error,
                    success: success
                });

                return self;
            },

            /**
             * Sends the complaints form.
             *
             * @return void.
             */
            sendComplaint: function () {

                var data = {
                        "name": $("#page-complaints-form-name").val(),
                        "email": $("#page-complaints-form-email").val(),
                        "phone": $("#page-complaints-form-phone").val(),
                        "reason": $("#page-complaints-form-reason").val(),
                        "description": $("#page-complaints-form-description").val()
                    };

                Main.ajax({
                    url: Main.getApiPath("saveContact", "resource"),
                    data: data,
                    type: 'POST',
                    success: function (res) {

                        if (res) {
                            alert(_("Recibimos tu consulta y te contestaremos a la brevedad, "
                                + "muchas gracias."));
                        }
                    }
                });
            },

            /**
             * Fetches countries and cities for the weather widget.
             *
             * @return void.
             */
            fetchWeatherCities: function () {

                var html = '';

                // Build box
                $.each(Data.weatherCities, function (t, c) {

                    $.each(c, function (k, v) {
                        html += ""
                            + "<li>"
                                + '<a href="#" class="page-servicesWeather-city" data-city="' + t + "__" + v + '">'
                                    + _(t.replace(/_/g, " ")) + " / "
                                    + _(v.replace(/_/g, " "))
                                + "</a>"
                            + "</li>";
                    });
                });
                $("#page-servicesWeather-city").html(html).listview("refresh");

                // Prefetch with user settings
                Services.getInstance().findWeather();

                // Attach triggers
                $(".page-servicesWeather-city").on("click", function () {

                    Services.getInstance().findWeather($(this).attr("data-city"));
                });
            },

            /**
             * Gets the weather for the city.
             *
             * @param city string The city to get the weather for.
             * @return void.
             */
            findWeather: function (city) {

                Main.ajax({
                    url: Main.getApiPath("findWeather") + (city ? "/" + city : ""),
                    success: function (res) {

                        if (res) {
                            var forecastHtml = "", current = res.data.current, title = {};

                            // Expand current conditions
                            current.high = res.data.forecast[0].high;
                            current.low = res.data.forecast[0].low;
                            res.data.forecast.shift();

                            // Build data box
                            forecastHtml += ""
                                + '<li data-role="list-divider">' + _("Hoy") + "</li>"
                                + "<li>"
                                    + '<img src="../../img/services/weather/' + current.icon + '" />'
                                    + "<h3>" + _(current.description) + "</h3>"
                                    + "<p>"
                                        + _("Temp") + ": <strong>" + current.temperature + "°</strong> | "
                                        + _("Hum") + ": <strong>" + current.humidity + "%</strong>"
                                    + "</p>"
                                    + "<p>"
                                        + _("Máx") + ": <strong>" + current.high + "°</strong> | "
                                        + _("Mín") + ": <strong>" + current.low + "°</strong>"
                                    + "</p>"
                                + "</li>";
                            $.each(res.data.forecast, function (k, v) {

                                forecastHtml += ""
                                    + '<li data-role="list-divider">' + _(v.day) + "</li>"
                                    + "<li>"
                                        + '<img src="../../img/services/weather/' + v.icon + '" />'
                                        + "<h3>" + _(v.description) + "</h3>"
                                        + "<p>"
                                            + _("Máx") + ": <strong>" + v.high + "°</strong> | "
                                            + _("Mín") + ": <strong>" + v.low + "°</strong>"
                                        + "</p>"
                                    + "</li>";
                            });

                            title = res.data.location.split("/");
                            title[0] = _(title[0].replace(/_/g, " "));
                            title[1] = _(title[1].replace(/_/g, " "));

                            $("#page-servicesWeather-forecast-city").html(title[0] + " / " + title[1]);
                            $("#page-servicesWeather-forecast").html(forecastHtml).listview("refresh");
                            if ($("#page-servicesWeather-collapsible div.forecast").hasClass("ui-collapsible-collapsed")) {
                                $("#page-servicesWeather-collapsible div.forecast > h3").click();
                            }
                        }
                    }
                });
            },

            /**
             * Fetches phrases data for boxes.
             *
             * @param fromLang string ISO code of the source lang.
             * @param toLang string ISO code of the target lang.
             * @return void.
             */
            fetchPhrases: function (fromLang, toLang) {

                var data = {}, html = "";

                // Fallback for choosing the same lang in "fromLang"
                // (if the user clicks the fromLang than in toLang)
                if (fromLang == toLang) {
                    toLang = (fromLang == "es" ? "en" : "es");
                    $("#page-servicesPhrases-toLang").val(toLang).selectmenu("refresh", true);
                }

                if (typeof Data.phrases[fromLang] != "undefined"
                    && typeof Data.phrases[fromLang][toLang] != "undefined")
                {
                    data = Data.phrases[fromLang][toLang];
                } else {
                    data = flip(Data.phrases[toLang][fromLang]);
                }

                // Disable the "to" lang in list (to avoid choosing the same lang)
                $("#page-servicesPhrases-toLang > option").attr("disabled", false);
                $("#page-servicesPhrases-toLang option[value=" + fromLang + "]").attr("disabled", true);
                $("#page-servicesPhrases-toLang").selectmenu("refresh", true);

                // Update the table
                $.each(data, function (k, v) {
                    html += ""
                        + "<tr>"
                            + "<td>" + k + "</td>"
                            + "<td>" + v + "</td>"
                        + "</tr>";
                });
                $("#page-servicesPhrases-equivalences > tbody").html(html);
                $("#page-servicesPhrases-equivalences").table("refresh");
            },

            /**
             * Fetches metros data.
             *
             * @return void.
             */
            fetchMetros: function () {

                var html = "";

                $.each(Data.metros, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesMetrosNames.html" data-params=\'["'
                                + k + '"]\'>' + k + "</a>"
                        + "</li>";
                });

                $("#page-servicesMetros-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches metros names for a city.
             *
             * @return void.
             */
            fetchMetrosNames: function () {

                var html = "", img = "";
                var city = Main.getUrlParams(0);

                // Fallback for empty data
                if (!city) {
                    Main.changePage("servicesMetros");

                    return;
                }

                $.each(Data.metros[city], function (k, v) {
                    img = "../../img/services/metros/maps/" + v[2];
                    html += ""
                        + "<li>"
                            + '<a href="' + img + '" class="gallery-elements" rel="external">'
                                + v[0]
                            + "</a>"
                        + "</li>";
                });

                $("#page-servicesMetrosNames-list").html(html).listview("refresh");

                // Photo Gallery
                $(".gallery-elements").photoSwipe();
            },

            /**
             * Fetches tourism data.
             *
             * @return void.
             */
            fetchTourism: function () {

                var html = "";

                $.each(Data.tourism, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesTourismNames.html" data-params=\'["'
                                + k + '"]\'>' + k + "</a>"
                        + "</li>";
                });

                $("#page-servicesTourism-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches tourism countries for a continent.
             *
             * @return void.
             */
            fetchTourismNames: function () {

                var html = "";
                var country = Main.getUrlParams(0);

                // Fallback for empty data
                if (!country) {
                    Main.changePage("servicesTourism");

                    return;
                }

                $.each(Data.tourism[country], function (k, v) {
                    countryNormalized = v.split(" ").join("_");
                    html += ""
                        + "<li>"
                            + '<a href="http://m.wikitravel.org/' + Main.language + "/" + countryNormalized + '" '
                            + 'data-rel="externalBrowser">' + v + "</a>"
                        + "</li>";
                });

                $("#page-servicesTourismNames-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches outlets data.
             *
             * @return void.
             */
            fetchOutlets: function () {

                var html = "";

                $.each(Data.outlets, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesOutletsNames.html" data-params=\'["'
                                + k + '"]\'>' + k + "</a>"
                        + "</li>";
                });

                $("#page-servicesOutlets-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches outlets names for a category.
             *
             * @return void.
             */
            fetchOutletsNames: function () {

                var html = "";
                var category = Main.getUrlParams(0);

                // Fallback for empty data
                if (!category) {
                    Main.changePage("servicesOutlets");

                    return;
                }

                $.each(Data.outlets[category], function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="#" data-info="' + v[0] + "|" + v[1] + "|" + k + '">' + v[0] + "</a>"
                        + "</li>";
                });

                $("#page-servicesOutletsNames-list").html(html).listview("refresh");
                $("#page-servicesOutletsNames-list > li").on("click", function () {

                    var data = $(this).children().children().children().attr("data-info").split("|");
                    var addresses = Data.outlets[category][data[2]][2];
                    var html = ""
                        + '<table class="for-alert">'
                            + "<tr>"
                                + "<th>" + _("Nombre") + ":</th>"
                                + "<td>" + data[0] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Enlace externo") + ":</th>"
                                + '<td><a href="' + data[1] + '" data-role="button" data-rel="externalBrowser"'
                                        + (!data[1] ? ' class="ui-disabled miniBtn"' : ' class="miniBtn"')
                                        + ' data-inline="true"'
                                        + ' data-mini="true" data-icon="arrow-r">'
                                    + (data[1] ? _("Acceder") : _("Ninguno"))
                                + "</a></td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Direcciones") + ":</th>"
                                + "<td>";
                    $.each(addresses, function (k, v) {
                        html +=       "<table>"
                                        + "<tr><th>" + k + "</th></tr>";
                        $.each(v, function (k, v) {
                            html +=       "<tr><td>" + v + "</td></tr>";
                        });
                        html +=       "</table>"
                    });
                    html +=       "</td>"
                            + "</tr>"
                        + "</table>";

                    alert(html, category, true);
                });
            },

            /**
             * Fetches shoppings data.
             *
             * @return void.
             */
            fetchShoppings: function () {

                var html = "";

                $.each(Data.shoppings, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesShoppingsNames.html" data-params=\'["'
                                + k + '"]\'>' + k + "</a>"
                        + "</li>";
                });

                $("#page-servicesShoppings-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches shoppings names for a city.
             *
             * @return void.
             */
            fetchShoppingsNames: function () {

                var html = "";
                var city = Main.getUrlParams(0);

                // Fallback for empty data
                if (!city) {
                    Main.changePage("servicesShoppings");

                    return;
                }

                $.each(Data.shoppings[city], function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="#" data-info="' + v[0] + "|" + v[1] + "|" + v[2]
                                + "|" + v[3] + "|" + v[4] + '">' + v[0] + "</a>"
                        + "</li>";
                });

                $("#page-servicesShoppingsNames-list").html(html).listview("refresh");
                $("#page-servicesShoppingsNames-list > li").on("click", function () {

                    var data = $(this).children().children().children().attr("data-info").split("|");
                    var dataObjectsWidth = (Main.deviceWidth > 280 ? 280 : Main.deviceWidth);
                    var dataObjectsHeight = dataObjectsWidth;
                    var html = ""
                        + '<table class="for-alert">'
                            + '<tr><td colspan="2">'
                                + '<div class="map"><img src="http://maps.googleapis.com/maps/api/staticmap'
                                        + "?center=" + data[2]
                                        + "&zoom=15&size=" + dataObjectsWidth + "x" + dataObjectsHeight
                                        + "&markers=" + data[2]
                                        + '&sensor=false" /></div>'
                            + "</td></tr>"
                            + "<tr>"
                                + "<th>" + _("Nombre") + ":</th>"
                                + "<td>" + data[0] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Teléfono") + ":</th>"
                                + "<td>" + data[3] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Horario") + ":</th>"
                                + "<td>" + data[4] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Enlace externo") + ":</th>"
                                + '<td><a href="' + data[1] + '" data-role="button" data-rel="externalBrowser"'
                                        + (!data[1] ? ' class="ui-disabled miniBtn"' : ' class="miniBtn"')
                                        + ' data-inline="true"'
                                        + ' data-mini="true" data-icon="arrow-r">'
                                    + (data[1] ? _("Acceder") : _("Ninguno"))
                                + "</a></td>"
                            + "</tr>"
                        + "</table>";

                    alert(html, city, true);
                });
            },

            /**
             * Fetches taxis data.
             *
             * @return void.
             */
            fetchTaxis: function () {

                var html = "";

                $.each(Data.taxis, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesTaxisNames.html" data-params=\'["'
                                + k + '"]\'>' + k + "</a>"
                        + "</li>";
                });

                $("#page-servicesTaxis-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches taxis names for a city.
             *
             * @return void.
             */
            fetchTaxisNames: function () {

                var html = "";
                var city = Main.getUrlParams(0);

                // Fallback for empty data
                if (!city) {
                    Main.changePage("servicesTaxis");

                    return;
                }

                $.each(Data.taxis[city], function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="#" data-info="' + v[0] + "|" + v[1] + '">' + v[0] + "</a>"
                        + "</li>";
                });

                $("#page-servicesTaxisNames-list").html(html).listview("refresh");
                $("#page-servicesTaxisNames-list > li").on("click", function () {

                    var data = $(this).children().children().children().attr("data-info").split("|");
                    var html = ""
                        + '<table class="for-alert">'
                            + "<tr>"
                                + "<th>" + _("Nombre") + ":</th>"
                                + "<td>" + data[0] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Teléfono") + ":</th>"
                                + "<td>" + data[1] + "</td>"
                            + "</tr>"
                        + "</table>";

                    alert(html, city, true);
                });
            },

            /**
             * Fetches emergency data.
             *
             * @return void.
             */
            fetchEmergency: function () {

                var html = "";

                $.each(Data.emergencyNumbers, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="#" data-info="' + v[0] + "|" + v[1] + "|" + v[2] + "|" + v[3] + "|" + v[4]
                                + '">' + _(v[0]) + "</a>"
                        + "</li>";
                });

                $("#page-servicesEmergency-list").html(html).listview("refresh");
                $("#page-servicesEmergency-list > li").on("click", function () {

                    var data = $(this).children().children().children().attr("data-info").split("|");
                    var html = ""
                        + '<table class="for-alert">'
                            + "<tr>"
                                + "<th>" + _("Policía") + ":</th>"
                                + "<td>" + data[1] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Ambulancia") + ":</th>"
                                + "<td>" + data[2] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Incendio") + ":</th>"
                                + "<td>" + data[3] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Nota") + ":</th>"
                                + "<td>" + _(data[4]) + "</td>"
                            + "</tr>"
                        + "</table>";

                    alert(html, data[0], true);
                });
            },

            /**
             * Fetches dial codes data.
             *
             * @return void.
             */
            fetchDialCodes: function () {

                var html = "";

                $.each(Data.dialCodes, function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="servicesDialCodesCities.html" data-params=\'["'
                                + k + '"]\'>' + _(k) + "</a>"
                        + "</li>";
                });

                $("#page-servicesDialCodes-list").html(html).listview("refresh");
                Enhancements.getInstance().page();
            },

            /**
             * Fetches cities for a country.
             *
             * @return void.
             */
            fetchDialCodesCities: function () {

                var html = "";
                var country = Main.getUrlParams(0);

                // Fallback for empty data
                if (!country) {
                    Main.changePage("servicesDialCodes");

                    return;
                }

                $.each(Data.dialCodes[country], function (k, v) {
                    html += ""
                        + "<li>"
                            + '<a href="#" data-info="' + v[0] + "|" + v[1] + '">' + _(v[0]) + "</a>"
                        + "</li>";
                });

                $("#page-servicesDialCodesCities-list").html(html).listview("refresh");
                $("#page-servicesDialCodesCities-list > li").on("click", function () {

                    var data = $(this).children().children().children().attr("data-info").split("|");
                    var html = ""
                        + '<table class="for-alert">'
                            + "<tr>"
                                + "<th>" + _("Ciudad") + ":</th>"
                                + "<td>" + data[0] + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Prefijo") + ":</th>"
                                + "<td>" + data[1] + "</td>"
                            + "</tr>"
                        + "</table>";

                    alert(html, country, true);
                });
            },

            /**
             * Fetches metrics data for boxes.
             *
             * @param type string Metric type (area|length|weight|temp|volume).
             * @return void.
             */
            fetchMetrics: function (type) {

                var html = "";

                $.each(Data.metrics.rates[type], function (k, v) {
                    html += '<option value="' + v + '">' + _(Data.metrics.names[k]) + "</option>";
                });

                if (type == "temp") {
                    $("#page-servicesMetrics-from-type").html(html).selectmenu("enable").selectmenu("refresh", true);
                    $("#page-servicesMetrics-to-type").html("...").selectmenu("disable").selectmenu("refresh", true);
                } else {
                    $("#page-servicesMetrics-from-type, #page-servicesMetrics-to-type")
                        .html(html).selectmenu("enable").selectmenu("refresh", true);
                }

                $("#page-servicesMetrics-result").html("0.00");
                $("#page-servicesMetrics-from-number").val("");
            },

            /**
             * Calculates the equivalence.
             *
             * @param fromNumber integer Number to convert.
             * @param fromRef mixed Conversion source value or description.
             * @param toRef mixed Conversion target value or description.
             * @return void.
             */
            calculateMetric: function (fromNumber, fromRef, toRef) {

                var total = 0;

                fromNumber = fromNumber.replace(/,/g, ".");
                if (!fromNumber.isNumber()) {
                    $("#page-servicesMetrics-result").html("0.00");

                    return false;
                }

                if ($("#page-servicesMetrics-menu-temp").is(":checked")) {
                    if (fromRef == "celsius") {
                        total = fromNumber * 9 / 5 + 32;
                    } else {
                        total = (fromNumber - 32) * 5 / 9;
                    }
                } else {
                    total = fromNumber / fromRef * toRef;
                }

                $("#page-servicesMetrics-result").html(total);
            },

            /**
             * Fetches and sets currencies data.
             *
             * @return void.
             */
            fetchCurrencies: function () {

                Main.ajax({
                    url: Main.getApiPath("fetchCurrencies"),
                    success: function (res) {
                        if (res) {
                            var htmlFrom = "", htmlTo = "";
                            $.each(res.data.rates, function (k, v) {
                                htmlFrom += ""
                                    + '<option value="' + v + '"' + (k == "ARS" ? 'selected="selected"' : "") + '>'
                                        + k + " - " + _(res.data.names[k])
                                    + "</option>";
                                htmlTo += ""
                                    + '<option value="' + v + '"' + (k == "USD" ? 'selected="selected"' : "") + '>'
                                        + k + " - " + _(res.data.names[k])
                                    + "</option>";
                            });
                            $("#page-servicesCurrencies-from-currency")
                                .html(htmlFrom)
                                .selectmenu("enable")
                                .selectmenu("refresh", true);
                            $("#page-servicesCurrencies-to-currency")
                                .html(htmlTo)
                                .selectmenu("enable")
                                .selectmenu("refresh", true);
                        }
                    }
                });
            },

            /**
             * Calculates the equivalence.
             *
             * @param fromNumber integer Number to convert.
             * @param fromCurrency integer Conversion source value.
             * @param toCurrency integer Conversion target value.
             * @return void.
             */
            calculateCurrency: function (fromNumber, fromCurrency, toCurrency) {

                fromNumber = fromNumber.replace(/,/g, ".");
                if (!fromNumber.isNumber() || !fromCurrency.isNumber() || !toCurrency.isNumber()) {
                    $("#page-servicesCurrencies-result").html("$ 0.00");

                    return false;
                }

                var total = Number((fromNumber / fromCurrency * toCurrency).toFixed(2));

                $("#page-servicesCurrencies-result").html("$ " + (total));
            },

            /**
             * Fetches airports data, like continents, countries, regions and airports full data.
             *
             * @param component string Name of the component to retrieve data for.
             * @param data mixed STRING with extra data for the URL if still need to retrieve data from API;
             *                   ARRAY with airports data if asking for airports data (component == "none").
             * @return void.
             */
            fetchAirportsData: function (component, data) {

                var method = "fetchAirports" + (component != "airports" ? component.ucfirst() : "");

                if (typeof data == "undefined") {
                    data = "";
                }

                // Will receive "none" when the last target filled was "airports"
                if (component != "none") {

                    // Try to load data from API
                    Main.ajax({
                        url: Main.getApiPath(method) + (data ? "/" + data : ""),
                        success: function (res) {

                            // Rebuild all needed boxes
                            var nextBox = "none";
                            var boxMessage = _("Seleccioná un Aeropuerto");
                            if (component == "continents" || component == "countries" || component == "regions") {
                                boxMessage = _("Seleccioná una Región");
                                nextBox = "airports";
                                $("#page-servicesAirports-airports")
                                    .html("<option>" + _("Seleccioná un Aeropuerto") + "</option>")
                                    .selectmenu("disable")
                                    .selectmenu("refresh", true);
                            }
                            if (component == "continents" || component == "countries") {
                                nextBox = "regions";
                                boxMessage = _("Seleccioná un País");
                                $("#page-servicesAirports-regions")
                                    .html("<option>" + _("Seleccioná una Región") + "</option>")
                                    .selectmenu("disable")
                                    .selectmenu("refresh", true);
                            }
                            if (component == "continents") {
                                nextBox = "countries";
                                boxMessage = _("Seleccioná un Continente");
                                $("#page-servicesAirports-countries")
                                    .html("<option>" + _("Seleccioná un País") + "</option>")
                                    .selectmenu("disable")
                                    .selectmenu("refresh", true);
                            }

                            // Build target box
                            var html = "<option>" + boxMessage + "</option>";
                            if (!$.isEmptyObject(res.data)) {
                                $.each(res.data, function (k, v) {
                                    html += '<option value="' + v.code + '">' + _(v.name) + '</option>';
                                });
                                $("#page-servicesAirports-" + component)
                                    .html(html)
                                    .selectmenu("enable")
                                    .selectmenu("refresh", true);

                                // Attach the selection event to each element of the target box
                                $("#page-servicesAirports-" + component).on("change", function () {
                                    Services.getInstance().fetchAirportsData(nextBox,
                                        (nextBox == "none" ? res.data[$(this).val()] : $(this).val()));
                                });
                            }
                        }
                    });
                } else {

                    // Load airport data
                    var dataObjectsWidth = (Main.deviceWidth > 592 ? 592 : Main.deviceWidth);
                    var dataObjectsHeight = dataObjectsWidth;
                    $("#page-servicesAirports-container > li.airportsInfo,"
                        + "#page-servicesAirports-container > li.airportsMap").remove();
                    $("#page-servicesAirports-container").append(""
                        + '<li class="airportsInfo"><table>'
                            + "<tr>"
                                + "<th>" + _("Nombre") + ":</th>"
                                + "<td>" + data.name + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Municipalidad") + ":</th>"
                                + "<td>"
                                    + (data.municipality ? data.municipality : "(Desconocida)")
                                + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Código IATA") + ":</th>"
                                + "<td>"
                                    + (data.iata ? data.iata : _("(No asignado)"))
                                + "</td>"
                            + "</tr>"
                            + "<tr>"
                                + "<th>" + _("Enlace externo") + ":</th>"
                                + '<td><a href="' + data.link + '" data-role="button" data-rel="externalBrowser"'
                                        + (!data.link ? ' class="ui-disabled miniBtn"' : ' class="miniBtn"')
                                        + ' data-inline="true"'
                                        + ' data-mini="true" data-icon="arrow-r">'
                                    + (data.link ? _("Acceder") : _("Ninguno"))
                                + "</a></td>"
                            + "</tr>"
                        + "</table></li>"
                        + '<li class="airportsMap">'
                            + '<div class="map"><img src="http://maps.googleapis.com/maps/api/staticmap'
                                    + "?center=" + data.latitud + "," + data.longitud
                                    + "&zoom=13&size=" + dataObjectsWidth + "x" + dataObjectsHeight
                                    + "&markers=" + data.latitud + "," + data.longitud
                                    + '&sensor=false" /></div>'
                        + "</li>"
                        ).listview("refresh");
                    Enhancements.getInstance().page();
                }
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

