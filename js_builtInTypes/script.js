var Personne = {
  nom : "toto",
  prenom : "dupont",
  adresse :{
    rue : "des martyres",
    no : 125,
    ville : "trucville",
  },
  chomeur : true,
};

console.log(Personne);
console.log(Personne.adresse.ville);
console.log(Personne.chomeur);

Personne.chomeur=false;
console.log(Personne.chomeur);

var rien;
console.log(rien);

//console.log(existePas);

var nomDefinie = null;
console.log(nomDefinie);

//test undefined
// var x;
var x = 8;
console.log("x = " + x);
if (x == undefined){
  console.log("x est undefined");
}else{
  console.log("x pas undefined et = " + x);
}
