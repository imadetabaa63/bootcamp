const tasks = [];

document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Veuillez entrer une tâche.");
    return;
  }

  // Ajouter la tâche au tableau
  tasks.push(taskText);

  // Créer les éléments HTML
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-item");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Label
  const label = document.createElement("label");
  label.textContent = taskText;

  // Bouton de suppression
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>'; // icône Font Awesome
  deleteBtn.classList.add("delete-btn");

  // Supprimer la tâche au clic sur le bouton "X"
  deleteBtn.addEventListener("click", function () {
    taskContainer.remove();
  });

  // Assembler les éléments
  taskContainer.appendChild(checkbox);
  taskContainer.appendChild(label);
  taskContainer.appendChild(deleteBtn);

  // Ajouter au DOM
  document.querySelector(".listTasks").appendChild(taskContainer);

  // Réinitialiser le champ
  taskInput.value = "";
}
