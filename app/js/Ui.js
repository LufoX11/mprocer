/**
 * UI functions.
 */
var Ui = (function () {

    var self;

    return self = {

        /**
         * @var object Timer: Inline messages.
         */
        sysTimerInlineMessages: null,

        /**
         * Locks the scrollbar and doesn't allow to scroll the page.
         *
         * @return self.
         */
        lockScrollbar: function () {

            log("info", "Locking Scrollbar.");

            $("html, body").css("overflow", "hidden");

            return self;
        },

        /**
         * Unlocks the scrollbar and allows to scroll the page.
         *
         * @return self.
         */
        unlockScrollbar: function () {

            log("info", "Unlocking Scrollbar.");

            $("html, body").css("overflow", "auto");

            return self;
        },

        /**
         * Displays a loading message.
         *
         * @param settings object Loader configuration.
         *                 message string A message to display.
         *                 overlay boolean FALSE to avoid the background overlay.
         *                 changeStatusBar boolean FALSE to avoid changing the color of the status bar.
         *                 lockScrollbar boolean FALSE to avoid locking the page scroll.
         * @return self.
         */
        showLoader: function (settings) {

            // Defaults
            var settings = $.extend(
                {
                    message: _("Esperando"),
                    image: false,
                    overlay: true,
                    changeStatusBar: true,
                    lockScrollbar: true
                },
                settings);

            log("info", "Showing Loader.");

            // Overlay and StatusBar
            if (settings.overlay) {
                self.showOverlay();
                if (settings.changeStatusBar) {
                    self.setStatusBarMode("modal");
                }
            }

            // Scroller
            if (settings.lockScrollbar) {
                self.lockScrollbar();
            }

            // Loader
            if (settings.message) {
                $.mobile.loading("show", {
                    text: settings.message,
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

            self.centerElement(".ui-loader", window, { horizontal: false });

            return self;
        },

        /**
         * Hides the loader message.
         *
         * @param settings object Loader configuration.
         *                 overlay boolean FALSE to avoid the background overlay.
         *                 changeStatusBar boolean FALSE to avoid changing the color of the status bar.
         *                 lockScrollbar boolean FALSE to avoid unlocking the page scroll.
         * @return self.
         */
        hideLoader: function (settings) {

            // Defaults
            var settings = $.extend(
                {
                    overlay: true,
                    changeStatusBar: true,
                    lockScrollbar: true
                },
                settings);

            log("info", "Hiding Loader.");

            // Overlay and StatusBar
            if (settings.overlay) {
                self.hideOverlay();
                if (settings.changeStatusBar) {
                    self.setStatusBarMode("normal");
                }
            }

            // Scroller
            if (settings.lockScrollbar) {
                self.unlockScrollbar();
            }

            // Loader
            $.mobile.loading("hide");

            return self;
        },

        /**
         * Displays a background overlay.
         *
         * @return self.
         */
        showOverlay: function () {

            log("info", "Showing Overlay.");

            $("#modal-overlay").height($(document).height()).show();

            return self;
        },

        /**
         * Hides the background overlay.
         *
         * @return self.
         */
        hideOverlay: function () {

            log("info", "Hiding Overlay.");

            $("#modal-overlay").hide();

            return self;
        },

        /**
         * Aligns an element to the middle in relation to another one.
         *
         * @param element mixed Element to align.
         * @param parentElement mixed Parent element.
         * @param options object Options. This object will be merged with jQueryMakeMeCenter options. Custom options:
         *                toleranceY integer Percent of tolerance between left and right space.
         *                toleranceX integer Percent of tolerance between top and bottom space.
         * @return self.
         */
        centerElement: function (element, parentElement, options) {

            var options = $.extend(
                {
                    toleranceX: 1,
                    toleranceY: 5,
                    is_onload: false,
                    is_onresize: false,
                    is_ondatachange: false
                },
                options),
                scrollTop = $(window).scrollTop(),
                element = $(element),
                parentElement = $(parentElement || window),
                elementLeft = element.offset().left,
                elementTop = element.offset().top,
                elementWidth = element.width(),
                elementHeight = element.height(),
                parentWidth = parentElement.width(),
                parentHeight = parentElement.height(),
                elementRight = Math.max(0, parentWidth - (elementLeft + elementWidth)), // Round to 0 if negative
                elementBottom = Math.max(0, parentHeight - (elementTop + elementHeight)), // Round to 0 if negative
                elementLeftRightDiff = Math.abs(elementLeft - elementRight), // Absolute value (negative to positive)
                elementTopBottomDiff = Math.abs(elementTop - elementBottom), // Absolute value (negative to positive)
                widthPercentage = (elementLeftRightDiff * 100 / elementWidth),
                heightPercentage = (elementTopBottomDiff * 100 / elementHeight);

            // Calculate the tolerance and proceed or not to center the element
            if (widthPercentage > options.toleranceX || heightPercentage > options.toleranceY) {

                log("info", "Centering element. Options: " + JSON.stringify(options)
                    + ". ScrollTop: " + scrollTop + "px.");

                $(element).makemecenter(options);
                $(element).css("margin-top", scrollTop);
                Events.getInstance().setElementOnChange("scroll", "fixTop", $(element).attr("id"));
            }

            return self;
        },

        /**
         * Sets status bar properties depending on the choosed mode.
         *
         * @param mode string Bar mode.
         * @return self.
         */
        setStatusBarMode: function (mode) {

            log("info", "StatusBar mode to: " + mode + ".");

            // Note: tinycolor(Main.theme.primaryColor.toString()) to clone the instance and don't apply
            // modifications (darken) to the current one
            if (Main.theme.primaryColor) {
                switch (mode) {

                    case "normal":
                        Enhancements.getInstance().changeStatusBarColor(
                            tinycolor(Main.theme.primaryColor.toString()).darken(5).toHexString());
                        break;

                    case "modal":
                        Enhancements.getInstance().changeStatusBarColor(
                            tinycolor(Main.theme.primaryColor.toString()).darken(35).toHexString());
                        break;
                }
            }

            return self;
        },

        /**
         * Sets the value of the button option associated with the specified.
         *
         * @param el jQuery element.
         * @param option The name of the option to set.
         * @param value A value to set for the option:
         *              disabled boolean TRUE to disable the element or TRUE to enable it.
         * @return self.
         */
        button: function (el, option, value) {

            el = $(el);
            switch (option) {
                case "disabled":

                    if (value) {

                        // Disable
                        el.addClass("ui-disabled");
                    } else {

                        // Enable
                        el.removeClass("ui-disabled");
                    }

                    break;
            }

            return self;
        },

        /**
         * Shows a custom message.
         *
         * @param message string The custom message.
         * @param title string A custom title.
         * @param htmlMessage boolean Tells whether the "message" is text plain or html.
         * @param closeBtnText string The caption text for the close button.
         * @return self.
         */
        alert: function (message, title, htmlMessage, closeBtnText) {

            var html,
                loaderOptions = {
                    message: _("Obteniendo"),
                    changeStatusBar: false
                };

            if (typeof title == "undefined" || !title) {
                title = _("Atención");
            }
            if (typeof htmlMessage == "undefined") {
                htmlMessage = false;
            }
            if (typeof closeBtnText == "undefined" || !closeBtnText) {
                closeBtnText = _("Aceptar");
            }

            html = (htmlMessage ? message : "<p>" + message + "</p>");

            log("info", "Loading Alert box.");

            // Preload images before showing the box
            self.lockScrollbar().showLoader(loaderOptions).setStatusBarMode("modal");
            $("<div>" + html + "</div>").waitForImages(function () {

                // Create and launch dialog
                html = ''
                    + '<div id="page-messages" data-role="popup" data-dismissible="false" class="ui-corner-all"'
                            + ' data-overlay-theme="a" data-transition="none">'
                        + '<div data-role="header" class="ui-corner-top">'
                            + "<h1>" + title + "</h1>"
                        + "</div>"
                        + '<div data-role="content" class="ui-corner-bottom ui-content ui-alt-icon">'
                            + html
                            + '<div class="action-btns">'
                                + '<a href="#" class="cancel ui-btn-clear zmdi-icon" data-mini="true" data-role="button" '
                                        + 'data-inline="true" data-rel="back">'
                                    + '<i class="zmdi zmdi-check"></i>'
                                    + closeBtnText
                                + "</a>"
                            + "</div>"
                        + "</div>"
                    + "</div>";
                $.mobile.activePage.append(html).enhanceWithin();
                $("#page-messages")
                    .on("popupafteropen", function () {

                        log("info", "Alert box displayed.");

                        self.centerElement("#page-messages-popup");
                    })
                    .on("popupafterclose", function () {

                        log("info", "Alert box closed.");

                        $(this).remove();
                    })
                    .popup("open");
                $("#page-messages .cancel").unbind().on('click', function (e) {

                    e.preventDefault();
                    self.setStatusBarMode("normal").unlockScrollbar();
                    $("#page-messages").popup("close");
                });
                self.hideLoader(loaderOptions);

                // Needed for links in popups
                Enhancements.getInstance().page();
            });

            return self;
        },

        /**
         * Shows a confirmation box.
         * 
         * @param labels object Texts and labels for the box:
         *                      title string Box title.
         *                      description string Box message.
         *                      buttonContinue string Text for the action button.
         *                      buttonCancel string Text for the action button.
         * @param icons object Icons.
         *                     buttonContinue string JQM icon for the action button.
         *                     buttonCancel string JQM icon for the action button.
         * @param params object Extra params.
         *                      showCancel boolean If we should display the cancel button.
         *                      confirmCallback function Callback for the confirm action.
         *                      cancelCallback function Callback for the cancel action.
         * @return void.
         */
        confirm: function (labels, icons, params) {

            var html,
                loaderOptions = {
                    message: _("Obteniendo"),
                    changeStatusBar: false
                },
                cancelButton = '';

            labels = $.extend(
                {
                    "title": _("Atención"),
                    "description": _("¿Estás seguro?"),
                    "buttonContinue": _("Aceptar"),
                    "buttonCancel": _("Cancelar")
                },
                (typeof labels == "undefined" ? {} : labels));

            icons = $.extend(
                {
                    "buttonContinue": "check",
                    "buttonCancel": "close"
                },
                (typeof icons == "undefined" ? {} : icons));

            params = $.extend(
                {
                    "showCancel": true,
                    "confirmCallback": (typeof params.confirmCallback == 'function' ?
                        params.confirmCallback : function () {}),
                    "cancelCallback": (typeof params.cancelCallback == 'function' ?
                        params.cancelCallback : function () { $("#page-confirm").popup("close"); })
                },
                (typeof params == "undefined" ? {} : params));

            html = "<p>" + labels.description + "</p>";

            if (params.showCancel) {
                cancelButton = ''
                    + '<a href="#" class="cancel ui-btn-clear zmdi-icon" data-mini="true" data-role="button" '
                            + 'data-inline="true">'
                        + '<i class="zmdi zmdi-' + icons.buttonCancel + '"></i>'
                        + labels.buttonCancel
                    + "</a>";
            }

            log("info", "Loading Confirm box.");

            // Preload images before showing the box
            self.lockScrollbar().showLoader(loaderOptions).setStatusBarMode("modal");
            $("<div>" + html + "</div>").waitForImages(function () {

                // Create and launch dialog
                html = ''
                    + '<div id="page-confirm" data-role="popup" data-dismissible="false" class="ui-corner-all confirm"'
                            + ' data-overlay-theme="a" data-transition="none">'
                        + '<div data-role="header" class="ui-corner-top">'
                            + "<h1>" + labels.title + "</h1>"
                        + "</div>"
                        + '<div data-role="content" class="ui-corner-bottom ui-content ui-alt-icon">'
                            + html
                            + (cancelButton ? cancelButton + " " : "")
                            + '<a href="#" data-role="button" data-inline="true" data-mini="true" '
                                    + 'class="confirm ui-btn-clear zmdi-icon">'
                                + '<i class="zmdi zmdi-' + icons.buttonContinue + '"></i>'
                                + labels.buttonContinue
                            + "</a>"
                        + "</div>"
                    + "</div>";
                $.mobile.activePage.append(html).enhanceWithin();
                $("#page-confirm")
                    .on("popupafteropen", function () {

                        log("info", "Confirm box displayed.");

                        self.centerElement("#page-confirm-popup", window);
                    })
                    .on("popupafterclose", function () {

                        log("info", "Confirm box closed.");

                        $(this).remove();
                    })
                    .popup("open");
                $("#page-confirm .confirm").unbind().on('click', function (e) {

                    e.preventDefault();
                    self.setStatusBarMode("normal").unlockScrollbar();
                    params.confirmCallback();
                    $("#page-confirm .cancel").click();
                });
                $("#page-confirm .cancel").unbind().on('click', function (e) {

                    e.preventDefault();
                    self.setStatusBarMode("normal").unlockScrollbar();
                    params.cancelCallback();
                });
                self.hideLoader(loaderOptions);

                // Needed for links in popups
                Enhancements.getInstance().page();
            });

            return self;
        },

        /**
         * Tells if the app should display the developer tools.
         *
         * @return boolean.
         */
        devTools: function () {

            var res = Boolean(Storage.getInstance().get("devtools"));

            log("info", "DevTools " + (res ? "ENABLED" : "DISABLED"));

            return res;
        }
    }
})();

/**
 * Functions aliases.
 */
window.alert = function () { return Ui.alert.apply(Ui, arguments); };
