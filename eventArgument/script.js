//https://developer.mozilla.org/en-US/docs/Web/API/Event
document.addEventListener("DOMContentLoaded",
  function(event){

      function cliquer(event){
        console.log(event.movementX);
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

      //affiche mouse position si ctrl
      var mouseMove = function(event){
        if (event.ctrlKey){
          document.querySelector("#pos").textContent =
            "x: " + event.clientX + ", y: " + event.clientY;
        }
      };
      document.addEventListener("mousemove", mouseMove);

      var mouseBodyMove = function(event){
        console.log("mouseBodyMove");
      };
      document.querySelectorAll("body")[0].addEventListener("mousemove", mouseBodyMove);
  });
