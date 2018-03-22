'use strict';

// Register `peopleList` component, along with its associated controller and template
angular.
  module('peopleList').
  component('peopleList', {
    templateUrl: 'people-list/people-list.template.html',
    controller: ['People',
      function PeopleListController(People) {
        console.log('im here');
        
        this.people = People.query();
        this.orderProp = 'age';
      }
    ]
  });
