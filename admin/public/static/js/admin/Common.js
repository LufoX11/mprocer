/**
 * Common functions file for mProcer.
 */

var Common = (function () {

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

        // Attach logout triggers
        $(".logout").live("click", function() {
            _instance.doLogout();
        });

        return {

            /*** Public *******************************************************/

            paths: opts.paths || null,

            /**
             * Deletes a message.
             *
             * @param id integer Message ID.
             * @return void.
             */
            deleteMessage: function (id) {

                $.ajax({
                    url: "/ajax/messages/delete",
                    dataType: "json",
                    type: "POST",
                    data: {
                        "data": id
                    },
                    statusCode: {
                        200: function (res) {

                            var currentPage = $.mobile.activePage.attr("id");
                            if (currentPage == "page-messages") {
                                $("#messages-list-item-" + res.data).fadeOut('fast', function () {
                                    $(this).remove();
                                    $("#messages-list").listview('refresh');
                                    if (!$(".messages-list-a").length) {
                                        $("#messages-list").remove();
                                        $("#messages-container").append("<p>No hay mensajes.</p>");
                                    }
                                    iMain.showMessage("success", "Se eliminó el mensaje.");
                                });
                            } else if (currentPage == "page-message") {
                                $.mobile.changePage("/messages", { reloadPage: true });
                            }
                        },
                        500: function () {

                            iMain.showMessage("error", "Ocurrió un error al eliminar el elemento.");
                        }
                    }
                });
            },

            /**
             * Test a push notification.
             *
             * @param checksum string Checksum of the news.
             * @param email string User's email(s) (comma separated emails for multiple sending).
             * @return void.
             */
            testNewsPushNotification: function (checksum, email) {

                $.ajax({
                    url: "/ajax/news/testPushNotification",
                    dataType: "json",
                    type: "POST",
                    data: {
                        checksum: checksum,
                        email: email
                    },
                    statusCode: {
                        200: function (res) {

                            iMain.showMessage("success", "Se envió la notificación.");
                        },
                        500: function () {

                            iMain.showMessage("error", "Ocurrió un error al enviar la notificación.");
                        }
                    }
                });
            },

            /**
             * Deletes a news's image.
             *
             * @param el object <li> element.
             * @return void.
             */
            deleteNewsImage: function (el) {

                $.ajax({
                    url: "/ajax/news/deleteImage",
                    dataType: "json",
                    type: "POST",
                    context: el,
                    data: {
                        "data": $(el).children(".options.delete").attr("data-image-name")
                    },
                    statusCode: {
                        200: function (res) {

                            var currentPage = $.mobile.activePage.attr("id");
                            if (currentPage == "page-newsImages") {
                                $(el).fadeOut('fast', function () {
                                    $(this).remove();
                                    if (!$("#newsImages-gallery-list > li").length) {
                                        $("#newsImages-gallery-list")
                                            .parent()
                                            .after('<h3 class="ui-li-heading">No hay más imágenes.</h3>')
                                            .remove();
                                    }
                                    iMain.showMessage("success", "Se eliminó la imágen.");
                                });
                            }
                        },
                        403: function () {

                            iMain.showMessage("error", "La imágen está en uso y no se puede eliminar.");
                        },
                        500: function () {

                            iMain.showMessage("error", "Ocurrió un error al eliminar el elemento.");
                        }
                    }
                });
            },

            /**
             * Deletes a translation.
             *
             * @param id integer Traduction ID.
             * @return void.
             */
            deleteTranslation: function (id) {

                $.ajax({
                    url: "/ajax/translations/delete",
                    dataType: "json",
                    type: "POST",
                    data: {
                        "data": id
                    },
                    statusCode: {
                        200: function (res) {

                            var currentPage = $.mobile.activePage.attr("id");

                            $("#translations-list-item-" + res.data).fadeOut('fast', function () {
                                $(this).remove();
                                $("#translations-list").listview('refresh');
                                if (!$("#translations-list > li.item").length) {
                                    $("form[role=search]").remove();
                                    $("#translations-list").parent().parent().remove();
                                    $("#translations-container div[data-role=collapsible-set]")
                                        .collapsibleset("refresh")
                                        .children(":first").trigger("expand");
                                }
                                iMain.showMessage("success", "Se eliminó la traducción.");
                            });
                        },
                        500: function () {

                            iMain.showMessage("error", "Ocurrió un error al eliminar el elemento.");
                        }
                    }
                });
            },

            /**
             * Deletes a news.
             *
             * @param checksum string News checksum.
             * @return void.
             */
            deleteNews: function (checksum) {

                $.ajax({
                    url: "/ajax/news/delete",
                    dataType: "json",
                    type: "POST",
                    data: {
                        "data": checksum
                    },
                    statusCode: {
                        200: function (res) {

                            var currentPage = $.mobile.activePage.attr("id");
                            if (currentPage == "page-news") {
                                $("#news-list-item-" + res.data).fadeOut('fast', function () {
                                    $(this).remove();
                                    $("#news-list").listview('refresh');
                                    if (!$("#news-list > li").length) {
                                        $("form[role=search]").remove();
                                        $("#news-list").parent().parent().remove();
                                        $("#news-container div[data-role=collapsible-set]")
                                            .collapsibleset("refresh")
                                            .children(":first").trigger("expand");
                                    }
                                    iMain.showMessage("success", "Se eliminó la noticia.");
                                });
                            } else if (currentPage == "page-newsEdit") {
                                $.mobile.changePage("/news", { reloadPage: true });
                            }
                        },
                        500: function () {

                            iMain.showMessage("error", "Ocurrió un error al eliminar el elemento.");
                        }
                    }
                });
            },

            /**
             * Sets a message as read.
             *
             * @param a object The <a> element to set as read.
             * @return void.
             */
            setReadMessage: function (a) {

                if (!$(a).hasClass("readnews")) {
                    $.ajax({
                        url: "/ajax/messages/setRead",
                        dataType: "json",
                        type: "POST",
                        data: {
                            "data": $(a).attr("data-id")
                        },
                        statusCode: {
                            200: function (res) {

                                $(a).addClass("readnews");
                            }
                        }
                    });
                }
            },

            /**
             * Performs a logout action.
             *
             * @return false.
             */
            doLogout: function () {

                $.mobile.changePage("/logout");
                $('div[data-role="page"]:not(".ui-page-active")').remove();
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
