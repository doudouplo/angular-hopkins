//function are First-Class data type
//functions are objects
function multi(x,y){
  return x*y;
}
console.log(multi(2,5));

multi.version = "v1.0"; //ajout param car function est un objet
console.log(multi.version);

console.log(multi); //renvoie l'objet(la fct) lui meme
console.log(multi.toString());//egale

//function factory
function makeMulti(multiplicateur){
  var maFct = function(x){
    return multiplicateur * x;
  };
  return maFct;
}

var multiPar3 = makeMulti(3);
console.log(multiPar3(10));

var doubleTout = makeMulti(2);
console.log(doubleTout(25));

//passing function as argument
function doOperationOn(x, operation){
  return operation(x);
}

var resultat = doOperationOn(5, multiPar3);
console.log(resultat);

resultat = doOperationOn(32, doubleTout);
console.log(resultat);
