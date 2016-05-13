// Simply 'inherites' helpers from AccountsTemplates
//Template.atError.helpers(AccountsTemplates.atErrorHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaErrorContoller', function($scope){
	$scope.helpers(AccountsTemplates.atErrorHelpers);
});
