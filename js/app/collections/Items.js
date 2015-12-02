define([
    'models/Item',
    'tabletopsync'
], function(Item, TabletopSync) {

    return Backbone.Collection.extend({
        model: Item,
        sync: TabletopSync,

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
