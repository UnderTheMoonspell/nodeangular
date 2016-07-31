'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('nodeangularApp.util', [])
  .factory('Util', UtilService)
  .name;
