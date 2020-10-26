<div data-role="header">
    <div class="banners">
        <ul data-role="listview"><li>
<?php
            // Custom header
            if (isset($user) && $user->getApplication() == 'deutschebahn' && isset($isGuestUser) && $isGuestUser) { ?>
                <img src="<?= $View->getImg('admin/db-logo.png'); ?>" />
                <h3>
                    <?= Hp_Name::getCoolName($user->getApplication()); ?>
                </h3>
<?php       } else { ?>
                <img src="<?= $View->getImg('admin/logo.png'); ?>" />
                <h3><a href="/">
                    iMaat
                    - <?= Hp_Name::getCoolName($user->getApplication()); ?>
                    <?= (isset($serviceName) ? '(' . Utils::escape($serviceName) . ')' : ''); ?>
                </a></h3>
<?php       } ?>
            <p class="ui-li-aside">
                <strong><?= Utils::escape(ucwords($user->name))
                    . ($user->username ? ' (' . Utils::escape($user->username) . ')' : ''); ?></strong>
                <a href="#" class="logout"><img src="<?= $View->getImg('menu-logout.png'); ?>" /></a><br />
                <em><?= Utils::escape(ucwords(implode(', ', $user->fetchAclGroups()))); ?></em>
            </p>
            <p><?= Utils::escape('Administrador del sistema'); ?></p>
        </li></ul>
    </div>

    <!-- Menu -->
    <div class="header-menu" data-role="navbar" data-iconpos="left">
        <ul>
<?php
            ////
            // Mobile apps.
            ////

            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_HOME)) { ?>
                <li><a href="<?= ($headerMenuActive === 'home' ? '#' : $View->getLink('home')); ?>"
                    data-icon="menu-home"
                    class="<?= ($headerMenuActive === 'home' ? 'ui-btn-active ui-state-persist' : ''); ?>"
                    ><?= Utils::escape('Novedades'); ?></a></li>
<?php       }
            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS)
                    && in_array($user->application, array('mprocer'))) { ?>
                <li><a href="<?= ($headerMenuActive === 'news' ? '#' : $View->getLink('news')); ?>"
                    data-icon="menu-news"
                    class="<?= ($headerMenuActive === 'news' ? 'ui-btn-active ui-state-persist' : ''); ?>"
                    ><?= Utils::escape('Noticias'); ?></a></li>
<?php       }
            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_STATS)) { ?>
                <li><a href="<?= ($headerMenuActive == 'stats' ? '#' : $View->getLink("stats/{$user->application}")); ?>"
                    data-icon="menu-stats"
                    class="<?= ($headerMenuActive == 'stats' ? 'ui-btn-active ui-state-persist' : ''); ?>"
                    ><?= Utils::escape('Estadísticas'); ?></a></li>
<?php       }
            if ($user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_SERVICES)
                || $user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_APP_MESSAGES)
                || $user->aclHasAccess(Mo_AdminUser::ADMIN_PERMISSION_CLIENT_NEWS))
            { ?>
                <li><a href="<?= ($headerMenuActive == 'more' ? '#' : $View->getLink('more')); ?>"
                    data-icon="menu-more"
                    class="<?= ($headerMenuActive == 'more' ? 'ui-btn-active ui-state-persist' : ''); ?>"
                    ><?= Utils::escape('Más'); ?></a></li>
<?php       } ?>
        </ul>
    </div>
</div>
