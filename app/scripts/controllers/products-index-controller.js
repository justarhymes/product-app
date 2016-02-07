'use strict';

/**
 * @ngdoc function
 * @name productApp.controller:ProductsIndexController
 * @description
 * # ProductsIndexController
 * Controller of the productApp
 */

angular.module('productApp')
  .controller('ProductsIndexController', function ($http) {
    var store = this;

    store.products = [];

    $http.get('/scripts/api/products.json').success(function(data) {
      store.products = data;
    });
  });
