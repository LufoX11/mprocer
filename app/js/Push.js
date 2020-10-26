/**
 * Push notificacion functions.
 */
var Push = (function () {

    var self;

    return self = {

        /**
         * @var object Push object.
         */
        push: null,

        /**
         * Initializes the object.
         *
         * @return self.
         */
        init: function () {

            /**
             * @var string Device platform.
             */
            var platform = "unknown";

            switch (Main.deviceType) {

                case Main.DEV_TYPE_ANDROID:
                    platform = "android";
                    break;
                
                case Main.DEV_TYPE_IOS:
                    platform = "ios";
                    break;
            }

            log("push", "Trying to register with registrationId: " + Config.get("api.google.projectNumber"));

            // Register
            self.push = PushNotification.init({
                    "android": {
                        "senderID": Config.get("api.google.projectNumber"),
                        "icon": "pin",
                        "iconColor": Main.theme.primaryColor.toHexString()
                    },
                    "ios": {
                        "sound": "true",
                        "badge": "true",
                        "alert": "true",
                        "clearBadge": "true"
                    }
                });

            // Register: SUCCESS
            self.push.on("registration", function (data) {

                log("push", "Registered. ID: " + data.registrationId);

                // Save push token in server
                self.savePushData({
                    registrationId: data.registrationId,
                    platform: platform
                });
            });

            // Register: ERROR
            self.push.on("error", function (e) {

                log("push", "Registration Error. Message: " + e.message);
            });

            // Action on notification received
            self.push.on("notification", function (data) {

                log("push", "Notification Received. Data: " + JSON.stringify(data));

                self[platform](data);
                self.push.finish(function () { log("push", "Processing of data is finished."); });
            });

            return self;
        },

        /** 
         * Android push notification callback.
         *
         * @param data object Notification data.
         * @return void.
         */
        android: function (data) {

            // Open the news section and display the news
            Main.urlParams = {
                checksum: data.additionalData.checksum
            };
            if (data.additionalData.foreground) {
                log("push", "Notification received on foreground. Showing a system message.");

                // Update alerts
                Forms.getInstance().Components.Alerts.load();

                Ui.confirm(
                    {
                        title: data.title,
                        description: data.message,
                        buttonContinue: _("Leer"),
                        buttonCancel: _("Cerrar")
                    },
                    {
                        buttonContinue: 'email'
                    },
                    {
                        confirmCallback: function () { Main.changePage('newsContent'); }
                    });
            } else {
                log("push", "Notification received inside app. Opening newsContent.");
                Main.changePage('newsContent');
            }
        },

        /** 
         * iOs push notification callback.
         *
         * @param data object Notification data.
         * @return void.
         */
        ios: function (data) {

            // Open the news section and display the news
            Main.urlParams = {
                checksum: data.additionalData.checksum
            };
            if (data.additionalData.foreground) {
                log("push", "Notification received on foreground. Showing a system message.");

                // Update alerts
                Forms.getInstance().Components.Alerts.load();

                Ui.confirm(
                    {
                        title: data.title,
                        description: data.message,
                        buttonContinue: _("Leer"),
                        buttonCancel: _("Cerrar")
                    },
                    {
                        buttonContinue: 'email'
                    },
                    {
                        confirmCallback: function () { Main.changePage('newsContent'); }
                    });
            } else {
                log("push", "Notification received inside app. Opening newsContent.");
                Main.changePage('newsContent');
            }
        },

        /** 
         * Save push data info.
         *
         * @param data object Data containing push info.
         * @return self. 
         */
        savePushData: function (data) {

            Main.ajax({
                url: Main.getApiPath("savePushData", "resource"),
                data: data,
                noSpinner: true,
                noErrorMessages: true,
                bindCancelOnBack: false,
                type: 'POST'
            });

            return self;
        }
    }
})();
