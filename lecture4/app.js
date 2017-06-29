(function () {
  'use strict'; //evite erreur variable locale-globale
  var age=128;
  angular.module('premApp',[])
  .controller('premController', function ($scope) {
    $scope.name = "toto";
    $scope.age = age;
    $scope.ditBonjour = function(){
      return "salut " + $scope.name;
    };

  });
})();
