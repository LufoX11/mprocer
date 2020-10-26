<!DOCTYPE html>
<html lang="<?= $Hp['lang']['iso']; ?>">
    <head>
        <title>:: iMaat - <?= $View->te('Sitio en construcción'); ?> ::</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="<?= $View->te('Sitio en construcción'); ?>">
        <meta name="author" content="iMaat Team">
        <meta name="google-site-verification" content="_Egj2SshC-RQVEh0FHTSmILQBLxrBP4NKLH4c0aZJwQ" />

        <!-- CSS -->
        <link href="<?= $View->getCss('site/bootstrap.min.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/bootstrap-responsive.min.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/animate.css'); ?>" rel="stylesheet">
        <link href="<?= $View->getCss('site/m-styles.min.css'); ?>" rel="stylesheet">

        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,700' rel='stylesheet' type='text/css'>
        <link rel="image_src" href="<?= $View->getImg('local://thumbnail.png'); ?>">
        <link rel="icon" type="image/ico" href="<?= $View->getImg('local://favicon.ico'); ?>">
    </head>
    <body>

        <!-- JS -->
        <script type="text/javascript" src="<?= $View->getJs('site/jquery-1.10.2.min.js'); ?>"></script>
        <script type="text/javascript" src="<?= $View->getJs('site/bootstrap.min.js'); ?>"></script>

        <!-- Content -->
        <?= $htmlContent; ?>

        <script type="text/javascript">

            // Animated background
            var current = 0;
            setInterval(function () {
                    $('body').css("backgroundPosition", "0 " + (current --) + "px");
                }, 90);

        </script>
    </body>
</html>

