/**
 * Created by rohan on 6/11/16.
 */
(function(){
 var app =   angular.module("movieflix",['ngMessages','firebase','ngRoute'])
            .config(function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl: 'login.html',
               controller: 'LoginController',
               controllerAs:'loginVm'
           })
           .when('/movieindex',{
               templateUrl: 'movie.template.html',
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
                   },
                   "currentAuth": ["Auth", function(Auth) {
                       return Auth.$requireAuth();
                   }]
               }
           }).when('/allmovies',{
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
               },
               "currentAuth": ["Auth", function(Auth) {
                   return Auth.$requireAuth();
               }]
           }

       }).when('/movie',{
           templateUrl: 'movie.html',
           controller: 'PlayControl',
           controllerAs:'playVm',
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
               },
               "currentAuth": ["Auth", function(Auth) {
                   return Auth.$requireAuth();
               }]
           }
       }).when('/categories',{
           templateUrl: 'categorized.html',
           controller: 'CategoryController',
           controllerAs:'catVm',
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
               },
               "currentAuth": ["Auth", function(Auth) {
                   return Auth.$requireAuth();
               }]
           }
       }).otherwise({
           redirectTo: '/'
       })
    });

    app.run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $location.path("/");
            }else{
                $location.path("/movieindex")
            }
        });
    }]);

    app.factory("Auth", ["$firebaseAuth",
        function($firebaseAuth) {
            var ref = new Firebase("https://resplendent-heat-5158.firebaseIO.com");
            return $firebaseAuth(ref);
        }
    ]);
})()