<div data-role="content">
    <h1><?= Utils::escape('Estadísticas'); ?></h1>

    <form id="stats-service-form" method="post">
        <div data-role="fieldcontain" class="ui-hide-label">
<?php       if (count($services) > 1 || $user->aclGetServiceAccess() == 'all') { ?>
                <label for="stats-service"><?= Utils::escape('Servicio'); ?></label>
                <select id="stats-service" name="service" data-inline="true">
<?php               foreach ($services as $k => $v) { ?>
                        <option value="<?= $k; ?>" <?= ($k == $service ? 'selected="selected"' : ''); ?>><?= $v; ?></option>
<?php               } ?>
                </select>
<?php       } ?>
        </div>
    </form>

    <!-- Actions -->
    <div data-role="collapsible-set" data-theme="b" data-content-theme="a">
        <div data-role="collapsible">
            <h2><?= Utils::escape('Acciones'); ?></h2>
            <ul data-role="listview">
                <li data-role="fieldcontain">
                    <label for="stats-print"><?= Utils::escape('Imprimir'); ?></label>
                    <button id="stats-print" data-theme="b" data-inline="true"><?= Utils::escape('Imprimir'); ?></button>
                </li>
                <li data-role="fieldcontain">
                    <label for="stats-share"><?= Utils::escape('URL Pública'); ?></label>
                    <input id="stats-share" type="text" data-inline="true" value="<?= $publicLink; ?>" />
                    <button id="stats-share-open" data-theme="b" data-inline="true" data-icon="arrow-r"
                        ><?= Utils::escape('Ir'); ?></button>
                </li>
            </ul>
        </div>
    </div>

    <div id="stats-container">

        <!-- NEW_USERS -->
        <div id="chart-users-total-byDay" class="chart-users-total charts mini-chart" data-chartby="byDay"
            data-charttitle="<?= Utils::escape(Mo_Stat::$titles[Mo_Stat::NEW_USERS] . ' (' . Mo_Stat::$timelineTitles['byDay'] . ')'); ?>"></div>
        <div id="chart-users-total-byWeek" class="chart-users-total charts mini-chart" data-chartby="byWeek"
            data-charttitle="<?= Utils::escape(Mo_Stat::$titles[Mo_Stat::NEW_USERS] . ' (' . Mo_Stat::$timelineTitles['byWeek'] . ')'); ?>"></div>
        <div id="chart-users-total-byMonth" class="chart-users-total charts mini-chart" data-chartby="byMonth"
            data-charttitle="<?= Utils::escape(Mo_Stat::$titles[Mo_Stat::NEW_USERS] . ' (' . Mo_Stat::$timelineTitles['byMonth'] . ')'); ?>"></div>

        <!-- BY_DEVICETYPE -->
        <div id="chart-devicetypes-totals" class="chart-devicetypes-totals charts pie-chart"
            data-charttitle="<?= Utils::escape(Mo_Stat::$titles[Mo_Stat::BY_DEVICETYPE]); ?>"></div>

        <!-- USERS_TOTALS -->
        <div id="chart-users-totals" class="chart-users-totals charts pie-chart"
            data-charttitle="<?= Utils::escape(Mo_Stat::$titles[Mo_Stat::USERS_TOTALS]); ?>"></div>
    </div>
</div>

<script type="text/javascript">

    var stats = <?= json_encode($stats); ?>;

    // Initialize graphics
    $("#page-stats").die().live("pageshow", function () {

        // Customized theme
        var chartId = null;
        var data = null;
        var dataRaw = null;
        var dataTitles = null;
        var dataUsersTotal = stats["<?= Mo_Stat::USERS_TOTALS; ?>"]["<?= $service; ?>"]["total"];
        var adminTheme = {
            title: {
                fontFamily: "Helvetica,Arial,sans-serif",
                textColor: "white"
            },
            grid: {
                gridLineColor: "#333",
                borderWidth: 1,
                backgroundColor: "#222",
                shadow: false
            },
            legend: {
                fontFamily: "Helvetica,Arial,sans-serif"
            },
            series: [{
                color: "#2373A5",
                markerOptions: {
                    style: "filledCircle",
                    color: "#2373A5",
                    size: 6.0
                }
            }],
            axes: {
                xaxis: {
                    ticks: {
                        fontFamily: "Helvetica,Arial,sans-serif",
                        textColor: "white"
                    }
                },
                yaxis: {
                    ticks: {
                        fontFamily: "Helvetica,Arial,sans-serif",
                        textColor: "white"
                    }
                }
            }
        };

        // This will remove hidden elements that makes the chart to fail if present.
        // This happens if the first page you load is this (/stats) and you change the service.
        $(".chart-users-total:hidden").remove();
        $(".chart-devicetypes-totals:hidden").remove();
        $(".chart-users-totals:hidden").remove();

        ////
        // NEW_USERS
        ////

        $.each($(".chart-users-total"), function (k, v) {

            var chartId = 'chart-users-total-' + $(v).attr("data-chartby");
            var data = stats["<?= Mo_Stat::NEW_USERS; ?>"]["<?= $service; ?>"][$(v).attr("data-chartby")];

            // Chart
            if (typeof data != "undefined" && data.length) {
                chart = $.jqplot(chartId, [data], {
                    title: $(v).attr("data-charttitle"),
                    highlighter: {
                        show: true
                    },
                    axes: {
                        xaxis: {
                            renderer: $.jqplot.DateAxisRenderer,
                            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                            tickOptions: {
                                angle: 45,
                                formatString:"%e %b"
                            }
                        }
                    },
                    cursor: {
                        show: true,
                        zoom: true,
                        showTooltip: false,
                        style: "default"
                    },
                    seriesDefaults: {
                        rendererOptions: {
                            smooth: true
                        }
                    }
                });
                chart.themeEngine.newTheme("admin", adminTheme);
                chart.activateTheme("admin");
            } else {
                $("#" + chartId).addClass("no-data").html(""
                    + '<div class="jqplot-title">'
                        + $(v).attr("data-charttitle")
                    + "</div>"
                    + "<em><?= Utils::escape('Sin datos aún.'); ?></em>");
            }
        });

        ////
        // BY_DEVICETYPE
        ////

        chartId = 'chart-devicetypes-totals';
        data = stats["<?= Mo_Stat::BY_DEVICETYPE; ?>"]["<?= $service; ?>"];

        // Chart
        if (typeof data != "undefined" && data.length) {
            chartDevicetypesTotals = $.jqplot(chartId, [data], {
                title: $("#" + chartId).attr("data-charttitle"),
                seriesDefaults: {
                    renderer: $.jqplot.PieRenderer,
                    rendererOptions: {
                        showDataLabels: true
                    }
                },
                legend: {
                    show: true,
                    location: 'e'
                }
            });
            chartDevicetypesTotals.themeEngine.newTheme("admin", adminTheme);
            chartDevicetypesTotals.activateTheme("admin");
        } else {
            $("#" + chartId).addClass("no-data").html(""
                + '<div class="jqplot-title">'
                    + $("#" + chartId).attr("data-charttitle")
                + "</div>"
                + "<em><?= Utils::escape('Sin datos aún.'); ?></em>");
        }

        ////
        // USERS_TOTALS
        ////

        chartId = 'chart-users-totals';
        data = stats["<?= Mo_Stat::USERS_TOTALS; ?>"]["<?= $service; ?>"];

        // Chart
        if (typeof data != "undefined" && data.length) {
            data.splice(2, 1);
            chartUsersTotals = $.jqplot(chartId, [data], {
                title: $("#" + chartId).attr("data-charttitle"),
                seriesDefaults: {
                    renderer: $.jqplot.PieRenderer,
                    rendererOptions: {
                        showDataLabels: true
                    }
                },
                legend: {
                    show: true,
                    location: 'e'
                }
            });
            chartUsersTotals.themeEngine.newTheme("admin", adminTheme);
            chartUsersTotals.activateTheme("admin");
        } else {
            $("#" + chartId).addClass("no-data").html(""
                + '<div class="jqplot-title">'
                    + $("#" + chartId).attr("data-charttitle")
                + "</div>"
                + "<em><?= Utils::escape('Sin datos aún.'); ?></em>");
        }
    });

    // Attach triggers
    $("#stats-service").die().live("change", function () {

        $("#stats-service-form").submit();
    });
    $("#stats-print").die().live("click", function () {

        var page = window.open("<?= $publicLink; ?>");

        page.focus();
        page.print();
        setTimeout(function () { page.close(); }, 500);
    });
    $("#stats-share-open").die().live("click", function () {

        window.open("<?= $publicLink; ?>");
    });

</script>
