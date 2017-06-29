(function(){
  var app = angular.module("lect13", []);

  app.controller("nomDuController", function($scope, $filter){
    $scope.uneVariable = "une variable";

    $scope.uneFonction = function(){
      return "ceci est un retour de fonction";
    };

    $scope.montant = $filter("uppercase") ("texte majuscule");

    var texte = "un texte en majuscule";
    var filtre = $filter("uppercase")(texte);
    texte = "un autre texte"
    $scope.texteMaj = filtre;
  });
})();
