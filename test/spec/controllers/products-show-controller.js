'use strict';

describe('Controller: ProductsShowControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('productApp'));

  var ProductsShowControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsShowControllerCtrl = $controller('ProductsShowControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsShowControllerCtrl.awesomeThings.length).toBe(3);
  });
});
