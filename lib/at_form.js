// Simply 'inherites' helpers from AccountsTemplates
//Template.atForm.helpers(AccountsTemplates.atFormHelpers);
//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaFormContoller', function($scope){
	$scope.helpers(AccountsTemplates.atFormHelpers);
});