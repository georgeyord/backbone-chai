/* globals requirejs */
requirejs.config({
    baseUrl: 'js/app',
    paths: {
        "backbone": '../vendor/backbone/backbone-min',
        "backbone-sorted-collection": '../vendor/backbone-sorted-collection/backbone-sorted-collection',
        "backbone-filtered-collection": '../vendor/backbone-filtered-collection/backbone-filtered-collection',
        "handlebars": '../vendor/handlebars/handlebars.amd.min',
        "highcharts": '../vendor/highcharts/highcharts',
        "jquery": '../vendor/jQuery/dist/jquery.min',
        "text": "../vendor/requirejs-text/text",
        "underscore": '../vendor/underscore/underscore-min'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        }
    }
});

requirejs([
    'app'
], function(App) {
    App.init();
});
