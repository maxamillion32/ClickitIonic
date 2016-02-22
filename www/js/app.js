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

  $stateProvider.state('register',{
    url: '/register',
    templateUrl:'views/register.html'
  });

  $stateProvider.state('which-building',{
    url: '/which-building',
    templateUrl:'views/which-building.html'
  });

  $stateProvider.state('single-building',{
    url: '/single-building',
    abstract:true,
    templateUrl:'views/single-building/index.html'
  });

  $stateProvider.state('single-building.home',{
    url: '/home',
    views:{
      'tab-home':{
        templateUrl:'views/single-building/home.html'
      }
    }
  });

  $stateProvider.state('single-building.posters',{
    url: '/posters',
    views:{
      'tab-posters':{
        templateUrl: 'views/single-building/posters.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');


}]);

app.controller('LoginCtrl',['$scope',function($scope){
  $scope.imgSrc = 'img/clickit_logo_full_no_background.png';
}]);

app.controller('ClickitCtrl',['$scope',function($scope){


  $scope.imgSrc = 'img/clickit_button_unpressed.png';

  $scope.onClick = function(){

  };
}]);

app.controller('SingleBuildingCtrl',['$scope',function($scope){
  $scope.title = 'Old Union';
    $scope.imgSrc = 'img/clickit_logo_full.png';
}]);

app.controller('SlideCtrl',['$scope',function($scope){

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
