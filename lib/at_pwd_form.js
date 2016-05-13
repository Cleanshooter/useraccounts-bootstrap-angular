// Simply 'inherits' helpers from AccountsTemplates
//Template.atPwdForm.helpers(AccountsTemplates.atPwdFormHelpers);

// Simply 'inherits' events from AccountsTemplates
//Template.atPwdForm.events(AccountsTemplates.atPwdFormEvents);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaPwdFormContoller', function($scope){
	$scope.helpers(AccountsTemplates.atPwdFormHelpers);
	$scope.events(AccountsTemplates.atPwdFormEvents);
});