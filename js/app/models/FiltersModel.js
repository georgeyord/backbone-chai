define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
    ) {

    return Backbone.Model.extend({
        urlRoot: '/js/app/data/chartData0-filters.json',
        defaults: {
            types: {},
            locations: {}
        }
    });

});
