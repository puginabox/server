var app = angular.module(‘myApp', [‘ngRoute’]);
app.config(function($routeProvider) {

$routeProvider.when('/page1', {
templateUrl: 'templates/page1.html',
controller: 'page1Controller'
});
$routeProvider.otherwise({
redirectTo: '/'
});