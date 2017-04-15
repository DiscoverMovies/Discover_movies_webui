/**
 * Created by sherinannthomas on 14/04/17.
 */
'use strict';
var base_url='http://localhost:8080';

angular.module('myApp.signin',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/signin',{
        templateUrl:'signin/signin.html',
        controller:'SignInCtrl'
    });

}])

.controller('SignInCtrl',[function($scope,$http,$rootScope){

}]);
