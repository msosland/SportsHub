'use strict';

angular.module('sportsHub')
.controller('ArticlesCtrl', [
  '$scope',
  '$stateParams',
  'articles',
  function($scope, $stateParams, articles){
    $scope.article = articles.articles[$stateParams.id];

}]);