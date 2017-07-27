'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './delivery-info.routes';

export class DeliveryInfoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('j22U921586App.delivery-info', [uiRouter])
  .config(routes)
  .component('deliveryInfo', {
    template: require('./delivery-info.pug'),
    controller: DeliveryInfoComponent,
    controllerAs: 'deliveryInfoCtrl'
  })
  .name;
