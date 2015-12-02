requirejs.config({
    baseUrl: 'js/app',
    paths: {
        jquery: '../vendor/jQuery/dist/jquery.min',
        underscore: '../vendor/underscore/underscore-min',
        backbone: '../vendor/backbone/backbone-min',
        text: "../vendor/requirejs-text/text",
        jsx: "../vendor/jsx-requirejs-plugin/js/jsx",
        JSXTransformer: "../vendor/jsx-requirejs-plugin/js/JSXTransformer",
        react: "../vendor/react/react-with-addons",
        reactdom: "../vendor/react/react-dom",
        tabletopsync: "../vendor/tabletop/src/backbone.tabletopSync",
        tabletop: "../vendor/tabletop/src/tabletop"
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        },
        react: {
            exports: "React"
        },
        reactdom: {
            exports: "ReactDOM"
        },
        underscore: {
            exports: '_'
        },
        Tabletop: {
            exports: 'Tabletop'
        },
        tabletopsync: {
            deps: ['backbone', 'tabletop'],
            exports: 'TabletopSync'
        }
    }
});

requirejs([
    'app'
], function(App) {
    App.init();
});
