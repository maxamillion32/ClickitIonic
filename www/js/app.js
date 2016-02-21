(function(){


var app = angular.module('app', ['ionic']);



app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){

  $stateProvider.state('login',{
    url: '/login',
    templateUrl:'views/login.html'
  });

  $stateProvider.state('clickit',{
    url: '/clickit',
    templateUrl:'views/clickit.html'
  });

  $urlRouterProvider.otherwise('/clickit');


}]);

app.controller('LoginCtrl',['$scope',function($scope){

}]);

app.controller('ClickitCtrl',['$scope',function($scope){





  

}]);



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());
