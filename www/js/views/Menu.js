define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        tpl         = require('text!tpl/Menu.html'),
        context     = require('app/context'),
        products = context.products,
        filteredProducts = context.filteredProducts,

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this);
            this.render();
        },

        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "change .type": "filter"
        },

        filter: function () {

            console.log("-------------------");

            var types = [];

            if ($(".vanilla")[0].checked) {
                types.push("V");
            } else {
                console.log("vanilla not checked");
            }
            if ($(".chocolate")[0].checked) {
                types.push("C");
            }
            if ($(".specialty")[0].checked) {
                types.push("S");
            }

            var filtered = products.filter(function(product) {
                var c = _.contains(types, product.get("type"));
                console.log(c);
                return c;
            });

            filteredProducts.reset(filtered);
        }

    });

});