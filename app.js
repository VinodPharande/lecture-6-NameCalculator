(function(){
  'use strict';
  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function($scope){
      $scope.name = "";
      $scope.totalvalue = 0;

      $scope.displayNumeric = function(){
        console.log('hi');
        var totalNamevalue = calculateNumericForString($scope.name); //get the total value
        $scope.totalvalue = totalNamevalue;
      };

      function calculateNumericForString(string) {
        var totalStringvalue = 0;
        for (var i = 0; i < string.length; i++) {
          totalStringvalue += string.charCodeAt();
      }
      return totalStringvalue;
    }
    });
})();
