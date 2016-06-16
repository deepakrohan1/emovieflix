/**
 * Created by rohan on 6/13/16.
 */
(function(){
angular.module('movieflix').controller('MovieController',MovieController);

    function MovieController(moviesList,topRatedList,moviesNowPlaying,$routeParams) {
        var movieVm = this;
        console.dir('Inside MovieController:');
        movieVm.popularListM = moviesList.results;
        movieVm.topRatedListM = topRatedList.results;
        movieVm.moviesNowPlayingM = moviesNowPlaying.results;
        

        movieVm.popularListMS = movieVm.popularListM.splice(0,4);
        movieVm.topRatedListMS = movieVm.topRatedListM.splice(0,4);
        movieVm.moviesNowPlayingMS = movieVm.moviesNowPlayingM.splice(0,4);
        console.log("Concat");
        // console.dir(popularListMS.length)
        var s = [moviesList,topRatedList,moviesNowPlaying];
        movieVm.totalMovies = [];
        for(var i = 0; i < s.length ; i++){

            console.log(s[i].results.length)
            for(var j = 0; j < s[i].results.length ; j ++){
                movieVm.totalMovies.push(s[i].results[j])
            }
        }
            console.dir(movieVm.totalMovies);

        console.log($routeParams.i);

        if(1 === parseInt($routeParams.i)){
            $scope.paramsSearch = 1
        }

       
        
    }
})()