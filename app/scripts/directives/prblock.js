'use strict';

/**
 * @ngdoc directive
 * @name ProductApp.directive:prBlock
 * @description
 * # prBlock
 */
angular.module('ProductApp')
  .directive('prBlock', function () {
    return {
      replace: true,
      restrict: 'E',
      scope: {
        header: '=',
        body: '=',
        image: '=',
        id: '=',
        type: '@'
      },
      templateUrl: 'views/directives/prblock.html'
    };
  });
