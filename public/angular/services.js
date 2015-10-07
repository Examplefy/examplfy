angular.module('app.services', []).
  factory('examplfyAPIservice', function($http) {

    var examplfyAPI = {};
    var token = 'ef96151d-aa33-4bd0-a078-86e3a6de9cf7'

    examplfyAPI.getExamples = function() {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com:443/1/objects/items',
        headers: {
          'AnonymousToken': token
        }
      });
    }

    examplfyAPI.getTopics = function() {
       return $http({
        method: 'GET',
        url: 'https://api.backand.com:443/1/objects/topic',
        headers: {
          'AnonymousToken': token
        }
      })
    }

    examplfyAPI.getConceptsByTopic = function(topicName) {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com/1/query/data/conceptsByTopic?parameters=%7B%22topic%22:%22' + topicName + '%22%7D',
        headers: {
          'AnonymousToken': token
        }
      })
    }

    examplfyAPI.getTopicID = function(topicName) {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com/1/query/data/topicID',
        headers: {
          'AnonymousToken': token
        },
        params: {
          parameters: {
            topic: topicName
          }
        }
      })
    }

    examplfyAPI.getConceptID = function(conceptName) {
    return $http({
        method: 'GET',
        url: 'https://api.backand.com/1/query/data/conceptID',
        headers: {
          'AnonymousToken': token
        },
        params: {
          parameters: {
            concept: conceptName
          }
        }
      })
    }


    examplfyAPI.putExample = function(title, content, topic, concept, email, picture) {
      return $http({
        method: 'POST',
        url: 'https://api.backand.com:443/1/objects/example',
        headers: {
          'AnonymousToken': token
        },
        data: {
        	"title": title,
        	"content": content,
        	"topic": topic,
        	"concept": concept,
        	"email": email,
        	"date": new Date(),
        	"picture": picture
        }
      })
    }

    return examplfyAPI;
  });
