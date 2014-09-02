$(".navbar-fixed-top").addClass('animated fadeInDown');

var eraceApp = angular.module('eraceApp', ['ngRoute']);

//peer expert controller
eraceApp.controller('educationalModulesController', function($scope) {

});

//seeking controller
eraceApp.controller('homeController', function($scope) {
  // setTimeout(function(){
  //   window.location = '#/peer-connection';
  // }, 2000);
});

//controllers definition
eraceApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './templates/home.htm',
            controller : 'homeController'
        })

        .when('/educationalModules', {
            templateUrl : './templates/educationalModules.htm',
            controller : 'educationalModulesController'
        })

        .when('/cancer101', {
            templateUrl : './templates/cancer101.htm'
        })

        .when('/disparity', {
            templateUrl : './templates/disparity.htm#disparityHome'
        })

        .when('/community', {
            templateUrl : './templates/community.htm'
        })

        .when('/getinvolved', {
            templateUrl : './templates/getinvolved.htm'
        })

        .otherwise({
            redirectTo : '/'
        })
}]);
