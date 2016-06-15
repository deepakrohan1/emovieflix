/**
 * Created by rohan on 6/15/16.
 */
angular.module('movieflix').controller('PlayControl',PlayControl);


function PlayControl(moviesList,topRatedList,moviesNowPlaying,$routeParams) {

    var playVm = this;
    console.dir('Inside MovieController:');
    playVm.popularListM = moviesList.results;
    playVm.topRatedListM = topRatedList.results;
    playVm.moviesNowPlayingM = moviesNowPlaying.results;

    console.log("Finally");
    console.dir(moviesList.results)
    var s = [moviesList,topRatedList,moviesNowPlaying];
    playVm.totalMovies = [];
    for(var i = 0; i < s.length ; i++){

        console.log(s[i].results.length)
        for(var j = 0; j < s[i].results.length ; j ++){
            playVm.totalMovies.push(s[i].results[j])
        }
    }
    console.dir(playVm.totalMovies);
    console.log($routeParams.id);

    for(var j = 0 ; j < playVm.totalMovies.length; j++){
        console.log(playVm.totalMovies[j].id );
        if(parseInt(playVm.totalMovies[j].id) === parseInt($routeParams.id)){
            console.log("if");
            playVm.theMovie = playVm.totalMovies[j];
        }
    }

    console.dir(playVm.theMovie);


}