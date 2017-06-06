/**
 * Created by sherinannthomas on 14/04/17.
 */
'use strict';

angular.module('myApp.home',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home',{
            templateUrl:'home/home.html',
            controller:'HomeCtrl'
        });
        
        
}])
.controller('HomeCtrl', function($scope,$http,$location,$routeParams,$rootScope){
    $scope.msg = 'Fetching movies';
   console.log($rootScope.uname);
    $.get('http://localhost:8080/recommendation/user/'+$rootScope.uname).then(function(response){
        var moviesRec = response['recommendations'];

        //$scope.movies = {};
        $scope.moviesRec = moviesRec;
        $scope.$apply();
        console.log(moviesRec);

    }, function(resp){
        console.log(resp);
    })


    $.get('http://localhost:8080/movie/search?=').then(function(response){
        var movies = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies = movies;
        $scope.$apply();
        console.log($scope.movies);
    
    }, function(resp){
        console.log(resp);
    })


})


/*.controller('HomeCtrl',['$scope','$http',function(sc, ht){
    $.get('http://localhost:8080/movies').then(function succes(response){
        var movies = response['movie_list'];
        console.log(movies);
        sc.message={};
        sc.message.a= "In shape controller";
        sc.movies = {};
        sc.movies = movies;
    },
    function errorFunc (response){
        console.log(response);
    })
}]);*/
/*.controller('HomeCtrl',function($scope, $sce){
    $.get('http://localhost:8080/movies').then(function succes(response){
        var movies = response['movie_list'];
console.log(movies);
$scope.renderHtml = function(movies)
{
    return $sce.trustAsHtml(movies);
};
    });
});*/