/**
 * Created by sherinannthomas on 14/04/17.
 */

'use strict';
angular.module('myApp.signup', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signup', {
            templateUrl: 'signup/signup.html',
            controller: 'signUpCtrl'
        });

    }])

    .controller('signUpCtrl', function ($scope, $http, $rootScope,$location) {

        $scope.signup = function () {
            console.log('in');
            var username = $scope.username;
            var password = $scope.password;
            var phone = $scope.phone;
            var email = $scope.email;
            var rpassword = $scope.rpassword;

            if (password != rpassword) {
                alert("password error");
            }
            else {
                var url = base_url + '/user/create';
                $.post(url,
                    {
                        username: username,
                        password: password,
                        email: email,
                        phone: phone
                    },
                    function (data, status) {
                    if (data.status == "OK") {
                        $location.path('/home');
                        $rootScope.token = data.token;
                        $rootScope.login_value = true;
                        $rootScope.showout=true;
                        $rootScope.showin=false;
                         if ($scope.checkbox == true) {
                            document.cookie = username + $rootScope.token;
                            $rootScope.remember_me = true;
                        }
                    }
         })

            }
        }

    });