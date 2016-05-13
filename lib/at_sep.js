// Simply 'inherites' helpers from AccountsTemplates
//Template.atSep.helpers(AccountsTemplates.atSepHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaSepContoller', function($scope){
	$scope.helpers(AccountsTemplates.atSepHelpers);
});