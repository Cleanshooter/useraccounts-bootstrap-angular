// Simply 'inherites' helpers from AccountsTemplates
//Template.atResult.helpers(AccountsTemplates.atResultHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaResultContoller', function($scope){
	$scope.helpers(AccountsTemplates.atResultHelpers);
});