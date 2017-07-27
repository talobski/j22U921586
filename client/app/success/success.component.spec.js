'use strict';

describe('Component: SuccessComponent', function() {
  // load the controller's module
  beforeEach(module('j22U921586App.success'));

  var SuccessComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    SuccessComponent = $componentController('success', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
