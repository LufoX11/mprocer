/**
 * Main application functions.
 */
var Main = (function () {

    var self;

    return self = {

        /**
         * @const Device types.
         */
        DEV_TYPE_ANDROID: "aa",
        DEV_TYPE_IOS: "ih",

        /**
         * @var array Emulated URI params.
         */
        urlParams: {},

        /**
         * @var string M-Procer API domain.
         */
        apiDomain: null,

        /**
         * @var string Service name.
         */
        service: null,

        /**
         * @var string Device ID.
         */
        deviceId: null,

        /**
         * @var string Device Type.
         */
        deviceType: null,

        /**
         * @var string Device Version.
         */
        deviceVersion: null,

        /**
         * @var string Base URL. In a mobile device, it should be "" but in testing env it might be different
         *             depending on the testing location: domain.com/appName/... so "appName/" would be the base URL.
         */
        baseUrl: "",

        /**
         * @var object All user messages for scripting.
         */
        messages: null,

        /**
         * @var string Application language.
         */
        language: null,

        /**
         * @var string The default application language.
         */
        defaultLanguage: "es",

        /**
         * @var string Session status.
         */
        sessionStatus: "disconnected",

        /**
         * @var string Application messages status.
         */
        messagesStatus: "empty",

        /**
         * @var object In process AJAX requests.
         */
        sysXhr: {},

        /**
         * @var object Timer: Tries to connect to the server and start the main session.
         */
        sysTimerSession: null,

        /**
         * @var boolean Indicates if the basic system was already loaded.
         */
        sysLoaded: false,

        /**
         * @var string The page the app should display as the home.
         */
        homePage: "menu",

        /**
         * @var integer Screen width.
         */
        deviceWidth: 288,

        /**
         * @var integer Screen height.
         */
        deviceHeight: 200,

        /**
         * @var object Application's theme colors.
         */
        theme: {
            darkPrimaryColor: null,
            primaryColor: null,
            lightPrimaryColor: null,
            textIcons: null,
            accentColor: null,
            primaryText: null,
            secondaryText: null,
            dividerColor: null,
            backgroundColor: null
        },

        /**
         * @var boolean Tells whether the app is running for the first time.
         */
        firstTime: true,

        /**
         * Initializes the object.
         *
         * @return self.
         */
        init: function () {

            log("info", "Executing Main.init().");

            // Set base app URL
            self.baseUrl = $.mobile.path.documentBase.directory;

            self.bindEvents();

            return self;
        },

        ////
        // Platform specific.
        ////

        /**
         * Bind Event Listeners.
         *
         * @return self.
         */
        bindEvents: function () {

            log("info", "Executing Main.bindEvents(). Binding 'deviceready'...");

            document.addEventListener("deviceready", self.onDeviceReady, false);

            return self;
        },

        /**
         * deviceready Event Handler.
         *
         * @return self.
         */
        onDeviceReady: function () {

            log("event", "'deviceready' fired.");

            // Some interface enhancements
            self.theme.darkPrimaryColor = tinycolor($("#themeDarkPrimaryColor").css("color"));
            self.theme.primaryColor = tinycolor($("#themePrimaryColor").css("color"));
            self.theme.lightPrimaryColor = tinycolor($("#themeLightPrimaryColor").css("color"));
            self.theme.textIcons = tinycolor($("#themeTextIcons").css("color"));
            self.theme.accentColor = tinycolor($("#themeAccentColor").css("color"));
            self.theme.primaryText = tinycolor($("#themePrimaryText").css("color"));
            self.theme.secondaryText = tinycolor($("#themeSecondaryText").css("color"));
            self.theme.dividerColor = tinycolor($("#themeDividerColor").css("color"));
            self.theme.backgroundColor = tinycolor($("#themeBackgroundColor").css("color"));

            Enhancements.getInstance()
                .enableDebugger()
                .disableContextMenu()
                .disablePullRefresh()
                .displayStatusBar()
            Ui.setStatusBarMode("normal");
            self.receivedEvent("deviceready");

            return self;
        },

        /**
         * Actions to take once the device is ready to work.
         *
         * @param id string Event Id.
         * @return self.
         */
        receivedEvent: function (id) {

            var platform = "gn";

            log("info", "Executing Main.receivedEvent().");

            // Clear persistent cache in Android
            if (typeof navigator.app != "undefined" && typeof navigator.app.clearCache == "function") {
                navigator.app.clearCache();
            }

            // Device identify
            switch (device.platform) {
                case "Android":
                    platform = self.DEV_TYPE_ANDROID;
                    break;

                case "iOS":
                    platform = self.DEV_TYPE_IOS;
                    break;
            }
            self.deviceId = (self.deviceId ? self.deviceId : device.uuid);
            self.deviceType = (self.deviceType ? self.deviceType : platform);
            self.deviceVersion = (self.deviceVersion ? self.deviceVersion : device.version);

            // Start session timer
            self.sysTimerSession = setInterval(function () {

                    log("info", "Setting session timer.");

                    // Stop this timer if session and messages were succesfull retrieved
                    if (self.isSessionAvailable() && self.messages) {

                        log("info", "Stopping session timer.");

                        clearInterval(self.sysTimerSession);

                        return;
                    }

                    self.actionsOnStart();
                },
                3000);

            self.actionsOnStart();

            // This flag indicates that the basic system was successfully started
            self.sysLoaded = true;

            // Init common page events
            Events.getInstance().bind();

            self.goHomePage();

            return self;
        },

        ////
        // User functions.
        ////

        /**
         * These are the first group of actions the system needs to perform against the server.
         * -> Starts the user session.
         * -> Retrieves and sets the application's i18n messages.
         *
         * @return self.
         */
        actionsOnStart: function () {

            log("info", "Executing Main.actionsOnStart().");

            // Report device data and start API session
            self.startSession(self.deviceId, self.deviceType, self.deviceVersion);

            // i18n
            self.setAppMessages();

            return self;
        },

        /**
         * These actions will be executed on start after a successfully session was started.
         *
         * @return self.
         */
        actionsOnStartWithSessionUp: function () {

            log("info", "Executing Main.actionsOnStartWithSessionUp().");

            // Push notifications
            Push.init();

            // Alerts
            if (!self.firstTime) {
                Forms.getInstance().Components.Alerts.load();
            }

            return self;
        },

        /**
         * Changes to the desired page.
         *
         * @param page string Page name (without the .html extension).
         * @return self.
         */
        changePage: function (page, absolute) {

            var language = Storage.getInstance().get("language.selected");

            if (!language) {
                language = self.defaultLanguage;
            }
            if (typeof page == "undefined") {
                page = self.homePage;
            }
            if (typeof absolute == "undefined") {
                absolute = false;
            }

            log("info", "Changing to page: " + page);

            if (absolute) {
                $(":mobile-pagecontainer").pagecontainer("change", self.baseUrl + page + ".html");
            } else {
                $(":mobile-pagecontainer").pagecontainer("change", self.baseUrl + "lang/" + language + "/" + page + ".html");
            }

            return self;
        },

        /**
         * Redirects to the home / setup page depending on the app settings.
         *
         * @return self.
         */
        goHomePage: function () {

            var language = Storage.getInstance().get("language.selected");

            log("info", "Executing Main.goHomePage() with language: " + language);

            // Check for the language setting to determine if we need to go to app setup (language page for now)
            if (language) {

                self.firstTime = false;

                // Set app language
                self.language = language;

                // Set datetime functions language
                moment.locale(language);

                // Change to the default app page
                self.changePage();
            } else {
                self.changePage("lang/" + self.defaultLanguage + "/settings", true);
            }

            return self;
        },

        /**
         * Reloads the current app.
         *
         * @return self.
         */
        reloadApp: function () {

            log("info", "Reloading application.");

            window.location.replace(self.baseUrl + "index.html");

            return self;
        },

        /**
         * Closes the app (removes from memory). It only works on Android env.
         *
         * @see http://community.phonegap.com/nitobi/topics/how_to_exit_from_the_phonegap_app_on_android_and_ios
         * @return boolean.
         */
        exit: function () {

            if (typeof navigator.app != "undefined" && typeof navigator.app.exitApp == "function") {
                $.mobile.activePage.find("[data-role=header], [data-role=content]").fadeOut("fast", function () {

                    navigator.app.exitApp();
                });

                return true;
            }

            return false;
        },

        /**
         * Loads config file depending on the environment.
         *
         * @return self.
         */
        loadConfig: function () {

            /* INIT FLOW: 2 */

            var _configRetrieved = true;

            // System config (defaults)
            self.apiDomain = Config.get("api.core.domain");
            self.service = Config.get("api.core.service");

            // Load config file and init Phonegap
            log("config.json", "Loading local config...");
            $.ajax({
                url: "config.json",
                dataType: "script",
                async: false,
                error: function () {

                    _configRetrieved = false;
                    log("config.json", "Assuming Production environment.");
                },
                complete: function () {

                    if (_configRetrieved) {

                        // Since complete() is fired when the script is retrieved but not necessary loaded, we must do a
                        // stop to allow the system to load it.
                        setTimeout(function () {

                                log("config.json", "Local config loaded.");

                                // Load config class
                                if (typeof _Config != "undefined") {
                                    Config._ = _Config;
                                }

                                // Dummy data
                                if (Config.get("dummyData.single.enabled")) {
                                    log("dummy.data", "Loading Single flight...");
                                    self.setUrlParams(Config.get("dummyData.single.urlParams"));
                                    Flights.getInstance().searchParams = Config.get("dummyData.single.searchParams");
                                    Flights.getInstance().searchResults = Config.get("dummyData.single.searchResults");
                                }
                                if (Config.get("dummyData.round.enabled")) {
                                    log("dummy.data", "Loading Round flight...");
                                    self.setUrlParams(Config.get("dummyData.round.urlParams"));
                                    Flights.getInstance().searchParams = Config.get("dummyData.round.searchParams");
                                    Flights.getInstance().searchResults = Config.get("dummyData.round.searchResults");
                                }
                                if (Config.get("dummyData.multiple.enabled")) {
                                    log("dummy.data", "Loading Multiple flight...");
                                    self.setUrlParams(Config.get("dummyData.multiple.urlParams"));
                                    Flights.getInstance().searchParams = Config.get("dummyData.multiple.searchParams");
                                    Flights.getInstance().searchResults = Config.get("dummyData.multiple.searchResults");
                                }

                                // Update system config
                                self.apiDomain = Config.get("api.core.domain");
                                self.service = Config.get("api.core.service");
                                $.ajaxSetup({
                                    timeout: Config.get("ajax.timeout")
                                });

                                // Init Phonegap
                                log("phonegap", "Init Phonegap fired.");
                                self.init().fireEvent("initFired");
                            },
                            500);
                    } else {

                        // NOTE: This needs to be done this way because events inside Main.init() flow
                        // are affected by config settings, so if it loads good then the delay of 250 msec is necessary
                        // to correctly apply new config values.

                        // Init Phonegap
                        log("phonegap", "Init Phonegap fired.");
                        setTimeout(function () { self.init().fireEvent("initFired"); }, 500);
                    }
                }
            });

            return self;
        },

        /**
         * Sets values for URL params.
         *
         * @param key mixed STRING with The name of the key to store the value.
         *                  If OBJECT, it will replace the entire params object with it.
         * @param value mixed A value to store (string or JSON).
         * @return self.
         */
        setUrlParams: function (key, value) {

            if (typeof key == "object") {
                $.each(key, function (k, v) {
                    self.urlParams[k] = v;
                });
            } else {
                self.urlParams[key] = value;
            }

            return self;
        },

        /**
         * Gets the value of an URL param.
         *
         * @param key string The name of the key that containts the values. If none specified, it will get all params.
         * @param defaultValue mixed A default value to return in case nothing was found.
         * @return mixed A STRING with the value of the param on success; NULL otherwise.
         */
        getUrlParams: function (key, defaultValue) {

            var res = (typeof defaultValue != "undefined" ? defaultValue : null);

            if (typeof key == "undefined") {
                log("info", "Asking for all params.");
                res = self.urlParams;
            } else if (typeof self.urlParams[key] != "undefined") {
                log("info", "Asking for param: " + key);
                res = self.urlParams[key];
            } else {
                log("info", "Param not found: " + key + ". Default value will be used instead.");
            }

            return res;
        },

        /**
         * Deletes all URL stored params.
         *
         * @param key string Delete this key. If none provided, all keys will be deleted.
         * @return self.
         */
        clearUrlParams: function (key) {

            if ($.isArray(key)) {
                $.each(key, function (k, v) {
                    delete self.urlParams[v];
                });
            } else if (key) {
                delete self.urlParams[key];
            } else {
                self.urlParams = {};
            }

            return self;
        },

        /**
         * Starts API session.
         *
         * @param deviceId string Unique device ID.
         * @param deviceType string 2 Letters device type.
         * @param deviceVersion string Device version.
         * @return self.
         */
        startSession: function (deviceId, deviceType, deviceVersion) {

            if (self.sessionStatus == "disconnected") {

                log("session.user", "Starting session...");

                self.sessionStatus = "connecting";
                self.ajax({
                    url: self.getApiPath("saveSession", "resource"),
                    type: "POST",
                    noSpinner: true,
                    noErrorMessages: true,
                    bindCancelOnBack: false,
                    overComplete: function () {

                        if (self.sessionStatus != "connected") {

                            log("session.user", "Session failed.");

                            self.sessionStatus = "disconnected";
                        }
                    },
                    success: function () {

                        log("session.user", "Session started.");

                        self.sessionStatus = "connected";
                        self.actionsOnStartWithSessionUp();
                    }
                }, true);
            }

            return self;
        },

        /**
         * Sets the application's messages for the current language.
         *
         * @param language string Language code to download.
         * @param force boolean Force to download the language package.
         * @param success function If provided, it will be called once translations have been successfully
         *                         retrieved from server.
         * @param error function If provided, it will be called if translations request fails.
         * @param async boolean AJAX operation async.
         * @return self.
         */
        setAppMessages: function (language, force, success, error, async) {

            var storage = Storage.getInstance(),
                db = storage.get("language.db"),
                language = (typeof language == "undefined" ? self.language : language),
                force = (typeof force == "undefined" ? false : force);

            if (!force && typeof db == "object") {

                // Load from LocalStorage
                log("translations", "Loading translations from DB...");
                self.messages = db;
                self.messagesStatus = "full";
            } else if (force || (!self.firstTime && self.messagesStatus == "empty" && !self.messages)) {
                log("translations", "Loading translations from REMOTE...");
                self.messagesStatus = "loading";
                self.ajax({
                    url: self.apiDomain + "/messages/" + language,
                    noSpinner: true,
                    noErrorMessages: true,
                    async: (typeof async == "undefined" ? true : async),
                    overComplete: function () {

                        if (self.messagesStatus != "full") {
                            log("translations", "Translations failed.");
                            self.messagesStatus = "empty";
                        }
                    },
                    error: function () {

                        log("translations", "Translations failed.");
                        self.messagesStatus = "empty";

                        // External callback
                        if (typeof error == "function") {
                            error();
                        }
                    },
                    success: function (res) {

                        log("translations", "Translations loaded.");

                        // Messages in memory
                        self.messages = res.data;
                        self.messagesStatus = "full";

                        // Save messages in LocalStorage
                        Storage.getInstance().set("language.db", res.data);

                        // External callback
                        if (typeof success == "function") {
                            success();
                        }
                    }
                }, true);
            }

            return self;
        },

        /**
         * Gets the translated message.
         *
         * @param message string Message to translate.
         * @return string The translated message.
         */
        getMessage: function (message) {

            var res = message;

            if (self.messagesStatus == "full" && self.messages && typeof self.messages[message] != "undefined") {
                res = self.messages[message];
            } else {
                if (self.language != "es") {
                    log("i18n", "Missing translation: '" + self.language + "' - '" + message + "'");
                }
            }

            return res;
        },

        /**
         * Makes an AJAX request.
         *
         * @param settings array $.ajax settings (will override defaults). Special settings:
         *                       noErrorMessages boolean If TRUE, error messages on connection / server failure won't be shown.
         *                       actionBtns mixed jQuery selector (string allowed) for the action triggering button.
         *                                        The button will be disabled and enabled once request is done.
         *                       progressbar boolean FALSE to not display the progress bar for request timeout.
         *                       noSpinner boolean If TRUE, the loading spinner won't be shown.
         *                       spinnerMessage string A custom message for the loading box.
         *                       spinnerExtra string A custom HTML for the loading box (will be added below the message).
         *                       modal boolean TRUE if we need to display a background overlay to block user actions.
         *                       bindCancelOnBack boolean If we want to cancel the request hitting the back button.
         *                       closeOnComplete boolean If we want to close the modal after completing the request.
         *                       overBeforeSend function This function will be executed before request is performed.
         *                       overComplete function This function will be executed once request is done, regardless the result.
         * @return self.
         */
        ajax: function (settings) {

            // Default settings
            var settings = $.extend(
                {
                    // jQuery options
                    dataType: "json",
                    type: "GET",
                    cache: false,

                    // Custom options
                    noErrorMessages: false,
                    actionBtns: false,
                    progressbar: true,
                    noSpinner: false,
                    spinnerMessage: _("Conectando"),
                    spinnerExtra: false,
                    modal: true,
                    bindCancelOnBack: true,
                    closeOnComplete: true,
                    overBeforeSend: false,
                    overComplete: false,

                    // Events
                    beforeSend: false,
                    complete: false,
                    error: false
                },
                settings),
                xhrId = String(Math.random()).substr(2);

            // Check connection availability before making the request
            if (!self.isConnectionAvailable())
            {
                if (!settings.noErrorMessages) {
                    alert(_("No hay conexión a Internet."), _("Error de Red"));
                }

                if (typeof settings.error == "function") {
                    settings.error();
                }

                return self;
            }

            // Events
            if (!settings.beforeSend) {
                settings.beforeSend = function () {

                    if (settings.actionBtns) {
                        $(settings.actionBtns).addClass("ui-disabled");
                    }
                    if (!settings.noSpinner) {

                        // Spinner message
                        if (settings.spinnerMessage) {
                            $.mobile.loading("show", {
                                text: settings.spinnerMessage,
                                textVisible: true
                            });
                        } else {
                            $.mobile.loading("show");
                        }

                        // Material Design preloader image
                        $(".ui-loader .spinner").replaceWith(Forms.getInstance().Parts.Loader.get({
                            bg: false,
                            type: "loader"
                        }));

                        // Custom HTML
                        if (settings.spinnerExtra) {
                            $(".ui-loader").append(settings.spinnerExtra);
                        }

                        // Progress bar
                        if (settings.progressbar) {
                            $(".ui-loader").append([
                                Forms.getInstance().Parts.Progressbar.get({ type: "loader" })
                            ]);
                        }

                        // Modal background layer
                        if (settings.modal) {
                            Ui.setStatusBarMode("modal").showOverlay().lockScrollbar();
                        }

                        Ui.centerElement(".ui-loader", window, { horizontal: false });
                    }
                    if (typeof settings.overBeforeSend == "function") {
                        settings.overBeforeSend();
                    }

                    Enhancements.getInstance().page();
                }
            }
            if (!settings.complete) {
                settings.complete = function () {

                    if (settings.actionBtns) {
                        $(settings.actionBtns).removeClass("ui-disabled");
                    }
                    if (!settings.noSpinner && settings.closeOnComplete) {
                        $.mobile.loading("hide");
                        if (settings.modal && !$("#page-messages").length && !$("#page-confirm").length) {
                            Ui.setStatusBarMode("normal").hideOverlay().unlockScrollbar();
                        }
                    }

                    // XHR manipulation
                    delete self.sysXhr[xhrId];
                    if (settings.bindCancelOnBack) {
                        Events.getInstance().unbindBackButton(self._abortOnBackCallback,  { nativeBinding: true });
                    }

                    if (typeof settings.overComplete == "function") {
                        settings.overComplete();
                    }

                    Enhancements.getInstance().page();
                }
            }
            if (!settings.error) {
                settings.error = function (res, textStatus) {

                    if (textStatus == "abort" && settings.bindCancelOnBack) {

                        log("info", "XHR connection aborted.");

                        // Silent, no alert box
                        window.plugins.toast.showShortBottom(_("Transacciones abortadas"));
                    } else {
                        try {
                            if (res.responseText && (res = $.parseJSON(res.responseText)) && typeof res.data != "undefined") {
                                if (!settings.noErrorMessages) {
                                    alert(res.data);
                                }
                            } else {
                                if (!settings.noErrorMessages) {
                                    alert(_("Fallo en la conexión a internet."), _("Error de red"));
                                }
                            }
                        } catch (e) {
                            if (!settings.noErrorMessages) {
                                alert(_("Fallo en la conexión a internet."), _("Error de red"));
                            }
                        }
                    }

                    Enhancements.getInstance().page();
                }
            }

            self.sysXhr[xhrId] = $.ajax(settings);

            // Cancel on back
            if (settings.bindCancelOnBack) {
                Events.getInstance().bindBackButton(self._abortOnBackCallback, null, { nativeBinding: true });
            }

            return self;
        },

        /**
         * Aborts all pending XHR transactions.
         *
         * @param event object Event object.
         * @return self.
         */
        abortAllXHR: function () {

            // Abort all transactions
            $.each(self.sysXhr, function (k, v) {

                self.sysXhr[k].abort();
                delete self.sysXhr[k];

                log("info", "XHR aborted [" + k + "].");
            });

            return self;
        },

        /**
         * Tells whether the internet connection is available or not.
         *
         * @return boolean.
         */
        isConnectionAvailable: function () {

            return navigator.connection.type != Connection.NONE;
        },

        /**
         * Tells whether the user session was started or not.
         *
         * @return boolean.
         */
        isSessionAvailable: function () {

            return self.isConnectionAvailable() && self.sessionStatus == "connected";
        },

        /**
         * Gets the API basic path.
         *
         * @param method string Method to call from API.
         * @param type string The type of URI to build: [api|resource].
         *                    api: "domain/currentService/[method]"
         *                    resource: api + "[method]/deviceId/deviceType/deviceVersion"
         *              
         * @return string Api path.
         */
        getApiPath: function (method, type) {

            var res = self.apiDomain + "/" + self.service;

            if (typeof type == "undefined") {
                type = "api";
            }
            if (typeof method != "undefined") {
                res += "/" + method;
            }
            if (type == "resource") {
                res += "/" + self.deviceId + "/" + self.deviceType + "/" + self.deviceVersion;
            }

            return res;
        },

        /**
         * Fires the desired event.
         *
         * @param eventName string Name of the event.
         * @return self.
         */
        fireEvent: function (eventName) {

            var e = document.createEvent('Events');

            log("event", "Firing custom event: " + eventName);

            e.initEvent(eventName, false, false);
            document.dispatchEvent(e);

            return self;
        },

        /**
         * Gets the relative URI from an absolute path.
         *
         * @param uri string URI to inspect. If none provided current URI will be parsed.
         * @return string.
         */
        getRelativeURI: function (uri) {

            var res = (uri || window.location.href).replace(/^.*\/\/[^\/]+/, '');

            return res;
        },

        /**
         * Gets the current page ID.
         *
         * @return string.
         */
        getCurrentPageId: function () {

            var activePage = $.mobile.activePage,
                res = "";

            if (activePage) {
                res = activePage.prop("id");
            }

            return res;
        },

        /**
         * The callback to execute for "abort on back" function.
         *
         * @param event object Event.
         * @return self.
         */
        _abortOnBackCallback: function (event) {

            event.preventDefault();
            self.abortAllXHR();

            return self;
        }
    }
})();

/**
 * Functions aliases.
 */
window._ = function () { return Main.getMessage.apply(Main, arguments); };
