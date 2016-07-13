angular.module('router', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('/', {

		url: '/',
		templateUrl: '/views/home.html'
	})
	.state('login', {

		url: '/login',
		templateUrl: '/views/login.html'
	})
	.state('register', {
		url: '/register',
		templateUrl: '/views/register.html'
	})


	$urlRouterProvider.otherwise('/');

});