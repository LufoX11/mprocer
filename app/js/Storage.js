/**
 * Local storage layer.
 */

var Storage = (function () {

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
             * Saves a persisten value.
             *
             * @param name string Key.
             * @param value mixed Value to save (will be casted to string).
             * @return self.
             */
            set: function (name, value) {

                if (typeof value == "object") {
                    value = "__object__" + JSON.stringify(value);
                }

                localStorage.setItem(name, value);

                return self;
            },

            /**
             * Retrieves a value from the storage.
             *
             * @param name string Key.
             * @param defaultValue mixed A default value in case the key does not contain any value.
             * @return mixed Value if the name is found; NULL otherwise.
             */
            get: function (name, defaultValue) {

                var res = String(localStorage.getItem(name));

                if (res.search("__object__") === 0) {
                    res = JSON.parse(res.replace("__object__", ""));
                }

                // Fix empty values
                if (res == "null") {
                    res = (typeof defaultValue != "undefined" ? defaultValue : null);
                }

                return res;
            },

            /**
             * Removes a value in the storage.
             *
             * @param name string Key.
             * @return self.
             */
            unset: function (name) {

                localStorage.removeItem(name);

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
