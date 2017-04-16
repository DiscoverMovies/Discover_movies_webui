/**
 * Created by sherinannthomas on 14/04/17.
 */
'use strict';
var base_url = 'http://localhost:8080';



angular.module('myApp.signin', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/signin', {
            templateUrl: 'signin/signin.html',
            controller: 'signInCtrl'
        });

    }])

    .controller('signInCtrl', function ($scope, $http, $rootScope, $location) {
        $scope.login = function () {
            var username = $scope.uname;
            var password = $scope.psw;
            var url = base_url + '/user/auth';

            $.post(url,
                {
                    username: username,
                    password: password
                },
                function (data, status) {
                    if (data.status == "OK") {
                        $location.path('/home');
                        $rootScope.showin = false;
                        $rootScope.showout = false;
                        $rootScope.token = data.token;
                        $rootScope.login_value = true;


                        if ($scope.checkbox == true) {
                            document.cookie = username + $rootScope.token;
                            $rootScope.remember_me = true;
                        }

                    }
                    else
                        alert('wrong username or password');

                }
            )
        }


      /*  $scope.signout = function () {
            console.log('yes');
            $rootScope.showout = true;
            $rootScope.showin = true;
            $rootScope.token = [];
            $rootScope.login_value = false;
            $rootScope.remember_me = false;

        }*/

    })

/*
function loginCtrl($scope,$http){
 
     console.log('in');

login=function(){
    console.log('just in');
        var username=$scope.uname;
        var password=$scope.psw;
        var url=base_url+'/user/auth';
        if($scope.checkbox==true)
            $scope.state.remember_me=true;
        $.post(url,
        {
            username: username,
            password: password
        },
            function(data, status){
                if(data.status=="OK"){
                    console.log("logged in");
                    $routescope.state.token=data.token;
                    $routescope.state.login_value=true;
                    if(state.remember_me==true)
                        document.cookie=username+$routescope.state.token;
                    $('#id01').text('logout');
                }
                else
                    alert('wrong username or password');
        // document.getElementById('id03').innerHTML = "Wrong keyword entry";
        //$('#id03').show();
        });
        //$('#id03').hide();
}
}*/