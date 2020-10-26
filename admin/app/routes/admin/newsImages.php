<?php

/**
 * Renders the application interface for the client custom News -> Images.
 */

$Slim->map('/newsImages', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS),
    function () use ($Slim)
{
    Loader::hp(array('Service', 'Image'), true);
    Loader::vendor(array('WideImage/WideImage'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    if (($service = $_SESSION['AdminUser']->aclGetServiceAccess()) == 'all') {
        $service = ($Slim->request()->post('service') ?
            $Slim->request()->post('service') : current($appCfg['main']['services']));
    }

    // Uploader
    if ($Slim->request()->post('trgImgup')) {
        $to = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$service}";
        $Hp_Image = new Hp_Image($appCfg, array('service' => $service));
        $resp = $Hp_Image->generateByUpload($_FILES['imgFile'], $to);
        $Slim->flashNow($resp['status'], $resp['message']);
    }

    // Images gallery
    $Hp_Service = new Hp_Service($appCfg, array('service' => $service));
    $imagesGalleryMd = $Hp_Service->fetchImages(array('getNoImage' => false, 'type' => 'medium'));
    $imagesGalleryOg = $Hp_Service->fetchImages(array('getNoImage' => false, 'type' => 'original'));

    $Slim->render(
        'newsImagesContent.tpl',
        array(
            'imagesGalleryMd' => $imagesGalleryMd,
            'imagesGalleryOg' => $imagesGalleryOg
        )
    );
})->via('GET', 'POST');
