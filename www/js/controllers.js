angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $state,$ionicPopup,Session,AuthService) {
  $scope.isLogin = AuthService.isAuthenticated();
  $scope.user = Session.user;
  $scope.logout = function() {
    var ionicConfirm = $ionicPopup.confirm({
      title:'Logout',
      template:'Are you sure want to logout'
    });
    ionicConfirm.then(function(res){
      if(res){
        AuthService.logout()
        $state.go("login",{},{reload: true})
      }else{
        console.log("user canceld")
      }
    })
  }
})
.controller('LoginController',function($scope,$ionicModal,$state,FireBaseData,AuthService){
  $scope.doLogin = function(provider) {
    AuthService.login(
      provider,
      {
        remember: "sessionOnly",
        scope: "email"
      },
      function(error, authData){
          if(error){
            console.log("Error", error)
          }else{
            $state.go("app.browse",{},{reload: true})
          }
      })
  }
})
.controller('ProfileController',function($scope,Session){

});
