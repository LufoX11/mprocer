<?php

/**
 * AJAX responser for news.
 */

$Slim->map('/ajax/news/:action', $mdwCheckLogin(true), $mdwAcl(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS, true),
    function ($action) use ($Slim)
{
    Loader::mo(array('NewsMapper'), true);
    Loader::hp(array('Service'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $user = $_SESSION['AdminUser'];
    $appCfg = $imaatAppCfg['applications'][$user->application];

    if (($service = $_SESSION['AdminUser']->aclGetServiceAccess()) == 'all') {
        $service = ($Slim->request()->post('service') ?
            $Slim->request()->post('service') : current($appCfg['main']['services']));
    }

    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);

    switch ($action) {
        case 'delete':
            if ($res = $Mo_NewsMapper->deleteNewsByChecksum($Slim->request()->post('data'))) {
                Ajax::setSuccess($Slim, array(
                    'msg' => Utils::escape('Se eliminó la noticia.'),
                    'data' => $Slim->request()->post('data')
                ));
            } else {
                Ajax::setError($Slim);
            }
            break;

        case 'testPushNotification':
            
            Loader::Hp(array('Push'), true);

            $Hp_Push = new Hp_Push($appCfg, array('service' => $service));
            $news = $Mo_NewsMapper->findNewsByChecksum($Slim->request()->post('checksum'));

            // Send push notification
            try {
                $Hp_Push->send(
                    array(
                        'id' => $news->id,
                        'title' => $news->title,
                        'message' => $news->summary,
                        'checksum' => $news->checksum,
                        'style' => 'inbox',
                        'image' => $news->image,
                        'summaryText' => 'Hay %n% notificaciones pendientes'
                    ),
                    array(
                        'emails' => explode(',', $Slim->request()->post('email'))
                    ));

                Ajax::setSuccess($Slim, array(
                    'msg' => Utils::escape('Se envió la notificación.')
                ));
            } catch (Exception $e) {
                error_log($e);
                Ajax::setError($Slim, array(
                    'msg' => 'Sending error.'
                ));
            }
            break;

        case 'deleteImage':
            $fileName = $Slim->request()->post('data');
            $Hp_Service = new Hp_Service($appCfg, array('service' => $service));
            if (($imagesGallery = $Hp_Service->fetchImages(array('getNoImage' => false)))
                    && isset($imagesGallery[$fileName])) {
                $fileInfo = pathinfo($imagesGallery[$fileName]);
                $extension = current(explode('?', $fileInfo['extension']));
                $filePath = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$service}";

                // Check that the image is not being used by a news
                $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
                $blockerNews = false;
                if ($news = $Mo_NewsMapper->fetchNews()) {
                    foreach ($news as $v) {
                        if (strpos($v->image, "{$fileName}-bg.{$extension}") !== false) {
                            $blockerNews = true;
                            break 2;
                        }
                    }
                }
                if ($blockerNews) {
                    Ajax::setForbidden($Slim);
                } else {

                    // Delete all types (medium, big, original)
                    foreach (array('md', 'bg', 'og') as $v) {
                        unlink("{$filePath}/{$fileName}-{$v}.{$extension}");
                    }
                    Ajax::setSuccess($Slim, array(
                        'msg' => Utils::escape('Se eliminó la imágen.'),
                        'data' => $fileName
                    ));
                }
            } else {
                Ajax::setError($Slim);
            }
            break;

        default:
            Ajax::setError($Slim, array(sprintf(Utils::escape('Faltan datos: "%s".'), 'action')));
    }
})->via('GET', 'POST');
