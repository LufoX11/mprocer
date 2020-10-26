////
// On load actions.
////

$(window).load(function () {

    // Switch to real page
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");

    // Intro slider
    $("#carousel-intro")
        .carousel({
            interval: 2500,
            pause: "false"
        })
        .bind("slid", function () {

            if ($(this).find("div.stopItem").hasClass("active")) {
                $(this).carousel("pause");
            }
        });
});

$(document).ready(function () {

    // Home page height must be calculated according to window height
    $('#intro').css({ 'height': ($(window).height()) + 'px' });

    // Adjust carousel vertical align
    $(".margin-carousel-intro").css("margin-top",
        (($("#intro").height() / 2) - ($(".carousel-inner").height() / 2) - 61) + "px");

    // Collapse menu on click on mobile and tablet devices
    $('.nav a').click(function () { $(".nav-collapse").collapse("hide") });

    // Adjust elements on window resize
    $(window).resize(function () {
        $('#intro').css({'height': ($(window).height()) + 'px' });
        $(".margin-carousel-intro").css("margin-top",
            (($("#intro").height() / 2) - ($(".carousel-inner").height() / 2) - 61) + "px");
        });

    // Custom scrollbar
    $("html").niceScroll();

    // Smooth scroll on page
    $('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click', function (event) {
        var $anchor = $(this);

        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
        });

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 61
        }, 1500,'easeInOutExpo');

        event.preventDefault();
    });

    // Contact form action
    $('#contact-form').ajaxForm({
        dataType: "json",
        beforeSubmit: function () {
            $("#contact-form [type='submit']").val("Enviando...").prop("disabled", true);
        },
        complete: function () {
            $("#contact-form [type='submit']").val("Enviar").prop("disabled", false);
        },
        error: function (jqXHR) {
            if (jqXHR.responseText) {
                Main.alert($.parseJSON(jqXHR.responseText).data, "alert-danger", "#contact-alert-box");
            } else {
                Main.alert("Ocurrió un error. ¿Podrías reintentar?", "alert-danger", "#contact-alert-box");
            }
        },
        success: function (res) {
            Main.alert(res.data, "alert-success", "#contact-alert-box");
        }
    });
});
