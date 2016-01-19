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
        name: '=',
        about: '=',
        image: '=',
        rating: '=',
        price: '=',
        release: '=',
        cast: '=',
        id: '=',
        type: '@'
      },
      templateUrl: 'views/directives/prblock.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
    };
  });
