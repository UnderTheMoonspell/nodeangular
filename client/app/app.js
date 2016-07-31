'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';

import './app.css';

debugger;

angular.module('nodeangularApp', [
    // ngAnimate,
    ngCookies, ngResource, ngSanitize, uiRouter,
    // ngMessages,
    navbar, footer, main, constants, util
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['nodeangularApp'], {
      strictDi: true
    });
  });
