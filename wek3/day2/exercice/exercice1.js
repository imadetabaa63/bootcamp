// exercice1part1

const people = ["Greg", "Mary", "Devon", "James"];


people.shift();


people[people.indexOf("James")] = "Jason";

people.push("imad");

console.log(people.indexOf("Mary"));
console.log(people);



const copie = people.slice(1, 3); // start = 1 (Devon), end = 3 (exclu)

console.log(copie); // Affiche: [ 'Devon', 'Jason' ]

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];

console.log("Dernier élément :", last);



/// Partie II - Boucles
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);

  if (people[i] === "Devon") {
    break; // Arrêter la boucle après "Devon"
  }
}
  
