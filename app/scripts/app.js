'use strict';

/**
 * @ngdoc overview
 * @name productApp
 * @description
 * # productApp
 *
 * Main module of the application.
 */
angular
  .module('productApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // redirect to the notes index
        redirectTo: '/products'
      })

      .when('/products', {
        templateUrl: 'views/products-index.html',
        controller: 'ProductsIndexController'
      })

      .when('/products/:id', {
        templateUrl: 'views/products-show.html',
        controller: 'ProductsShowController'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })

      .otherwise({
        redirectTo: '/'
      });
  });
