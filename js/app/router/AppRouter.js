define([
    'models/ChartDatum',
    'collections/ChartData',
    'views/ChartView',
    'views/FiltersView',
    // 'views/MenuView',
    // 'views/LoadingView',
    'backbone'
], function(
    ChartDatum,
    ChartData,
    ChartView,
    FiltersView,
    // MenuView,
    Backbone
    // LoadingView
    ) {
    return Backbone.Router.extend({
        routes: {
            'chart/:chartId': 'actionChart',
            '*default': 'actionDefault'
        },
        defaultChartID: 0,

        initialize: function() {
            // this.menuView = new MenuView();
            // this.filtersView = new FiltersView();
            this.chartViews = {
                0: new ChartView(),
                1: new ChartView()
            };
        },

        initializeItems: function(chartId) {
            var _this = this,
                view = this.chartViews[chartId],
                chartData = new ChartData();
            chartData.fetch({
                success: function() {
                    console.log('here success');
                    chartData.trigger('loaded');
                }
            });
            chartData.on("loaded", function() {
                console.log('here loaded');
                view.render(chartData);
            });
        },

        actionDefault: function() {
            this.navigate("chart/" + this.defaultChartID, { trigger: true });
        },

        actionChart: function(chartId) {
            this.initializeItems(chartId);
        }

    });

});
