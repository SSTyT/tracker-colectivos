'use strict';
angular.module('trackerColectivos')
  .config(['$stateProvider', function($stateProvider) {

    $stateProvider.state('list', {
      url: '/landing',
      templateUrl: 'landing/landing.html',
      controller: 'LandingCtrl'
    });

  }])
  .controller('LandingCtrl', ['$scope', '$state', function($scope, $state) {


  }]);
