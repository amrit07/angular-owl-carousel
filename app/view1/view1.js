'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
      controllerAs:'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  this.data = [1,2,3,4,5];
  this.data2 = [6,7,8,9,10];
  this.itemSrc = false;
  this.changeSrc = function () {
      this.itemSrc = !this.itemSrc;
  }



}]);