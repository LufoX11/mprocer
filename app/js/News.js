/**
 * Functions file for News.
 */

var News = (function () {

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
             * Retrieves all read news checksums from local storage.
             *
             * @return array.
             */
            getReadNewsChecksums: function () {

                var res = Storage.getInstance().get("news.read");

                if (!res) {
                    res = [];
                }

                return res;
            },

            /**
             * Sets a news as seen.
             *
             * @param checksum string News checksum.
             * @return self.
             */
            markAsRead: function (checksum) {

                var readNews = self.getReadNewsChecksums();

                readNews.push(checksum);
                readNews.removeDuplicates();

                Storage.getInstance().set("news.read", readNews);

                // Update alerts
                Forms.getInstance().Components.Alerts.load();

                return self;
            },

            /**
             * Tells whether a news has been marked as read or not.
             *
             * @param checksum string News checksum to check.
             * @return boolean.
             */
            isRead: function (checksum) {

                var readNews = self.getReadNewsChecksums(),
                    res = ($.inArray(checksum, readNews) > -1);

                return res;
            },

            /**
             * Finds a single news.
             *
             * @param checksum string News checksum.
             * @return self.
             */
            showNews: function (checksum) {

                self.findNews(
                    checksum,
                    {
                        spinnerMessage: _("Obteniendo la noticia"),
                        closeOnComplete: false,
                        error: function () {

                            var html = $("<div>")
                                    .addClass("content-text")
                                    .append([
                                        $("<h3>").text(_("Error al obtener la noticia."))
                                    ]);

                            $("#page-newsContent-newsContainer").html(html).show();
                            Ui.hideLoader();
                        },
                        success: function (res) {

                            var html = $("<div>").addClass("content-text");

                            if (res.data) {
                                html.append([
                                    $("<h2>").html(res.data.title),
                                    $("<h4>").html(res.data.summary)
                                ]);
                                if (res.data.image.thumb) {
                                    html.append([
                                        $("<div>")
                                            .addClass("caption img top-right plus waves-image")
                                            .append([
                                                $("<img>")
                                                    .addClass("pswp-gallery")
                                                    .attr({
                                                        "src": res.data.image.thumb,
                                                        "data-pswp-src": res.data.image.original.src,
                                                        "data-pswp-size-width": res.data.image.original.size.width,
                                                        "data-pswp-size-height": res.data.image.original.size.height
                                                    }),
                                                $("<p>")
                                            ])
                                    ]);
                                }
                                html.append([
                                    $("<h6>").html(res.data.datetime),
                                    $("<p>").html(res.data.description),
                                    $("<h6>").html(
                                        $("<a>")
                                            .attr("href", "#")
                                            .addClass("ui-btn ui-btn-inline icon rounded")
                                            .on("click", function () {

                                                window.plugins.socialsharing.share(
                                                    res.data.summary,
                                                    res.data.title,
                                                    res.data.image.original.src,
                                                    Config.get("service.www")
                                                )
                                            })
                                            .append([
                                                $("<i>").addClass("zmdi zmdi-share")
                                            ])
                                    )
                                ]);
                            } else {
                                html = $("<div>")
                                    .addClass("content-text")
                                    .append([
                                        $("<h3>").text(_("No se encontró la noticia."))
                                    ]);
                            }

                            $(html).waitForImages(function () {

                                $("#page-newsContent-newsContainer").html(html).show();
                                Forms.getInstance().Components.Gallery.bind();
                                Enhancements.getInstance().page();
                                Ui.hideLoader();

                                // Set news a read
                                self.markAsRead(checksum);

                                // Update alerts
                                Forms.getInstance().Components.Alerts.load();
                            });
                        }
                    }
                );

                return self;

            },

            /**
             * Displays news list.
             *
             * @return self.
             */
            showNewsList: function () {

                self.fetchNews({
                    spinnerMessage: _("Obteniendo las Novedades más Recientes"),
                    closeOnComplete: false,
                     error: function () {

                        $("#page-news .ui-content").append(
                            $("<h3>").addClass("content-text title").text(_("Error al obtener las novedades."))
                        );
                        Ui.hideLoader();
                    },
                    success: function (res) {

                        var forms = Forms.getInstance(),
                            html = $("<div>"),
                            total = Object.size(res.data),
                            i = 0;

                        if (total) {
                            $.each(res.data, function (k, v) {

                                var options = $.extend(true, {}, forms.Parts.Card.options),
                                    isRead = self.isRead(v.checksum);

                                i ++;
                                if (i == 1) {
                                    options.layout.classes.push("first");
                                }
                                if (i == total) {
                                    options.layout.classes.push("last");
                                }

                                // Layout
                                if (v.imageOg) {
                                    options.layout.image = "center-large";
                                }
                                if (isRead ? "read" : "") {
                                    options.layout.read = true;
                                }

                                // Title
                                options.modules.title.enabled = true;
                                options.modules.title.primary = v.title;
                                options.modules.title.secondary = v.datetime;

                                // Image
                                if (v.imageOg) {
                                    options.modules.image.enabled = true;
                                    options.modules.image.src = v.imageOg;
                                    options.modules.image.grayscale = isRead;
                                }

                                // Description
                                options.modules.text.enabled = true;
                                options.modules.text.description = v.summary;

                                // Actions
                                options.modules.actions.enabled = true;
                                options.modules.actions.icons = [
                                    {
                                        "image": "share",
                                        "callback": function () {
                                            window.plugins.socialsharing.share(
                                                v.summary,
                                                v.title,
                                                v.imageOg,
                                                Config.get("service.www")
                                            )
                                        }
                                    }
                                ];
                                options.modules.actions.buttons = [
                                    {
                                        "text": _("Leer"),
                                        "callback": function () {
                                            Main.setUrlParams("checksum", v.checksum).changePage("newsContent");
                                        }
                                    }
                                ];

                                html.append([ forms.Parts.Card.get(options) ]);
                            });
                        } else {
                            html = $("<h3>").addClass("content-text title").html(
                                _("Sin novedades") + ".<br />" + _("¡Intentá más tarde!"));
                        }

                        $(html).waitForImages(function () {

                            $("#page-news .ui-content").jqmi("append", html);
                            Enhancements.getInstance().page();
                            Ui.hideLoader();
                        });
                    }
                });

                return self;
            },

            /**
             * Finds a single news.
             *
             * @param checksum string News checksum.
             * @param options object Extra options for Main.ajax().
             * @return self.
             */
            findNews: function (checksum, options) {

                Main.ajax($.extend(
                    {
                        url: Main.getApiPath("findNews") + "/" + checksum
                    },
                    options
                ));

                return self;
            },

            /**
             * Fetches all news.
             *
             * @param options object Extra options for Main.ajax().
             * @return self.
             */
            fetchNews: function (options) {

                Main.ajax($.extend(
                    {
                        url: Main.getApiPath("fetchNews")
                    },
                    options
                ));

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

