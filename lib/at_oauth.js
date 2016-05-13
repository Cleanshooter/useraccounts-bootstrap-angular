// Simply 'inherites' helpers from AccountsTemplates
//Template.atOauth.helpers(AccountsTemplates.atOauthHelpers);
//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaOauthContoller', function($scope){
	$scope.helpers(AccountsTemplates.atOauthHelpers);
});