//default value
function laFct(param){
  console.log("param = " + param);
}
laFct();
laFct("paramTruc");
laFct("param1", "param2");

function laFctAvecDefaultValue(param){
  if(param === undefined){
    param = "defaultValue ;)";
  }
  console.log("param fct default = " + param);
}
laFctAvecDefaultValue();
laFctAvecDefaultValue("un autre truc");

function laFctAvecDefaultValueShortCode(param){
  param = param || "valeur par default ;)";
  console.log("param fct default short code = " + param);
}
laFctAvecDefaultValueShortCode();
laFctAvecDefaultValueShortCode("encore un autre truc");
