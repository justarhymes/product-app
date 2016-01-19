'use strict';

describe('Controller: ProductsIndexControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('productApp'));

  var ProductsIndexControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsIndexControllerCtrl = $controller('ProductsIndexControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductsIndexControllerCtrl.awesomeThings.length).toBe(3);
  });
});
