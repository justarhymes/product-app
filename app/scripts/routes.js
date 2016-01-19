'use strict';

/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('ProductApp').config(['$routeProvider', function($routeProvider) {
$routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'ProductController',
  })

  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })

  .when('/notes', {
    templateUrl: 'views/notes.html',
    controller: 'ProductController'
  })

  .otherwise({
    redirectTo: '/'
  });
}]);
