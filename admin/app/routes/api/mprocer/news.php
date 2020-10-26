<?php

// Get a list of news
$Slim->get('/:app/:package/news', $mdwValidateAccessToken(), function ($app, $service) use ($Slim)
{
    Loader::mo(array('AdminUsersMapper', 'NewsMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $app = $Slim->router()->getCurrentRoute()->getParam('app');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $appCfg = $imaatAppCfg['applications'][$app];

    // Fetch news
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
    $news = array();
    if ($raw = $Mo_NewsMapper->fetchNews('all')) {
        foreach ($raw as $rawNotice) {
            $news[] = array(
                'id' => $rawNotice->id,
                'title' => $rawNotice->title,
                'summary' => $rawNotice->summary,
                'description' => $rawNotice->description,
                'datetime' => $rawNotice->datetime,
                'launching' => $rawNotice->launching,
                'expiration' => $rawNotice->expiration,
                'notified' => $rawNotice->notified,
                'link' => $rawNotice->link,
                'image' => $rawNotice->image
            );
        }
    }

    // Return response
    Ajax::setSuccess($Slim, array($news));
});

// Post news
$Slim->post('/:app/:package/news', $mdwValidateAccessToken(), function ($app, $service) use ($Slim)
{
    Loader::mo(array('AdminUsersMapper', 'NewsMapper'), true);
    Loader::hp(array('Image'));

    $imaatAppCfg = $Slim->config('appCfg');
    $app = $Slim->router()->getCurrentRoute()->getParam('app');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $appCfg = $imaatAppCfg['applications'][$app];
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);

    // Get news data
    $title = trim($Slim->request()->post('title'));
    $summary = trim($Slim->request()->post('summary'));
    $description = trim($Slim->request()->post('description'));
    $datetime = trim($Slim->request()->post('datetime'));
    $launching = trim($Slim->request()->post('launching'));
    $expiration = trim($Slim->request()->post('expiration'));
    $notified = trim($Slim->request()->post('notified'));
    $link = trim($Slim->request()->post('link'));

    // Validate that a minimum of required fields exists
    if (strlen($title) && strlen($description)) {

        // Get checksum
        $checksum = $Mo_NewsMapper->generateChecksum($title);

        // Get image
        $image = array();
        $url = trim($Slim->request()->post('image'));
        if ($url) {
            $to = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$service}";
            $Hp_Image = new Hp_Image($appCfg, array('service' => $service));
            $image = $Hp_Image->generateByUrl($url, $to);
        }

        // Prepare
        $news = new Mo_News(array(
            'services_id' => $appCfg['serviceId'],
            'admin_users_id' => $Slim->apiUser['id'],
            'title' => $title,
            'summary' => $summary,
            'description' => $description,
            'datetime' => $datetime,
            'launching' => $launching,
            'expiration' => $expiration,
            'notified' => $notified,
            'image' => (isset($image['status']) && $image['status'] == 'success' ? $image['url'] : ''),
            'checksum' => $checksum
        ));
        try {
            if ($Mo_NewsMapper->saveNews($news)) {
                $news = $Mo_NewsMapper->findNewsByChecksum($checksum);
                Ajax::setSuccess($Slim, array($news->id));
            } else {
                Ajax::setError($Slim, array('Couldn\'t save news.'));
            }
        } catch (Exception $e) {
            Ajax::setError($Slim, array('Won\'t save news, it already exists.'));
        }
    } else {
        Ajax::setError($Slim, array('Required fields: title, description.'));
    }
});

// Get an specific news by id
$Slim->get('/:app/:package/news/:newsId', $mdwValidateAccessToken(), function ($app, $service, $newsId) use ($Slim)
{
    Loader::mo(array('AdminUsersMapper', 'NewsMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $app = $Slim->router()->getCurrentRoute()->getParam('app');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $appCfg = $imaatAppCfg['applications'][$app];

    // Fetch news
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
    $news = array();
    if ($raw = $Mo_NewsMapper->findNewsById($newsId)) {
        $news = array(
            'id' => $raw->id,
            'adminUserId' => $Slim->apiUser['id'],
            'title' => $raw->title,
            'summary' => $raw->summary,
            'description' => $raw->description,
            'datetime' => $raw->datetime,
            'launching' => $raw->launching,
            'expiration' => $raw->expiration,
            'notified' => $raw->notified,
            'link' => $raw->link,
            'image' => $raw->image
        );
    }
    if (count($news)) {
        Ajax::setSuccess($Slim, $news);
    } else {
        Ajax::setNotFound($Slim, array('News not found.'));
    }
});

// Update news
$Slim->map('/:app/:package/news/:newsId', $mdwValidateAccessToken(), function ($app, $service, $newsId) use ($Slim)
{
    Loader::mo(array('AdminUsersMapper', 'NewsMapper'), true);
    Loader::hp(array('Image'));

    $imaatAppCfg = $Slim->config('appCfg');
    $app = $Slim->router()->getCurrentRoute()->getParam('app');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $appCfg = $imaatAppCfg['applications'][$app];
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);

    // The current Slim version doesn't support PATCH method, so we should get
    // params by the request body and parse it
    $params = json_decode($Slim->request()->getBody(), true);

    // Search of current news to maintain current data that wasn't provided
    if ($raw = $Mo_NewsMapper->findNewsById($newsId)) {
        $newsData['id'] = $newsId;
        $newsData['services_id'] = $appCfg['serviceId'];
        $newsData['admin_users_id'] = $Slim->apiUser['id'];
        $newsData['title'] = (isset($params['title'])) ? trim($params['title']) : $raw->title;
        $newsData['summary'] = (isset($params['summary'])) ? trim($params['summary']) : $raw->summary;
        $newsData['description'] = (isset($params['description'])) ? trim($params['description']) : $raw->description;
        $newsData['datetime'] = (isset($params['datetime'])) ? trim($params['datetime']) : $raw->datetime;
        $newsData['launching'] = (isset($params['launching'])) ? trim($params['launching']) : $raw->launching;
        $newsData['expiration'] = (isset($params['expiration'])) ? trim($params['expiration']) : $raw->expiration;
        $newsData['notified'] = (isset($params['notified'])) ? trim($params['notified']) : $raw->notified;
        $newsData['link'] = (isset($params['link'])) ? trim($params['link']) : $raw->link;

        // Process image
        $image = array();
        $url = isset($params['image']) ? trim($params['image']) : null;
        if ($url) {
            $to = "{$appCfg['paths']['fs']['root']}/public/static/img/services/{$service}";
            $Hp_Image = new Hp_Image($appCfg, array('service' => $service));
            $image = $Hp_Image->generateByUrl($url, $to);
        }
        $newsData['image'] = isset($image['status']) && $image['status'] == 'success' 
            ? $image['url'] : $raw->image;
        $newsData['checksum'] = $Mo_NewsMapper->generateChecksum($newsData['title']);

        // Save
        $news = new Mo_News($newsData);
        if ($Mo_NewsMapper->saveNews($news)) {
            $news = $Mo_NewsMapper->findNewsByChecksum($newsData['checksum']);
            Ajax::setSuccess($Slim, array($news->id));
        } else {
            Ajax::setError($Slim, array('Couldn\'t update news.'));
        }
    } else {
        Ajax::setNotFound($Slim, array('News not found.'));
    }
})->via('PATCH');

// Delete news by id
$Slim->delete('/:app/:package/news/:newsId', $mdwValidateAccessToken(), function ($app, $service, $newsId) use ($Slim)
{
    Loader::mo(array('AdminUsersMapper', 'NewsMapper'), true);

    $imaatAppCfg = $Slim->config('appCfg');
    $app = $Slim->router()->getCurrentRoute()->getParam('app');
    $Mo_AdminUsersMapper = new Mo_AdminUsersMapper($imaatAppCfg);
    $appCfg = $imaatAppCfg['applications'][$app];
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);

    // Delete news
    if ($res = $Mo_NewsMapper->deleteNewsById($newsId)) {
        Ajax::setSuccess($Slim, array($newsId));
    } else {
        Ajax::setError($Slim, array('Couldn\'t delete news.'));
    }
});
