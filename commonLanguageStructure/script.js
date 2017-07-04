var x=12;
console.log(x);

console.log((5+4)/3);

console.log(undefined/5);

x=5;
console.log(x);
if (x === 5){
  console.log("x ===5");
}


x="5";
console.log(x);
if (x === "5"){
  console.log("x ==='5'");
}


//statement false
if (!false && !NaN && !undefined && !null && !0 && !""){
  console.log("ok");
}


//for loop
var somme = 0;
for (var i = 0; i <10 ; i++){
  console.log("i = " + i);
  somme += i;
}
console.log("somme de 0 à 9 = " + somme);
