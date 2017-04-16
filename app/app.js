'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.signin',
    'myApp.signup',
    'myApp.explore',
    'myApp.forums',
    'myApp.movieDetails'
])
.run(function($rootScope){
$rootScope.token=[];
$rootScope.login_value=true;
$rootScope.remember_me=false;
$rootScope.showin=true;
$rootScope.showout=true;

})
.config([ '$routeProvider', function( $routeProvider,$scope) {
  $routeProvider.when('/create_forum', {templateUrl: 'forums/create_forum.html', controller: 'forumCreationCtrl'});

  $routeProvider.when('/movie/id', {templateUrl: 'home/movie_details.html', controller: 'movieDetailsCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])


.controller('myAppCtrl',function(){


});
