'use strict';

/**
 * @ngdoc directive
 * @name productApp.directive:productCard
 * @description
 * # productCard
 */
angular.module('productApp')
  .directive('productCard', function () {
    return {
      //replace: true,
      restrict: 'E',
      scope: {
        pid: '=',
        name: '=',
        rating: '=',
        price: '=',
        release: '=',
        images: '=',
      },
      templateUrl: 'views/product-card.html',
    };
  });
