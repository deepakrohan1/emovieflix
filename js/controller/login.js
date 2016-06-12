/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix").controller('LoginController', LoginController);


function LoginController($scope) {
    var loginVm = this;
    loginVm.userCreation = userCreation;
    loginVm.userAuth = userAuth;


    
    function userCreation(){
        console.log("Inside User Creation");
        console.log(loginVm.user);
    }

    function userAuth(){
        console.log("Inside User Auth");

        console.dir(loginVm.user);
        if(loginVm.user != undefined){

        }else {
            var errorElement = document.getElementById('errorMsg');
            errorElement.innerHTML = "The text can't be empty";
        }

    }

}
})();