/**
 * Page events handler.
 */

var Events = (function () {

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

        // App Spine
        $(document)
            .on("DOMNodeInserted", function (e) {

                var img = $(e.target).find("img.fb"),
                    loader = $(e.target).find("span.ui-icon-loading");

                if (img.length) {
                    Enhancements.getInstance().imageFallbacks(img);
                }
                if (loader.length) {
                    $("span.ui-icon-loading").replaceWith(Forms.getInstance().Parts.Loader.get({ zoom: .75 }));
                }
            })
            .on("mobileinit", function () {

                /* INIT FLOW: 1 */

                log("event", "Launching document.mobileinit.");

                // Set defaults for jQuery & jQueryMobile
                Enhancements.getInstance().jQuery().jQueryMobile();
            })
            .on("pagebeforecreate", function () {

                // Note: ":not" selector is added to select ONLY the next page
                // (that has not benn enhanced so it hasn't jQM classes yet).
                var currentPage = $(":mobile-pagecontainer [data-role=page]:not(.ui-page)"),
                    appHeaderOptions = {
                        "suffix": currentPage.prop("id"),
                        "disableNavigation": Main.firstTime,
                        "currentPageID": currentPage.prop("id"),
                        "alerts": {
                            "news": Forms.getInstance().Components.Alerts.getCount()
                        }
                    },
                    appMenuOptions = appHeaderOptions;

                log("event", "Launching document.pagebeforecreate.");

                // Add header to the next page.
                // Note: This must be done this way because JQM must not implement a reliable way for
                // persistant and fixed toolbars.
                log("event", "Adding page header to: " + currentPage.attr("id") + ".");
                $(Forms.getInstance().Parts.AppHeader.get(appHeaderOptions)).prependTo(currentPage);

                // Add main menu
                $(Forms.getInstance().Parts.AppMenu.get(appMenuOptions)).prependTo(currentPage);
                Forms.getInstance().Components.WidgetMenustrip.bind($("#menu-" + appMenuOptions.suffix));
            })
            .ready(function () {

                log("event", "Launching document.ready.");

                // Set defaults for vendors and others
                Enhancements.getInstance().mobiscroll();
            });

        return self = {

            /**
             * @var boolean The purpose of this var is to help with the "on double back exit" function.
             */
            exitApp: false,

            /**
             * @var object Timer to display the "exit" message.
             */
            exitAppMsgTimer: null,

            /**
             * @var boolean Tells if the page has been recently scrolled.
             */
            pageScrolled: false,

            /**
             * @var object Timer to execute scroll tasks.
             */
            scrollTimer: null,

            /**
             * @var object A list of jQuery selectors to handle on window / document change events.
             */
            elementsOnChange: {
                scroll: {
                    fixTop: []
                }
            },

            /**
             * @var array Contains previous pages data.
             */
            prevPage: [],

            /**
             * @var boolean Whether we should add the previous page to the stack.
             */
            savePrevPage: true,

            /*** PAGE EVENT HANDLERS *******************************************************/

            /**
             * Binds an event.
             *
             * @param eventName string The event to bind. If none specified will bind to ALL available.
             * @return self.
             */
            bind: function (eventName) {

                log("event", "Binding Events.");
                if (typeof eventName == "undefined") {
                    eventName = "ALL";
                }

                // PAGEBEFORECHANGE
                if (eventName == "ALL" || eventName == "pagecontainerbeforechange") {

                    // This event will handle the other pagebeforechange events
                    self._bindMpcPagecontainerbeforechange();
                }

                // PAGEBEFORESHOW
                if (eventName == "ALL" || eventName == "pagecontainerbeforeshow") {

                    // This event will handle the other pagebeforeshow events
                    self._bindMpcPagecontainerbeforeshow();
                }

                // PAGESHOW
                if (eventName == "ALL" || eventName == "pagecontainershow") {

                    // This event will handle the other pageshow events
                    self._bindMpcPagecontainershow();
                }

                // WINDOW.RESIZE
                if (eventName == "ALL" || eventName == "winResize") {
                    self._bindWinResize();
                }

                // WINDOW.SCROLL
                if (eventName == "ALL" || eventName == "winScroll") {
                    self._bindWinScroll();
                }

                return self;
            },

            /**
             * Unbinds an event and restores funcionality.
             *
             * @param eventName string The event to unbind. If none specified will unbind ALL events.
             * @return self.
             */
            unbind: function (eventName) {

                log("event", "Unbinding Events.");
                if (typeof eventName == "undefined") {
                    eventName = "ALL";
                    $(":mobile-pagecontainer").unbind();
                } else {
                    $(":mobile-pagecontainer").unbind(eventName);
                }

                // PAGEBEFORECHANGE
                if (eventName == "ALL" || eventName == "pagecontainerbeforechange") {

                    // This event will handle the other pagebeforechange events
                    self._unbindMpcPagecontainerbeforechange();
                }

                // PAGEBEFORESHOW
                if (eventName == "ALL" || eventName == "pagecontainerbeforeshow") {

                    // This event will handle the other pagebeforeshow events
                    self._unbindMpcPagecontainerbeforeshow();
                }

                // PAGESHOW
                if (eventName == "ALL" || eventName == "pagecontainershow") {

                    // This event will handle the other pageshow events
                    self._unbindMpcPagecontainershow();
                }

                // WINDOW.RESIZED
                if (eventName == "ALL" || eventName == "winResize") {
                    self._unbindWinResize();
                }

                // WINDOW.SCROLL
                if (eventName == "ALL" || eventName == "winScroll") {
                    self._unbindWinScroll();
                }

                return self;
            },

            /*** HELPERS & AUXILIARS (PUBLIC) *******************************************************/

            /**
             * Adds to the stack an element (if it doesn't exist yet) to handle in page events.
             *
             * @param event string The event where it should be fired.
             * @param action string The name of the action to perform on the element.
             * @param elementId string The ID of the element (as a plain string; jQuery selector is not valid) to handle.
             * @return self.
             */
            setElementOnChange: function (event, action, elementId) {

                if (typeof elementId != "string") {
                    log("event", "Can't add to elementsOnChange list (" + event + ") element of type: "
                        + typeof elementId);

                    return;
                }

                // Check that the element doesn't exist
                if ($.inArray(elementId, self.elementsOnChange[event][action]) === -1) {
                    log("event", "Adding to elementsOnChange list (" + event + "): " + elementId);
                    self.elementsOnChange[event][action].push(elementId);
                }

                return self;
            },

            /*** OTHER BINDINGS (PUBLIC) *******************************************************/

            /**
             * Binds an action for device's back button.
             *
             * @param callback function Callback function.
             * @param data mixed Additional data to send to callback action (will be visible through event.data).
             *                   Params info for callback function: https://api.jquerymobile.com/pagecontainer/#event-beforechange
             * @param options object Additional options:
             *                       pushState boolean (TRUE) If FALSE the URL hash won't change after binding the event.
             *                       urlhashCheck boolean (TRUE) If FALSE the URL check to determine if the back action was
             *                                            invoked won't be performed. It's a good idea to set to FALSE if
             *                                            pushState is FALSE too.
             *                       nativeBinding boolean If it should try to attach to the native phone's back button.
             * @return self.
             */
            bindBackButton: function (callback, data, options) {

                var options = $.extend(
                        {
                            "urlhashCheck": true,
                            "pushState" : true,
                            "nativeBinding": false
                        },
                        options);

                log("event", "Binding Events.bindBackButton. Options: " + JSON.stringify(options));

                if (options.nativeBinding) {
                    document.addEventListener("backbutton", callback, false);
                } else {
                    if (options.pushState) {
                        $.mobile.navigate(window.location.hash + "&ui-state=dialog");
                    }
                    self.unbind("pagecontainerbeforechange");
                    $(":mobile-pagecontainer").on("pagecontainerbeforechange", data, function (event, ui) {

                        // 1. It's only changing the URI params part (like "&ui-state=dialog"), so we assume it's because
                        //    a go back action was triggered
                        // 2. We positively know it's changing to a previous page
                        if ((options.urlhashCheck && ui.prevPage.data().url == ui.toPage)
                            || ui.options.direction == "back")
                        {
                            return callback(event, ui);
                        }
                    });
                }

                return self;
            },

            /**
             * Unbinds and restore changepage default functionality for device's back button.
             *
             * @param callback function Callback function.
             * @param options object Additional options:
             *                       nativeBinding boolean If it should try to detach from the native phone's back button.
             * @return self.
             */
            unbindBackButton: function (callback, options) {

                var options = $.extend(
                        {
                            "nativeBinding": false
                        },
                        options);

                log("event", "Binding Events.unbindBackButton. Options: " + JSON.stringify(options));

                if (typeof callback == "function" && options.nativeBinding) {
                    document.removeEventListener("backbutton", callback, false);
                } else {
                    if (window.location.hash.split("&").length > 1) {
                        window.history.back();
                    }
                    self.unbind("pagecontainerbeforechange").bind("pagecontainerbeforechange");
                }

                return self;
            },

            /*** APP PAGE BINDINGS *******************************************************/

            /**
             * PAGESHOW event for all pages (:mobile-pagecontainer - pagecontainershow).
             *
             * @return self.
             */
            _bindMpcPagecontainershow: function () {

                log("event", "Binding Events._bindMpcPagecontainershow.");
                $(":mobile-pagecontainer").on("pagecontainershow", function (event, ui) {

                    var bindName = "";

                    // Save previous page data for further use (like doing a programatically back to previous page)
                    if (self.savePrevPage) {
                        self.prevPage.push(ui.prevPage);
                    } else {
                        self.savePrevPage = true;
                    }

                    ////
                    // POPUPS.
                    ////

                    // Popups - Fullscreen attribute.
                    // Note: Add the class "fullscreen" to the div that contains data-role="popup".
                    $(".ui-popup.fullscreen").on({
                        popupbeforeposition: function () {

                            log("event", "popupbeforeposition: Resizing popup for fullscreen.");
                            $(".fullscreen .ui-content")
                                .css("min-height", $(window).height() - 80 + "px")
                                .css("max-height", $(window).height() - 80 + "px")
                                .css("min-width", $(window).width() - 40 + "px")
                                .css("max-width", $(window).width() - 40 + "px");

                            $(".fullscreen.no-header .ui-content")
                                .css("min-height", $(window).height() - 40 + "px")
                                .css("max-height", $(window).height() - 40 + "px")
                        },
                        popupafteropen: function () {

                            // Run page-enhancements actions
                            Enhancements.getInstance().page();
                        }
                    });

                    ////
                    // Page routine.
                    ////

                    if (Main.getCurrentPageId()) {
                        log("event", "Launching document.pagecreate for: " + Main.getCurrentPageId());
                    } else {

                        /* INIT FLOW: 3 */

                        log("event", "Launching document.pagecreate for basic system.");
                        log("info", "API Options: " + Main.apiDomain + " | " + Main.apiVersion + " | " + Main.service);
                    }

                    // Launch PageShow event for the required page
                    // This will call "page-id" like "_bindPageIdPageshow", so name your callback methods like that
                    if (typeof ui.toPage[0].id != "undefined") {
                        bindName = "_bind" + ui.toPage[0].id.snakeToCamel().ucfirst() + "Pageshow";
                        if ($.isFunction(self[bindName])) {
                            log("event", "Binding Events." + bindName + ".");
                            self[bindName]();
                        }
                    }

                    // OnLoad page events for all pages
                    self._pageLoadEvents();

                    ui.toPage.find(".ui-content").fadeIn("fast");
                });

                return self;
            },

            /**
             * PAGEBEFORECHANGE event for all pages (:mobile-pagecontainer - pagecontainerbeforechange).
             *
             * @return self.
             */
            _bindMpcPagecontainerbeforechange: function () {

                log("event", "Binding Events._bindMpcPagecontainerbeforechange.");
                $(":mobile-pagecontainer").on("pagecontainerbeforechange", function (event, ui) {

                    var bindName = "";

                    // Pages
                    // This will call "page-id" like "_bindPageIdPagebeforeshow", so name your callback methods like that
                    if (typeof ui.toPage[0].id != "undefined") {
                        bindName = "_bind" + ui.toPage[0].id.snakeToCamel().ucfirst() + "Pagebeforechange";
                        if ($.isFunction(self[bindName])) {
                            log("event", "Binding Events." + bindName + ".");
                            self[bindName]();
                        }
                    }
                });

                return self;
            },

            /**
             * PAGEBEFORESHOW event for all pages (:mobile-pagecontainer - pagecontainerbeforeshow).
             *
             * @return self.
             */
            _bindMpcPagecontainerbeforeshow: function () {

                log("event", "Binding Events._bindMpcPagecontainerbeforeshow.");
                $(":mobile-pagecontainer").on("pagecontainerbeforeshow", function (event, ui) {

                    var bindName = "";

                    // Bind exit app action for home page (valid only for Android devices)
                    if (ui.toPage[0].id == "page-menu"
                            || (ui.toPage[0].id == "page-settings" && Main.firstTime)) {
                        self.bindBackButton(self._exitBackButtonCallback, {}, { nativeBinding: true });
                    } else {
                        self.unbindBackButton(self._exitBackButtonCallback, { nativeBinding: true });
                    }

                    // Attach alternative icons class to all content pages
                    $(ui.toPage).find(".ui-content").addClass("ui-alt-icon").hide();

                    // Pages
                    // This will call "page-id" like "_bindPageIdPagebeforeshow", so name your callback methods like that
                    if (typeof ui.toPage[0].id != "undefined") {
                        bindName = "_bind" + ui.toPage[0].id.snakeToCamel().ucfirst() + "Pagebeforeshow";
                        if ($.isFunction(self[bindName])) {
                            log("event", "Binding Events." + bindName + ".");
                            self[bindName]();
                        }
                    }

                    // Run page-enhancements actions
                    Enhancements.getInstance().page();
                });

                return self;
            },

            /**
             * WINDOW.RESIZE event.
             *
             * @return self.
             */
            _bindWinResize: function () {

                log("event", "Binding Events._bindWinResize.");

                $(window).on("resize", function () {

                    log("event", "Screen resized.");

                    // Fix the bug that occurs when resizing and invoking screen keyboard.
                    // Under some circumstances, the space gets negative and bg layer (modal) is not correctly displayed.
                    // 52px is the size of the top bar (padding) and 1px correction (maybe another padding around) = 51px.
                    $(".ui-page").height($("body").height() - 51);

                    // Get and save the screen dimensions
                    Main.deviceWidth = $('[data-role="page"]').first().width();
                    Main.deviceHeight = $('[data-role="page"]').first().height();
                });

                return self;
            },

            /**
             * WINDOW.SCROLL event.
             *
             * @return self.
             */
            _bindWinScroll: function () {

                log("event", "Binding Events._bindWinScroll.");

                $(document).scroll(function () {

                    if (self.pageScrolled === false) {
                        self.pageScrolled = $(window).scrollTop();
                        self.scrollTimer = setInterval(function () {

                            if (self.pageScrolled === $(window).scrollTop()) {

                                // Routine
                                $.each(self.elementsOnChange.scroll.fixTop, function (k, v) {

                                    var element = $("#" + v);

                                    // Adjust top
                                    if (element.is(":visible")) {
                                        element.css("margin-top", $(window).scrollTop());
                                    }
                                });

                                clearInterval(self.scrollTimer);
                                self.pageScrolled = false;
                            } else {
                                self.pageScrolled = $(window).scrollTop();
                            }
                        }, 250);
                    }
                });

                return self;
            },

            /*** PAGE BINDINGS *******************************************************/

            /**
             * PAGEBEFORESHOW event for page-init.
             *
             * @return self.
             */
            _bindPageInitPagebeforeshow: function () {

                if (Main.sysLoaded) {
                    log("info", "Basic system was successfully loaded.");
                    if (Main.getCurrentPageId() == "page-init") {
                        log("info", "#page-init | Timeout set to goHomePage().");
                        setTimeout(function () { Main.goHomePage(); }, 300);
                    }
                }

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlightsSearchResults.
             *
             * @return self.
             */
            _bindPageServicesFlightsSearchResultsPagebeforeshow: function () {

                // Check for consistent data
                if (!Flights.getInstance().isPageDataConsistent("searchResults")) {

                    return Main.changePage("servicesFlights");
                }

                // Search results not found
                Flights.getInstance().listSearchResults(
                    Flights.getInstance().searchResults,
                    Flights.getInstance().searchParams);

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlightsSelected.
             *
             * @return self.
             */
            _bindPageServicesFlightsSelectedPagebeforeshow: function () {

                var flightIdx = (Main.getUrlParams("id") ? Main.getUrlParams("id").split("|") : null);

                // Check for consistent data
                if (!Flights.getInstance().isPageDataConsistent("selected")) {

                    return Main.changePage("servicesFlightsSearchResults");
                }

                Flights.getInstance().showSelected(
                    Flights.getInstance().searchResults.data.flights[flightIdx[0]].journeys[flightIdx[1]]);

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlightsBuy.
             *
             * @return self.
             */
            _bindPageServicesFlightsBuyPagebeforeshow: function () {

                var flights = Flights.getInstance(),
                    flightIdx = (Main.getUrlParams("id") ? Main.getUrlParams("id").split("|") : null);

                // Check for consistent data
                if (!flights.isPageDataConsistent("buy")) {

                    return Main.changePage("servicesFlightsSearchResults");
                }

                flights.showBuy(
                    flights.searchResults.data.flights[flightIdx[0]].journeys[flightIdx[1]],
                    {
                        fareType: flights.searchResults.data.flights[flightIdx[0]].fareType,
                        carrier: flights.searchResults.data.flights[flightIdx[0]].carrier
                    });

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlightsBuyDone.
             *
             * @return self.
             */
            _bindPageServicesFlightsBuyDonePagebeforeshow: function () {

                // Check for consistent data
                if (!Flights.getInstance().isPageDataConsistent("buyDone")) {

                    return Main.changePage("servicesFlightsSearchResults");
                }

                $(".booking-code").html(Flights.getInstance().bookingDetails.code);
                $(".service-email")
                    .attr("href", "mailto:" + Config.get("service.email.sales"))
                    .text(Config.get("service.email.sales"));

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlights.
             *
             * @return self.
             */
            _bindPageServicesFlightsPagebeforeshow: function () {

                Flights.getInstance().showFlights();

                return self;
            },

            /**
             * PAGESHOW event for page-servicesFlights.
             *
             * @return self.
             */
            _bindPageServicesFlightsPageshow: function () {

                var from = Main.getUrlParams("from"),
                    to = Main.getUrlParams("to"),
                    departureDate = Main.getUrlParams("departure"),
                    returnDate = Main.getUrlParams("return"),
                    adults = Main.getUrlParams("adults");

                // Single and Roundtrip only
                if (from) {
                    Flights.getInstance().loadFlights({
                        from: from,
                        to: to,
                        departureDate: departureDate,
                        returnDate: returnDate,
                        adults: adults
                    });
                    Main.clearUrlParams([ "from", "to", "departure", "return", "adults" ]);
                }

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-servicesFlightsMultiple.
             *
             * @return self.
             */
            _bindPageServicesFlightsMultiplePagebeforeshow: function () {

                Flights.getInstance().showMultiple();

                return self;
            },

            /**
             * PAGESHOW event for page-newsContent.
             *
             * @return self.
             */
            _bindPageNewsContentPageshow: function () {

                News.getInstance().showNews(Main.getUrlParams("checksum"));

                return self;
            },

            /**
             * PAGESHOW event for page-news.
             *
             * @return self.
             */
            _bindPageNewsPageshow: function () {

                // Connection availability
                if (Main.isConnectionAvailable()) {
                    News.getInstance().showNewsList();
                } else {
                    $("#page-news .ui-content").append(
                        $("<h3>").addClass("content-text title").text(_("No hay conexión a Internet."))
                    );
                }

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-complaints.
             *
             * @return self.
             */
            _bindPageComplaintsPagebeforeshow: function () {

                // Preload User data
                Services.getInstance().findUserData(

                   // Success
                   function (res) {

                        if (res && res.data) {
                            res = res.data;
                            $("#page-complaints-form-name").val(res.name);
                            $("#page-complaints-form-email").val(res.email);
                            $("#page-complaints-form-phone").val(res.phone);
                        }
                    }
                );
                if (Main.getUrlParams("description")) {
                    $("#page-complaints-form-description").val(decodeURIComponent(Main.getUrlParams("description")));
                    Main.clearUrlParams("description");
                }
 
                // Request type
                Forms.getInstance().Components.Select.bind($("#page-complaints-form-reason"), {
                    label: _("Motivo")
                });

                // Triggers
                $("#page-complaints-form").on("submit", function () {

                    Services.getInstance().sendComplaint();

                    return false;
                });

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-settings.
             *
             * @return self.
             */
            _bindPageSettingsPagebeforeshow: function () {

                var language = Storage.getInstance().get("language.selected"),
                    forms = Forms.getInstance();

                // First time message
                if (Main.firstTime) {

                    options = forms.Parts.Card.options;
                    options.layout.classes.push("first");
                    options.modules.title.enabled = true;
                    options.modules.title.primary = "¡Bienvenido!";
                    options.modules.title.secondary = "Bienvenido a " + Config.get("service.name");
                    options.modules.text.enabled = true;
                    options.modules.text.description = "Te damos la bienvenida a la aplicación mobile de <strong>"
                        + Config.get("service.name") + "</strong>.<br /><br />Para comenzar ya mismo a utilizar la aplicación, "
                        + "por favor, <strong>seleccioná el idioma principal, de la lista de abajo</strong>.";
                    options.modules.image.enabled = true;
                    options.modules.image.src = "welcome.svg";
                    $("#page-settingsWelcomeMsg").html(forms.Parts.Card.get(options));
                }

                // Triggers
                $("#page-settingsLanguageSelector .lang").on("click", function (event) {

                    var language = $(this).attr("data-lang");

                    event.preventDefault();

                    // Set app language and retrieve language package
                    Ui.showLoader({ message: _("Descargando el paquete de idioma") });
                    Main.setAppMessages(
                        language,
                        true, // force
                        function () { // success

                            Storage.getInstance().set("language.selected", language);
                            setTimeout(function () { Main.reloadApp() }, 500);
                        },
                        function () { // error

                            Ui.hideLoader();
                            alert(_("Error al descargar el paquete de idioma."));
                        }
                    );
                });
                $("#more-whereWeAre").on("click", function (e) {

                    e.preventDefault();
                    if (Main.isConnectionAvailable()) {

                        // Initialize the "where we are?" popup
                        Popups.getInstance().adjustForGoogleMaps();
                        $("#popup-more-whereWeAre").popup("option", "positionTo", "window");
                        $("#popup-more-whereWeAre").popup("open", { transition: "none" });
                    } else {
                        alert(""
                            + "<p>"
                                + _("Estamos en") + " <strong>" + Config.get("service.address") + "</strong><br />"
                                + [Config.get("service.zipCode"), Config.get("service.city"), Config.get("service.country")].join(" - ") + "<br />"
                                + Config.get("service.phone") + "<br />"
                                + '<a href="' + Config.get("service.email.info") + '">' + Config.get("service.email.info") + '</a><br />'
                            + "</p>",
                            _("Dónde estamos"),
                            true);
                    }
                });
                $("#more-contact").on("click", function (e) {

                    if (!Main.isConnectionAvailable()) {
                        alert(""
                            + "<p>"
                                + _("Podés escribirnos a") + ":<br />"
                                + '<a href="' + Config.get("service.email.info") + '">' + Config.get("service.email.info") + '</a><br />'
                            + "</p>",
                            _("Contacto"),
                            true);

                        return false;
                    }

                    return true;
                });

                return self;
            },

            /**
             * PAGESHOW event for page-legal.
             *
             * @return self.
             */
            _bindPageLegalPageshow: function () {

                // Text replacements
                $('.service-shortName').text(Config.get("service.shortName"));
                $('.service-corporateName').text(Config.get("service.corporateName"));

                // Preload Newsletter flipswitch status
                Services.getInstance().getNewsletter(

                    // Success
                    function (res) {

                        if (res && res.data && res.data.isTrue()) {
                            $("#page-legal-news").prop("checked", true).flipswitch("refresh");
                            $("#page-legal-news-userdata").show();
                        }

                        // Preload User data
                        Services.getInstance().findUserData(

                           // Success
                           function (res) {

                                if (res && res.data) {
                                    res = res.data;
                                    $("#page-legal-news-userdata-name").val(res.name);
                                    $("#page-legal-news-userdata-email").val(res.email);
                                    $("#page-legal-news-userdata-phone").val(res.phone);
                                }
                            }
                        );
                    },

                    // Error
                    function () {

                        $("#page-legal-news").flipswitch("disable");
                        $("#page-legal-news-userdata-save").prop("disabled", true);
                    }
                );

                // Triggers
                $("#page-legal-news").on("change", function () {

                    Services.getInstance().setNewsletter($(this).is(":checked"));
                    if ($(this).is(":checked")) {
                        $("#page-legal-news-userdata").fadeIn("fast");
                    } else {
                        $("#page-legal-news-userdata").fadeOut("fast");
                        Storage.getInstance().set("devtools", false);
                    }
                });
                $("#page-legal-news-userdata-save").on("click", function () {

                    var Validate = Forms.getInstance().Validate,
                        name = $("#page-legal-news-userdata-name").val(),
                        email = $("#page-legal-news-userdata-email").val(),
                        phone = $("#page-legal-news-userdata-phone").val(),
                        errors,
                        errorsHtml = [];

                    // Validations
                    if (errors = Validate.required({ "Email": email }).email(email).run()) {
                        $.each(errors, function (k, v) {

                            errorsHtml.push("- " + v);
                        });
                        alert(errorsHtml.join("<br />"));

                        return;
                    }

                    // This will unlock some developer tools
                    if (email.split("@")[1] == "imaat.com.ar") {
                        Storage.getInstance().set("devtools", true);
                    }

                    Services.getInstance().saveUserData({
                        name: name,
                        email: email,
                        phone: phone
                    });
                });

                return self;
            },

            /**
             * PAGEBEFORESHOW event for page-log.
             *
             * @return self.
             */
            _bindPageLogPageshow: function () {

                $("#log-content").append(Logger.get("text-1"));

                // Triggers
                $("#log-send-email").on("click", function () {

                    Logger.send(function (res) {

                        alert(res.data);
                    });
                });
                $("#log-update, #log-filter ~ a").on("click", function () {

                    $("#log-content")
                        .hide()
                        .html("")
                        .append(Logger.get("text-1", $("#log-filter").val()))
                        .fadeIn();
                });
                $("#log-filter").on("keyup", function () {

                    $("#log-content")
                        .hide()
                        .html("")
                        .append(Logger.get("text-1", $("#log-filter").val()))
                        .fadeIn();
                });

                return self;
            },

            /*** PAGE UNBINDINGS *******************************************************/

            /**
             * Unbind actions for PAGEBEFORECHANGE event (:mobile-pagecontainer - pagecontainerbeforechange).
             *
             * @return self.
             */
            _unbindMpcPagecontainerbeforechange: function () {

                log("event", "Unbinding Events._unbindMpcPagecontainerbeforechange.");

                return self;
            },

            /**
             * Unbind actions for PAGEBEFORESHOW event (:mobile-pagecontainer - pagecontainerbeforeshow).
             *
             * @return self.
             */
            _unbindMpcPagecontainerbeforeshow: function () {

                log("event", "Unbinding Events._unbindMpcPagecontainerbeforeshow.");

                return self;
            },

            /**
             * Unbind actions for PAGESHOW event (:mobile-pagecontainer - pagecontainershow).
             *
             * @return self.
             */
            _unbindMpcPagecontainershow: function () {

                log("event", "Unbinding Events._unbindMpcPagecontainershow.");

                return self;
            },

            /**
             * Unbind WINDOW.RESIZE.
             *
             * @return self.
             */
            _unbindWinResize: function () {

                log("event", "Unbinding Events._unbindWinResize.");

                $(window).unbind("resize");

                return self;
            },

            /**
             * Unbind WINDOW.SCROLL.
             *
             * @return self.
             */
            _unbindWinScroll: function () {

                log("event", "Unbinding Events._unbindWinScroll.");

                $(document).unbind("scroll");

                return self;
            },

            /*** HELPERS & AUXILIARS *******************************************************/

            /**
             * OnLoad page events.
             *
             * @return self.
             */
            _pageLoadEvents: function () {

                log("event", "Events._pageLoadEvents() fired.");

                // Execute the urlParams emulator
                Enhancements.getInstance().page();

                // Delete elements that require a valid active session to work
                if (Main.sysLoaded && !Main.isSessionAvailable()) {

                    log("session.user", "Session is unavailable.");

                    $(".require-session").hide();
                }

                // Delete elements that require an internet connection
                if (Main.sysLoaded && !Main.isConnectionAvailable()) {

                    log("network", "Connection is unavailable.");

                    $(".require-connection").hide();
                }

                return self;
            },

            /**
             * The callback to execute for the "double tap exit" function.
             *
             * @param event object Event object.
             * @return boolean.
             */
            _exitBackButtonCallback: function (event) {

                event.preventDefault();

                // Trigger exit action
                if (self.exitApp) {
                    clearTimeout(self.exitAppMsgTimer);
                    Main.exit();
                } else {
                    self.exitAppMsgTimer = setTimeout(function () {

                            window.plugins.toast.showShortBottom(_("Pulsá dos veces para salir"));
                        },
                        500);
                    self.exitApp = true;
                    setTimeout(function () { self.exitApp = false; }, 500);
                }

                return false;
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
