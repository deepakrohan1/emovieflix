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
           })
    });

    app.run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            // We can catch the error thrown when the $requireAuth promise is rejected
            // and redirect the user back to the home page
            if (error === "AUTH_REQUIRED") {
                $location.path("/login.html");
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