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
    if (isset($user) && $user->getApplication() == 'mprocer' && isset($isGuestUser) && $isGuestUser) { ?>
        <title>:: <?= Hp_Name::getCoolName($user->getApplication()); ?> ::</title>
        <link rel="icon" sizes="57x57" type="image/png"
            href="<?= $View->getImg('admin/' . $user->getService() . '-favicon.png'); ?>">
<?php
    } else { ?>
        <title>:: mProcer - iMaat ::</title>
        <link rel="icon" sizes="57x57" type="image/png" href="<?= $View->getImg('admin/favicon.png'); ?>">
<?php
    } ?>

    <!-- JS -->
    <script type="text/javascript"
        src="<?= $View->getJs('admin/jquery-1.7.1.min.js'); ?>"></script>

    <!-- CSS -->
    <link rel="stylesheet" href="<?= $View->getCss('admin/admin-custom.css'); ?>">
    <link rel="stylesheet" href="<?= $View->getCss('admin/custom.css'); ?>">
</head>
<body>
    <!-- Header -->
    <?= $htmlHeader; ?>

    <!-- Content -->
    <?= $htmlContent; ?>

    <!-- Footer -->
<?php
    if (isset($user) && $user->getApplication() == 'mprocer' && isset($isGuestUser) && $isGuestUser) { ?>
        <div id="developedby"><a target="_blank" href="<?= $View->getLink('', array(),
                array('base' => $paths['site']['default'])); ?>">
            <img src="<?= $View->getImg('developedby-imaat.png'); ?>" />
        </a></div>
<?php
    } ?>
</body>
</html>
