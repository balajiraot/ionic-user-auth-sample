angular.module('starter.factory', [])
.factory('FireBaseData', function(){
  var ref = new Firebase("Firebase Url");
  return {
    ref: function(){
      return ref;
    }
  }
})
.factory('AuthService',function(FireBaseData,Session){
    var authService = {};
    authService.isAuthenticated =function(){
      return !!Session.authData;
    };
    authService.login =function(provider,scope,callback, errorCallback) {
      FireBaseData.ref().authWithOAuthPopup(provider,
        function(error, authData){
          Session.create(authData)
          callback(error,authData);
        },scope)
    };

    authService.logout =function(){
      FireBaseData.ref().unauth();
      Session.destroy();
    };

    Session.create(FireBaseData.ref().getAuth())

    return authService;
})
