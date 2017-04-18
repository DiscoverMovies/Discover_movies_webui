'use strict';
//var base_url='http://localhost:8080';
angular.module('myApp.forums',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/forums',{
        templateUrl:'forums/forums.html',
        controller:'forumsCtrl'
    });
    $routeProvider.when('/create_forum',{
        templateUrl:'forums/create_forum.html',
        controller:'forumCreationCtrl'
    });

}])
.controller('forumsCtrl', function($scope, $http,$location){
    $.get('http://localhost:8080/forum/all').then(function(response){
        var forum_all = response['forum'];
        
       console.log(response);
        //$scope.movies = {};
        $scope.forum_all = forum_all;
        $scope.$apply();
        
    }, function(resp){
        console.log(resp);
    });

    $scope.createNewForum = function () {
            $location.path('/create_forum');
        };


})

