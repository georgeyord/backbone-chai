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
            'random/:duration': 'actionRandom',
            '*default': 'actionDefault'
        },

        initialize: function() {
            var googleSpreadsheetKey = '1-fpIYyYB5mVYgveLOEzu_wUbgQ4Gwl1vYXhyj8LaGX4';
            // this.loadingView = new LoadingView();
            // this.loadingView.render();

            // You need to declare the tabletop instance separately, then feed it into the model/collection
            // You *must* specify wait: true so that it doesn't try to fetch when you initialize
            this.tabletop = Tabletop.init({
                key: googleSpreadsheetKey,
                callback: function(data, tabletop ) {
                    console.log(tabletop)
                    console.log(data)
                },
                simpleSheet: true,
                wait: true
            });


            this.items = new ItemCollection();
            // this.items.fetch();

            this.listView = new ListView(this.items);
        },

        actionDefault: function() {
            this.listView.render(this.items);
        },

        actionRandom: function(duration) {
            // TODO: Get a random item randomEntryID from collection and:
            // this.navigate("item/" + randomEntryID, { trigger: true });
        },

        actionItem: function(id) {
            var itemView = new ItemView({
                model: this.items.get(id)
            });
            itemView.render();
        }

    });

});
