angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = Links.getLinks;
  $scope.getLinks().then(function(resp){
    $scope.data.links = resp.data;
  });


});
