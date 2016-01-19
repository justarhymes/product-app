'use strict';

/**
 * @ngdoc service
 * @name productApp.Product
 * @description
 * # Product
 * Factory in the productApp.
 */
angular.module('productApp')
  .factory('Product', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
