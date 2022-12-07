let toggle = button => {
    let element = document.getElementById("mytable");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "Cacher le tableau";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "Afficher la table";
    }
  }