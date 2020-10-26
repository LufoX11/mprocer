<!-- JS -->
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/jquery.jqplot.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.canvasTextRenderer.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.dateAxisRenderer.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.cursor.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.highlighter.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.pieRenderer.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.barRenderer.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.pointLabels.min.js'); ?>"></script>
<script type="text/javascript"
    src="<?= $View->getJs('jquery.plugins/jqplot/plugins/jqplot.categoryAxisRenderer.min.js'); ?>"></script>

<!-- CSS -->
<link rel="stylesheet" href="<?= $View->getCss('jquery.plugins/jqplot/jquery.jqplot.min.css'); ?>">

<!-- Content -->
<h1><?= Utils::escape('Estadísticas'); ?></h1>

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

<script type="text/javascript">

    var stats = <?= json_encode($stats); ?>;

    $(document).ready(function () {

        // Customized theme
        var chartId = null;
        var data = null;
        var dataRaw = null;
        var dataTitles = null;
        var dataUsersTotal = stats["<?= Mo_Stat::USERS_TOTALS; ?>"]["<?= $service; ?>"]["total"];

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
            } else {
                $("#" + chartId).remove();
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
        } else {
            $("#" + chartId).remove();
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
        } else {
            $("#" + chartId).remove();
        }
    });

</script>
