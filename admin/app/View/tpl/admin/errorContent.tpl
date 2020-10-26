<div data-role="content" class="content-error">
    <ul data-role="listview"><li>
        <img src="<?= $View->getImg('local://imaat-thumb.png'); ?>" />
        <h3><?= Utils::escape('Ocurrió un error'); ?></h3>
        <p><em><?= (isset($errorMessage) ? $errorMessage : ''); ?></em></p>
    </li></ul>
    <div id="common-message">
        <p>
            <?= sprintf(Utils::escape('Por favor, reiniciá la aplicación. Si el error persiste, '
                . 'volvé a intentarlo más tarde o podés enviarnos un email a %s para informanos '
                . 'de la situación.'),
            "<strong>{$supportEmail}</strong>"); ?>
        </p>
        <p><?= Utils::escape('Te pedimos disculpas por el inconveniente y desde ya muchas gracias.'); ?></p>
    </div>
    <a href="<?= $View->getLink(); ?>" data-role="button" data-icon="refresh"
        rel="external"><?= Utils::escape('Reiniciar la aplicación'); ?></a>
</div>
