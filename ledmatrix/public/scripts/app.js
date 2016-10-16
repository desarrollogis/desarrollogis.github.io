angular.module("MainApp", ["ngRoute", "Security"]).config(function($routeProvider) {
    $routeProvider.when("/", {
        "controller": "HomeController",
        "templateUrl": "views/home.html"
    });
}).controller("HomeController", function($rootScope, $scope) {
});
