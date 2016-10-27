angular.module("Security", ["firebase"]).controller("SecurityController", function($rootScope, $firebaseAuth, $firebaseObject) {
    var profileWatch = null;

    $rootScope.user = null;
    $rootScope.profile = null;
    $firebaseAuth().$onAuthStateChanged(function(firebaseUser) {
        if (profileWatch) {
            profileWatch();
            profileWatch = null;
        }
        $rootScope.user = firebaseUser;
        if ($rootScope.user) {
            $rootScope.profile = $firebaseObject(firebase.database().ref("profiles").child($rootScope.user.uid));
            profileWatch = $rootScope.profile.$watch(function(event) {
                var email = "email" in $rootScope.profile ? $rootScope.profile.email : null;
                var role = "role" in $rootScope.profile ? $rootScope.profile.role : null;
                var updates = {};
                var update = false;

                if (!email) {
                    updates["email"] = $rootScope.user.email;
                    update = true;
                }
                if (!role) {
                    updates["role"] = "user";
                    update = true;
                }
                if (update) {
                    $rootScope.profile.$ref().set(updates);
                }
            });
        }
        else {
            if ($rootScope.profile) {
                $rootScope.profile.$destroy();
                $rootScope.profile = null;
            }
        }
    });
    $rootScope.logIn = function() {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider);
    };
    $rootScope.logOut = function() {
        firebase.auth().signOut();
    };
});
