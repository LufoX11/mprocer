<?php

/**
 * Finds a single news.
 */

$Slim->get('/:package/findNews/:checksum', function ($service, $checksum) use ($Slim)
{
    Loader::mo(array('NewsMapper'), true);

    $appCfg = $Slim->config('appCfg');

    // Fetch news
    $Mo_NewsMapper = new Mo_NewsMapper($appCfg);
    if ($news = $Mo_NewsMapper->findNewsByChecksum($checksum)) {
        $news = array(
            'title' => $news->title,
            'summary' => $news->summary,
            'description' => $news->description,
            'datetime' => strftime('%e de %B de %Y - %H:%M Hs.', strtotime($news->datetime)),
            'image' => array(
                'thumb' => $news->image
            )
        );
        if ($news['image']['thumb']) {
            $fullImageSrc = str_replace('-bg.', '-og.', $news['image']['thumb']);
            $fullImageSize = getimagesize($fullImageSrc);
            $news['image'] = array(
                'thumb' => $news['image']['thumb'],
                'original' => array(
                    'src' => $fullImageSrc,
                    'size' => array(
                        'width' => $fullImageSize[0],
                        'height' => $fullImageSize[1]
                    )
                )
            );
        }
    }

    Ajax::setSuccess($Slim, array(
        'success' => true,
        'data' => $news));
});
