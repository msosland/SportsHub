'use strict';

angular.module('sportsHub')
.controller('ArticlesCtrl', [
  '$scope',
  '$stateParams',
  'articles',
  function($scope, $stateParams, articles){
    $scope.article = articles.articles[$stateParams.id];

    $scope.addComment = function(){
      if($scope.content === '') {return; }
      $scope.article.comments.push({
        content: $scope.content,
        author: 'user',
      });
      $scope.article.usersWhoCommented.push('user');
      $scope.body = '';
    };
}]);