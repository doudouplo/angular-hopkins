function test(){
  console.log(this);
  this.uneVariable = "toto";
}
test(); // creation d'un nouveau contecte d'execution
console.log(window.uneVariable); //windox object racine


//function constructor
function Circle(rayon) {
  this.rayon = rayon;
  this.getSurface = function(){
    return Math.pow(this.rayon,2) * Math.PI;
  };
}
var cercle = new Circle(10);
console.log(cercle);
console.log(cercle.getSurface());

//fct avec prototype
function Carre(cote){
  this.cote = cote;
}
//creer une seule fois en memoire
//dans le memory space
Carre.prototype.getSurface = function(){
  return Math.pow(this.cote, 2);
};
var carre = new Carre(5);//new = fct constructor
console.log(carre.getSurface());
