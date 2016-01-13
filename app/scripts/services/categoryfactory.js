'use strict';

/**
 * @ngdoc service
 * @name ProductApp.categoryFactory
 * @description
 * # categoryFactory
 * Factory in the ProductApp.
 */
angular.module('ProductApp')
  .factory('categoryFactory', function () {
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
