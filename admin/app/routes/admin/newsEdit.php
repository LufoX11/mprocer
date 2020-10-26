<?php

/**
 * Renders the application interface for the client custom News -> Edition.
 */

$Slim->map('/newsEdit(/:checksum)', $mdwCheckLogin(), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS),
    function ($checksum = null) use ($Slim)
{
    Loader::mo(array('NewsMapper'), true);
    Loader::Hp(array('Service'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    if (($service = $_SESSION['AdminUser']->aclGetServiceAccess()) == 'all') {
        $service = ($Slim->request()->post('service') ?
            $Slim->request()->post('service') : current($appCfg['main']['services']));
    }

    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);

    // Save news
    if ($Slim->request()->post('trgSave')) {
        $id = trim($Slim->request()->post('id'));
        $services_id = $appCfg['serviceId'];
        $admin_users_id = $user->id;
        $title = trim($Slim->request()->post('title'));
        $summary = trim($Slim->request()->post('summary'));
        $description = trim($Slim->request()->post('description'));
        $datetime = trim($Slim->request()->post('datetime'));
        $launching = trim($Slim->request()->post('launching'));
        $expiration = trim($Slim->request()->post('expiration'));
        $notified = trim($Slim->request()->post('notified'));
        $image = trim($Slim->request()->post('image'));
        $checksum = $Mo_NewsMapper->generateChecksum($title);
        if (mb_strpos($image, 'no-image') !== false) {
            $image = null;
        }
        $news = new Mo_News(array(
            'id' => $id,
            'services_id' => $services_id,
            'checksum' => $checksum,
            'admin_users_id' => $admin_users_id,
            'title' => $title,
            'summary' => $summary,
            'description' => $description,
            'datetime' => $datetime,
            'launching' => $launching,
            'expiration' => $expiration,
            'notified' => $notified,
            'image' => $image
        ));
        if (!$title || !$description) {
            $Slim->flashNow('error', Utils::escape('Campos obligatorios: Título, Descripción.'));
        } else {
            if ($Mo_NewsMapper->saveNews($news)) {
                $news = $Mo_NewsMapper->findNewsByChecksum($checksum);
                $Slim->flashNow('success', Utils::escape('Se guardó la noticia.'));
            } else {
                $Slim->flashNow('error', Utils::escape('No se pudo guardar la noticia.'));
            }
        }
    } else {

        // Find news from DB
        if (!$checksum || !$news = $Mo_NewsMapper->findNewsByChecksum($checksum)) {
            $news = null;
        }
    }

    // Images gallery
    $Hp_Service = new Hp_Service($appCfg, array('service' => $service));
    $imagesGallery = $Hp_Service->fetchImages($news && $news->image ? array('firstElement' => $news->image) : array());

    $Slim->render(
        'newsEditContent.tpl',
        array(
            'news' => $news,
            'imagesGallery' => $imagesGallery
        )
    );
})->via('GET', 'POST');
