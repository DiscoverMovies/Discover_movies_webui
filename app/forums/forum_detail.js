'use strict';

angular.module('myApp.forumDetails',['ngRoute'])
 .config(['$routeProvider',function($routeProvider){
$routeProvider.when('/forums/:id',{
            templateUrl:'forums/forum_detail.html',
            controller:'forumDetailsCtrl'
        });
    }])


.controller('forumDetailsCtrl', function($scope, $http,$routeParams,$rootScope){
    var id=$routeParams.id;
    $.get('http://localhost:8080/forum/get/'+id).then(function(response){
        var forumDetail = response['forum'];
        $scope.forumDetail=forumDetail;
        $scope.$apply();
        console.log(forumDetail);
    
    }, function(resp){
        console.log(resp);
    })
})