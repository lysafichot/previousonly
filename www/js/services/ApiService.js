angular.module('ApiService', []).factory('ApiService', ['$http', 'md5', function($http, md5) {
	return {
		auth : function(user) {
			var cleApi = '0355b4c4371f';
			var req = {
				method: "POST",
				url: "https://api.betaseries.com/members/auth",
				params: {
					login: user.username,
					password: md5.createHash(user.password),
					v: 2.4,
					key: cleApi
				},
				headers: {
					'Access-Control-Allow-Origin' : 'http://localhost:8080',
				}
			}
			return $http(req);
		},
		register : function(user) {
			var cleApi = '0355b4c4371f';
			var req = {
				method: "POST",
				url: "https://api.betaseries.com/members/signup",
				params: {
					login: user.username,
					password: md5.createHash(user.password),
					email: user.email,
					v: 2.4,
					key: cleApi
				},
				headers: {
					'Access-Control-Allow-Origin' : 'http://localhost:8080',
				}
			}
			return $http(req);
		},



	}

}]);