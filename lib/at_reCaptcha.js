// Simply 'inherites' rendered callback from AccountsTemplates
//Template.atReCaptcha.rendered = AccountsTemplates.atReCaptchaRendered;

// Simply 'inherites' helpers from AccountsTemplates
//Template.atReCaptcha.helpers(AccountsTemplates.atReCaptchaHelpers);

//Angular Version
'use strict'

angular.module('motoUserAccounts', ['angular'])
.controller('muaReCaptchaRenderedContoller', function($scope){
	$scope.helpers(AccountsTemplates.atReCaptchaHelpers);
	$scope.rendered(AccountsTemplates.atReCaptchaRendered);
});