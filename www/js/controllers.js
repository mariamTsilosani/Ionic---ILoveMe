angular.module('starter.controllers', [])


mariamApp.factory('Authorization', function() {
 
  authorization = {};
  authorization.firstName = '';
  authorization.moodNum = '50';
  authorization.firstRandom = Math.round(Math.random() * (59 - 0) + 0);
  return authorization;
});

mariamApp.controller('HomeCtrl', function($scope, $location,  Authorization) {
  $scope.input = Authorization;
})

mariamApp.controller('LoveCtrl', function($scope, $stateParams, $http, Authorization) { 
  $scope.input = Authorization; 
  if(Authorization.moodNum > 0 && Authorization.moodNum < 21){
      $http.get('js/moodOne.json').success(function(data){
     	    $scope.quotes = data;
      });
  }
  if(Authorization.moodNum > 20 && Authorization.moodNum < 41){
      $http.get('js/moodTwo.json').success(function(data){
          $scope.quotes = data;
      });
  }
  if(Authorization.moodNum > 40 && Authorization.moodNum < 61){
      $http.get('js/moodThree.json').success(function(data){
          $scope.quotes = data;
      });
  }
  if(Authorization.moodNum > 60 && Authorization.moodNum < 81){
      $http.get('js/moodFour.json').success(function(data){
          $scope.quotes = data;
      });
  }
  if(Authorization.moodNum > 80 && Authorization.moodNum < 101){
      $http.get('js/moodFive.json').success(function(data){
          $scope.quotes = data;
      });
  }

 	$scope.counter = 0;
  authorization.firstRandom = Math.round(Math.random() * (59 - 0) + 0);

  $scope.swipeLeft = function () {
  	if($scope.counter == 59){
        $scope.counter = -1;
    }
    $scope.counter = Math.round(Math.random() * (59 - 0) + 0);
    document.getElementById("p1").innerHTML = $scope.quotes[$scope.counter].quote;
	}

})

.controller('InfoCtrl', function($scope) {});


