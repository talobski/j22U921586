'use strict';

describe('Component: PersonalInfoComponent', function() {
  // load the controller's module
  beforeEach(module('j22U921586App.personal-info'));

  var PersonalInfoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PersonalInfoComponent = $componentController('personal-info', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
