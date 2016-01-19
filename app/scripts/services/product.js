'use strict';

/**
 * @ngdoc service
 * @name ProductApp.product
 * @description
 * # product
 * Factory in the ProductApp.
 */
angular.module('ProductApp').factory('Product', function ($http) {
  return {
    all: function() {
      var store = this;
      //return $http({method: 'GET', url: '/products'});
      $http.get('./scripts/api/products.json').success(function(data){
        store.products = data;
    });
    },
  };
});
