/**
 * Created by rohan on 6/15/16.
 */
(function(){
angular.module('movieflix').controller('AboutController', AboutController);

function AboutController($scope, $location, $anchorScroll) {
    $scope.goToAbout = function () {
        $location.hash('about');
        $anchorScroll();
    };

}
})();