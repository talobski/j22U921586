'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('success', {
      url: '/success',
      template: '<success></success>'
    });
}
