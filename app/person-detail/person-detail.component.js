'use strict';

angular.
  module('personDetail').
  component('personDetail', {
    templateUrl: 'person-detail/person-detail.template.html',
    controller: ['$routeParams', 'People', '$scope',
      function PersonDetailController($routeParams, Person, $scope) {
        var self = this;
        Person.resourceItem({_id: $routeParams.personId}).query(function(item) {
          self.person = item[0];
        });

        $scope.editPerson = function(personId) { //Update the edited movie. Issues a PUT to /api/movies/:id
          console.log('im item', personId);
          console.log('im hooo', $scope);
          Person.updateResource.update({id: personId}, {name: $scope.person.name, email: $scope.person.email});
        };
      }
    ]
  });
