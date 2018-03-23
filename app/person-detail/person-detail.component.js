'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('personDetail').
  component('personDetail', {
    templateUrl: 'person-detail/person-detail.template.html',
    controller: ['$routeParams', 'People',
      function PersonDetailController($routeParams, Person) {
        var self = this;
        self.person = Person.get({_id: $routeParams.personId}, function(person) {
          console.log('pers', person);
          // self.setImage(phone.images[0]);
        });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });
