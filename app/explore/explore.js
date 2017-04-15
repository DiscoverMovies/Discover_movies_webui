'use strict';
angular.module('myApp.explore',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/explore',{
        templateUrl:'explore/explore.html',
        controller:'exploreCtrl'
    });

}])


     

.controller('exploreCtrl', function($scope, $http){
    $scope.msg = 'Fetching movies';
    $.get('http://localhost:8080/movie/popular/35').then(function(response){
        var movies_comedy = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_comedy = movies_comedy;
        $scope.$apply();
        console.log($scope.movies_comedy);
    }, function(resp){
        console.log(resp);
    })

$.get('http://localhost:8080/movie/popular/28').then(function(response){
        var movies_action = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_action = movies_action;
        $scope.$apply();
        console.log($scope.movies_action);
    }, function(resp){
        console.log(resp);
    })

$.get('http://localhost:8080/movie/popular/18').then(function(response){
        var movies_drama = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_drama = movies_drama;
        $scope.$apply();
        console.log($scope.movies_drama);
    }, function(resp){
        console.log(resp);
    })

$.get('http://localhost:8080/movie/popular/16').then(function(response){
        var movies_animation = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_animation = movies_animation;
        $scope.$apply();
        console.log($scope.movies_animation);
    }, function(resp){
        console.log(resp);
    })

$.get('http://localhost:8080/movie/popular/10749').then(function(response){
        var movies_romance = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_romance = movies_romance;
        $scope.$apply();
        console.log($scope.movies_romance);
    }, function(resp){
        console.log(resp);
    })

$.get('http://localhost:8080/movie/popular/53').then(function(response){
        var movies_thriller = response['movie_list'];
       
        //$scope.movies = {};
        $scope.movies_thriller = movies_thriller;
        $scope.$apply();
        console.log($scope.movies_thriller);
    }, function(resp){
        console.log(resp);
    })



});