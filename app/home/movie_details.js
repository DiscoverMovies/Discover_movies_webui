'use strict';

angular.module('myApp.movieDetails',['ngRoute'])
 .config(['$routeProvider',function($routeProvider){
$routeProvider.when('/movie/:id',{
            templateUrl:'home/movie_details.html',
            controller:'movieDetailsCtrl'
        });
    }])


.controller('movieDetailsCtrl', function($scope, $http,$routeParams){
    var id=$routeParams.id;
    $.get('http://localhost:8080/movie/get/'+id).then(function(response){
        var movieDetail = response['movie'];
        $scope.movieDetail=movieDetail;
        $scope.$apply();
        //console.log($scope.movieDetail);
    
    }, function(resp){
        console.log(resp);
    })
$.get('http://localhost:8080/recommendation/movie/'+id+'?count=1').then(function(response){

        var  suggest= response;
        $scope.suggest=suggest;
        $scope.$apply();
        console.log($scope.suggest);
       
    
    }, function(resp){
        console.log(resp);
    })
      


})