'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './success.routes';

export class SuccessComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('j22U921586App.success', [uiRouter])
  .config(routes)
  .component('success', {
    template: require('./success.pug'),
    controller: SuccessComponent,
    controllerAs: 'successCtrl'
  })
  .name;
