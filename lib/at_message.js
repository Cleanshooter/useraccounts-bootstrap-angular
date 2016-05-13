// Simply 'inherites' helpers from AccountsTemplates
//Template.atMessage.helpers(AccountsTemplates.atMessageHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaMessageContoller', function($scope){
	$scope.helpers(AccountsTemplates.atMessageHelpers);
});