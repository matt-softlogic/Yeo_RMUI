'use strict';

angular.module('yoYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Another Awesome Thing']  
  })
  .controller('AdjustmentsCtrl', function ($scope) {
    $scope.adjustments = [
      'Adjustment Name 1',
      'Adjustment Name 2',
      'Adjustment Name 3',
      'Adjustment Name 4']   
  })
  .controller('HeaderController', function ($scope) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
  });
