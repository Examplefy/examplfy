angular.module('app.controllers', []).
  controller('askController', function($scope, examplfyAPIservice) {
    $scope.topicName=""
    $scope.conceptName=""
    $scope.picture=""
    examplfyAPIservice.getTopics().success(function (response) {
        //Dig into the responde to get the relevant data
        var topicNames = [];
        for (i = 0; i < response['data'].length; i++) {
          topicNames.push(response['data'][i]['name'])
        }
        $scope.topicNames = topicNames
      })

    $scope.evaluateConcepts = function() {
      examplfyAPIservice.getConceptsByTopic($scope.topicName).success(function (response) {
        var conceptNames = [];
        for (j = 0; j < response.length; j++) {
          conceptNames.push(response[j]['Name']);
        }
        $scope.conceptNames = conceptNames;
        $scope.conceptName = "";
      })
    }

    $scope.submit = function() {
      if ($scope.topicName=="" | $scope.conceptName=="") {
        alert("An example must have both a topic and a concept.");
        return
      }

      var topicId = 0;
      var conceptId = 0;

      /*
        this nested promise stucture is being used to assert that both
        the topicId and conceptId are known before adding the example
      */
      examplfyAPIservice.getTopicID($scope.topicName)
        .then(function(result) {
          topicId = result['data'][0]['id'];
          examplfyAPIservice.getConceptID($scope.conceptName)
            .then(function(result) {
              conceptId = result['data'][0]['id'];
              return examplfyAPIservice.putExample(
                $scope.title,
                $scope.content,
                topicId,
                conceptId,
                $scope.email,
                $scope.picture
              );
            })
            .then(function(result) {
              // reset the form
              alert("Your question has been submitted succesfully.")
              $scope.title = "";
              $scope.content = "";
              $scope.topicName = "";
              $scope.conceptName = "";
              $scope.picture = "";
              $scope.email = "";
              $scope.topicName = "";
              $scope.conceptName = "";
              //alert(JSON.stringify(result));
            })
        })
    }

  });
