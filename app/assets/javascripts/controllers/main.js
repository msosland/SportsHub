'use strict';

angular.module('sportsHub')
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.articles = [
      '1',
      '2',
      '3'
    ];

    $scope.addArticle = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.articles.push({title: $scope.title, body: $scope.body});
      $scope.title = '';
      $scope.body = '';
    };

  }]);