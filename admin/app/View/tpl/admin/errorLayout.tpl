<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"
    "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, target-densitydpi=medium-dpi" />
    <meta name="description" content="iMaat - Error page.">
    <meta name="robots" content="noindex,nofollow">

    <title>:: Error - iMaat::</title>
    <link rel="icon" sizes="57x57" type="image/png" href="<?= $View->getImg('favicon.png'); ?>">

    <!-- JS -->
    <script type="text/javascript" src="<?= $View->getJs('admin/jquery-1.7.1.min.js'); ?>"></script>
    <script type="text/javascript" src="<?= $View->getJs('admin/jquery.mobile-1.2.0.min.js'); ?>"></script>
    <script type="text/javascript" src="<?= $View->getJs('admin/Main.js'); ?>"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="<?= $View->getCss('admin/default.min.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/jquery.mobile-1.2.0.min.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/error.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/tablets.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/common-white.css'); ?>">
</head>
<body>
    <div data-role="page" id="page-error" data-theme="a" data-dom-cache="false">

        <!-- Header -->
        <?= $htmlHeader; ?>

        <!-- Content -->
        <div class="page-messages" style="display: none;"></div>
        <?= $htmlContent; ?>

        <!-- Footer -->
        <?= $htmlFooter; ?>
    </div>

    <!-- JS Initialization -->
    <script type="text/javascript">

        var iMain = Main.getInstance({
            "appVersion": "<?= (isset($appVersion) ? $appVersion : 0); ?>",
            "paths": {
                "img": "<?= (isset($paths['static']['img']) ? $paths['static']['img'] : ''); ?>",
                "css": "<?= (isset($paths['static']['css']) ? $paths['static']['css'] : ''); ?>"
            }
        });

    </script>
</body>
</html>
