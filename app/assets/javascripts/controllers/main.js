'use strict';

angular.module('sportsHub')
.controller('MainCtrl', [
  '$scope',
  'articles',
  function($scope, articles){
    $scope.articles = articles.articles;

    $scope.addArticle = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.articles.push({
        title: $scope.title,
        body: $scope.body,
        comments: [],
        tags: [],
        usersWhoFavorited: [],
        usersWhoCommented: []
      });
      $scope.title = '';
      $scope.body = '';
    };

  }]);