/**
 * Application logger.
 */
var Logger = (function () {

    var self;

    return self = {

        /**
         * @var boolean If TRUE it will print via console.log() everything is being pushed.
         */
        debug: false,

        /** 
         * @var array Internal application log.
         */
        _: [],

        /**
         * Adds a new entry to the internal log.
         *
         * @return self.
         */
        add: function (key, value) {

            var data = {};

            data.key = key;
            data.value = value;
            self._.push(data);
            if (self.debug) {
                console.log(key + " - " + value);
            }

            return self;
        },

        /**
         * Returns the current log.
         *
         * @param format string Output format.
         * @param filter string Only output text matching with this string.
         * @return mixed.
         */
        get: function (format, filter) {

            var stack = [],
                res;

            if (typeof format == "undefined") {
                format = "object";
            }
            if (typeof filter == "undefined") {
                filter = null;
            }

            // Preprocessing
            if (filter) {
                $.each(self._, function (k, v) {

                    if (v.value.toLowerCase().indexOf(filter.toLowerCase()) != -1
                        || v.key.toLowerCase().indexOf(filter.toLowerCase()) != -1)
                    {
                        stack.push(v);
                    }
                });
            } else {
                stack = self._;
            }

            switch (format) {
                case "object": default:

                    // Just return the object as is.
                    res = stack;
                    break;

                case "console":
                    $.each(stack, function (k, v) {

                        console.log(v.key + " - " + v.value);
                    });
                    break;

                case "text-1":
                    res = $("<div>").attr({ "class": "text-1" });
                    $.each(stack, function (k, v) {

                        res.append([
                            $("<strong>").text("["+ v.key + "]"),
                            " ",
                            v.value,
                            $("<br>")
                        ]);
                    });
                    break;
            }

            return res;
        },

        /**
         * Sends a copy of the current syslog to the server.
         *
         * @param success function Success callback function.
         * @return self.
         */
        send: function (success) {

            var reportId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3).toUpperCase()
                    + "-" + ((new Date()).getTime())
                    + "-" + Main.deviceId
                    + "-" + Main.deviceType
                    + "-" + Main.deviceVersion;

            log("info", "Sending report log via email [" + reportId + "].");
            Main.ajax({
                url: Main.getApiPath("saveLog", "resource"),
                data: {
                    log: JSON.stringify(Logger.get())
                },
                type: 'POST',
                success: success
            });

            return self;
        }
    }
})();

/**
 * Functions aliases.
 */
window.log = function () { Logger.add.apply(Logger, arguments); };
