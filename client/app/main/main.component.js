import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, $resource, appConfig) {
    this.$http = $http;
    this.$resource = $resource;
    this.userRoles = appConfig.userRoles;
  }

  $onInit() {

    this.$http.get('/api/things')
      .then(response => {
        debugger;
        this.awesomeThings = this.userRoles;
      });
  }
}

export default angular.module('nodeangularApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
