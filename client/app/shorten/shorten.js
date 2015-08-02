angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {
    link : 'http://test.com'
  };
  $scope.addLink = function(){
    if($scope.link.link){
      return $http({
        method: 'POST',
        url: '/api/links',
        data: {
          url: $scope.link.link
        }
      })
    }
  }
});
