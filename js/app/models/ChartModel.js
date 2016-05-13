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
        idAttribute: 'id',

        initialize: function(options) {
            this.data = options.data;
        }
    });

});
