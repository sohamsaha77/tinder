'use strict';

app.controller('AuthCtrl', ['Auth', function (Auth) {

var auth = this;

auth.login = function(){
	console.log("login clicked");

	return Auth.login().then(function(result){
		console.log(result.user);
	});
};

auth.logout = function(){
Auth.logout();
};
	
}])