define([
    'models/FiltersModel',
    'collections/ChartCollection',
    'views/MenuView',
    'views/FiltersView',
    'views/ChartView',
    // 'views/LoadingView',
    'underscore',
    'backbone'
], function(
    FiltersModel,
    ChartCollection,
    MenuView,
    FiltersView,
    ChartView,
    _,
    Backbone
    // LoadingView
    ) {
    return Backbone.Router.extend({
        routes: {
            'chart/:chartId': 'actionChart',
            '*default': 'actionDefault'
        },
        defaultChartId: 0,
        menuItems: [
            {
                id: 0,
                title: "title 0",
            },
            {
                id: 1,
                title: "title 1",
            }
        ],

        initialize: function() {
            var _this = this;
            this.menuView = new MenuView(this.menuItems);
            this.filtersView = new FiltersView({router: this});
            this.chartViews = {};
            _.each(this.menuItems, function(item){
               _this.chartViews[item.id] = new ChartView({id: item.id});
            });
        },

        initializeItems: function(chartId) {
            var _this = this,
                chartView = this.chartViews[chartId],
                chartCollection = new ChartCollection(),
                filtersModel = new FiltersModel();

            filtersModel.fetch({
                success: function(model) {
                    _this.filtersView.render(model.toJSON());
                }
            });
            chartCollection.fetch({
                success: function(collection) {
                    chartView.render(collection);
                }
            });
        },

        actionDefault: function() {
            this.navigate("chart/" + this.defaultChartId, { trigger: true });
        },

        actionChart: function(chartId) {
            this.chartId = chartId;
            this.menuView.render(chartId);
            this.initializeItems(chartId);
        },

        onFiltersChanged: function(filters){
            console.log(filters);
            this.actionChart(this.chartId);
        }

    });

});
