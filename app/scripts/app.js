'use strict';

angular.module('yoYoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  '$strap.directives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Adjustments', {
        templateUrl: 'partials/adjustments.html',
        controller: 'AdjustmentsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
