require.config({

    baseUrl: 'lib',

    paths: {
        app: '../js',
        tpl: '../tpl'
    },

    map: {
        '*': {
            'app/models/product': 'app/models/memory/product',
            'app/models/feed': 'app/models/memory/feed'
        }
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }

});

require(['jquery', 'backbone', "fastclick", 'app/views/Menu', 'app/router'], function ($, Backbone, FastClick, Menu, Router) {

    "use strict";

    var router = new Router();

    document.addEventListener('deviceready', function () {
        console.log(window.device.version);
        if (parseFloat(window.device.version) >= 7.0) {
            document.getElementById('container').style.top = "20px";
//            document.getElementById('status-bar').style.display = "static";
        }
    });

    $(function () {
        FastClick.attach(document.body);
    });

    $("body").on("click", ".back-button", function (event) {
        console.log("Back!");
        event.preventDefault();
        window.history.back();
    });

    var menu = new Menu({el: "#menu"});

    Backbone.history.start();
});