// Avec une seule boucle for 
let starLine = "";

for (let i = 1; i <= 6; i++) {
  starLine += "* ";
  console.log(starLine);
}
//Avec deux boucles for imbriquées
for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
