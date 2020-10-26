<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, target-densitydpi=medium-dpi" />
    <meta name="description" content="Administrador de iMaat">
    <meta name="robots" content="noindex,nofollow">
<?php
    // Custom header
    if (isset($user) && $user->getApplication() == 'deutschebahn' && isset($isGuestUser) && $isGuestUser) { ?>
        <title>:: <?= Hp_Name::getCoolName($user->getApplication()); ?> ::</title>
        <link rel="icon" sizes="57x57" type="image/png" href="<?= $View->getImg('admin/db-favicon.png'); ?>">
<?php
    } else { ?>
        <title>:: mProcer - iMaat ::</title>
        <link rel="icon" sizes="57x57" type="image/png" href="<?= $View->getImg('admin/favicon.png'); ?>">
<?php
    } ?>

    <!-- JS -->
    <script type="text/javascript"
        src="<?= $View->getJs('admin/jquery-1.7.1.min.js'); ?>"></script>
    <script type="text/javascript">

        /**
         * JS: Initialization options for JQM (MUST be called here)
         */

        $(document).on("mobileinit", function () {

            // JQ options
            $.support.cors = true; // Allow cross domain loading

            // JQM options
            $.mobile.page.prototype.options.domCache = false;
            $.mobile.selectmenu.prototype.options.nativeMenu = false;
            $.extend($.mobile, {
                defaultDialogTransition: "none",
                defaultPageTransition: "none",
                pageLoadErrorMessage: "<?= Utils::escape('Error en la carga'); ?>",
                pageLoadErrorMessageTheme: "a",
                allowCrossDomainPages: true,
                pushStateEnabled: false, // Enhance navigation and avoid some problems
                transitionFallbacks: {
                    slidedown: "none"
                },
                buttonMarkup: {
                    hoverDelay: 100 // Reduce the delay for touch events
                }
            });
        });

    </script>

    <script type="text/javascript"
        src="<?= $View->getJs('admin/jquery.mobile-1.2.0.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('admin/Main.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('admin/Common.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/jquery.jqplot.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.canvasTextRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.dateAxisRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.cursor.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.highlighter.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.pieRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.barRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.pointLabels.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.categoryAxisRenderer.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqte/jquery-te-1.4.0.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/mobiscroll/mobiscroll-2.3.1.custom.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/photoswipe/klass.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/photoswipe/code.photoswipe.jquery-3.0.5.min.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/jqlistswap/jquery.jqlistswap-1.0.js'); ?>"></script>
    <script type="text/javascript"
        src="<?= $View->getJs('jquery.plugins/zeroclipboard/ZeroClipboard.min.js'); ?>"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="<?= $View->getCss('admin/jquery.mobile-1.2.0.min.css'); ?>">
<?php 
    if ($theme) { ?>
        <link rel="stylesheet" type="text/css" href="<?= $View->getCss('admin/' . $theme . '.min.css'); ?>">
<?php 
    } ?>
    <link rel="stylesheet" href="<?= $View->getCss('admin/admin-custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/tablets.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/common-white.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/jqplot/jquery.jqplot.min.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/jqplot/jquery.jqplot.custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/jqte/jquery-te-1.4.0.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/jqte/jquery-te-custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/mobiscroll/mobiscroll-2.3.1.custom.min.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/photoswipe/photoswipe.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/photoswipe/photoswipe.custom.css'); ?>">
</head>
<body>
    <div data-role="page" id="<?= "page-{$headerMenuActive}"; ?>" data-theme="a"
        data-dom-cache="false" data-url="<?= $jqmDataUrl; ?>">
        <script type="text/javascript">

            var iZeroClipboard = null;

            // Page transition events
            $("#<?= "page-{$headerMenuActive}"; ?>")
                .die()
                .live("pageshow", function() {

                    // Unnecessary pages in DOM
                    $('div[data-role="page"]:not(".ui-page-active")').remove();

<?php               // Action messages
                    if ($flash['error']) { ?>
                        iMain.showMessage("error",
                            "<?= str_replace(array("\r\n", "\r", "\n"), "<br />", $flash['error']); ?>");
<?php               } else if ($flash['success']) { ?>
                        iMain.showMessage("success",
                            "<?= str_replace(array("\r\n", "\r", "\n"), "<br />", $flash['success']); ?>");
<?php               } else if ($flash['info']) { ?>
                        iMain.showMessage("info",
                            "<?= str_replace(array("\r\n", "\r", "\n"), "<br />", $flash['info']); ?>");
<?php               } ?>

                    // ZeroClipboard jquery plugin
                    iZeroClipboard = new ZeroClipboard($(".clipboardBtn"), {
                        moviePath: "<?= $View->getMovie('jquery.plugins/zeroclipboard/ZeroClipboard.swf'); ?>",
                        trustedDomains: ['*'],
                        allowScriptAccess: "always"
                    });
                });

            // Window resizing actions
            $(window).resize(function () {

                // Need to reposition the movie.
                if (iZeroClipboard) {
                    iZeroClipboard.reposition();
                }
            });

        </script>

        <!-- Header -->
        <?= $htmlHeader; ?>

        <!-- Content -->
        <div class="page-messages" style="display: none;"></div>
        <?= $htmlContent; ?>

        <!-- Footer -->
<?php   if (isset($user) && $user->getApplication() == 'deutschebahn' && isset($isGuestUser) && $isGuestUser) { ?>
            <div id="developedby"><a target="_blank" href="<?= $View->getLink('', array(),
                    array('base' => $paths['site']['default'])); ?>">
                <img src="<?= $View->getImg('developedby-imaat.png'); ?>" />
            </a></div>
<?php   } ?>
    </div>

    <!-- JS Initialization -->
    <script type="text/javascript">

        var iMain = Main.getInstance({
                "appVersion": "<?= $appVersion; ?>",
                "paths": {
                    "img": "<?= $paths['static']['img']; ?>"
                }
            }),
            iCommon = Common.getInstance({
                "paths": {
                    "img": "<?= $paths['static']['img']; ?>"
                }
            });

    </script>
</body>
</html>
