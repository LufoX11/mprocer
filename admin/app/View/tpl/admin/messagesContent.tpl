<div data-role="content">
    <h1>Mensajes recibidos</h1>
    <div id="messages-container">
<?php   if ($messages) { ?>
            <ul id="messages-list" data-role="listview" data-split-icon="delete" data-inset="true"
                data-filter="true" data-filter-theme="a" data-filter-placeholder="Buscar en mensajes...">
<?php           foreach ($messages as $v) {
                    $alreadyRead = ($v->status == Mo_Contact::STATUS_READ);
                    $description = strtr(Utils::escape($v->description, false, false), array("\n" => '')); ?>
                    <li id="messages-list-item-<?= $v->id; ?>">
                        <a href="<?= $View->getLink("message/{$v->id}"); ?>" data-id="<?= $v->id; ?>"
                            class="messages-list-a <?= ($alreadyRead ? 'readnews' : ''); ?>">
                            <h3><?= ucwords(Utils::escape($v->name)); ?></h3>
                            <p><em><strong><?= Utils::escape($v->email); ?></strong></em></p>
                            <p><?= $description; ?></p>
                            <p class="ui-li-aside">
                                <strong><?= strftime('%e de %B de %Y - %H:%M', strtotime($v->timestamp)); ?></strong> Hs.
                            </p>
                        </a>
                        <a href="#" class="message-delete" data-message-id="<?= $v->id; ?>">Eliminar</a>
                    </li>
<?php           } ?>
            </ul>
<?php   } else { ?>
            <p>No hay mensajes.</p>
<?php   } ?>
    </div>
</div>

<script type="text/javascript">

    // Attach triggers
    $(".message-delete").die().live("click", function() {
        iCommon.deleteMessage($(this).attr("data-message-id"));
    });
    $(".messages-list-a").die().live("click", function() {
        iCommon.setReadMessage($(this));
    });

</script>
