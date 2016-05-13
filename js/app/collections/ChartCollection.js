define([
    'models/ChartModel',
    'backbone'
], function(
    ChartModel,
    Backbone
    ) {

    return Backbone.Collection.extend({
        url: '/js/app/data/chartData0.json',
        model: ChartModel,
        idAttribute: 'id'
    });

});
