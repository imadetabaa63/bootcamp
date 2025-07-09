const planets = [
  { name: "Mercure", color: "gray", moons: 0 },
  { name: "Vénus", color: "orange", moons: 0 },
  { name: "Terre", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturne", color: "gold", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 }
];

const section = document.querySelector(".listPlanets");

planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.innerText = planet.name;

  // Bonus : ajouter les lunes
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    // Position aléatoire
    moon.style.left = `${Math.random() * 90 + 5}px`;
    moon.style.top = `${Math.random() * 90 + 5}px`;

    planetDiv.appendChild(moon);
  }

  section.appendChild(planetDiv);
});
