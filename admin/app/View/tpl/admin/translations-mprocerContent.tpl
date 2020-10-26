<div data-role="content">
    <h1><?= Utils::escape('Traducciones'); ?></h1>
    <div id="translations-container">
        <div data-role="collapsible-set" data-theme="b" data-content-theme="a">

            <!-- File uploader -->
            <div data-role="collapsible" <?= (!$dictionaries ? 'data-collapsed="false"' : ''); ?>>
                <h2><?= Utils::escape('Subir Catálogo'); ?></h2>
                <form id="services-fileup-form" action="/translations/mprocer" method="post"
                        enctype="multipart/form-data" data-ajax="false">
                    <input id="translations-uploader" type="file" name="catalogCSV" />
                    <input type="submit" value="<?= Utils::escape('Subir'); ?>" data-inline="true"
                        data-theme="b" data-icon="plus" />
                    <a href="<?= $View->getFile('Translations.csv'); ?>" rel="external" data-role="button"
                        data-inline="true" data-icon="arrow-r"><?= Utils::escape('Descargar el catálogo modelo'); ?></a>
                </form>
            </div>

            <!-- Dictionaries -->
<?php       if ($dictionaries) { ?>
                <div data-role="collapsible" data-collapsed="false">
                    <h2><?= Utils::escape('Diccionarios'); ?></h2>
                    <ul id="translations-list" data-role="listview" data-filter="true" data-filter-theme="a"
                            data-split-icon="delete" data-filter-placeholder="<?= Utils::escape('Buscar...'); ?>">
<?php                   foreach ($dictionaries as $lang => $d) { ?>
                            <li data-role="list-divider"><?= Utils::escape($availableLangs[$lang]); ?></li>
<?php                       foreach ($d as $k => $v) { ?>
                                <li id="translations-list-item-<?= $v->id; ?>" class="item">
                                    <a href="#"><div class="li-container-p">
                                        <p><strong><?= $v->key; ?></strong></p>
                                        <p><?= $v->value; ?></p>
                                    </div></a>
                                    <a href="#" class="translation-delete" data-translation-id="<?= $v->id; ?>"
                                        ><?= Utils::escape('Eliminar'); ?></a>
                                </li>
<?php                       } ?>
<?php                   } ?>
                    </ul>
                </div>
<?php       } ?>
        </div>
    </div>
</div>

<script type="text/javascript">

    // Attach triggers
    $(".translation-delete").die().live("click", function() {
        iCommon.deleteTranslation($(this).attr("data-translation-id"));
    });

</script>
