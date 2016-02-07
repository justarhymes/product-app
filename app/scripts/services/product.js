'use strict';

/**
 * @ngdoc service
 * @name productApp.Product
 * @description
 * # Product
 * Factory in the productApp.
 */
angular.module('productApp')
  .factory('Product', function ProductFactory($http) {
    return {
      all: function() {
        return $http({method: 'GET', url: '/scripts/api/products.json'});
      },
      find: function(id){
        return $http({method:'GET', url: '/scripts/api/products-' + id + '.json'});
      }
    };
  });
