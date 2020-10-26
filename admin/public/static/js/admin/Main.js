/**
 * Main JS functions file.
 */

var Main = (function() {

    /*** Private **************************************************************/

    /**
     * @var object Object instance.
     */
    var _instance;

    /**
     * Initialization.
     *
     * @param opts array Initialization options.
     * @return object An object instance.
     */
    function init(opts) {

        return {

            /*** Public *******************************************************/

            paths: opts.paths || null,
            appVersion: opts.appVersion || null,

            /**
             * Displays a box with a custom title and message for the user.
             *
             * @param type string Possible values: "error", "success", "info".
             * @param message string Box message.
             * @return void.
             */
            showMessage: function(type, message) {

                var img = "",
                    title = "",
                    html = "";

                switch (type) {
                    case "error":
                        img = '<img src="' + this.paths.img + '/white'
                            + '/msg-error.png?' + this.appVersion + '" />';
                        title = 'Error';
                        break;

                    case "success":
                        img = '<img src="' + this.paths.img + '/white'
                            + '/msg-success.png?' + this.appVersion + '" />';
                        title = 'Exito';
                        break;

                    case "info":
                        img = '<img src="' + this.paths.img + '/white'
                            + '/msg-info.png?' + this.appVersion + '" />';
                        title = 'Informaci&oacute;n';
                        break;
                }
                html = ""
                    + '<ul data-role="listview">'
                        + '<li data-icon="delete"><a href="#" '
                            + 'onclick="$(\'.page-messages\').slideUp();">'
                            + img
                            + "<h3>" + title + "</h3>"
                            + "<p>" + message + "</p>"
                        + "</a></li>";
                    + '</ul>'

                $("html, body").animate({ scrollTop: 0 }, "fast");
                $(".page-messages").hide().html(html);
                $(".page-messages > ul").listview();
                $(".page-messages").slideDown();
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
        getInstance: function(opts) {

            if (_instance === undefined) {
                _instance = init(opts);
            }

            return _instance;
        }
    };
})();
