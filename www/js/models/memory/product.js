define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        findById = function (id) {
            var deferred = $.Deferred(),
                product = null,
                l = products.length;
            for (var i = 0; i < l; i++) {
                if (products[i].id === id) {
                    product = products[i];
                    break;
                }
            }
            deferred.resolve(product);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = products.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findAll = function () {
            var deferred = $.Deferred();
            deferred.resolve(products);
            return deferred.promise();
        },

        products = [
            {   "id": 1,
                "name": "Pink and White Vanilla",
                "type2": "V",
                "category": "Vanilla",
                "price": "$3.25",
                "rating": 4,
                "smallPic": "pink_white_cupcake_small.jpg",
                "largePic": "pink_white_cupcake.jpg",
                "features": [
                    "Vanilla cake batter with a velvety texture",
                    "Assorted pink sprinkles in different shapes and sizes",
                    "Silver ornamental sprinkles"
                ]
            },
            {   "id": 2,
                "name": "Red Velvet",
                "type": "S",
                "category": "Specialty",
                "price": "$4.00",
                "rating": 5,
                "smallPic": "red_velvet_small.jpg",
                "largePic": "red_velvet.jpg",
                "features": [
                    "Signature cupcake",
                    "Creamy red velvet cake",
                    "Decadent cream cheese frosting",
                    "Red sugar sprinkles"
                ]
            },
            {   "id": 3,
                "name": "Purple Vanilla Flower",
                "type": "V",
                "category": "Vanilla",
                "price": "$3.25",
                "rating": 4,
                "smallPic": "purple_vanilla_flower_small.jpg",
                "largePic": "purple_vanilla_flower.jpg",
                "features": [
                    "White vanilla cake with purple-toned fondant",
                    "Silver ornamental sprinkles",
                    "Edible flower decor to top it off"
                ]
            },

            {   "id": 4,
                "name": "Pink Chocolate Stars",
                "type": "C",
                "category": "Chocolate",
                "price": "$3.00",
                "rating": 4,
                "smallPic": "chocolate_pink_black_stars_small.jpg",
                "largePic": "chocolate_pink_black_stars.jpg",
                "features": [
                    "Rich chocolate cake",
                    "Creamy strawberry frosting",
                    "Delicious chocolate star ornamental sprinkles"
                ]
            },
            {   "id": 5,
                "name": "White Cream Flower",
                "type": "V",
                "category": "Vanilla",
                "price": "$3.75",
                "rating": 3,
                "smallPic": "white_cream_flower_small.jpg",
                "largePic": "white_cream_flower.jpg",
                "features": [
                    "Yellow cake batter",
                    "Decadent cream cheese frosting",
                    "Pretty pink edible flower decor"

                ]
            },
            {   "id": 6,
                "name": "Blue Chocolate Sprinkles",
                "type": "C",
                "category": "Chocolate",
                "price": "$3.25",
                "rating": 3,
                "smallPic": "chocolate_blue_sprinkles_small.jpg",
                "largePic": "chocolate_blue_sprinkles.jpg",
                "features": [
                    "Chocolate cupcake decorated with blue frosting and pink sugar sprinkles",
                    "Assorted pink sprinkles in different shapes and sizes"
                ]
            },
            {   "id": 7,
                "name": "Carrot Cake ",
                "type": "S",
                "category": "Specialty",
                "price": "$4.25",
                "rating": 5,
                "smallPic": "carrot_cake_small.jpg",
                "largePic": "carrot_cake.jpg",
                "features": [
                    "Delicious carrot cake",
                    "Edible carrot decor"
                ]
            },
            {   "id": 8,
                "name": "Pink Chocolate",
                "type": "C",
                "category": "Chocolate",
                "price": "$3.25",
                "rating": 5,
                "smallPic": "pink_chocolate_flower_small.jpg",
                "largePic": "pink_chocolate_flower.jpg",
                "features": [
                    "Rich velvety chocolate base",
                    "Creamy pink icing",
                    "Edible white flower on top"
                ]
            },
            {   "id": 9,
                "name": "Pink and White Star Vanilla",
                "type": "V",
                "category": "Vanilla",
                "price": "$3.00",
                "rating": 4,
                "smallPic": "pink_white_stars_small.jpg",
                "largePic": "pink_white_stars.jpg",
                "features": [
                    "Decadent moist white cake base",
                    "Creamy frosting",
                    "White chocolate star ornamental sprinkles"
                ]
            },
            {   "id": 10,
                "name": "Chocolate Cherry",
                "type": "C",
                "category": "Chocolate",
                "price": "$3.50",
                "rating": 5,
                "smallPic": "chocolate_cherry_small.jpg",
                "largePic": "chocolate_cherry.jpg",
                "features": [
                    "Rich milk chocolate batter",
                    "Twirl of creamy chocolate frosting",
                    "Red cherry on top"
                ]
            },
            {   "id": 11,
                "name": "Orange Cream",
                "type": "S",
                "category": "Specialty",
                "price": "$4.00",
                "rating": 5,
                "smallPic": "orange_cream_small.jpg",
                "largePic": "orange_cream.jpg",
                "features": [
                    "Delicious orange cream base and frosting",
                    "Edible gold sprinkles"
                ]
            },
            {   "id": 12,
                "name": "Pink Vanilla Sprinkles",
                "type": "V",
                "category": "Vanilla",
                "price": "$3",
                "rating": 4,
                "smallPic": "pink_vanilla_small.jpg",
                "largePic": "pink_vanilla.jpg",
                "features": [
                    "Moist white vanilla cake",
                    "Decorative edible sprinkles"
                ]
            },
            {   "id": 13,
                "name": "Coconut Sprinkles",
                "type": "S",
                "category": "Specialty",
                "price": "$4.00",
                "rating": 4,
                "smallPic": "coconut_small.jpg",
                "largePic": "coconut.jpg",
                "features": [
                    "Vanilla cupcake base",
                    "Delicious coconut shavings"
                ]
            },
            {   "id": 14,
                "name": "Purple Sprinkles",
                "type": "V",
                "category": "Vanilla",
                "price": "$3",
                "rating": 4,
                "smallPic": "purple_sprinkles_small.jpg",
                "largePic": "purple_sprinkles.jpg",
                "features": [
                    "White vanilla cake with purple creamy frosting",
                    "Edible sprinkles"
                ]
            },
            {   "id": 15,
                "name": "Chocolate Peanut Butter Chunk",
                "type": "S",
                "category": "Specialty",
                "price": "$4.00",
                "rating": 5,
                "smallPic": "chocolate_peanut_butter_small.jpg",
                "largePic": "chocolate_peanut_butter.jpg",
                "features": [
                    "Rich milk chocolate and peanut butter",
                    "Delicious chunk of peanut butter cup on top",
                    "Gold gourmet sprinkles on top"

                ]
            }
        ],

        Product = Backbone.Model.extend({

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ProductCollection = Backbone.Collection.extend({

            model: Product,

            sync: function (method, model, options) {
                if (method === "read") {
                    if (options.data) {
                        findByName(options.data.name).done(function (data) {
                            options.success(data);
                        });
                    } else {
                        findAll().done(function (data) {
                            options.success(data);
                        });
                    }
                }
            }

        });

    return {
        Product: Product,
        ProductCollection: ProductCollection
    };

});