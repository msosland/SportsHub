angular.module('sportsHub', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('articles', {
        url: '/articles/{id}',
        templateUrl: '/articles.html',
        controller: 'ArticlesCtrl',
      });



    $urlRouterProvider.otherwise('home');
  }])
