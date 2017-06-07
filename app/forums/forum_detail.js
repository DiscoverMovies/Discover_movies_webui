'use strict';

angular.module('myApp.forumDetails',['ngRoute'])
 .config(['$routeProvider',function($routeProvider){
$routeProvider.when('/forums/:id',{
            templateUrl:'forums/forum_detail.html',
            controller:'forumDetailsCtrl'
        });
    }])


.controller('forumDetailsCtrl', function($scope, $http,$routeParams,$rootScope,$location){
    var id=$routeParams.id;
    $.get('http://localhost:8080/forum/get/'+id).then(function(response){
        var forumDetail = response['forum'];
        $scope.forumDetail=forumDetail;
        $scope.$apply();
        console.log(forumDetail);
    
    }, function(resp){
        console.log(resp);
    })
    $.get('http://localhost:8080/forum/replies/'+id).then(function(response){
        //var replyDetail = response['forum'];
        //$scope.forumDetail=forumDetail;
        //$scope.$apply();
        console.log(response);
    
    }, function(resp){
        console.log(resp);
    })

   $scope.replyAddForum= function(){
       console.log('reply create called');
        console.log(id);
        var token=$rootScope.token;
        var text=$scope.replyPost;
        console.log(token,text);
       $.post('http://localhost:8080/forum/reply/post/'+id,
        {
           token:token,
           text:text
      },
      function(data, status){
      if(data.status=="OK"){
       console.log('replied');
        $location.path('/forums/');
      }
      });
   }
    
})