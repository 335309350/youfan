var app = angular.module('myApp',['ngRoute']);
//定义路由表
//1---first.html
//2---two.html
//3---three.html
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/first',{
		templateUrl:'views/first.html'
	}).when('/two',{
		templateUrl:'views/two.html'
	}).when('/three',{
		templateUrl:'views/three.html'
	}).when('/four',{
		templateUrl:'views/four.html'
	}).otherwise({redirectTo:'/first'})
}])
