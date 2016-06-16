/**
 * Created by rohan on 6/15/16.
 */

(function () {

    angular.module('movieflix').controller('CategoryController', CategoryController);

    function CategoryController(moviesList,topRatedList,moviesNowPlaying,$routeParams) {
        var catVm = this;
        catVm.popularListM = moviesList.results;
        catVm.topRatedListM = topRatedList.results;
        catVm.moviesNowPlayingM = moviesNowPlaying.results;

        console.log($routeParams.categ);

        if(1 == parseInt($routeParams.categ)){

            catVm.catM = catVm.popularListM;
        }else if(2 == parseInt($routeParams.categ)){
            catVm.catM = catVm.topRatedListM;
        }else if(3 == parseInt($routeParams.categ)){
            catVm.catM = catVm.moviesNowPlayingM;
        }
    }

})();
