<div data-role="content">
    <h1><?= Utils::escape('Noticias'); ?></h1>
    <div id="news-container">
        <div data-role="collapsible-set" data-theme="b" data-content-theme="a">

            <!-- Actions -->
            <div data-role="collapsible" <?= (!$news ? 'data-collapsed="false"' : ''); ?>>
                <h2><?= Utils::escape('Acciones'); ?></h2>
                <ul data-role="listview">
                    <li>
                        <a href="<?= $View->getLink('newsEdit'); ?>">
                            <?= Utils::escape('Agregar Noticia'); ?>
                        </a>
                    </li>
                    <li>
                        <a href="<?= $View->getLink('newsImages'); ?>">
                            <?= Utils::escape('Agregar Imágenes'); ?>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- News -->
<?php       if ($news) { ?>
                <div data-role="collapsible" data-collapsed="false">
                    <h2><?= Utils::escape('Noticias'); ?></h2>
                    <ul id="news-list" data-role="listview" data-split-icon="delete" data-filter-theme="a"
                            data-filter="true" data-filter-placeholder="<?= Utils::escape('Buscar en noticias...'); ?>">
<?php                   foreach ($news as $v) { ?>
                            <li id="news-list-item-<?= $v->checksum; ?>">
                                <a href="<?= $View->getLink("newsEdit/{$v->checksum}"); ?>">
<?php                               if ($image = $v->getMdImage()) { ?>
                                        <img src="<?= $image; ?>" />
<?php                               } ?>
                                    <h3><?= ucwords(Utils::escape($v->title)); ?></h3>
                                    <p><?= strtr(Utils::escape($v->summary, true, false), array("\n" => '')); ?></p>
<?php                               if (strtotime($v->launching) < 0 || strtotime($v->expiration) < 0) { ?>
                                        <p class="alert"><?= Utils::escape('Hay un error con las fechas, por favor corrija.'); ?></p>
<?php                               } ?>
                                    <p class="ui-li-aside">
                                        <strong><?= strftime('%e de %B de %Y - %H:%M', strtotime($v->datetime)); ?></strong> Hs.
                                    </p>
                                </a>
                                <a href="#" class="news-delete" data-news-checksum="<?= $v->checksum; ?>"
                                    ><?= Utils::escape('Eliminar'); ?></a>
                            </li>
<?php                   } ?>
                    </ul>
                </div>
<?php       } ?>
        </div>
    </div>
</div>

<script type="text/javascript">

    // Attach triggers
    $(".news-delete").die().live("click", function() {
        iCommon.deleteNews($(this).attr("data-news-checksum"));
    });

</script>
