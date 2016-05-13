// Simply 'inherites' helpers from AccountsTemplates
//Template.atResendVerificationEmailLink.helpers(AccountsTemplates.atResendVerificationEmailLinkHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atResendVerificationEmailLink.events(AccountsTemplates.atResendVerificationEmailLinkEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaResendVerificationEmailLinkContoller', function($scope){
	$scope.helpers(AccountsTemplates.atResendVerificationEmailLinkHelpers);
	$scope.events(AccountsTemplates.atResendVerificationEmailLinkEvents);
});