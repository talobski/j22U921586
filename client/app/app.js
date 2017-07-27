'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';

import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import PersonalInfoComponent from './personal-info/personal-info.component';
import DeliveryInfoComponent from './delivery-info/delivery-info.component';
import PaymentComponent from './payment/payment.component';
import SuccessComponent from './success/success.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.scss';

angular.module('j22U921586App', [ngCookies, ngResource, ngSanitize, uiRouter, navbar, footer, main,
  PersonalInfoComponent, DeliveryInfoComponent, PaymentComponent, SuccessComponent, constants, util
])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['j22U921586App'], {
      strictDi: true
    });
  });
