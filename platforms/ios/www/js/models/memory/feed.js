define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        findAll = function () {
            var deferred = $.Deferred();
            deferred.resolve(items);
            return deferred.promise();
        },

        items = [
            {   "id": 1,
                "name": "Caroline Smith",
                "message": "The orange creme was unique and dreamy",
                "pic": "Avatar_8.jpg"
            },
            {   "id": 2,
                "name": "John Jones",
                "message": "I buy these for my kids every Sunday morning and they love the colorful sprinkles.",
                "pic": "Avatar_4.jpg"
            },
            {   "id": 3,
                "name": "Momoftwo",
                "message": "The red velvet cupcake is to die for. I bought a dozen",
                "pic": "Avatar_7.jpg"
            },
            {   "id": 4,
                "name": "averywilliams",
                "message": "The chocolate peanut butter cupcake makes for a great dessert.",
                "pic": "Avatar_2.jpg"
            },
            {   "id": 5,
                "name": "JoanAherne",
                "message": "My grandkids and I love to treat ourselves with these delicious cupcakes. ",
                "pic": "Avatar_5.jpg"
            },
            {   "id": 6,
                "name": "johnnyz",
                "message": "I love how you can buy these by the dozen, always a hit at the office.",
                "pic": "Avatar_3.jpg"
            }
        ],

        FeedItem = Backbone.Model.extend({

        }),

        FeedItemCollection = Backbone.Collection.extend({

            model: FeedItem,

            sync: function (method, model, options) {
                if (method === "read") {
                    findAll().done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        FeedItem: FeedItem,
        FeedItemCollection: FeedItemCollection
    };

});