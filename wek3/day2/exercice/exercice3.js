/// exercice3 donner nubre 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function demanderNombre() {
  rl.question("Entrez un nombre : ", function (input) {
    const nombre = Number(input); // Convertir en nombre

    if (isNaN(nombre)) {
      console.log("Ce n'est pas un nombre valide. Réessayez.");
      demanderNombre();
    } else if (nombre < 10) {
      console.log("Le nombre est inférieur à 10. Essayez encore.");
      demanderNombre();
    } else {
      console.log("Bravo ! Le nombre est supérieur ou égal à 10.");
      console.log("Type de donnée :", typeof nombre);
      rl.close(); // Fermer l'entrée utilisateur
    }
  });
}

// Démarrer la boucle
demanderNombre();
