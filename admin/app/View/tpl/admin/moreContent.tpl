<div data-role="content">
    <div id="more-container">
        <ul data-role="listview" data-inset="true">
<?php       if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_APP_MESSAGES)) { ?>
                <li><a href="<?= $View->getLink('messages'); ?>">
                    <img src="<?= $View->getImg('more-messages.png'); ?>" />
                    <h3><?= Utils::escape('Mensajes'); ?></h3>
                    <p><?= Utils::escape('Mensajes enviados a la aplicación.'); ?></p>
                </a></li>
<?php       }
            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_SERVICES)) { ?>
                <li><a href="<?= $View->getLink("services/{$user->application}"); ?>">
                    <img src="<?= $View->getImg('more-services.png'); ?>" />
                    <h3><?= Utils::escape('Servicios'); ?></h3>
                    <p><?= Utils::escape('Configuración de los servicios.'); ?></p>
                </a></li>
<?php       }
            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_TRANSLATIONS)) { ?>
                <li><a href="<?= $View->getLink("translations/{$user->application}"); ?>">
                    <img src="<?= $View->getImg('more-translations.png'); ?>" />
                    <h3><?= Utils::escape('Traducciones'); ?></h3>
                    <p><?= Utils::escape('Generador de traducciones.'); ?></p>
                </a></li>
<?php       } ?>
        </ul>
        <ul data-role="listview" data-inset="true">
            <li data-role="list-divider"><?= Utils::escape('API token de acceso:'); ?></li>
            <li>
<?php       if (strlen($user->getAccessToken())) { ?>
                <h3 class="ui-li-heading"><?= Utils::escape('Utilice el siguiente token de acceso para realizar peticiones a la API.'); ?></h3>
                <h2><?= $user->getAccessToken() ?></h2>
<?php       } else { ?>
                <h3 class="ui-li-heading"><?= Utils::escape('Aún no dispone de un token de acceso.'); ?></h3>
                <p class="ui-li-desc"><?= Utils::escape('Por favor genere uno con el siguiente botón.'); ?></p>
<?php       } ?>
            </li>
            <li>
                <div>
                    <a href="<?= $View->getLink('token'); ?>" data-inline="true" data-role="button" 
                        data-theme="b" data-icon="recycle">Generar</a>
                </div>
            </li>
        </ul>
    </div>
</div>
