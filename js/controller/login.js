/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix").controller('LoginController', ['$scope','RegisterService', '$location', LoginController]);

    var ref = new Firebase("https://resplendent-heat-5158.firebaseIO.com");

function LoginController($scope, RegisterService,$location) {
    var loginVm = this;
    loginVm.userCreation = userCreation;
    loginVm.userAuth = userAuth;
    // console.log(RegisterService.getCurrentAuthInfo());



    // console.log(RegisterService);
    
    loginVm.logoutUserOut = function () {
        console.log("logout");
        RegisterService.logUserOut();
        location.reload();

    }

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
        console.log("Hey");
        $location.path('/movieindex');
    }

    function userAuth(){
        console.log("Inside User Auth");

        console.dir(loginVm.user);
        loginVm.authenticateUser();
        $location.path('/movieindex');


    }

    $scope.authUser = RegisterService.getCurrentAuthInfo();


}
})();