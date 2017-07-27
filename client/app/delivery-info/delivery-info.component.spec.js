'use strict';

describe('Component: DeliveryInfoComponent', function() {
  // load the controller's module
  beforeEach(module('j22U921586App.delivery-info'));

  var DeliveryInfoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DeliveryInfoComponent = $componentController('delivery-info', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
