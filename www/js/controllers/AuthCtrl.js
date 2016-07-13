angular.module('AuthCtrl', []).controller('AuthController', function($scope, $http, $location, ApiService) {

	$scope.login = function(user) {
		ApiService.auth(user).success(function(response){

			console.log(response);
		}).error(function(error){
			$scope.errors = error.errors[0].text;
			console.log(error.errors[0].text);

		});
	}
	$scope.register = function(user) {
		ApiService.register(user).success(function(response){
			console.log(response);

		}).error(function(error){
			$scope.errors = error.errors[0].text;
			console.log(error.errors[0].text);

		});
	}

});