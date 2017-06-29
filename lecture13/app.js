(function(){
  var app = angular.module("lect13", []);

  app.controller("nomDuController", function($scope,$filter){
    $scope.uneVariable = "une variable";

    $scope.uneFonction = function(){
      return "ceci est un retour de fonction";
    };


  });
})();
