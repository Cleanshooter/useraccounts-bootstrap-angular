//TODO Needs refactor
/*_.each(AccountsTemplates.atInputRendered, function(callback){
  Template.atInput.onRendered(callback);
  Template.atHiddenInput.onRendered(callback);
});*/

//Refactored
/*
// Simply 'inherites' helpers from AccountsTemplates
Template.atInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.atInput.events(AccountsTemplates.atInputEvents);

// Simply 'inherites' helpers from AccountsTemplates
Template.atTextInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atCheckboxInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atSelectInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atRadioInput.helpers(AccountsTemplates.atInputHelpers);

// Simply 'inherites' helpers from AccountsTemplates
Template.atHiddenInput.helpers(AccountsTemplates.atInputHelpers);
*/
var inputTypeControllerName = ['muaInputContoller','muaTextInputController','muaCheckboxInput',
	'muaSelectInputController','muaRadioInputController','muaHiddenInputController'];

_.each(inputTypeControllerName, function(controllerName){
	angular.module('motoUserAccounts', ['angular'])
	.controller(controllerName, function($scope){
		$scope.helpers(AccountsTemplates.atInputHelpers);
		if(controlerName == "muaInputContoller"){
			$scope.events(AccountsTemplates.atInputEvents);
			//$scope.onRendered(AccountsTemplates.onRendered();
		}
	});
});

// Sets up default Bootstrap icon classes for social button icons
AccountsTemplates.configure({
    texts: {
        inputIcons: {
            isValidating: "glyphicon glyphicon-refresh",
            hasError: "glyphicon glyphicon-remove",
            hasSuccess: "glyphicon glyphicon-ok",
        }
    },
});
