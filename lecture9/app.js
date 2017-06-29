(function(){
  'use strict';

  angular.module("DIApp",[]).
  controller("DIController",DIController);

  DIController.$inject = ['$scope', '$filter', '$injector'];
  function DIController($scope, $filter, $injector){
    $scope.nom="toto";

    $scope.upper = function () {
      var upCase = $filter("uppercase");
      $scope.nom = upCase($scope.nom);
    };
    console.log($injector.annotate(DIController));
  }
  console.log(DIController.toString());
})();

//minimise par https://javascript-minifier.com/
//et definir controlleur.$inject[liste eleme a injecter]
//t=["$scope","$filter","$injector"],console.log(o.toString())}();
