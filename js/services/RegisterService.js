/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix")
        .service("RegisterService",RegisterService);

    var ref = new Firebase("https://resplendent-heat-5158.firebaseIO.com");

function RegisterService($firebaseObject) {
    var self = this;

    self.logUserOut = function () {
        console.log("logging out");
        return ref.unauth();
    }
    
    self.getCurrentAuthInfo = function () {
        var authData = ref.getAuth();
        if (authData) {
            // console.log("User " + authData.uid + " is logged in with " + authData.provider);
            return authData.password.email;
            // console.log(authData.password.email);
        } else {
            console.log("User is logged out");
        }
        
    }
    
    //Check if the user is logged in
    self.authDataCallback = function (authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
            console.log("User is logged out");
        }
    }

    //Register an User to Server
    self.addUserToServer = function (user) {
        console.dir("Hey:"+user.email);


        ref.createUser({
            email    : user.email,
            password : user.password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });
    }

    //Login the registered User
    self.authenticateUser = function(user){
        console.dir("Login User: "+user.email);


        ref.authWithPassword({
            email    : user.email,
            password : user.password
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }

            ref.onAuth(authDataCallback);
        });
    }



    return self;
}
})();