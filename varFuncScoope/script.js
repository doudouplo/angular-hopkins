var x="12";
var message = "in global";
console.log("global : message = " + message);

var a = function(){
  var message = "inside a";
  console.log("a : message = " + message);

  // function c(){  console.log("c : message = " + message);}; ou ecrit diff
  var c = function () {
    console.log("c : message = " + message);
    return "c : message = " + message;
  };

  b();
  var res = c();
  return  c() + " et " + b();
};

var b = function () {
  console.log("b : message = " + message);
  return "b : message = " + message;
};

// a();
