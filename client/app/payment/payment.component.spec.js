'use strict';

describe('Component: PaymentComponent', function() {
  // load the controller's module
  beforeEach(module('j22U921586App.payment'));

  var PaymentComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PaymentComponent = $componentController('payment', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
