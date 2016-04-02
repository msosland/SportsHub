angular.module('sportsHub', ['ui-router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }])
