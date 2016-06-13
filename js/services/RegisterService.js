/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix")
        .factory("RegisterService",RegisterService);

function RegisterService() {
    self.addUserToServer = function (user) {
        console.dir("Hey:"+user.email);

    //    TODO Adding User to server

        firebase.auth().createUserWithEmailAndPassword(user.email,user.password).catch(function(error){

            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode != null){
                alert(errorMessage);
            }

            console.log(errorCode +":" +errorMessage);
        })


    }



    return self;
}
})();