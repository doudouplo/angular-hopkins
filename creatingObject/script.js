//avec NEW()
var personne = new Object();
console.log(personne);

personne.nom = "toto";
console.log(personne);

personne.adresse = new Object();
personne.adresse.ville = "noWhere";
personne.adresse.rue = "de la rose";

personne.getVille = function(){
  console.log("adresse = " + personne.adresse.ville);
}

personne.getVille();

console.log(personne.adresse.ville);
console.log(personne["adresse"]["ville"]);

 //param peut etre string avec espace
personne["aime t'il les fleurs"] = "oui";
console.log(personne);

//param dont le nom est une variable
var age = "l'age de personne est";
personne[age] = 12;
console.log(personne);

//object literal
autrePersonne = {
  nom : "toto" ,
  adresse : { ville : "noWhere" ,
              rue : "de la rose"
            },
  age : 12 ,
  "aime t'il les fleurs" : "oui",
  getville : function () { //declaration fonction
    console.log(this.adresse.ville);
  },
  getInfo : function(){
    console.log(this);
  }

};
console.log("autrePersonne : " + autrePersonne);
console.log(autrePersonne["aime t'il les fleurs"]);
autrePersonne.getville();
autrePersonne.getInfo();
