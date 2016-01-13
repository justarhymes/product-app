'use strict';

describe('Directive: prBlock', function () {

  // load the directive's module
  beforeEach(module('ProductApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pr-block></pr-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the prBlock directive');
  }));
});
