define([
  'text!templates/chart.html',
	'helpers/handlebars',
  'handlebars',
  'backbone'
  ], function(
    ChartTemplate,
    HandlebarsHelpers,
    Handlebars,
    Backbone
    ) {
    return Backbone.View.extend({
        el: $('#chart-placeholder'),

        initialize: function() {
          this.registerHelpers();
          this.template = Handlebars.default.compile(ChartTemplate);
        },

    		registerHelpers: function () {
    		  var helpers = HandlebarsHelpers;
    			for (var key in helpers) {
    				Handlebars.default.registerHelper(key, helpers[key]);
    			}
    		},

        render: function(data) {
          var html = this.template(data);
          this.$el.html(html);
        }

    });
});
