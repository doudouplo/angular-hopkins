// var inc = function(){
//   var dateDeb = new Date().getMilliseconds();
//   for (var i = 0 ; i < 100000000; i++){
//   }
//   var dateFin = new Date().getMilliseconds();
//   var temps = dateFin - dateDeb;
//   console.log(temps);
// };
//
// inc();

//passage par valeur
var a = 7;
var b = a;
console.log(a + " " + b);
var b=12;
console.log(a + " " + b);

//passage par reference
// c et d pointent vers la meme case memoire
var c = {x : 7};
var d = c;
console.log(c);
console.log(d);
d.x=32;
console.log("after d.x updated ");
console.log(c);
console.log(d);


//passage par valeur dans une fonction
function changeValeur(objValue){
  console.log("entre changeValeur :");
  console.log(objValue);
  objValue.x =21;
  console.log("sort changeValeur :");
  console.log(objValue);
};
value = {x : 12};
changeValeur(value);
console.log("apres changeValeur");
console.log(value);
