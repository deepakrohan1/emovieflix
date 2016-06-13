/**
 * Created by rohan on 6/12/16.
 */
angular.module("movieflix")
        .factory("RegisterService",RegisterService);

function RegisterService() {
    self.addUserToServer = function (user) {
        console.dir("Hey:"+user.email);
    }


    return self;
}