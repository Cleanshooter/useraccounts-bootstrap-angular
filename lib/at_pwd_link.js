// Simply 'inherites' helpers from AccountsTemplates
//Template.atPwdLink.helpers(AccountsTemplates.atPwdLinkHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atPwdLink.events(AccountsTemplates.atPwdLinkEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaPwdLinkContoller', function($scope){
	$scope.helpers(AccountsTemplates.atPwdLinkHelpers);
	$scope.events(AccountsTemplates.atPwdLinkEvents);
});