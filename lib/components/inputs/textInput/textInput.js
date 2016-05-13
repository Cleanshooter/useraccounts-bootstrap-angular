'use strict'

angular.module('userAccounts', [])
.controller('textInputController', function( $scope ){
	//So our parent scope is available to the directive...
})
.directive('textInput', function() {
  return {
    templateUrl: '/lib/components/inputs/textInput/textInput.html',

    replace: true,

    scope: {
      displayName: "@" ,
      validating: "@",
      hasError:"@",
      _id:"@",
      type:"@",
      placeholder:"@",
      iconClass:"@",
      hasIcon:"@",
      isError:"@"  
    },
    link: function (scope, element) {
      //isValidating
      scope.validating = scope.isValidating ? "validating" : "";
      //hasError
      scope.hasError = scope.isError ? "has-error" : "";
      //hasSuccess
      scope.hasSuccess = scope.isSuccess ? "has-success" : "";
      //feedback
      scope.hasFeedback = scope.feedback ? "has-feedback" : "";
      //required
      scope.optionalText = scope.required ? scope.required : "";
    }
  };
});