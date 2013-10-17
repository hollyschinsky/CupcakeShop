define(function (require) {

    "use strict";

    var $               = require('jquery'),
        Handlebars      = require('handlebars'),
        Backbone        = require('backbone'),
        FeedListView    = require('app/views/FeedListView'),
        models          = require('app/models/feed'),
        tplText         = require('text!tpl/Feed.html'),
        template = Handlebars.compile(tplText);


    return Backbone.View.extend({

        initialize: function () {
            this.feedItemList = new models.FeedItemCollection();
            this.feedItemList.fetch();
            this.render();
        },

        render: function () {
            this.$el.html(template());
            this.listView = new FeedListView({collection: this.feedItemList, el: $(".scroller", this.el)});
            return this;
        }

    });

});