define([
    'views/ItemView',
    'text!templates/item.html'
], function(ItemView, ItemTemplate) {
    return Backbone.View.extend({
        el: $('#content-placeholder'),

        initialize: function(options) {
            this.item = options.item;
            this.level = null;
        },

        render: function(level) {
            this.level = level;
            this.$el.html(formTemplate);
            this.formInput = this.$el.find('#input');
            return this;
        },

        submit: function(e) {
            if (_.isObject(e) && e.originalEvent instanceof Event) {
                e.preventDefault();
            }
            var _this = this,
                level_id = this.level.get("id"),
                play = new Play({
                    level: this.level
                });

            play.on('change', function(model, response, options) {
                if (level_id !== this.level.get("id")) {
                    _this.router.navigate("play/" + this.level.get("id"), true);
                }
            });

            play.saveModel({
                level: level_id,
                input: this.formInput.val()
            });
        }
    });
});
