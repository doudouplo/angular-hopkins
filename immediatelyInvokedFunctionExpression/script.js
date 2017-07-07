var fctEntreParenthese = (function(){
  console.log("fctEntreParenthese");
});
fctEntreParenthese();

//Immediately Invoked Function Expression
//IIFE
(function(){
  console.log("iife");
})();

//passage de parametre
(function (nom) {
  console.log("salut " + nom);
})("toto");

//pour exposer en dehors des methodes et des noms
//sans risque de collision dans l'espace des noms de variables
//Immediately Invoked Function Expressions are usually used
//to place code into its own execution context not to conflict
//with the global scope.
(function(window){
  console.log(window);
  var salutation={};
  salutation.nom = "henry";
  salutation.saluer = function(){
    console.log("bjr " + salutation.nom);
  };
  window.salutation = salutation;
})(window);

salutation.saluer();
