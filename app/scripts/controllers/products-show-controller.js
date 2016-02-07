'use strict';

/**
 * @ngdoc function
 * @name productApp.controller:ProductsShowController
 * @description
 * # ProductsShowController
 * Controller of the productApp
 */
angular.module('productApp')
  .controller('ProductsShowController', function ($scope, $routeParams, Product) {

    Product.find($routeParams.id).success(function(data) {
      $scope.product = data;
      console.log(data);
    });

  });
