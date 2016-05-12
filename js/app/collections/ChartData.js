define([
    'models/ChartDatum',
    // 'data/chartData0.js',
    'backbone'
], function(
    ChartDatum,
    // Data,
    Backbone
    ) {

    return Backbone.Collection.extend({
        url: '/js/app/data/chartData0.json',
        model: ChartDatum,
        idAttribute: 'id',

        initialize: function() {
        },

        parse: function(data) {
            return data;
        }
    });

});
