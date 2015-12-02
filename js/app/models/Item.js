define([
    'jquery',
    'underscore',
    'backbone',
    'tabletopsync'
], function($, _, Backbone, TabletopSync) {

    return Backbone.Model.extend({
        sync: TabletopSync,

        initialize: function(options) {
            this.data = options.data;
        }

    });

});
