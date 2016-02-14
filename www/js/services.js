angular.module('starter.services',[])
.service('Session',function(){
  this.create = function(authData){
    this.user ={}
    if(authData){
      this.user.uid = authData.auth.uid;
      this.user.displayName = authData.facebook.displayName;
      this.user.imageURL =authData.facebook.profileImageURL;
      this.authData = authData;
    }
  }
  this.destroy = function(){
    this.user={};
  }
})
