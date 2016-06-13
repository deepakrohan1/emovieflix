/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix").controller('LoginController', ['$scope','RegisterService', LoginController]);


function LoginController($scope, RegisterService) {
    var loginVm = this;
    loginVm.userCreation = userCreation;
    loginVm.userAuth = userAuth;
    
    console.log(RegisterService.getCurrentAuthInfo());

    console.log(RegisterService);

    loginVm.hello = function () {
        RegisterService.addUserToServer(loginVm.user);
    }

    loginVm.authenticateUser = function () {
        RegisterService.authenticateUser(loginVm.user);
    }
    function userCreation(){
        console.log("Inside User Creation");
        console.log(loginVm.user);
        loginVm.hello();
    }

    function userAuth(){
        console.log("Inside User Auth");

        console.dir(loginVm.user);
        loginVm.authenticateUser();


    }



}
})();