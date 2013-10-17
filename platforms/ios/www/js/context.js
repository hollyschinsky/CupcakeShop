define(function (require) {

    "use strict";

    var $ = require('jquery'),
        models          = require('app/models/product'),
        products = new models.ProductCollection(),
        filteredProducts;

    products.fetch();
    filteredProducts = products.clone();

    return {
        products: products,
        filteredProducts: filteredProducts
    };

});
