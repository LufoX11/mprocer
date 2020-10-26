<div data-role="content">
    <h1>Mensajes recibidos</h1>
    <div id="message-container">
<?php   if ($message) {
            $name = ucwords(Utils::escape($message->name)) . ' &lt;' . Utils::escape($message->email) . '&gt;';
            $description = ucfirst(Utils::escape($message->description, false, false));
            $phone = Utils::escape($message->phone);
            $date = strftime('%e de %B de %Y - %H:%M', strtotime($message->timestamp));
            list($deviceId, $deviceType, $deviceVersion) = explode('|', $message->deviceData);
            $deviceType = ucfirst(Mo_Client::getDeviceTypeName($deviceType));
            $ip = $message->ip;
            $userAgent = $message->userAgent;
            switch ($message->reason) {
                case Mo_Contact::REASON_ASK: default:
                    $reason = Utils::escape('Consulta');
                    break;

                case Mo_Contact::REASON_COMPLAINT:
                    $reason = Utils::escape('Queja o Reclamo');
                    break;

                case Mo_Contact::REASON_SUGGESTION:
                    $reason = Utils::escape('Sugerencia');
                    break;
            } ?>
            <ul data-role="listview" data-inset="true">
                <li data-role="list-divider"><?= Utils::escape('Cliente'); ?></li>
                <li>
                    <?= $name; ?>
                    <p class="ui-li-aside"><?= $date; ?></p>
                </li>
<?php           if ($phone) { ?>
                    <li data-role="list-divider"><?= Utils::escape('Teléfono'); ?></li>
                    <li>
                        <?= $phone; ?>
                    </li>
<?php           } ?>
                <li data-role="list-divider"><?= Utils::escape('Mensaje'); ?></li>
                <li>
                    <?= $description; ?>
                    <p class="ui-li-aside"><?= $reason; ?></p>
                </li>
                <li data-role="list-divider"><?= Utils::escape('Información'); ?></li>
                <li><?= "{$deviceType} {$deviceVersion} ({$deviceId})"; ?></li>
<?php           if ($ip) { ?>
                    <li><?= $ip; ?></li>
<?php           } ?>
<?php           if ($userAgent) { ?>
                    <li><?= $userAgent; ?></li>
<?php           } ?>
                <li>
                    <div>
                        <a href="#" data-role="button" data-inline="true"
                            data-icon="back" class="message-back">Volver</a>
                        <a href="#" data-inline="true" data-role="button" class="message-delete" data-theme="b"
                            data-message-id="<?= $message->id; ?>" data-icon="delete">Eliminar</a>
                    </div>
                </li>
            </ul>
<?php   } else { ?>
            <p>El mensaje no existe.</p>
<?php   } ?>
    </div>
</div>

<script type="text/javascript">

    $(".message-delete").die().live("click", function() {
        iCommon.deleteMessage($(this).attr("data-message-id"));
    });
    $(".message-back").die().live("click", function() {
        $.mobile.changePage("/messages", { reloadPage: true });
    });

</script>
