'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.signin',
    'myApp.signup',
    'myApp.explore',
    'myApp.forums'
])
.config([ '$routeProvider', function( $routeProvider) {
  $routeProvider.when('/create_forum', {templateUrl: 'forums/create_forum.html', controller: 'forumCreationCtrl'});

  $routeProvider.when('/movie_details', {templateUrl: 'home/movie_details.html', controller: 'movieDetailsCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

  