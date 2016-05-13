// Simply 'inherites' helpers from AccountsTemplates
//Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaSigninLinkContoller', function($scope){
	$scope.helpers(AccountsTemplates.atSigninLinkHelpers);
	$scope.events(AccountsTemplates.atSigninLinkEvents);
});