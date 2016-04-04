angular.module('sportsHub', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      })
      .state('articles', {
        url: '/articles/{id}',
        templateUrl: 'articles/_articles.html',
        controller: 'ArticlesCtrl',
      });



    $urlRouterProvider.otherwise('home');
  }])
