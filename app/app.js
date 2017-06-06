'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.signin',
    'myApp.signup',
    'myApp.explore',
    'myApp.forums',
    'myApp.movieDetails',
    'myApp.signOut',
    'myApp.createForum'
])
.run(function($rootScope){
$rootScope.token=[];
$rootScope.login_value=true;
$rootScope.remember_me=false;
$rootScope.showin=true;
$rootScope.showout=false;
$rootScope.uname=[];

})
.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'index.html',
            controller: 'myAppCtrl'
        });

    }])

    .config(['$routeProvider',function($routeProvider){
$routeProvider.when('/search',{
            templateUrl:'search.html',
            controller:'myAppCtrl'
        });
    }])

/*.config([ '$routeProvider', function( $routeProvider,$scope) {
  $routeProvider.when('/create_forum', {templateUrl: 'forums/create_forum.html', controller: 'forumCreationCtrl'});

  $routeProvider.when('/movie/id', {templateUrl: 'home/movie_details.html', controller: 'movieDetailsCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])*/


.controller('myAppCtrl',function($scope,$http,$location){
  

    $scope.searchMovie=function()
    {
        var q = $scope.searchItem;
            
          
           /* $.get('http://localhost:8080/movie/search',
                {
                    q:q
                },
                function (data, status) {
              
                    console.log(data);
                    if (data.status == "OK") {
                        $location.path('/movie/'+data.id);

                    }
                    else
                        alert('not found');
                    })*/
    $.get('http://localhost:8080/movie/search',{q:q}).then(function(response){

        var movieResult = response['movie_list'];
          console.log('just in');
       
        //$scope.movies = {};
        $scope.movieResult = movieResult;
        $scope.$apply();
          $.each(movieResult, function (idx, item) {
        console.log(item.original_title);

        $location.path('/search');
          }

        
    
          )}, function(resp){
        console.log(resp);
      
            }
    )       
}
})

