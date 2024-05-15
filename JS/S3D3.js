const form = document.getElementById("form");
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // console.log("inviato");
  const input = document.getElementById("taskTesto").value; // ottengo il valore dell'input
  const lista = document.createElement("li");
  lista.innerText = input; // inserisco il valore dell'input nel nuovo elemento della lista
  lista.classList.add("listaCss");
  document.getElementById("taskTesto").value = ""; //resetto il valore dell'input
  document.getElementById("taskList").appendChild(lista); //aggiungo l'elemento alla lista

  const buttonElimina = document.createElement("button");
  buttonElimina.innerText = "Canc";

  buttonElimina.addEventListener("click", function () {
    lista.remove(); //rimuovo l'elemento della lista quando il pulsante viene premuto
  });

  lista.appendChild(buttonElimina); //aggiungo il pulsante all'elemento della lista
});
