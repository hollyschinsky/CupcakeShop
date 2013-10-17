define(function (require) {

    "use strict";

    var $ = require('jquery'),
        Backbone = require('backbone'),
        PageSlider = require('app/utils/PageSlider'),
        context = require('app/context'),
        HomeView = require('app/views/HomeView'),

        slider = new PageSlider($('#content')),

        products = context.filteredProducts,
        homeView = new HomeView({collection: products});

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "products/:id": "productDetails",
            "social": "social",
            "blog": "blog",
            "profile": "profile"
        },

        home: function () {
            homeView.delegateEvents();
            console.log("Home");
            slider.slidePage(homeView.$el);
        },

        productDetails: function (id) {
            require(["app/models/product", "app/views/ProductView"], function (models, ProductView) {
                var product = new models.Product({id: id});
                product.fetch({
                    success: function (data) {
                        slider.slidePage(new ProductView({model: data}).$el);
                    }
                });
            });
        },

        social: function () {
            require(["app/views/FeedView"], function (FeedView) {
                slider.slidePage(new FeedView().$el);
            });
        },

        blog: function () {
            require(["app/views/BlogView"], function (BlogView) {
                slider.slidePage(new BlogView().$el);
            });
        },

        profile: function () {
            require(["app/views/ProfileView"], function (ProfileView) {
                console.log("Slide profile");
                slider.slidePage(new ProfileView().$el);
            });
        }

    });

});