define([
    'jquery',
    'underscore',
    'backbone',
    'tabletopsync'
], function($, _, Backbone, TabletopSync) {

    return Backbone.Model.extend({
        sync: TabletopSync,
        idAttribute: 'key',
        tabletop: {
          instance: null,
          sheet: 'Items'
        },
        sync: TabletopSync,

        initialize: function(options) {
            this.data = options.data;
            this.tabletop.instance = options.instance;
        }

    });

});
