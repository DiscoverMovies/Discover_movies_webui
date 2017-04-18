'use strict';

angular.module('myApp.createForum',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  
$routeProvider.when('/create_forum',{
        templateUrl:'forums/create_forum.html',
        controller:'forumCreationCtrl'
    });

}])

.controller('forumCreationCtrl',function($scope,$http,$location,$rootScope){
    $scope.create=function(){
    console.log('in');
    console.log($scope.forum_Name);
     var token=$rootScope.token;
    var title=$scope.forum_Name;
    var text=$scope.forum_Description;
    console.log(title,text,token);
    var url=base_url+'/forum/create';
    $.post(url,
        {
            title:title,
         token:token,
        text:text
      },
      function(data, status){
      if(data.status=="OK"){
        $location.path('/forums');
      }
      });
    }

});
