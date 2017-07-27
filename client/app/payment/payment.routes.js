'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('payment', {
      url: '/payment',
      template: '<payment></payment>'
    });
}
