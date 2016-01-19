angular.module('NoteWrangler').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/products'
    })

    .when('/about', {
      templateUrl: 'templates/pages/page/about.html',
      controller: 'PageAboutController'
    })

    .when('/products', {
      templateUrl: 'templates/pages/products/index.html',
      controller: 'ProductsIndexController'
    })

    .when('/products/:id', {
      templateUrl: 'templates/pages/products/show.html',
      controller: 'ProductsShowController'
    })

    .otherwise({redirectTo: '/'});
}]);
