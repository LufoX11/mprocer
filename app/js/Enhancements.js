////
// Prototype level JS improvement functions.
////

// Capitaze the first letter of a string (like ucfirst()).
String.prototype.ucfirst = function () { return this.charAt(0).toUpperCase() + this.slice(1); };

// Tells whether the character is a number or not
String.prototype.isNumber = function () { return !isNaN(parseFloat(this)) && isFinite(this); };

// Tells whether the value is TRUE in a way that "0" or "false" would be FALSE
String.prototype.isTrue = function () {

    return Boolean((isNaN(this) && this.toLowerCase() !== "false" && this.toLowerCase() !== "null")
        || parseInt(this));
};

// Translates page-id to pageId
String.prototype.snakeToCamel = function () {

    return this.replace(/(\-\w)/g, function (m) { return m[1].toUpperCase(); });
};

// Add miles separator.
Number.prototype.withMilesSeparator = function () { return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); };

// Deletes empty elements of an array
Array.prototype.clean = function () { return this.filter(function (n) { return n }); };

Array.prototype.removeDuplicates = function () {

    return this.sort().reduce(function (a, b) { if (b != a[0]) a.unshift(b); return a }, []);
};

// Gets the size of the object (can be also an array).
Object.size = function (obj) {

    return Object.keys(obj).length;
}

////
// Global functions.
// Note: Don't add functions for everything here, be very specific.
////

/**
 * Returns whether the browser has SVG support or not.
 *
 * @return boolean.
 */
function svgSupport() {

    return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
}

/**
 * Exchanges all keys with their associated values.
 *
 * @param obj object The object with values to be flipped.
 * @return obj The flipped object.
 */
function flip(obj) {

    var res = {};

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            res[obj[prop]] = prop;
        }
    }

    return res;
}

/**
 * Translates an object to a JSON string with double quotes as single ones,
 * allowing to pass data as a tag's attribute value.
 *
 * @param data mixed An object / array with the data to serialize.
 * @return string Serialized data.
 */
function serialize(data) {

    var res = JSON.stringify(data).replace(/'/g, "%%%APOSTROPHE%%%").replace(/"/g, "'");

    return res;
}

/**
 * Translates a string into a JSON object.
 *
 * @param data string Data to unserialize.
 * @return object A JSON object.
 */
function unserialize(data) {

    var res = null;

    if (data) {
        res = JSON.parse(data.replace(/'/g, '"').replace(/%%%APOSTROPHE%%%/g, "'"));
    }

    return res;
}

////
// Defaults and Enhancements for specific components.
////
var Enhancements = (function () {

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

            /*** Base Components *******************************************************/

            /**
             * Defaults for jQuery.
             *
             * @return self.
             */
            jQuery: function () {

                $.support.cors = true; // Allow cross domain loading
                $.ajaxSetup({
                    timeout: Config.get("ajax.timeout"),
                    cache: false
                });

                return self;
            },

            /**
             * Defaults for jQueryMobile.
             *
             * @return self.
             */
            jQueryMobile: function () {

                $.mobile.page.prototype.options.domCache = false;
                $.extend($.mobile, {
                    defaultDialogTransition: "none",
                    defaultPageTransition: "none",
                    pageLoadErrorMessage: _("Error en la conexión"),
                    pageLoadErrorMessageTheme: "a",
                    allowCrossDomainPages: true,
                    pushStateEnabled: false, // Enhance navigation and avoid some problems
                    phonegapNavigationEnabled: true
                });
                $.extend($.mobile.popup.prototype.options, {
                    transition: "none"
                });

                return self;
            },

            /**
             * Sets default values for Mobiscroll component.
             *
             * @return self.
             */
            mobiscroll: function () {

                $.mobiscroll.backButtonHandler = function (event, ui) { event.data.cancel(); return false; };
                $.mobiscroll.setDefaults({
                    theme: "jqm",
                    display: "bottom",
                    animate: false,
                    dateOrder: "D ddM yy",
                    dateFormat: "dd-mm-yy",
                    markedDisplay: "bottom",
                    minWidth: 200,
                    firstDay: 1,
                    focusOnClose: false,
                    type: "scroller",
                    onBeforeShow: function (inst) {

                        $(".waves-ripple").remove();

                        if (inst.settings.display != "inline") {
                            Ui.setStatusBarMode("modal");
                        }
                    },
                    onShow: function (html, value, inst) {

                        if (inst.settings.display != "inline") {
                            Events.getInstance().bindBackButton($.mobiscroll.backButtonHandler, inst);
                        }

                        // JQM alt icons and style
                        $(html).addClass("ui-alt-icon").find(".dwbc .ui-btn").addClass("ui-btn-clear");

                        // Waves effects
                        Waves.attach($(html).find(".dwcc").find(".dw-cal-header").find(".dw-cal-btn").find(".ui-btn"), ["waves-button"]);
                        Waves.attach($(html).find(".dwcc .dw-cal-header [role=button]:not(.ui-btn)"), ["waves-button"]);
                        Waves.attach($(html).find(".dwcc .dw-cal-body [role=button]"), ["waves-button"]);
                        Waves.attach($(html).find(".dwbc .ui-btn"), ["waves-button"]);
                    },
                    onMonthLoaded: function (year, month, inst) {

                        // Waves effects
                        Waves.attach(".dwcc .dw-cal-body [role=button]", ["waves-button"]);
                    },
                    onInit: function (inst) {

                        var html = $(this);

                        // Add custom classes to component layer to be able to apply CSS rules
                        $(this).parents(".ui-btn:first").find(".ui-input-text").addClass("ui-input-text-select");

                        // Trigger click event if clicked the button layer (currently it doesn't do anything)
                        if (inst.settings.display != "inline") {
                            html.parents(".ui-btn").on("click", function (e) {

                                if (!$(".mbsc-jqm").is(":visible")) {
                                    html.click();
                                }
                            });
                        }
                    },
                    onBeforeClose: function (html, btn, inst) {

                        if (btn == "set") {

                            // Avoid empty value selecting for Autocomplete component
                            if (inst.settings.type == "autocomplete" && !Boolean($(html).attr("data-id"))) {

                                return false;
                            }
                        }
                        
                        if (inst.settings.display != "inline") {
                            Ui.setStatusBarMode("normal");
                            Events.getInstance().unbindBackButton();
                        }
                    }
               });

               return self;
            },

            /*** Binders & Functions *******************************************************/

            /**
             * If configured, enables the internal debugger.
             *
             * @return self.
             */
            enableDebugger: function () {

                var debuggingServices,
                    currentDebuggingService;

                // Load debugger
                if (Config.get("debugging.enabled")) {
                    log("debugger", "Debugger enabled, establishing connection...");
                    debuggingServices = Config.get("debugging.services");
                    currentDebuggingService = Config.get("debugging.service");
                    $.ajax(
                        debuggingServices[currentDebuggingService]["source"],
                        {
                            cache: true,
                            dataType: "script",
                            complete: function () {

                                log("debugger", "Debugger was successfully loaded.");
                        }});
                } else {
                    log("debugger", "Debugger disabled.");
                }

                return self;
            },

            /**
             * Updates the color of the status bar.
             *
             * @param color string HEX color, Ie.: #333333.
             * @return self.
             */
            changeStatusBarColor: function (color) {

                if (StatusBar && typeof StatusBar.backgroundColorByHexString == "function") {
                    StatusBar.backgroundColorByHexString(color);
                }

                return self;
            },

            /**
             * Shows or hides the status bar.
             *
             * @param show boolean TRUE to show the bar, FALSE to hide it.
             * @return self.
             */
            displayStatusBar: function (show) {

                var show = (typeof show == "undefined" ? true : show);

                log("info", "StatusBar displayed: " + (show ? "YES" : "NO"));

                if (StatusBar && typeof StatusBar.show == "function") {
                    StatusBar.overlaysWebView(false);
                    if (show) {
                        StatusBar.show();
                    } else {
                        StatusBar.hide();
                    }
                }

                return self;
            },

            /**
             * Absorv context menu on long clicks.
             *
             * @return self.
             */
            disableContextMenu: function () {

                if (Config.get("environment") == "production") {
                    $(window)
                        .on("contextmenu", function (e) {

                            e.preventDefault();
                            e.stopPropagation();

                            return false;
                        });
                }

                return self;
            },

            /**
             * Disables the native "pull to refresh" feature.
             *
             * @return self.
             */
            disablePullRefresh: function () {

                var lastTouchY = 0,
                    maybePreventPullToRefresh = false;

                // Pull-to-refresh will only trigger if the scroll begins when the document's Y offset is zero.
                var touchstartHandler = function (e) {

                    if (e.touches.length != 1) {

                        return;
                    }
                    lastTouchY = e.touches[0].clientY;
                    maybePreventPullToRefresh = (window.pageYOffset == 0);
                }

                // To suppress pull-to-refresh it is sufficient to preventDefault the first overscrolling touchmove.
                var touchmoveHandler = function (e) {

                    var touchY = e.touches[0].clientY,
                        touchYDelta = touchY - lastTouchY;

                    lastTouchY = touchY;
                    if (maybePreventPullToRefresh) {
                        maybePreventPullToRefresh = false;
                        if (touchYDelta > 0) {
                            e.preventDefault();

                            return;
                        }
                    }
                    if (window.pageYOffset == 0 && touchYDelta > 0) {
                        e.preventDefault();

                        return;
                    }
                }

                document.addEventListener('touchstart', touchstartHandler, false);
                document.addEventListener('touchmove', touchmoveHandler, false);

                return self;
            },

            /**
             * Enhances page with additional functionality.
             *
             * @return self.
             */
            page: function () {

                var wavesBtns = [
                        $(".main-header").find(".ui-btn"),
                        $(".ui-btn")
                            .not(".ui-header .ui-btn.close")
                            .not(".main-header .ui-btn")
                            .not(".ui-flipswitch-on")
                    ],
                    wavesBtnsLight = [
                        $(".ui-flipswitch")
                    ],
                    wavesImgs = [
                        $(".waves-image")
                    ],
                    wavesBtnsSel = $($.map(wavesBtns, function (v) { return $.map(v, function (v) { return v }); })),
                    wavesBtnsLightSel = $($.map(wavesBtnsLight, function (v) { return $.map(v, function (v) { return v }); })),
                    wavesImgsSel = $($.map(wavesImgs, function (v) { return $.map(v, function (v) { return v }); }));

                log("info", "Enhancing page: '" + (Main.getCurrentPageId() ? Main.getCurrentPageId() : "<loader>") + "'.");

                // Refresh page visual styling.
                if ($.mobile.activePage) {
                    $.mobile.activePage.enhanceWithin();
                }

                // URL params
                $("[data-params]").unbind().on("click", function () {

                    Main.setUrlParams($(this).data("params"));
                });

                // Internal links
                $('[data-rel="internalPage"]').off().on("click", function (e) {

                    e.preventDefault();

                    Main.setUrlParams($(this).data("params"));
                    Main.changePage($(this).data("go"));
                });

                // GAP -> InAppBrowser()
                $('[data-rel="externalBrowser"]').off().on("click", function (e) {

                    var url;

                    e.preventDefault();

                    // Sanitize
                    if (!(url = $(this).attr("href"))) {
                        url = $(this).attr("data-href");
                    }
                    if (url.match(/@/)) {

                        // Mailto
                        if (!url.match(/^mailto:/i)) {
                            url = "mailto:" + url;
                        }
                    } else {

                        // Common URL
                        if (!url.match(/^http:\/\/|https:\/\//i)) {
                            url = "http://" + url;
                        }
                    }
                    Ui.confirm(
                        {
                            title: _("Saliendo"),
                            description: _("Se accederá a una aplicación externa."),
                            buttonContinue: _("Continuar"),
                            buttonCancel: _("Cerrar")
                        },
                        {
                            buttonContinue: 'open-in-browser'
                        },
                        {
                            confirmCallback: function () {

                                window.open(url, "_system");
                            }
                        });

                    return false;
                });

                // Enable developer tools
                if (Ui.devTools()) {

                    log("info", "Developer Tools enabled.");

                    $(".devtools").removeClass("devtools"); // Display objects (.devtools = display: none)
                }

                // Waves effects
                $(wavesBtns[1]).each(function () {

                    if (this.tagName == "DIV" && $(this).find(".ui-btn-raised").length) {
                        $(this).addClass("ui-btn-raised");
                    }
                    if (this.tagName == "DIV" && $(this).find(".ui-btn-clear").length) {
                        $(this).addClass("ui-btn-clear");
                    }
                });
                Waves.attach(wavesBtnsSel, ["waves-button"]);
                Waves.attach(wavesBtnsLightSel, ["waves-button", "waves-light"]);
                Waves.attach(wavesImgsSel, ["waves-image"]);
                Waves.init({
                    duration: 3000
                });

                return self;
            },

            /**
             * Binds a fallback action for image onerror event. First, try with svg file, then with png equivalent,
             * then with a default image.
             *
             * Data attributes for images:
             *     data-path string Path to fallback image starting from "img".
             *                      Ie.: WRONG "img/icons/16", GOOD "icons/16".
             *     data-ext string Fallback image extension ("png" by default).
             *     data-size integer The size for the default image (16px by default).
             *                       Available sizes are 16, 32, 80.
             *
             * @param selector mixed jQuery selector [object|string] for all images.
             * @param settings array Settings:
             *                       imgBasePath string Main path for images.
             *                       defaultImgSize integer The size for the default image (16px by default).
             *                                              Available sizes are 12, 16, 32, 80.
             *                       
             * @return self.
             */
            imageFallbacks: function (selector, settings) {

                // Defaults
                var options = {
                        imgBasePath: Main.baseUrl + "img",
                        defaultImgSize: 16
                    };

                log("event", "Binding Events.bindImageFallbacks.");
                $.extend(options, settings);

                // Attach fallback trigger to all image objects
                $(selector).on("error", options, Enhancements.getInstance()._imageFallbackError);

                return self;
            },

            /**
             * Callback function for "onError" image event attached in imageFallbacks().
             *
             * @param event object The event with options.
             * @return self.
             */
            _imageFallbackError: function (event) {

                var img = $(this),
                    options = event.data,
                    svgSrc = img.attr("src"), // "img/imgName.svg" (can be other extension)
                    fbExt = (img.attr("data-ext") ? img.attr("data-ext") : "png"), // "png"
                    path = (img.attr("data-path")
                        ? options.imgBasePath + "/" + img.attr("data-path")
                        : options.imgBasePath), // "img"
                    defaultImg = options.imgBasePath + "/default-"
                        + (img.attr("data-size") ? img.attr("data-size") : options.defaultImgSize)
                        + (svgSupport() ? ".svg" : ".png"), // "img/default-16.png"
                    svgFileName = svgSrc.split("/").pop().split(".")[0], // "imgName"
                    fbSrc = path + "/" + svgFileName + "." + fbExt; // "img/imgName.png"

                log("error", "Events.bindImageFallbacks (src): '" + svgSrc + "'.");

                // Test that the fallback exists or set the default image
                $.get(fbSrc)
                    .done(function () { img.attr("src", fbSrc); })
                    .fail(function () {

                        log("error", "Events.bindImageFallbacks (fbSrc): '" + fbSrc + "'.");
                        $.get(defaultImg)
                            .done(function () { img.attr("src", defaultImg); })
                            .fail(function () {

                                log("error", "Events.bindImageFallbacks (defaultImg): '" + defaultImg + "'.");
                            });
                    });

                // Unbind onerror for the current image (to avoid loops if something goes wrong)
                img.unbind("error");

                return self;
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
