angular.module("MainApp", ["ngRoute", "Security"]).config(function($routeProvider) {
    $routeProvider.when("/", {
        "controller": "HomeController",
        "templateUrl": "views/home.html"
    });
}).controller("HomeController", function($rootScope, $scope) {
    $scope.characters_cb = null;
    $scope.preDestroy = function() {
        if ($scope.characters_cb != null) {
            firebase.database().ref("characters").off("value", $scope.characters_cb);
            $scope.characters_cb = null;
        }
    };
    $scope.items = {};
    $scope.auth = firebase.auth().onAuthStateChanged(function(user) {
        $scope.preDestroy();
        $scope.items = {};
        if (user) {
            $scope.characters_cb = firebase.database().ref("characters").on("value", function(snapshot) {
                $scope.items = snapshot.val();
                $scope.$applyAsync();
            });
        }
    });
    $scope.$on("$destroy", function() {
        $scope.preDestroy();
        $scope.auth();
    });
    $scope.edit = function(key, value) {
        $scope.name = key;
        $scope.size = value.size;
        $scope.bits = value.bits;
    };
    $scope.addBits = function() {
        var updates = {};

        updates["size"] = $scope.size;
        updates["bits"] = $scope.bits;
        firebase.database().ref("characters").child($scope.name).update(updates);
    };
});
