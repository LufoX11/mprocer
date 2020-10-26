/**
 * Functions to interact with forms and components.
 */
var Forms = (function () {

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

            /*** PARTS *******************************************************/

            /**
             * HTML parts.
             */
            Parts: {

                /**
                 * Application Main Header.
                 */
                AppHeader: {

                    /**
                     * Gets HTML.
                     *
                     * @param options object Options:
                     *                       suffix string [""] Suffix for header ID. Eg.: "header-<suffix>".
                     *                       currentPageID string The active page ID.
                     * @return object.
                     */
                    get: function (options) {

                        var options = $.extend({
                                "suffix": "",
                                "currentPageID": "",
                                "alerts": {
                                    "news": 0
                                }
                            }, options),
                            language = Storage.getInstance().get("language.selected"),
                            res = $("<div>")
                                .attr({
                                    "id": "header" + (options.suffix ? "-" + options.suffix : ""),
                                    "class": "main-header",
                                    "data-role": "header",
                                    "data-theme": "a",
                                    "data-id": "header",
                                    "data-tap-toggle": "false",
                                    "data-position": "fixed"
                                })
                                .append([
                                    $("<a>")
                                        .attr({
                                            "href": "#",
                                            "class": "ui-btn-left ui-btn ui-btn-inline home"
                                        })
                                        .append([
                                            $("<i>")
                                                .attr({
                                                    "class": "zmdi zmdi-"
                                                        + (options.currentPageID == "page-menu"
                                                                || (!language && options.currentPageID == "page-settings")
                                                            ? "menu" : "arrow-left")
                                                })
                                        ]),
                                    $("<h1>").text(Config.get("custom.header.title")),
                                    $("<a>")
                                        .attr({
                                            "href": "#",
                                            "class": "ui-btn-right ui-btn ui-btn-inline alerts "
                                                + (Main.firstTime ? "ui-disabled" : "")
                                        })
                                        .append([
                                            $("<i>")
                                                .attr({
                                                    "class": "zmdi zmdi-notifications" + (options.alerts.news == 0 ? "-none" : "")
                                                }),
                                            $("<i>")
                                                .attr({
                                                    "class": "alerts-counter"
                                                })
                                                .text((options.alerts.news > 9 ? "+9" : options.alerts.news))
                                        ])
                                ]);

                        // Triggers
                        res.find("h1").on("click", function () {

                            Main.goHomePage();
                        });
                        if (options.currentPageID == "page-menu"
                                || (!language && options.currentPageID == "page-settings")) {
                            res.find("a.home").on("click", function () {

                                $("#menu" + (options.suffix ? "-" + options.suffix : "")).mobiscroll("show");
                            });
                        } else {
                            res.find("a.home").on("click", function () {

                                var events = Events.getInstance(),
                                    to = events.prevPage.pop();

                                events.savePrevPage = false;
                                $(":mobile-pagecontainer").pagecontainer(
                                    "change",
                                    (to ? to.attr("data-url") : "page-menu.html"),
                                    {
                                        showLoadMsg: true,
                                        reload: true,
                                        reverse: true
                                    }
                                );
                            });
                        }
                        res.find("a.alerts").on("click", function () {

                            Main.changePage("news");
                        });

                        return res;
                    }
                },

                /**
                 * Application Main Menu.
                 */
                AppMenu: {

                    /**
                     * Gets HTML.
                     *
                     * @param options object Options:
                     *                       suffix string [""] Suffix for menu ID. Eg.: "menu-<suffix>".
                     *                       disableNavigation boolean Whether navigation must be enabled or not.
                     * @return object.
                     */
                    get: function (options) {

                        var options = $.extend({
                                "suffix": "",
                                "disableNavigation": false
                            }, options),
                            res = $("<div>")
                                .attr({
                                    "id": "menu" + (options.suffix ? "-" + options.suffix : ""),
                                    "class": "main-menu",
                                    "data-role": "none"
                                })
                                .css({
                                    "display": "none"
                                })
                                .append([
                                    $("<ul>")
                                        .css({
                                            "display": "none"
                                        })
                                        .append([
                                            $("<li>")
                                                .attr({
                                                    "data-icon": "material-notifications",
                                                    "data-go": "news",
                                                    "class": (options.disableNavigation ? "ui-disabled" : "")
                                                })
                                                .text(_("NOVEDADES"))
                                        ])
                                        .append([
                                            $("<li>")
                                                .attr({
                                                    "data-icon": "material-settings",
                                                    "data-go": "settings",
                                                    "class": (options.disableNavigation ? "ui-disabled" : "")
                                                })
                                                .text(_("CONFIGURACIÓN"))
                                        ])
                                ]);

                        return res;
                    }
                },

                /**
                 * Flight details.
                 */
                FlightItinerary: {

                    /**
                     * Gets HTML.
                     *
                     * @param flight object Flight details.
                     * @param options object Options.
                     *                       searchType string Type of search [single|round|multiple].
                     *                       showPrice boolean If we need to show the total price at bottom.
                     *                       embeded boolean If true, the list will be styled as an "inset" element.
                     * @return object.
                     */
                    get: function (flight, options) {

                        var options = $.extend({
                                "searchType": "single",
                                "showPrice": true,
                                "embeded": true
                            }, options),
                            res,
                            flightType,
                            flightLastArrivalDatetime,
                            stopsAmount,
                            totalTime,
                            flightsAmount = flight.flights.length,
                            title,
                            flightTypeIconRotation,
                            currentFlight = 0,
                            entireFlight = flight.flights,
                            price = Math.ceil(flight.pricing.total).withMilesSeparator();

                        res = $("<ul>").attr({
                            "data-role": "listview",
                            "data-inset": options.embeded,
                            "class": "flight-itinerary"
                        });
                        $.each(entireFlight, function (k, v) {

                            currentFlight ++;
                            flightType = (flightsAmount > 2
                                ? "multiple"
                                : (currentFlight == 1 ? "departure" : "return"));
                            flightTypeIconRotation = (flightType == "return" ? "rotateX-180" : ""),
                            stopsAmount = v.segments.length;
                            totalTime = v.time;
                            title = Flights.getInstance().flightTypeTitles[flightType];
                            if (options.searchType == "multiple") {
                                title += " " + currentFlight; // Tramo X
                            }

                            // Header
                            res.append(
                                $("<li>")
                                    .attr("data-role", "list-divider")
                                    .append([
                                        $("<span>")
                                            .attr("class", "icon-departure")
                                            .append(
                                                $("<i>").attr({
                                                    "class": "zmdi static zmdi-airplane " + flightTypeIconRotation
                                                })
                                            ),
                                        title,
                                        $("<span>")
                                            .attr("class", "iata")
                                            .append([
                                                v.departureLocation,
                                                $("<i>").attr({
                                                    "class": "zmdi static zmdi-airplane rotate-90"
                                                }),
                                                v.arrivalLocation
                                            ])
                                    ])
                            );

                            // Flight data
                            $.each(v.segments, function (k, v) {

                                var companyIcon = "../../img/airlines/" + (v.company.iata).toLowerCase() + ".svg",
                                    departureDateTime = moment(v.departure),
                                    departureDate = departureDateTime.format("DD MMM").replace(/\./g, ""),
                                    departureTime = departureDateTime.format("HH:mm"),
                                    arrivalDateTime = moment(v.arrival),
                                    arrivalDate = arrivalDateTime.format("DD MMM").replace(/\./g, ""),
                                    arrivalTime = arrivalDateTime.format("HH:mm"),
                                    raw,
                                    stopDelay;

                                // Delay between stops
                                if (k) { // From the first stop, not necessary for direct flights
                                    raw = departureDateTime.diff(flightLastArrivalDatetime, "minutes");
                                    stopDelay = Math.floor(raw / 60) + "hs " + (raw % 60) + "m";
                                    res.append(
                                        $("<li>")
                                            .attr("class", "delay")
                                            .append(
                                                $("<span>")
                                                    .append([
                                                        $("<i>").attr({
                                                            "class": "zmdi static zmdi-time-interval"
                                                        }),
                                                        _("Espera de") + " ",
                                                        $("<strong>").append(stopDelay).outerHTML() + " ",
                                                        _("hasta el siguiente vuelo")
                                                    ])
                                            )
                                    );
                                }
                                flightLastArrivalDatetime = arrivalDateTime;

                                // Stops
                                res.append([
                                    $("<li>")
                                        .attr("class", "info " + flightType)
                                        .append([
                                            $("<span>")
                                                .attr("class", "left")
                                                .append(
                                                    $("<table>")
                                                        .append([
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row1")
                                                                        .append(
                                                                            (stopsAmount > 1
                                                                                ? Flights.getInstance().segmentsTitles[k]
                                                                                : _("Directo"))
                                                                        )
                                                                ),
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row2")
                                                                        .append([
                                                                            _("Vuelo") + " ",
                                                                            v.number + " - ",
                                                                            v.cabin.ADT.className
                                                                        ])
                                                                )
                                                        ])
                                                ),
                                            $("<span>")
                                                .attr("class", "right")
                                                .append(
                                                    $("<table>")
                                                        .append(
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row1")
                                                                        .append(
                                                                            $("<span>")
                                                                                .append([
                                                                                    $("<img>")
                                                                                        .attr({
                                                                                            "src": companyIcon,
                                                                                            "class": "fb",
                                                                                            "data-path": "airlines"
                                                                                        }),
                                                                                    v.company.name
                                                                                ])
                                                                        )
                                                                )
                                                        )
                                                )
                                        ]),
                                    $("<li>")
                                        .attr("class", "info-details departure")
                                        .append([
                                            $("<span>")
                                                .attr("class", "datetime")
                                                .append(
                                                    $("<table>")
                                                        .append([
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row1")
                                                                        .append(departureDate)
                                                                ),
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row2")
                                                                        .append(
                                                                            $("<span>")
                                                                                .attr("class", "bubble mini")
                                                                                .append(departureTime)
                                                                        )
                                                                )
                                                        ])
                                                ),
                                            $("<span>")
                                                .attr("class", "airport-data")
                                                .append([
                                                    _("Sale del aeropuerto") + " ",
                                                    v.location.from.airport.name + " - ",
                                                    v.location.from.airport.regionName
                                                ])
                                        ]),
                                    $("<li>")
                                        .attr("class", "info-details")
                                        .append([
                                            $("<span>")
                                                .attr("class", "datetime")
                                                .append(
                                                    $("<table>")
                                                        .append([
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row1")
                                                                        .append(arrivalDate)
                                                                ),
                                                            $("<tr>")
                                                                .append(
                                                                    $("<td>")
                                                                        .attr("class", "row2")
                                                                        .append(
                                                                            $("<span>")
                                                                                .attr("class", "bubble mini")
                                                                                .append(arrivalTime)
                                                                        )
                                                                )
                                                        ])
                                                ),
                                            $("<span>")
                                                .attr("class", "airport-data")
                                                .append([
                                                    _("Llega al aeropuerto") + " ",
                                                    v.location.to.airport.name + " - ",
                                                    v.location.to.airport.regionName
                                                ])
                                        ])
                                ]);

                                // Duration
                                if (stopsAmount - 1 == k) {
                                    res.append(
                                        $("<li>")
                                            .attr("class", "delay resume")
                                            .append(
                                                $("<span>")
                                                    .append([
                                                        $("<i>").attr({
                                                            "class": "zmdi static zmdi-time"
                                                        }),
                                                        _("Duración total del vuelo") + ": ",
                                                        $("<strong>").append(totalTime)
                                                    ])
                                            )
                                    );
                                }

                                // Resume
                                if (options.showPrice && currentFlight == flightsAmount && stopsAmount - 1 == k) {
                                    res.append(
                                        $("<li>")
                                            .attr("class", "bubble grid total")
                                            .append(
                                                $("<span>").append("$ " + price)
                                            )
                                    );
                                }
                            });
                        });

                        return res;
                    }
                },

                /**
                 * Progress bar.
                 */
                Progressbar: {

                    /**
                     * Gets HTML.
                     *
                     * @param options object Options.
                     *                       id string Object ID.
                     *                       type string This is to identify specific styles for the desired bar.
                     * @return object.
                     */
                    get: function (options) {

                        var options = $.extend({
                                "id": "progressbar",
                                "type": ""
                            }, options),
                            res = $("<div>")
                                .attr({
                                    "id": options.id
                                })
                                .addClass("progressbar " + options.type)
                                .append([
                                    $("<div>").addClass("bar")
                                ]);
 
                        return res;
                    }
                },

                /**
                 * Card block.
                 */
                Card: {

                    /**
                     * Default options.
                     */
                    options: {
                        "layout": {
                            "image": "center-large", // [center-large|right-small|right-medium|right-large|left-large]
                            "read": false, // If TRUE, card will be grayscale colored
                            "classes": [] // Extra CSS classes
                        },
                        "modules": {

                            // Card title and subtitle
                            "title": {
                                "enabled": false,
                                "primary": "Title",
                                "secondary": "" // Subtitle
                            },

                            // Card description
                            "text": {
                                "enabled": false,
                                "description": "Card <strong>description</strong>."
                            },

                            // Card picture
                            "image": {
                                "enabled": false,
                                "src": "welcome.svg",
                                "grayscale": false
                            },

                            // Card action buttons
                            "actions": {
                                "enabled": false,
                                "icons": [
                                    {
                                        "image": "none", // Dont's change this default
                                        "callback": function () {}
                                    }
                                ],
                                "buttons": [
                                    {
                                        "text": "none", // Don't change this default
                                        "callback": function () {}
                                    }
                                ]
                            }
                        }
                    },

                    /**
                     * Gets HTML.
                     *
                     * @param options object self.Parts.Card.options
                     * @return object.
                     */
                    get: function (options) {

                        var res = $("<div>").addClass("card"),
                            layoutClasses = "";

                        // Layout
                        if (options.layout.classes.length) {
                            res.addClass(options.layout.classes.join(" "));
                        }
                        if (options.layout.image != "center-large") {
                            layoutClasses = options.layout.image.split("-");
                            res.addClass("media-" + layoutClasses[0] + " " + "media-" + layoutClasses[1]);
                        }
                        if (options.layout.read) {
                            res.addClass("read");
                        }

                        // Media
                        if (options.modules.image.enabled && options.modules.image.src) {
                            if (options.modules.image.src.substring(0, 7).toLowerCase() != "http://") {
                                options.modules.image.src = "../../img/" + options.modules.image.src;
                            }
                            res.append([
                                $("<div>")
                                    .addClass("media")
                                    .append([
                                        $("<img>")
                                            .addClass(options.modules.image.grayscale ? "grayscale" : "")
                                            .attr("src", options.modules.image.src)
                                    ])
                            ]);
                        }

                        // Title
                        if (options.modules.title.enabled) {
                            res.append([
                                $("<div>")
                                    .addClass("title " 
                                        + (options.modules.text.enabled ? "has-supporting-text" : ""))
                                    .append([
                                        (options.modules.title.primary
                                            ? $("<h3>").addClass("primary-title").html(options.modules.title.primary)
                                            : ""),
                                        (options.modules.title.secondary
                                            ? $("<h3>").addClass("subtitle").html(options.modules.title.secondary)
                                            : "")
                                    ])
                            ]);
                        }

                        // Text
                        if (options.modules.text.enabled) {
                            res.append([
                                $("<div>")
                                    .addClass("supporting-text " + (options.modules.title.enabled ? "has-title" : ""))
                                    .html(options.modules.text.description)
                            ]);
                        }

                        // Actions
                        if (options.modules.actions.enabled) {
                            res.append([
                                $("<div>")
                                    .addClass("action")
                                    .append([
                                        $("<div>").addClass("row between-xs")
                                    ])
                            ]);

                            // Icons
                            if (options.modules.actions.icons[0].image != "none") {
                                res.find(".row.between-xs").append([
                                    $("<div>")
                                        .addClass("col-xs-" + (options.modules.actions.buttons[0].text == "none" ? "12" : "4"))
                                        .append([
                                            $("<div>").addClass("box")
                                        ])
                                ]);
                                $.each(options.modules.actions.icons, function (k, v) {
                                    res.find(".row.between-xs .box").append([
                                        $("<a>")
                                            .attr("href", "#")
                                            .addClass("ui-btn ui-btn-inline")
                                            .on("click", v.callback)
                                            .append([
                                                $("<i>").addClass("zmdi zmdi-" + v.image)
                                            ])
                                    ]);
                                });
                            }

                            // Buttons
                            if (options.modules.actions.buttons[0].text != "none") {
                                res.find(".row.between-xs").append([
                                    $("<div>")
                                        .addClass("col-xs-"
                                            + (options.modules.actions.icons[0].image == "none" ? "12" : "8")
                                            + (options.modules.actions.icons[0].image != "none" ? " align-right" : "" ))
                                        .append([
                                            $("<div>").addClass("box")
                                        ])
                                ]);
                                $.each(options.modules.actions.buttons, function (k, v) {
                                    res.find(".row.between-xs .box:last").append([
                                        $("<a>")
                                            .attr("href", "#")
                                            .addClass("ui-btn ui-btn-inline")
                                            .on("click", v.callback)
                                            .html(v.text)
                                    ]);
                                });
                            }
                        }
 
                        return res;
                    }
                },

                Loader: {

                    /**
                     * Gets the HTML for spinner object.
                     *
                     * @param options object Options.
                     *                       id string ID for spinner.
                     *                       zoom integer Spinner zoom (size).
                     *                       bg boolean FALSE if we don't need spinner background.
                     *                       type string This is to identify specific styles for the desired bar.
                     *                       rotatorDensity integer Rotator's thickness.
                     * @return object.
                     */
                    get: function (options) {

                        var options = $.extend({
                                "id": "spinner",
                                "zoom": 1,
                                "bg": true,
                                "type": "",
                                "rotatorDensity": 3
                            }, options),
                            res = $("<div>") // wrapper
                                .append([
                                    $("<div>")
                                        .addClass("spinner " + options.type)
                                        .css({
                                            "-moz-transform": "scale(" + options.zoom + ")",
                                            "zoom": options.zoom
                                        })
                                ]);

                        if (options.bg) {
                            res.find(":last").addClass("bg")
                        }
                        res.find(":last")
                            .append([
                                $("<svg>")
                                    .attr({
                                        "id": options.id,
                                        "xmlns": "http://www.w3.org/2000/svg"
                                    })
                                    .append([
                                        $("<circle>")
                                            .addClass("path")
                                            .attr({
                                                "cx": 25,
                                                "cy": 25,
                                                "r": 20,
                                                "fill": "none",
                                                "stroke-width": options.rotatorDensity,
                                                "stroke-miterlimit": 10
                                            })
                                    ])
                            ]);

                        // HACK: HTML and SVG are considered different doc types (HTMLElement vs SVGElement) 
                        // so they have different namespaces. The div "wrapper" + res.html() is a hack to properly parse
                        // the SVG element we are returning. Ref: http://stackoverflow.com/a/13654655/1320415
                        res = res.html();

                        return res;
                    }
                }
            },

            /*** COMPONENTS *******************************************************/

            /**
             * Form components.
             */
            Components: {

                /**
                 * @var object Components instances.
                 */
                Instances: {
                    _: {
                        autocomplete: [] // [{ id: { timer: null, ... } }, { ... }],
                    },

                    /**
                     * Creates / Updates instance.
                     *
                     * @param name string Component name (like "autocomplete").
                     * @param id string Instance unique ID.
                     * @param properties array Instance properties.
                     * @return self.Components.Instances.
                     */
                    set: function (name, id, properties) {

                        self.Components.Instances._[name][id] = $.extend(self.Components.Instances._[name][id], properties);

                        return self.Components.Instances;
                    },

                    /**
                     * Gets property from instance.
                     *
                     * @param name string Component name (like "autocomplete").
                     * @param id string Instance unique ID.
                     * @param property string Instance property to retrieve.
                     * @return mixed.
                     */
                    get: function (name, id, property) {

                        var res = self.Components.Instances._[name][id];

                        if (self.Components.Instances._[name][id] && typeof property != "undefined") {
                            res = self.Components.Instances._[name][id][property];
                        }

                        return res;
                    }
                },

                /**
                 * Gallery component from Photoswipe.
                 */
                Gallery: {

                    /**
                     * Attach PhotoSwipe gallery to images.
                     * Properties for the <img> element (assuming it's a thumbnail):
                     *     data-pswp-size-height string (R) Fullsize image height.
                     *     data-pswp-size-width string (R) Fullsize image width.
                     *     data-pswp-src string Fullsize image source. If not present, img.src will be used instead.
                     *
                     * @param settings array Settings for Photoswipe:
                     *                       selector object [$(".pswp-gallery")] jQuery Image selector.
                     * @return self.Components.Gallery.
                     */
                    bind: function (settings) {

                        var enhancements = Enhancements.getInstance(),
                            options = {
                                "selector": $(".pswp-gallery")
                            },
                            items = [];

                        log("forms", "Binding Forms.Components.Gallery.");

                        // Overwrite defaults
                        $.extend(options, settings);

                        // Set elements for PhotoSwipe
                        $.each(options.selector, function () {

                            var img = $(this),
                                src = (img.attr("data-pswp-src") ? img.attr("data-pswp-src") : img.attr("src"));

                            items.push({
                                src: src,
                                w: img.attr("data-pswp-size-width"),
                                h: img.attr("data-pswp-size-height")
                            });
                        });

                        // Bind "click" event to every image
                        $.each(options.selector, function () {

                            $(this).on("click", function (e) {

                                var options = {
                                        bgOpacity: 0.85,
                                        showHideOpacity: true,
                                        captionEl: false,
                                        shareEl: false
                                    },
                                    pswp = new PhotoSwipe($(".pswp")[0], PhotoSwipeUI_Default, items, options);

                                e.preventDefault();

                                Ui.setStatusBarMode("modal");
                                pswp.listen("destroy", function () {

                                    Ui.setStatusBarMode("normal");
                                });

                                // Open the gallery
                                pswp.init();
                            });
                        });

                        return self.Components.Gallery;
                    }
                },

                /**
                 * Alerts component from mProcer.
                 */
                Alerts: {

                    /**
                     * Loads the alerts to display in the main header's alert icon.
                     *
                     * @return self.Components.Alerts.
                     */
                    load: function () {

                        Main.ajax({
                            url: Main.getApiPath("fetchNews"),
                            noSpinner: true,
                            success: function (res) {

                                // Refresh counter
                                self.Components.Alerts._setCounter({
                                    news: $.map(res.data, function (v) { return v.checksum; })
                                });

                                // Refresh header
                                self.Components.Alerts._refresh({ newsCount: self.Components.Alerts.getCount() });
                            }
                        });

                        return self.Components.Alerts;
                    },

                    /**
                     * Gets the amount of alerts from local storage.
                     *
                     * @return integer.
                     */
                    getCount: function () {

                        var res = parseInt(Storage.getInstance().get("alerts.count"));

                        if (!res) {
                            res = 0;
                        }

                        return res;
                    },

                    /**
                     * Refresh the header icon status.
                     *
                     * @param settings object Options:
                     *                        newsCount integer The amount of unread news.
                     * @return self.Components.Alerts.
                     */
                    _refresh: function (settings) {

                        var options = $.extend(
                                {
                                    newsCount: 0
                                },
                                (typeof settings == "undefined" ? {} : settings)
                            );

                        log("forms", "Binding Forms.Components.Alerts.");
                        if (options.newsCount) {
                            $("#" + Main.getCurrentPageId() + " .main-header .ui-btn.alerts .zmdi")
                                .removeClass("zmdi-notifications-none")
                                .addClass("zmdi-notifications");
                            $("#" + Main.getCurrentPageId() + " .main-header .ui-btn.alerts .alerts-counter")
                                .text((options.newsCount > 9 ? "+9" : options.newsCount));
                        } else {
                            $("#" + Main.getCurrentPageId() + " .main-header .ui-btn.alerts .zmdi")
                                .removeClass("zmdi-notifications")
                                .addClass("zmdi-notifications-none");
                            $("#" + Main.getCurrentPageId() + " .main-header .ui-btn.alerts .alerts-counter")
                                .text("0");
                        }

                        return self.Components.Alerts;
                    },

                    /**
                     * Sets the amount of unread alerts.
                     *
                     * @param alerts object Alerts object:
                     *                      news array News checksums.
                     * @return self.Components.Alerts.
                     */
                    _setCounter: function (alerts) {

                        var news = (alerts.news ? alerts.news : []),
                            readNews = Storage.getInstance().get("news.read");

                        if (news) {

                            // Remove already seen news
                            if (readNews) {
                                news = $(news).not(readNews).get();
                            }

                            Storage.getInstance().set("alerts.count", news.length);
                        }

                        return self.Components.Alerts;
                    }
                },

                /**
                 * Number component from Mobiscroll.
                 */
                Number: {

                    /**
                     * Binds the Mobiscroll's "Number" component to the desired object.
                     *
                     * @param el mixed jQuery selector as object or plain string, for element container.
                     * @param settings array Component options.
                     * @return self.Components.Number.
                     */
                    bind: function (el, settings) {

                        var options = $.extend(
                                {
                                    inputClass: "hidden",
                                    lang: Main.language,
                                    buttons: [
                                        {
                                            text: _("Aceptar"),
                                            handler: "set",
                                            icon: "material-check",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        },
                                        {
                                            text: _("Cancelar"),
                                            handler: "cancel",
                                            icon: "material-close",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        }
                                    ]
                                },
                                (typeof settings == "undefined" ? {} : settings)
                            );

                        log("forms", "Binding Forms.Components.Number.");
                        $.each($(el), function () {

                            $(this).mobiscroll().number(options);
                        });

                        return self.Components.Number;
                    }
                },

                /**
                 * Widget + Menustrip component from Mobiscroll.
                 */
                WidgetMenustrip: {

                    /**
                     * Binds the Mobiscroll's "Widget" and "Menustrip" component to the desired object.
                     *
                     * @param el mixed jQuery selector as object or plain string, for element container.
                     * @return self.Components.WidgetMenustrip.
                     */
                    bind: function (el) {

                        log("forms", "Binding Forms.Components.WidgetMenustrip.");
                        $(el.find("ul")).mobiscroll().menustrip({
                            lang: Main.language,
                            display: "inline",
                            select: "off",
                            onItemTap: function (item) {

                                var ul = this;

                                $.mobiscroll.wmsGo = item.data("go");
                                setTimeout(function () { $(ul).parents(".main-menu").mobiscroll("hide"); }, 100);
                            }
                        });
                        $(el).mobiscroll().widget({
                            lang: Main.language,
                            display: "bottom",
                            buttons: [],
                            onMarkupInserted: function () {

                                // Recalculate menustrip dimensions
                                $(el.find("ul")).mobiscroll('refresh');
                            },
                            onClosed: function () {

                                if ($.mobiscroll.wmsGo) {
                                    setTimeout(function () {
                                        
                                        Main.changePage($.mobiscroll.wmsGo);
                                        delete $.mobiscroll.wmsGo;
                                    }, 500);
                                }
                            }
                        });

                        return self.Components.WidgetMenustrip;
                    }
                },

                /**
                 * Select component from Mobiscroll.
                 */
                Select: {

                    /**
                     * Binds the Mobiscroll's "Select" component to the desired object.
                     *
                     * @param el mixed jQuery selector as object or plain string, for element container.
                     * @param settings array Component options.
                     *                       rowSize integer (Custom option) Font size of the row.
                     * @return self.Components.Select.
                     */
                    bind: function (el, settings) {

                        var options = $.extend(
                                {
                                    lang: Main.language,
                                    headerText: "{value}",
                                    buttons: [
                                        {
                                            text: _("Aceptar"),
                                            handler: "set",
                                            icon: "material-check",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        },
                                        {
                                            text: _("Cancelar"),
                                            handler: "cancel",
                                            icon: "material-close",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        }
                                    ],
                                    onMarkupReady: function (html) {

                                        // rowSize
                                        if (typeof settings.rowSize != "undefined") {
                                            $(html).addClass("row-size-" + settings.rowSize);
                                        }

                                        return html;
                                    }
                                },
                                (typeof settings == "undefined" ? {} : settings)
                            );

                        log("forms", "Binding Forms.Components.Select.");
                        $.each($(el), function () {

                            // Note: selectmenu() is being executed for elements that are not yet created
                            $(this).selectmenu().mobiscroll().select(options);

                            // We need to change a little the "look & feel" of the dynamic added input box
                            $(this).parents(":first").addClass("mbsc-jqm-select").find("span:first").addClass("dw-hsel");

                            // Disable focus on generated input (from Mobiscroll) to avoid horizontal scrolling
                            $(this).siblings("input").on("focus", function () { $(this).blur(); });
                        });

                        return self.Components.Select;
                    }
                },

                /**
                 * Calendar component from Mobiscroll.
                 */
                Calendar: {

                    /**
                     * Binds the Mobiscroll's "Calendar" component to the desired object.
                     *
                     * @param el mixed jQuery selector as object or plain string, for element container.
                     * @param settings array Component options.
                     * @return self.Components.Calendar.
                     */
                    bind: function (el, settings) {

                        var options = $.extend(
                                {
                                    jqmBody: "c", // Hack: https://github.com/acidb/mobiscroll/issues/363
                                    headerText: ""
                                        + '<div class="holidays"><div class="square fixed"></div>'
                                            + _("Feriados Inamovibles") + "</div>"
                                        + '<div class="holidays"><div class="square nofixed"></div>'
                                            + _("Feriados Trasladables") + "</div>"
                                        + '<div class="holidays"><div class="square bridge"></div>'
                                            + _("Feriados Turísticos") + "</div>"
                                        + '<div class="holidays"><div class="square nowork"></div>'
                                            + _("Días No Laborales") + "</div>",
                                    lang: Main.language,
                                    marked: self.Components.Calendar._getHolidays(),
                                    buttons: [
                                        {
                                            text: _("Hoy"),
                                            handler: "now",
                                            icon: "material-today",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        },
                                        {
                                            text: _("Aceptar"),
                                            handler: "set",
                                            icon: "material-check",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        },
                                        {
                                            text: _("Cancelar"),
                                            handler: "cancel",
                                            icon: "material-close",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        }
                                    ]
                                },
                                (typeof settings == "undefined" ? {} : settings)
                            );

                        // Some rules
                        if (options.display == "inline") {
                            options.buttons = [
                                {
                                    text: _("Hoy"),
                                    handler: "now",
                                    icon: "material-today",
                                    cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                }
                            ];
                        }

                        log("forms", "Binding Forms.Components.Calendar.");
                        $.each($(el), function () {

                            $(this).mobiscroll().calendar(options);
                        });

                        return self.Components.Calendar;
                    },

                    /**
                     * Returns holidays options for Calendar component.
                     *
                     * @return array.
                     */
                    _getHolidays: function () {

                        var res = [],
                            colors = {
                                "fixed": Main.theme.primaryColor.toHexString(),
                                "nofixed": Main.theme.lightPrimaryColor.toHexString(),
                                "bridge": Main.theme.dividerColor.toHexString(),
                                "nowork": Main.theme.primaryText.toHexString()
                            };

                        $.each(Data.holidays.argentina, function (k, v) {

                            var date = $.extend({}, v);

                            date.color = colors[v.color];
                            res.push(date);
                        });

                        return res;
                    }
                },

                /**
                 * Autocomplete component from Mobiscroll.
                 */
                Autocomplete: {

                    /**
                     * Binds the Mobiscroll's "Select -> Autocomplete" component to the desired object.
                     * The object can contain the following HTML attributes:
                     *     id string (REQUIRED) Object unique ID.
                     *     data-method string (REQUIRED) The remote API method to invoke.
                     *     data-hiddenid string The ID of the input hidden element to place the selected value.
                     *                          If none provided "object.id" + "-data" will be used instead.
                     *     data-placeholder string Default placeholder label.
                     *     data-hiddenid-save-object boolean If TRUE, the entire object will be saved instead of
                     *                                       just the ID.
                     *     data-preload string JSON with data to preload. Format:
                     *                         [
                     *                             {
                     *                                 id: "OCH", // REQUIRED
                     *                                 title: "A. L. Mangham Jr. Regional Airport", // REQUIRED
                     *                                 subtitle: "Nacogdoches, Texas, United States", // REQUIRED
                     *                                 image: "<absolute_path_to_image>",
                     *                                 imagesPath: "/airlines"
                     *                             },
                     *                             {
                     *                                 ...
                     *                             }
                     *                         ] 
                     *
                     * @param el object jQuery selector as object or plain string, for element container.
                     * @param success function Callback function for successfully response in remote request.
                     * @param settings array Component options (Mobiscroll and some custom options).
                     *                       onSelectAfter function A function to execute after this.onSelect event
                     +                                              was performed.
                     * @return self.Components.Autocomplete.
                     */
                    bind: function (el, success, settings) {

                        var placeholder = ($(el).attr("data-placeholder")
                                ? $(el).attr("data-placeholder")
                                : _("Ingresá un filtro de búsqueda")),
                            dataPreload = ($(el).data("preload")
                                ? $(el).data("preload")
                                : [{
                                    id: "",
                                    title: _("Búsqueda"),
                                    subtitle: _("Ingresá al menos tres letras."),
                                    image: Main.baseUrl + "img/warning-icon.svg"
                                  }]),
                            hiddenElId = ($(el).attr("data-hiddenid")
                                ? $(el).attr("data-hiddenid")
                                : $(el).attr("id") + "-data"),
                            hiddenElIdSaveObject = Boolean($(el).attr("data-hiddenid-save-object")),
                            data = self.Components.Autocomplete.createSelectOptions(dataPreload),
                            options = $.extend(
                                {
                                    type: "autocomplete",
                                    lang: Main.language,
                                    headerText: function (html) {

                                        return $(html).find(".title").text();
                                    },
                                    showLabel: false,
                                    buttons: [
                                        {
                                            text: _("Aceptar"),
                                            handler: "set",
                                            icon: "material-check",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        },
                                        {
                                            text: _("Cancelar"),
                                            handler: "cancel",
                                            icon: "material-close",
                                            cssClass: "ui-btn ui-btn-clear ui-corner-all ui-mini trigger"
                                        }
                                    ],
                                    data: data,
                                    onInit: function (inst) {

                                        var inputDummy = $("#" + this.id + "_dummy"),
                                            html = $(inst.settings.data[0].text),
                                            id = html.attr("data-id"),
                                            title = html.find(".title").text(),
                                            subtitle = html.find(".subtitle").text(),
                                            image = html.find(".image>img").attr("src");

                                        // Initial label for select box
                                        if (id) {
                                            inputDummy.val(title + ", " + subtitle);
                                            if (hiddenElIdSaveObject) {
                                                $("#" + hiddenElId).val(serialize({
                                                    id: id,
                                                    title: title,
                                                    subtitle: subtitle,
                                                    image: image
                                                }));
                                            } else {
                                                $("#" + hiddenElId).val(id);
                                            }
                                        } else {
                                            inputDummy.val(placeholder);
                                        }
                                    },
                                    onSelect: function (html, inst) {

                                        var html = $(html),
                                            hiddenEl = $("#" + hiddenElId),
                                            data = {
                                                id: html.attr("data-id"),
                                                title: html.find(".title").text(),
                                                subtitle: html.find(".subtitle").text(),
                                                image: html.find(".image>img").attr("src"),
                                                imagesPath: html.find(".image>img").attr("data-path")
                                            };

                                        // Update button text
                                        $("#" + this.id + "_dummy").val(data.title);

                                        // Update hidden element value
                                        if (!hiddenEl.length) {

                                            // Create the element
                                            $("#" + this.id).parent().append(
                                                $("<input>").attr({
                                                    "id": hiddenElId,
                                                    "type": "hidden",
                                                    "value": serialize(data)
                                                })
                                            );
                                        } else {
                                            hiddenEl.val(serialize(data));
                                        }

                                        // Custom onSelectAfter function
                                        if ($.isFunction(inst.settings.onSelectAfter)) {
                                            inst.settings.onSelectAfter(data, this, inst);
                                        }
                                    },
                                    onMarkupReady: function (markup, inst) {

                                        var apiMethod = this.dataset.method,
                                            inputFilter = "" // Search box
                                            + '<div class="search-container">'
                                                + '<div class="ui-input-search ui-input-inset ui-body-inherit ui-corner-all ui-shadow-inset">'
                                                    + '<input type="search" data-enhanced="true" tabindex="0" placeholder="' + placeholder + '" />'
                                                + "</div>"
                                            + '</div>'

                                        // Build the search box and bind callbacks
                                        markup.addClass('autocomplete');
                                        $(inputFilter)
                                            .prependTo($('.dwcc', markup))
                                            .on('keydown', function (e) { e.stopPropagation(); })
                                            .on('keyup', function (e) {

                                                var query = $('input', this).val();

                                                // Call remote API method
                                                clearTimeout(self.Components.Instances.get("autocomplete", this.id, "timer"));
                                                if (query && query.length > 2) {
                                                    self.Components.Instances.set("autocomplete", this.id, { timer: setTimeout(function () {

                                                        Main.ajax({
                                                            url: Main.getApiPath(apiMethod),
                                                            data: {
                                                                lang: Main.language,
                                                                name: query
                                                            },
                                                            noErrorMessages: true,
                                                            noSpinner: true,
                                                            markupInst: inst,
                                                            overBeforeSend: function () {

                                                                inst.settings.data = self.Components.Autocomplete
                                                                    .createSelectOptions([{
                                                                        id: "",
                                                                        title: _("Buscando..."),
                                                                        subtitle: _("Obteniendo resultados que coincidan con '"
                                                                            + query + "'."),
                                                                        image: Main.baseUrl + "img/ajax-loader.svg"
                                                                    }]);
                                                                inst.settings.parseValue(inst.settings.data[0].value);
                                                                inst.refresh();

                                                                // Material Design preloader image
                                                                $(".autocomplete .dw-ul img").replaceWith(Forms.getInstance().Parts.Loader.get({
                                                                    zoom: .3,
                                                                    bg: false,
                                                                    type: "autocomplete",
                                                                    rotatorDensity: 6
                                                                }));
                                                            },
                                                            error: function (res) {

                                                                var errorMsg = _("Fallo en la conexión a internet.");

                                                                try {
                                                                    if (res.responseText && (res = $.parseJSON(res.responseText))
                                                                        && typeof res.data != "undefined")
                                                                    {
                                                                        inst.settings.data = self.Components.Autocomplete
                                                                            .createSelectOptions([{
                                                                                id: "",
                                                                                title: _("Error"),
                                                                                subtitle: res.data,
                                                                                image: Main.baseUrl + "img/warning-icon.svg"
                                                                            }]);
                                                                    } else {
                                                                        inst.settings.data = self.Components.Autocomplete
                                                                            .createSelectOptions([{
                                                                                id: "",
                                                                                title: _("Error de red"),
                                                                                subtitle: errorMsg,
                                                                                image: Main.baseUrl + "img/warning-icon.svg"
                                                                            }]);
                                                                    }
                                                                } catch (e) {
                                                                    inst.settings.data = self.Components.Autocomplete
                                                                        .createSelectOptions([{
                                                                            id: "",
                                                                            title: _("Error de red"),
                                                                            subtitle: errorMsg,
                                                                            image: Main.baseUrl + "img/warning-icon.svg"
                                                                        }]);
                                                                }
                                                                inst.settings.parseValue(inst.settings.data[0].value);
                                                                inst.refresh();
                                                            },
                                                            success: success
                                                        });
                                                    }, 500)});
                                                } else {
                                                    inst.settings.data = self.Components.Autocomplete
                                                        .createSelectOptions([{
                                                            id: "",
                                                            title: _("Búsqueda"),
                                                            subtitle: _("Ingresá al menos tres letras."),
                                                            image: Main.baseUrl + "img/warning-icon.svg"
                                                        }]);
                                                    inst.settings.parseValue(inst.settings.data[0].value);
                                                    inst.refresh();
                                                }
                                            });

                                        return markup;
                                    }
                                },
                                (typeof settings == "undefined" ? {} : settings)
                            );

                        log("forms", "Binding Forms.Components.Autocomplete.");

                        // Note: selectmenu() is being executed for elements that are not yet created
                        $(el).selectmenu().mobiscroll().select(options);

                        // We need to change a little the "look & feel" of the dynamic added input box
                        $(el).parents(":first").addClass("mbsc-jqm-select").find("span:first").addClass("dw-hsel");

                        // Disable focus on generated input (from Mobiscroll) to avoid horizontal scrolling
                        $(el).siblings("input").on("focus", function () { $(this).blur(); });

                        // Disable element if "disabled=true" option
                        if (settings.disabled) {
                            Ui.button(el, "disabled", true);
                        }

                        return self.Components.Autocomplete;
                    },

                    /**
                     * Creates options for the select box.
                     *
                     * @param elements array Select options. Format:
                     *                       [
                     *                           {
                     *                               id: "OCH", // REQUIRED
                     *                               title: "A. L. Mangham Jr. Regional Airport", // REQUIRED
                     *                               subtitle: "Nacogdoches, Texas, United States", // REQUIRED
                     *                               image: "<path_to_image>",
                     *                               imagesPath: "/airlines"
                     *                           },
                     *                           {
                     *                               ...
                     *                           }
                     *                       ]
                     * @return array.
                     */
                    createSelectOptions: function (elements) {

                        if ($.isArray(elements)) {
                            elements = $.map(elements, function (v) {

                                return {
                                    text: ""
                                        + '<div data-id="' + v.id + '">'
                                            + (v.image
                                                ? '<div class="image"><img src="' + v.image + '" class="fb" '
                                                    + (v.imagesPath ? 'data-path="' + v.imagesPath + '"' : "") + ' /></div>'
                                                : "")
                                            + '<div class="label">'
                                                + '<div class="title">' + v.title + '</div>'
                                                + (v.subtitle ? '<div class="subtitle">' + v.subtitle + '</div>' : "")
                                            + "</div>"
                                        + '</div>',
                                    value: v.id
                                };
                            });
                        }

                        return elements;
                    }
                }
            },

            /*** VALIDATORS *******************************************************/

            /**
             * Validation functions.
             */
            Validate: {

                /**
                 * @var object Default plugin messages.
                 */
                messages: {
                    "email": {
                        "invalid": _("El email ingresado no es válido.")
                    },
                    "required": {
                        "empty": _("Los siguientes campos son requeridos: %FIELDS%.")
                    }
                },

                /**
                 * @var array Response messages.
                 */
                responseMessages: [],

                /**
                 * Validates the syntax of an email.
                 *
                 * @param str string Email to validate.
                 * @return self.Validate.
                 */
                email: function (str) {

                    var res = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str);

                    if (!res) {
                        self.Validate.responseMessages.push(self.Validate.messages.email.invalid);
                    }

                    return self.Validate;
                },

                /**
                 * Checks that all the fields are non empty.
                 *
                 * @param fields array An array indexed by the field names. Ie.: { email: "me@example.com" }
                 * @return self.Validate.
                 */
                required: function (fields) {

                    var emptyFields = [];

                    if (typeof fields == "object" && !$.isArray(fields)) {
                        $.each(fields, function (k, v) {

                            if (!$.trim(v)) {
                                emptyFields.push(k);
                            }
                        });
                    }
                    if (emptyFields.length) {
                        self.Validate.responseMessages.push(
                            self.Validate.messages.required.empty.replace(/%FIELDS%/g, emptyFields.join(", ")));
                    }

                    return self.Validate;
                },

                /**
                 * Returns the validation messages.
                 *
                 * @return mixed FALSE if all validations passed; ARRAY with descriptive messages otherwise.
                 */
                run: function () {

                    var res = self.Validate.responseMessages;

                    if (!self.Validate.responseMessages.length) {
                        res = false;
                    }
                    self.Validate.responseMessages = [];

                    return res;
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
