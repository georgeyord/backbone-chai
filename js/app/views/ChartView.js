define([
  'text!templates/chart.html',
	'helpers/handlebarsHelpers',
	'highcharts',
  'handlebars',
  'backbone'
  ], function(
    ChartTemplate,
    HandlebarsHelpers,
    Highcharts,
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

        render: function(collection) {
          var data= collection.toJSON(),
            html = this.template({data: data});
          this.$el.highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
          });
          this.$el.append(html);
        }

    });
});
