'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './payment.routes';

export class PaymentComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('j22U921586App.payment', [uiRouter])
  .config(routes)
  .component('payment', {
    template: require('./payment.pug'),
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  })
  .name;
