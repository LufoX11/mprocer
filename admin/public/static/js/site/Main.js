var Main = {

    /**
     * Validates the syntax of an email.
     *
     * @param email string Email to validate.
     * @return boolean TRUE on valid email; FALSE otherwise.
     */
    validate_email: function(email) {

        var res = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);

        return res;
    },

    /**
     * Shows a custom message.
     *
     * @param message mixed Message(s) to be displayed.
     * @param custom_type string The message type: alert-danger, alert-success, alert-info. Default: alert-danger.
     * @param custom_selector string A messages box custom selector.
     * @return void.
     */
    alert: function(message, custom_type, custom_selector) {

        var html = "",
            selector = "#alert-box",
            type = "alert-danger";

        if (typeof custom_type != "undefined")
        {
            type = custom_type;
        }
        if (typeof custom_selector != "undefined")
        {
            selector = custom_selector;
        }

        // Hides current message
        $(selector).hide().find(".alert").html("");

        if ($.isArray(message))
        {
            $.each(message, function (k, v) {
                html += "<li>" + v + "</li>";
            });
            message = "<ul>" + html + "</ul>";
        }
        $(selector).find(".alert")
            .removeClass().addClass("alert " + type)
            .html(message);
        $(selector).fadeIn("fast");
    }
}
