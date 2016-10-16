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
        var i, j = 0, m;

        $scope.name = key;
        $scope.size = value.size;
        $scope.bits = value.bits;
        for (i = 0, m = value.bits.length; i < m; ++i) {
            if (value.bits[i] == "0") {
                $("table.matrix input").eq(++j).prop("checked", false);
            }
            else if (value.bits[i] == "1") {
                $("table.matrix input").eq(++j).prop("checked", true);
            }
        }
    };
    $scope.addBits = function() {
        var updates = {};

        updates["size"] = $scope.size;
        updates["bits"] = $scope.bits;
        firebase.database().ref("characters").child($scope.name).update(updates);
    };
    $("table.matrix input").click(function() {
        var result = "";
        var separator = "B";

        $("table.matrix input").each(function(index, element) {
            if ((index % 8) == 0) {
                result = result + separator;
                separator = ",B";
            }
            result = result + ($(element).is(":checked") ? "1" : "0");
        });
        $("input#bits").val(result);
    });
});
