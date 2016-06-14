/**
 * Created by rohan on 6/11/16.
 */
(function(){
    angular.module("movieflix",['ngMessages','firebase','ngRoute'])
            .config(function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl: 'index.html',
               controller: 'LoginController',
               controllerAs:'loginVm'
           })
           .when('/movieindex',{
               templateUrl: 'movieindex.html',
               controller: 'MovieController',
               controllerAs:'movieVm',
               resolve:{
                   user: function (RegisterService) {
                        return RegisterService.getCurrentAuthInfo();
               },
                   moviesList:function (MovieService) {
                       return MovieService.getMoviesList();
                   },
                   topRatedList:function(MovieService){
                       return MovieService.getTopRated();
                   },
                   moviesNowPlaying: function (MovieService) {
                       return MovieService.getNowPlaying();
                   }
               }
           })
    });
})()