// Simply 'inherites' helpers from AccountsTemplates
//Template.atPwdFormBtn.helpers(AccountsTemplates.atPwdFormBtnHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaPwdFormBtnContoller', function($scope){
	$scope.helpers(AccountsTemplates.atPwdFormBtnHelpers);
});