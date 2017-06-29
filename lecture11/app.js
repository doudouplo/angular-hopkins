(function(){
  'use strict';
  angular.module("MsgApp",[]).
  controller("MsgController",MsgController);

  MsgController.$inject =["$scope"];
  function MsgController ($scope) {
    $scope.nom="toto";
    $scope.ecritMessage = function(){
      return "et voici un bo message, is nit";
    }
    $scope.image="deg_vert";

    $scope.changeImage = function(){
      $scope.image="etoile_vert";
    };

    $scope.ToggleChangeImage = function(){
      if($scope.image ==  "etoile_vert"){
        console.log("etoile_vert");
        $scope.image = "deg_vert";
      }else{
        $scope.image = "etoile_vert";
      }
    };
  };

}
)();
