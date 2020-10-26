<?php

/**
 * Fetches all news.
 */

$Slim->get('/:package/fetchNews', function ($service) use ($Slim)
{
    Loader::mo(array('NewsMapper'), true);

    $appCfg = $Slim->config('appCfg');

    // Fetch news
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
    $news = array();
    if ($raw = $Mo_NewsMapper->fetchNews('feed')) {
        array_walk($raw, function (&$v) {
            $v = array(
                'title' => $v->title,
                'summary' => $v->summary,
                'datetime' => strftime('%e de %B de %Y', strtotime($v->datetime)),
                'imageMd' => str_replace('-bg.', '-md.', $v->image),
                'imageOg' => str_replace('-bg.', '-og.', $v->image),
                'checksum' => $v->checksum
            );});
        $news += $raw;
    }

    // Max news to show
    if ($news) {
        $news = array_slice($news, 0, $appCfg['main']['framework']['maxNewsToShow'], true);
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $news));
});
