'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('personal-info', {
      url: '/personal-info',
      template: '<personal-info></personal-info>'
    });
}
