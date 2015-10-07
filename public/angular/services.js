angular.module('app.services', []).
  factory('examplfyAPIservice', function($http) {

    var examplfyAPI = {};

    examplfyAPI.getExamples = function() {
      return $http({
        method: 'GET',
        url: 'https://api.backand.com:443/1/objects/items',
        headers: {
          'AnonymousToken': '8d25354c-fffb-42fa-82b2-083beb3d4093'
        }
      });
    }

    return examplfyAPI;
  });
