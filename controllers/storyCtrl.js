angular.module('CMA Builder', ['ngAnimate'])

  .controller('compCtrl', ['$scope', '$timeout', function ($scope, $timeout){
 	  $scope.address = "";
    $scope.sqft = "";
    $scope.comps = {};

    $scope.myData = new Firebase("https://cmabuilder.firebaseio.com/");

    $scope.saveComp = function(){
      $scope.myData.push({address:$scope.address, sqft:$scope.sqft});
      $scope.address = "";
      $scope.sqft = "";
    };
   
    $scope.myData.on('value', function(snapshot) {
    	$timeout(function(){
    		$scope.comps = snapshot.val();
    	});
    });
     

  }]);