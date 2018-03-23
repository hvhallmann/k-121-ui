'use strict';

angular.
  module('core.people').
  factory('People', ['$resource',
    function($resource) {
      return $resource(' http://localhost:3000/person/list', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
