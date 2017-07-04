//Arrays
var array =new Array();
array[0] = "un";
array[1] = "roger";
array[2] = 32;
array[3] = function (nom){
  console.log("bonjour " + nom);
};
array[4] = {
  rue : "allee des fleurs",
  ville : "ici"
};
console.log(array);
array[3]("toto");//invocation de la fonction
array[3](array[1]);
//recupere la propriete de l'objet literal dans le tab
console.log(array[4].ville);

//short hand array definition
var tab=[1,2,3,"quatre"];
console.log("taille du tableau = " + tab.length);
tab[4] = 5;
console.log(tab);

for (var element in tab ){
  console.log("la val est " + tab[element]);
}

//
var cours = {
  intitule : "histoire",
  "nombre d'heure" : 12,
  prof : "michel"
};
for (var prop in cours){
  console.log(prop + " : " + cours[prop]);//comme pour un array
}

var noms  = ["alain", "viviane", "medor"];
for (var nom in noms){
  console.log("salut " + noms[nom]);
}
noms.greatin= "hi";
 //attention car loop sur toutes les proprietes de l'objet
for (var nom in noms){
  console.log("salut " + noms[nom]);
}
