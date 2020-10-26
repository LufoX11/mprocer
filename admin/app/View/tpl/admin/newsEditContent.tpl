<div data-role="content">
    <h1><?= Utils::escape('Edición de noticias'); ?></h1>
    <div id="newsEdit-container">
        <form id="newsEdit-saveNews" method="post">
<?php       $id = ($news && $news->id ? Utils::escape($news->id) : '');
            $checksum = ($news && $news->checksum ? Utils::escape($news->checksum) : '');
            $title = ($news && $news->title ? Utils::escape($news->title) : '');
            $summary = ($news && $news->summary ? Utils::escape($news->summary, true, false) : '');
            $description = ($news && $news->description ? Utils::escape($news->description) : '');
            $datetime = ($news && $news->datetime ? strtotime($news->datetime) : time());
            $launching = ($news && strtotime($news->launching) > 0
                ? strtotime($news->launching) : strtotime('+1 hour'));
            $expiration = ($news && strtotime($news->expiration) > 0
                ? strtotime($news->expiration) : strtotime('+1 week'));
            $notified = ($news && $news->notified ? (int) $news->notified : false);
            $image = ($news && $news->image ? $news->image : '');

            if ($id) { ?>
                <input type="hidden" name="id" value="<?= $id; ?>" />
<?php       } ?>
            <input id="newsEdit-frmAction" type="hidden" name="trgSave" value="1" />
            <ul data-role="listview" data-inset="true">

                <!-- Title -->
                <li data-role="fieldcontain" class="ui-hide-label">
                    <label for="newsEdit-title"><?= Utils::escape('Título'); ?></label>
                    <input id="newsEdit-title" type="text" name="title" value="<?= $title; ?>"
                        placeholder="<?= Utils::escape('Título'); ?>" />
                </li>

                <!-- Summary -->
                <li data-role="fieldcontain" class="ui-hide-label">
                    <label for="newsEdit-summary"><?= Utils::escape('Resúmen'); ?></label>
                    <textarea id="newsEdit-summary" name="summary"
                        placeholder="<?= Utils::escape('Resúmen'); ?>"><?= $summary; ?></textarea>
                </li>

                <!-- Description -->
                <li data-role="fieldcontain" class="ui-hide-label">
                    <label for="newsEdit-description"><?= Utils::escape('Descripción'); ?></label>
                    <textarea id="newsEdit-description" name="description" class="jqteEditor"
                        placeholder="<?= Utils::escape('Descripción'); ?>"
                        ><?= ($description ? $description : ''); ?></textarea>
                </li>

                <!-- Datetime -->
                <li data-role="fieldcontain">
                    <label for="newsEdit-datetime"><?= Utils::escape('Creación del artículo (sólo figurativo)'); ?></label>
                    <input id="newsEdit-datetime" class="newsDatetime" name="datetime"
                        value="<?= date('Y-m-d H:i', $datetime); ?>" style="display: none;"/>
                </li>

                <!-- Launching -->
                <li data-role="fieldcontain">
                    <label for="newsEdit-launching"><?= Utils::escape('Lanzamiento (visibilidad y notificación de usuarios)'); ?></label>
                    <input id="newsEdit-launching" class="newsLaunching" name="launching"
                        value="<?= date('Y-m-d H:i', $launching); ?>" style="display: none;"/>
                </li>

                <!-- Expiration -->
                <li data-role="fieldcontain">
                    <label for="newsEdit-expiration"><?= Utils::escape('Caducidad (expiración)'); ?></label>
                    <input id="newsEdit-expiration" class="newsExpiration" name="expiration"
                        value="<?= date('Y-m-d H:i', $expiration); ?>" style="display: none;"/>
                </li>

                <!-- Push Notifications -->
                <li data-role="fieldcontain">
                    <legend><?= Utils::escape('Notificaciones Push'); ?></legend>
                    <input id="newsEdit-notified" name="notified" type="checkbox" data-inline="true"
                        value="1" <?= ($notified ? 'checked="checked"' : ''); ?> />
                    <label for="newsEdit-notified"><?= Utils::escape('Ya ha sido notificado.'); ?></label>
<?php               if ($checksum) { ?>
                        <button id="newsEdit-push-test" data-icon="check" data-theme="b" data-inline="true"
                            ><?= Utils::escape('Testear'); ?></button>
                        <input type="text" id="newsEdit-push-test-email" name="pushTest" data-inline="true"
                            placeholder="<?= Utils::escape('Email del usuario');  ?>" />
<?php               } ?>
                </li>

                <!-- Image -->
                <li>
                    <div id="newsEdit-gallery"></div>
                    <div style="display: none;">
                        <ul class="gallery">
<?php                       foreach ($imagesGallery as $k => $v) { ?>
                                <li><a href="<?= $v; ?>" rel="external">
                                    <img src="<?= $v; ?>" alt="<?= $k; ?>" />
                                </a></li>
<?php                       } ?>
                        </ul>
                    </div>
                    <input id="newsEdit-gallery-imageSrc" type="hidden" name="image" value="<?= $image; ?>" />
                </li>

                <!-- Action buttons -->
                <li>
                    <div>
                        <a href="#" data-role="button" data-inline="true"
                            data-icon="back" class="newsEdit-back"><?= Utils::escape('Volver'); ?></a>
                        <a href="#" data-inline="true" data-role="button" class="newsEdit-save" data-theme="b"
                            data-icon="check"><?= Utils::escape('Guardar'); ?></a>
<?php                   if ($checksum) { ?>
                            <a href="#" data-inline="true" data-role="button" class="newsEdit-delete" data-theme="b"
                                data-news-checksum="<?= $checksum; ?>" data-icon="delete"
                                ><?= Utils::escape('Eliminar'); ?></a>
<?php                   } ?>
                    </div>
                </li>
            </ul>
        </form>
    </div>
</div>

<script type="text/javascript">

    // JQTE
    $(".jqteEditor").jqte({
        css: "jqte_blue",
        placeholder: "<?= Utils::escape('Descripción'); ?>"
    });

    // Mobiscroll
    var now = new Date();
    $(".newsDatetime").mobiscroll().datetime({
        theme: "default",
        lang: "es",
        height: 30,
        rows: 1,
        startYear: now.getFullYear() - 2,
        endYear: now.getFullYear() + 2,
        dateOrder: "D ddmmyy",
        dateFormat: "yy-mm-dd",
        display: "inline",
        mode: "scroller"
    });
    $(".newsLaunching").mobiscroll().datetime({
        theme: "default",
        lang: "es",
        height: 30,
        rows: 1,
        startYear: now.getFullYear(),
        endYear: now.getFullYear() + 2,
        stepMinute: 15,
        dateOrder: "D ddmmyy",
        dateFormat: "yy-mm-dd",
        display: "inline",
        mode: "scroller"
    });
    $(".newsExpiration").mobiscroll().datetime({
        theme: "default",
        lang: "es",
        height: 30,
        rows: 1,
        startYear: now.getFullYear(),
        endYear: now.getFullYear() + 2,
        dateOrder: "D ddmmyy",
        dateFormat: "yy-mm-dd",
        display: "inline",
        mode: "scroller"
    });
    $(".newsDatetime").mobiscroll("setDate", new Date(<?= $datetime; ?> * 1000));
    $(".newsLaunching").mobiscroll("setDate", new Date(<?= $launching; ?> * 1000));
    $(".newsExpiration").mobiscroll("setDate", new Date(<?= $expiration; ?> * 1000));

    // Gallery
    $("#page-newsEdit")
        .live("pageshow", function () {

            // Initialize
            var options = {
                target: $("#newsEdit-gallery", $(this)),
                allowUserZoom: false,
                preventSlideshow: true,
                preventHide: true,
                enableKeyboard: false,
                enableMouseWheel: false
            }
            $("ul.gallery a", $(this))
                .photoSwipe(options, "page-newsEdit-newsImages")
                .show(0);

            return true;
        })
        .live("pagehide", function () {

            // Unset current instance
            var photoSwipe = window.Code.PhotoSwipe,
                photoSwipeInstance = photoSwipe.getInstance("page-newsEdit-newsImages");
            if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
                photoSwipe.detatch(photoSwipeInstance);
            }
        });

    // Attach action events
    $(".newsEdit-delete").die().live("click", function () {
        iCommon.deleteNews($(this).attr("data-news-checksum"));
    });
    $(".newsEdit-back").die().live("click", function () {
        $.mobile.changePage("/news", { reloadPage: true });
    });
    $(".newsEdit-save").die().live("click", function () {
        var imageSrc = window.Code.PhotoSwipe
            .getInstance("page-newsEdit-newsImages")
            .getCurrentImage()
            .originalSrc;
        $("#newsEdit-gallery-imageSrc").val(imageSrc);
        $("#newsEdit-saveNews").submit();
    });
<?php
    if ($checksum) { ?>
        $("#newsEdit-push-test").die().live("click", function (e) {

            e.preventDefault();
            iCommon.testNewsPushNotification("<?= $checksum; ?>", $("#newsEdit-push-test-email").val());
        });
<?php
    } ?>

</script>
