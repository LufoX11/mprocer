/**
 * Functions file for Popups.
 */

var Popups = (function () {

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
             * The window width and height are decreased by 30 to take the tolerance of 15 pixels
             * at each side into account.
             *
             * @see http://jquerymobile.com/demos/1.3.0/docs/widgets/popup/popup-iframes.html
             * @return object.
             */
            scale: function (width, height, padding, border) {

                var scrWidth = $(window).width() - 30,
                    scrHeight = $(window).height() - 30,
                    ifrPadding = 2 * padding,
                    ifrBorder = 2 * border,
                    ifrWidth = width + ifrPadding + ifrBorder,
                    ifrHeight = height + ifrPadding + ifrBorder,
                    h, w;

                if (ifrWidth < scrWidth && ifrHeight < scrHeight) {
                    w = ifrWidth;
                    h = ifrHeight;
                } else if ((ifrWidth / scrWidth) > (ifrHeight / scrHeight)) {
                    w = scrWidth;
                    h = (scrWidth / ifrWidth) * ifrHeight;
                } else {
                    h = scrHeight;
                    w = (scrHeight / ifrHeight) * ifrWidth;
                }
                
                return {
                    'width': w - (ifrPadding + ifrBorder),
                    'height': h - (ifrPadding + ifrBorder)
                };
            },

            /**
             * Adjusts the popup to fit the map depending on the device height and width.
             * -> The popup main div (<div data-role="popup">...</div>) must have a class called "popup-gmap".
             * -> The target div for the map (in the iframe page) must have a class called "gmap".
             *
             * @return self.
             */
            adjustForGoogleMaps: function () {

                $(".popup-gmap iframe")
                    .attr("width", 0)
                    .attr("height", 0);

                $(".popup-gmap iframe").contents().find(".gmap-target")
                    .css({ "width": 0, "height": 0 });

                $(".popup-gmap").on({

                    popupbeforeposition: function () {

                        var size = Popups.getInstance().scale(480, 320, 0, 1),
                            w = size.width,
                            h = size.height;

                        Ui.lockScrollbar().setStatusBarMode("modal");
                        $(".popup-gmap iframe")
                            .attr("width", w)
                            .attr("height", h);

                        $(".popup-gmap iframe").contents().find(".gmap-target")
                            .css({ "width": w, "height": h });
                    },

                    popupafterclose: function () {

                        Ui.setStatusBarMode("normal").unlockScrollbar();
                        $(".popup-gmap iframe")
                            .attr("width", 0)
                            .attr("height", 0);

                        $(".popup-gmap iframe").contents().find(".gmap-target")
                            .css({ "width": 0, "height" : 0 });
                    }
                });

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
