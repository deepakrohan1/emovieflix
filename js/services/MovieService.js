/**
 * Created by rohan on 6/14/16.
 */
angular.module('movieflix').factory('MovieService',MovieService);

function MovieService( $http, $q){

    var self = this;
    self.getMoviesList = function () {
        var deferred = $q.defer();
        $http.get("http://api.themoviedb.org/3/movie/popular?api_key=458bc9bdea6b70202ac17765b0364d7e&page=20")
            .then(function (res) {
                deferred.resolve(res.data)
                console.log("MovieList");
                console.log(res.data)
            }).catch(function (e) {
                deferred.reject(e.data)
        });
        return deferred.promise;
    }

    self.getTopRated = function () {
        var deferred = $q.defer();
        $http.get("http://api.themoviedb.org/3/movie/top_rated?api_key=458bc9bdea6b70202ac17765b0364d7e&page=20")
            .then(function (res) {
                deferred.resolve(res.data)
                console.log("TopRated");
                console.log(res.data)
            }).catch(function (err) {
                deferred.reject(err.data)
        });
        return deferred.promise;
    }

    self.getNowPlaying = function () {
        var deferred = $q.defer();
        $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=458bc9bdea6b70202ac17765b0364d7e&page=20")
            .then(function (res) {
                deferred.resolve(res.data)
                console.log("Now");
                console.log(res.data)

            }).catch(function (err) {
                deferred.resolve(err.data)
        });
        return deferred.promise;
    }

    

    self.getContinueWatching = function () {
        
    }
        
    

    return self;
}