const newTask = document.getElementById("form");
newTask.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskList = document.getElementById("taskList");
  const nomeTask = taskList.value;
  const creazioneLista = document.createElement("li");
  creazioneLista.innerText = "$[nomeTask]";
  creazioneLista.appendChild("ul");
});
