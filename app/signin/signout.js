'use strict';
var base_url = 'http://localhost:8080';



angular.module('myApp.signOut', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signout', {
            templateUrl: 'signin/signout.html',
            controller: 'signOutCtrl'
        });

    }])

    .controller('signOutCtrl', function ($scope, $http, $rootScope, $location) {
        $rootScope.showout=false;
        $rootScope.showin=true;
        $rootScope.login_value=false;
        $rootScope.remember_me=false;
    })