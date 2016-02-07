'use strict';

/**
 * @ngdoc function
 * @name productApp.controller:ProductsIndexController
 * @description
 * # ProductsIndexController
 * Controller of the productApp
 */

angular.module('productApp')
  .controller('ProductsIndexController', function ($scope, Product) {
    //var store = this;

    //$scope.products = [];

    Product.all().success(function(data) {
      $scope.products = data;
    });

    /*$http.get('/scripts/api/products.json').success(function(data) {
      $scope.products = data;
    });*/
  });
