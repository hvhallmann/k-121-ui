'use strict';

angular.
  module('core.people').
  factory('People', ['$resource',
    function($resource) {
      return $resource('people/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'people'},
          isArray: true
        }
      });
    }
  ]);
