<div data-role="content">

    <!-- Config Manager -->
    <h1>Archivos de Configuraci&oacute;n</h1>
    <form action="/services/mprocer" method="post">
        <div data-role="collapsible-set">

            <!-- MAIN -->
            <div data-role="collapsible" data-content-theme="a" class="config-sample">
                <h3>Configuraci&oacute;n del Sistema</h3>
                <div class="ui-grid-a">
                    <div class="ui-block-a">
                        <textarea name="mainFile"
                            ><?= Utils::escape($mainFile, false, false); ?></textarea>
                    </div>
                    <div class="ui-block-b">
                        <textarea disabled="disabled"
                            ><?= Utils::escape($mainSampleFile, false, false); ?></textarea>
                    </div>
                </div>
            </div>

            <!-- FRONT -->
            <div data-role="collapsible" data-content-theme="a" class="config-sample">
                <h3>Configuraci&oacute;n del Front-End</h3>
                <div class="ui-grid-a">
                    <div class="ui-block-a">
                        <textarea name="frontFile"
                            ><?= Utils::escape($frontFile, false, false); ?></textarea>
                    </div>
                    <div class="ui-block-b">
                        <textarea disabled="disabled"
                            ><?= Utils::escape($frontSampleFile, false, false); ?></textarea>
                    </div>
                </div>
            </div>

            <!-- SERVICES -->
            <div data-role="collapsible" data-content-theme="a" class="config-sample">
                <h3>Configuraci&oacute;n de Servicios</h3>
                <div class="ui-grid-a">
                    <div class="ui-block-a">
                        <textarea name="servicesFile"
                            ><?= Utils::escape($servicesFile, false, false); ?></textarea>
                    </div>
                    <div class="ui-block-b">
                        <textarea disabled="disabled"
                            ><?= Utils::escape($servicesSampleFile, false, false); ?></textarea>
                    </div>
                </div>
            </div>

            <!-- DATABASES -->
            <div data-role="collapsible" data-content-theme="a" class="config-sample">
                <h3>Bases de Datos</h3>
                <div class="ui-grid-a">
                    <div class="ui-block-a">
                        <textarea name="dbFile"><?= Utils::escape($dbFile, false, false); ?></textarea>
                    </div>
                    <div class="ui-block-b">
                        <textarea disabled="disabled"
                            ><?= Utils::escape($dbSampleFile, false, false); ?></textarea>
                    </div>
                </div>
            </div>
        </div>
        <button type="submit" data-theme="b" data-icon="check">Guardar</button>
    </form>

    <h1>Sistema de Archivos</h1>
    <ul data-role="listview" data-inset="true">

        <!-- Structure Creator -->
        <li data-role="fieldcontain">
            <form action="/services/mprocer" method="post">
                <label for="services-structuregen">Generador de Directorios</label>
                <select id="services-structuregen" name="structuregenServiceName" >
<?php               foreach ($services as $k => $v) { ?>
                        <option value="<?= $k; ?>"><?= $v; ?></option>
<?php               } ?>
                </select>
                <button type="submit" data-inline="true" data-theme="b" data-icon="gear">Generar</button>
            </form>
        </li>

        <!-- SQL Generator -->
        <li data-role="fieldcontain">
            <form action="/services/mprocer" method="post">
                <label for="services-sqlgen">Generador de Base de Datos</label>
                <select id="services-sqlgen" name="sqlgenServiceName" >
<?php               foreach ($services as $k => $v) { ?>
                        <option value="<?= $k; ?>"><?= $v; ?></option>
<?php               } ?>
                </select>
                <button type="submit" data-inline="true" data-theme="b" data-icon="gear">Generar</button>
            </form>
        </li>

        <!-- File uploader -->
        <li data-role="fieldcontain">
            <form id="services-fileup-form" action="/services/mprocer" method="post"
                enctype="multipart/form-data" data-ajax="false">
                <input id="services-fileup-type" type="hidden" name="fileupType" value="img" />
                <input id="services-fileup-trigger" type="hidden" name="fileupTrigger" value="1" />
                <label for="services-fileup-servicename">Subir Archivo</label>
                <select id="services-fileup-servicename" name="fileupServiceNameKey">
<?php               foreach ($services as $k => $v) { ?>
                        <option value="<?= $k; ?>"
                            <?= ($fileupServiceNameKey == $k ? 'selected="selected"' : ''); ?>
                            ><?= $v; ?></option>
<?php               } ?>
                </select>
                <input name="fileupImgFile" type="file" style="vertical-align: top; margin-top: 12px;" />
                <button type="submit" data-inline="true" data-theme="b" data-icon="plus"
                    >Subir im&aacute;gen</button>
            </form>
<?php       if ($filelistImages) { ?>
                <form id="services-fileup-form-filelist" action="/services/mprocer" method="post"
                    enctype="multipart/form-data" data-ajax="false">
                    <input type="hidden" name="fileupServiceNameKey" value="<?= $fileupServiceNameKey; ?>" />
                    <fieldset data-role="controlgroup">
                        <legend>Im&aacute;genes actuales</legend>
<?php                   foreach ($filelistImages as $k => $v) { ?>
                            <input id="services-filelist-images-<?= $k; ?>"
                                type="checkbox" name="filelistImg[]" class="custom" value="<?= $v; ?>" />
                            <label for="services-filelist-images-<?= $k; ?>"><?= $v; ?></label>
<?php                   } ?>
                    </fieldset>
                    <fieldset data-role="controlgroup">
                        <legend></legend>
                        <button type="submit" data-inline="true" data-theme="b" data-icon="delete"
                            >Eliminar</button>
                    </fieldset>
                </form>
<?php       } ?>
        </li>
    </ul>
</div>

<script type="text/javascript">

    // File Uploader
    $("#services-fileup-servicename").die().live("change", function () {
        $("#services-fileup-trigger").val("");
        $("#services-fileup-form").submit();
    });

</script>
