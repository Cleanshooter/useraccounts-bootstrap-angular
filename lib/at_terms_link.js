// Simply 'inherites' helpers from AccountsTemplates
//Template.atTermsLink.helpers(AccountsTemplates.atTermsLinkHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atTermsLink.events(AccountsTemplates.atTermsLinkEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaTermsLinkContoller', function($scope){
	$scope.helpers(AccountsTemplates.atTermsLinkHelpers);
	$scope.events(AccountsTemplates.atTermsLinkEvents);
});