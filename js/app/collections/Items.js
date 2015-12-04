define([
    'models/Item',
    'tabletopsync'
], function(Item, TabletopSync) {

    return Backbone.Collection.extend({
        model: Item,
        idAttribute: 'ID',
        tabletop: function() {
            return this.tabletop = {
                instance: this.route.getTabletopInstance(),
                sheet: 'Items'
            }
        },

        initialize: function(options) {
            this.route = options.route;
            this.tabletop();
            this.sync();
        },

        sync: function() {
            this.sync = Backbone.tabletopSync;
            return this.sync;
        },

        getUnviewedItemID: function() {
            var unviewedItems = this.where({
                viewed: false
            });

            if (unviewedItems.length > 0) {
                return _.sample(unviewedItems).get("id");
            } else {

                this.each(function(model) {
                    model.set("viewed", false);
                });

                return this.sample().get("id");
            }

        }

    });

});
