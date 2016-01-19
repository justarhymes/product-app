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
      replace: true,
      restrict: 'E',
      scope: {
        name: '=',
        about: '=',
        image: '=',
        rating: '=',
        price: '=',
        id: '=',
        type: '@'
      },
      templateUrl: 'templates/directives/nproduct-card.html'
    };
  });
