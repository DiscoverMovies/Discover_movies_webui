/**
 * Created by sherinannthomas on 14/04/17.
 */

'use strict';
angular.module('myApp.signup',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/signup',{
        templateUrl:'signup/signup.html',
        controller:'SignUpCtrl'
    });

}])

.controller('SignUpCtrl',[function(){

}]);