<div data-role="content">
    <form action="/login" method="post">
        <ul data-role="listview" data-inset="true">
            <li data-role="fieldcontain" class="ui-hide-label">
                <div data-role="fieldcontain">
                    <label for="login-username"><?= Utils::escape('Usuario'); ?>:</label>
                    <input type="text" name="username" id="login-username" value="<?= $username; ?>"
                        placeholder="<?= Utils::escape('Usuario'); ?>" />
                </div>
                <div data-role="fieldcontain">
                    <label for="login-password"><?= Utils::escape('Contraseña'); ?>:</label>
                    <input type="password" name="password" id="login-password"
                        placeholder="<?= Utils::escape('Contraseña'); ?>" />
                </div>
                <input type="hidden" name="application" value="mprocer" />
            </li>
            <li>
                <button type="submit" data-theme="b" data-icon="check"><?= Utils::escape('Ingresar'); ?></button>
            </li>
        </ul>
    </form>
</div>
