'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('delivery-info', {
      url: '/delivery-info',
      template: '<delivery-info></delivery-info>'
    });
}
