'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './personal-info.routes';

export class PersonalInfoComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('j22U921586App.personal-info', [uiRouter])
  .config(routes)
  .component('personalInfo', {
    template: require('./personal-info.pug'),
    controller: PersonalInfoComponent,
    controllerAs: 'personalInfoCtrl'
  })
  .name;
