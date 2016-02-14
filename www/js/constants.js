angular.module('starter.constants',[])
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})
.constant('USER_ROLES', {
  editor: 'editor',
  guest: 'guest'
});
