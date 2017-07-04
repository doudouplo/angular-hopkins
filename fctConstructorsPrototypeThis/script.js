function test(){
  console.log(this);
  this.uneVariable = "toto";
}
test(); // creation d'un nouveau contecte d'execution
console.log(window.uneVariable); //windox object racine


//function constructor
function Circle(rayon) {
  this.rayon = rayon;
}
var cercle = new Circle(10);
console.log(cercle);
