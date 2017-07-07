
//quand document chargé
// document.addEventListener("DOMContentLoaded",
//  function(event){ console.log(event); });

document.addEventListener("DOMContentLoaded",
  function(event){

      function cliquer(){
        console.log(this);
        //recupere la valeur du champ de saisie
        var nom = window.document.getElementById("nom").value;
        //affiche dans le div la valeur
        window.document.getElementById("contenu").innerHTML = nom;
        //change texte bouton
        this.textContent = "c'est dit";
      }


      //Unobstrusive event binding
      document.querySelector("button")
        .addEventListener("click", cliquer);
      //ou
      // document.querySelector("button")
      //   .onclick = cliquer;

  });
