//DOM manipulation
console.log(window.document); //window = global scope
console.log(document instanceof HTMLDocument);

if(document.readyState){ //si page fini de chargée
  var cliquer = function(){
    //recupere la valeur du champ de saisie
    var nom = window.document.getElementById("nom").value;
    //affiche dans le div la valeur
    var message = "<h2>bjr " + nom + "</h2>";
    window.document.getElementById("contenu").innerHTML = message;

    if (nom === "toto"){
      document.querySelector("#titre").textContent +=  " et " + nom + " adore ça !"; 
    }
  };
}
