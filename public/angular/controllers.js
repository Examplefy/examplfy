angular.module('app.controllers', []).
  controller('askController', function($scope, examplfyAPIservice) {
    $scope.exampleList = [];

    examplfyAPIservice.getExamples().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.exampleList = response;
    });
  });
