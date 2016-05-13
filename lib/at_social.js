// Simply 'inherites' helpers from AccountsTemplates
//Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atSocial.events(AccountsTemplates.atSocialEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaSocialContoller', function($scope){
	$scope.helpers(AccountsTemplates.atSocialHelpers);
	$scope.events(AccountsTemplates.atSocialEvents);
});