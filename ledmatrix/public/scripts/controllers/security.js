angular.module("Security", []).controller("SecurityController", function($rootScope) {
    $rootScope.profiles = null;
    $rootScope.user = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if ($rootScope.profiles) {
            firebase.database().ref("profiles").child($rootScope.user.uid).off("value", $rootScope.profiles);
            $rootScope.profiles = null;
        }
        $rootScope.user = user;
        if ($rootScope.user) {
            $rootScope.profiles = firebase.database().ref("profiles").child($rootScope.user.uid).on("value", function(snapshot) {
                var profile = snapshot.val();
                var email = profile ? ("email" in profile ? profile.email : null) : null;
                var role = profile ? ("role" in profile ? profile.role : null) : null;
                var updates = {};
                var update = false;

                if (!email) {
                    updates["email"] = $rootScope.user.email;
                    update = true;
                }
                if (role) {
                    $rootScope.user.role = role;
                }
                else {
                    $rootScope.user.role = null;
                    updates["role"] = "user";
                    update = true;
                }
                if (update) {
                    firebase.database().ref("profiles").child($rootScope.user.uid).update(updates);
                }
                $rootScope.$applyAsync();
            });
        }
        $rootScope.$applyAsync();
    });
    $rootScope.logIn = function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider);
    };
    $rootScope.logOut = function() {
        firebase.auth().signOut();
    };
});
