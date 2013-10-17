define(function (require) {

    "use strict";

    var $               = require('jquery'),
        Handlebars      = require('handlebars'),
        Backbone        = require('backbone'),
        ProductListView = require('app/views/ProductListView'),
        context         = require('app/context'),
        tplText         = require('text!tpl/Home.html'),
        template = Handlebars.compile(tplText);


    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template());
            this.listView = new ProductListView({collection: this.collection, el: $(".scroller", this.el)});
            return this;
        },

        events: {
            "click .search-button": "toggleSearch",
            "keyup .search-key":    "search",
            "keypress .search-key": "onkeypress"
        },

        search: function (event) {
            var key = $('.search-key').val();
            context.filteredProducts.fetch({reset: true, data: {name: key}});
        },

        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        },

        toggleSearch: function (event) {
            console.log("toggle search");
            var $scroller = $(".scroller", this.el),
                $searchBar = $(".search-bar", this.el);
            if ($scroller.hasClass("search-on")) {
                $searchBar.hide();
                $scroller.removeClass("search-on");
            } else {
                $searchBar.show();
                $scroller.addClass("search-on");
            }
            return false;
        }

    });

});