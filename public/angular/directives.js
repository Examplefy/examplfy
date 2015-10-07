angular.module('app.directives', []).
  directive('selectRequired', function() {
    alert("calling directive");
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.selectRequired = function(modelValue, viewValue) {
          alert("calling validation");
          return (ctrl.$modelValue.length > 0);
        }
      }
    };
  });
