const grid = document.getElementById("grid");
const colors = document.querySelectorAll(".color");

let currentColor = "red";
let isDrawing = false;

// Gérer la sélection de couleur
colors.forEach(color => {
  color.addEventListener("click", () => {
    colors.forEach(c => c.classList.remove("selected"));
    color.classList.add("selected");
    currentColor = color.style.backgroundColor;
  });
});

// Créer la grille
for (let i = 0; i < 40 * 30; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mousedown", () => {
    isDrawing = true;
    square.style.backgroundColor = currentColor;
  });

  square.addEventListener("mouseover", () => {
    if (isDrawing) {
      square.style.backgroundColor = currentColor;
    }
  });

  square.addEventListener("mouseup", () => {
    isDrawing = false;
  });

  grid.appendChild(square);
}

// Arrêter le dessin si on relâche la souris ailleurs
document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});
