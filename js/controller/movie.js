/**
 * Created by rohan on 6/13/16.
 */
(function(){
angular.module('movieflix').controller('MovieController',MovieController);

    function MovieController(moviesList,topRatedList,moviesNowPlaying) {
        var movieVm = this;
        console.dir('Inside MovieController:');
        movieVm.usersListT = moviesList.results;
        console.log("Finally");
        console.dir(moviesList.results)
        var finalList = [];

        // for( var i = 0 ;i < movieVmList.length ; i++){
        //     finalList.push(movieVmList[i]);
        // }
        //
        // console.log(finalList)
        //
        // for(var m in finalList){
        //     console.log(m.adult)
        // }
    }
})()