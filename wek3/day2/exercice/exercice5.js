/// exercice 5
// 1. Création de l'objet
const family = {
    father: "Ahmed",
    mother: "Fatima",
    son: "imad",
    daughter: "Salma"
};

console.log("Keys:");
for (let key in family) {
    console.log(key);
}

console.log("Values:");
for (let key in family) {
    console.log(family[key]);
}
