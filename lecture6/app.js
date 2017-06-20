(function () {
  'use strict';

  var app=angular.module('lect6',[]);

  app.controller('controlleLect6', function($scope) {
    $scope.saisie = "rien";

    $scope.calcul = function(){
      var somme=0;
      for (var i=0; i < $scope.saisie.length; i++){
        somme = somme + $scope.saisie.charCodeAt(i);
      };
      $scope.resultat = somme;
      return $scope.resultat;
    };

  });

  app.controller("calculTexteAsciiKeyUp", function($scope){
    $scope.saisieKeyUp = "";

    $scope.afficheResultat = function(){
      var sommeKU=0;
      for (var i=0; i < $scope.saisieKeyUp.length; i++){
        sommeKU = sommeKU + $scope.saisieKeyUp.charCodeAt(i);
      };
      $scope.resultatKeyUp = sommeKU;
      return $scope.resultatKeyUp;
  };
});

})();
