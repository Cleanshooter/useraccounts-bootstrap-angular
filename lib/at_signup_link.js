// Simply 'inherites' helpers from AccountsTemplates
//Template.atSignupLink.helpers(AccountsTemplates.atSignupLinkHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atSignupLink.events(AccountsTemplates.atSignupLinkEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaSignupLinkContoller', function($scope){
	$scope.helpers(AccountsTemplates.atSignupLinkHelpers);
	$scope.events(AccountsTemplates.atSignupLinkEvents);
});