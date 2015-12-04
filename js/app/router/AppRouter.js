define([
    'models/Item',
    'collections/Items',
    'jsx!views/ItemView',
    'jsx!views/ListView',
    'jsx!views/LoadingView',
    'tabletop'
], function(Item, ItemCollection, ItemView, ListView, LoadingView, Tabletop) {

    return Backbone.Router.extend({
        routes: {
            'item/:id': 'actionItem',
            'random(/)(:duration)': 'actionRandom',
            '*default': 'actionDefault'
        },

        getTabletopInstance: function(force) {
            if (_.isUndefined(this.tabletopInstance) || (!_.isUndefined(force) && force === true)) {
                var googleSpreadsheetKey = '1-fpIYyYB5mVYgveLOEzu_wUbgQ4Gwl1vYXhyj8LaGX4';

                // You need to declare the tabletop instance separately, then feed it into the model/collection
                // You *must* specify wait: true so that it doesn't try to fetch when you initialize
                this.tabletopInstance = Tabletop.init({
                    key: googleSpreadsheetKey,
                    wait: true
                });
            }

            return this.tabletopInstance;
        },

        initialize: function() {
            this.listView = new ListView();
            this.initializeItems();
        },

        initializeItems: function() {
            var _this = this;
            this.items = new ItemCollection({
                route: this
            });
            this.items.fetch({
                success: function(size, items) {
                    // First row has the labels
                    var labelsModel = new ItemView({
                        model: _this.items.get(0)
                    });
                    _this.labels = _.clone(labelsModel.attributes);
                    _this.items.remove(labelsModel);
                    _this.items.trigger('loaded');
                }
            });
            this.items.on("loaded", function() {
                _this.listView.render(_this.items);
            });
        },

        actionDefault: function() {
            this.listView.render(this.items);
        },

        actionRandom: function(duration) {
            // TODO: Get a random item randomEntryID from collection and:
            // this.navigate("item/" + randomEntryID, { trigger: true });
            var itemView = new ItemView({
                model: this.items.sample()
            });
            itemView.render();
        },

        actionItem: function(id) {
            var itemView = new ItemView({
                model: this.items.get(id)
            });
            itemView.render();
        }

    });

});
