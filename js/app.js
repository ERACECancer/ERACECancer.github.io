$(".navbar-fixed-top").addClass('animated fadeInDown');

var eraceApp = angular.module('eraceApp', ['ngRoute']);

//search controller
// eraceApp.controller('searchController', function($scope, $http, $rootScope) {
//     apiBaseURL = 'https://ttlc.intuit.com/api/v1/'
//     requestLoading = false;
//     $scope.searchButtonClicked = function() {
//         requestString = apiBaseURL + 'search/posts?q=' + encodeURIComponent($scope.searchValue);
//         if(!requestLoading) {
//             $http({method : 'GET', url : requestString})
//             .success(function(data, status, headers, config) {
//                 $rootScope.resultData = data;
//                 window.location = '#/results';
//             }).
//
//             error(function(data, status, headers, config) {
//
//             });
//         }
//     };
// });

//peer expert controller
eraceApp.controller('educationalModulesController', function($scope) {

});

//seeking controller
eraceApp.controller('homeController', function($scope) {
  // setTimeout(function(){
  //   window.location = '#/peer-connection';
  // }, 2000);
});

//chat controller
eraceApp.controller('chatController', function($scope) {
// array questions

var nextIndex = 0;
var chatInterval = setInterval(function(){
  if (nextChat[nextIndex] === undefined){
    document.getElementById("resolutionButton").style.opacity = "1";
    document.getElementById("cpaButton").style.opacity = "1";
    clearInterval(chatInterval)
  } else {
    document.getElementById(chatIDs[nextIndex]).innerHTML = nextChat[nextIndex];
    document.getElementById(chatIDs[nextIndex++]).style.opacity = "1";
  }
}, 1000);

$scope.resolutionButtonClick = function(){
  window.location ="#/expert";
}

$scope.cpaButtonClick = function(){
  window.location = '#/cpa';
}});



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
            templateUrl : './templates/disparity.htm'
        })

        .when('/community', {
            templateUrl : './templates/community.htm'
        })

        .otherwise({
            redirectTo : '/'
        })
}]);
