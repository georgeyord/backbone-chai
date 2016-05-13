define([
  'text!templates/filters.html',
	'helpers/handlebarsHelpers',
  'handlebars',
  'backbone'
], function(
  FiltersTemplate,
  HandlebarsHelpers,
  Handlebars,
  Backbone
) {
    return Backbone.View.extend({
        el: $('#filters-placeholder'),
        events: {
          "click #filters-submit" : "onChange"
        },

        initialize: function(options) {
          this.router = options.router;
          this.registerHelpers();
          this.template = Handlebars.default.compile(FiltersTemplate);
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
        },

        onChange: function() {
          var filters = {},
            $types = this.$el.find('.types'),
            $locations = this.$el.find('.locations');
          filters.types = $types ? $types.val(): null;
          filters.typesCheckbox = this.$el.find('.types-checkbox')
            .map(function(){
              return $(this).val();
            }).get();
          filters.typesRadio = this.$el.find('.types-radio').val();
          filters.typesSelect = this.$el.find('.types-select').val();
          filters.locations = $locations ? $locations.val(): null;
          this.router.onFiltersChanged(filters);
        }

    });
});

