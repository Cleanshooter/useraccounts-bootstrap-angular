// Simply 'inherites' helpers from AccountsTemplates
//Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaNavButtonContoller', function($scope){
	$scope.helpers(AccountsTemplates.atNavButtonHelpers);
	$scope.events(AccountsTemplates.atNavButtonEvents);
});