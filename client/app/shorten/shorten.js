angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};
  $scope.addLink = function(link){
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {
        url: link
      }
    })
  }
  $scope.addLink('http://www.google.com').then(function(resp){
      console.log('resp', resp);
    })
});
