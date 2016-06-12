/**
 * Created by rohan on 6/12/16.
 */
(function(){
angular.module("movieflix").controller('LoginController', LoginController);


function LoginController($scope) {
    var loginVm = this;
    loginVm.userCreation = userCreation;

    console.dir("Inside Login: "+loginVm);
    
    
    function userCreation(){
        console.log("Inside User Creation");
        console.log($scope.user);
    }

}
})();