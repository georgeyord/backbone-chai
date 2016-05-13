define([
  'text!templates/menu.html',
	'helpers/handlebarsHelpers',
  'handlebars',
  'backbone',
  'underscore'
], function(
  MenuTemplate,
  HandlebarsHelpers,
  Handlebars,
  Backbone,
  _
) {
    return Backbone.View.extend({
        el: $('#menu-placeholder'),

        initialize: function(menuItems) {
          this.menuItems = menuItems;
          this.registerHelpers();
          this.template = Handlebars.default.compile(MenuTemplate);
        },

    		registerHelpers: function () {
    		  var helpers = HandlebarsHelpers;
    			for (var key in helpers) {
    				Handlebars.default.registerHelper(key, helpers[key]);
    			}
    		},

        processItems: function(activeId) {
          var processedItems = [];
          _.each(this.menuItems, function(item, id){
            processedItems.push({
              id: item.id,
              href: "#chart/"+item.id,
              title: item.title,
              class: (item.class || ""),
              active: (item.id === parseInt(activeId, 10))
            })
          });
          return processedItems;
        },

        render: function(activeId) {
          var items = this.processItems(activeId),
              html = this.template({items:items});
          this.$el.html(html);
        }

    });
});
