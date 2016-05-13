// Simply 'inherites' helpers from AccountsTemplates
//Template.atTitle.helpers(AccountsTemplates.atTitleHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaTitleContoller', function($scope){
	$scope.helpers(AccountsTemplates.atTitleHelpers);
});