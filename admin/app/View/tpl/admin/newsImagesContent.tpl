<div data-role="content">
    <h1><?= Utils::escape('Administración de Imágenes'); ?></h1>
    <div id="newsImages-container">
       <ul data-role="listview" data-inset="true">

            <!-- Images -->
            <li>
<?php           if ($imagesGalleryMd) { ?>
                    <fieldset>
                        <ul class="gallery admin-gallery-list">
<?php                       foreach ($imagesGalleryMd as $k => $v) { ?>
                                <li>
                                    <a href="<?= $imagesGalleryOg[$k]; ?>" rel="external" class="gallery-elements">
                                        <img src="<?= $v; ?>" alt="<?= Utils::escape($k); ?>" />
                                    </a>
                                    <a href="#" data-image-name="<?= Utils::escape($k); ?>" class="options delete">
                                        <div><p><?= Utils::escape('Borrar'); ?></p></div>
                                    </a>
                                </li>
<?php                       } ?>
                        </ul>
                    </fieldset>
<?php           } else { ?>
                    <h3><?= Utils::escape('No hay imágenes aún.'); ?></h3>
<?php           } ?>
                <fieldset class="divisionLine">
                    <form id="newsImages-imgup-form" method="post" enctype="multipart/form-data" data-ajax="false"
                            action="/newsImages">
                        <input id="newsImages-trgImgup" type="hidden" name="trgImgup" value="1" />
                        <input name="imgFile" type="file" />
                        <button type="submit" data-inline="true" data-theme="b" data-icon="plus"
                            ><?= Utils::escape('Subir imágen'); ?></button>
                    </form>
                </fieldset>
            </li>

            <!-- Action buttons -->
            <li>
                <fieldset class="ui-grid-a">
                    <div class="ui-block-a">
                        <a href="#" data-role="button" data-inline="true"
                            data-icon="back" class="newsImages-back"><?= Utils::escape('Volver'); ?></a>
                    </div>
                </fieldset>
            </li>
        </ul>
    </div>
</div>

<script type="text/javascript">

    $("#page-newsImages")
        .live("pageshow", function () {

<?php       if ($imagesGalleryMd) { ?>

                // Gallery
                var options = {
                    preventSlideshow: true,
                    enableKeyboard: false,
                    enableMouseWheel: false
                }
                $(".admin-gallery-list a.gallery-elements")
                    .photoSwipe(options, "page-newsImages-gallery");
<?php       } ?>

            return true;
        })
        .live("pagehide", function () {

            // Unset current instance for Gallery
            var photoSwipe = window.Code.PhotoSwipe,
                photoSwipeInstance = photoSwipe.getInstance("page-newsImages-gallery");
            if (typeof photoSwipeInstance != "undefined" && photoSwipeInstance != null) {
                photoSwipe.detatch(photoSwipeInstance);
            }
        })

    // Attach click events
    $("#newsImages-imgup-form button[type='submit']").die().live("click", function () {
        var button = $(this).parent();
        $(button).children("span").children(".ui-btn-text").text("Enviando...");
        $(button).children("button").button("disable");
        setTimeout(function () { $("#newsImages-imgup-form").submit() }, 100);
    });
    $(".newsImages-back").die().live("click", function () {
        $.mobile.changePage("/news", { reloadPage: true });
    });
    $(".admin-gallery-list a.options.delete").die().live("click", function () {
        iCommon.deleteNewsImage($(this).parent());
    });

</script>
