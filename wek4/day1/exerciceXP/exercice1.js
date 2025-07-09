// Déclaration d'une fonction nommée funcOne
function funcOne() {
    // Déclare une variable locale 'a' avec la valeur 5
    let a = 5;

    // Vérifie si 'a' est supérieur à 1
    if (a > 1) {
        // Si la condition est vraie, on réassigne la valeur de 'a' à 3
        a = 3;
    }

    // Affiche une boîte de dialogue contenant la valeur actuelle de 'a'
    alert(`inside the funcOne function ${a}`);
}

// Appel de la fonction funcOne
funcOne(); // Résultat : une alerte s'affiche avec "inside the funcOne function 3"

// #1
function funcOne() {
    let a = 5; // a est défini localement à 5
    if (a > 1) {
        a = 3; // a est modifié car 5 > 1
    }
    alert(`inside the funcOne function ${a}`); // Affiche "inside the funcOne function 3"
}

// #1.1 - Exécution dans la console :
funcOne(); // Affiche une alerte avec "3"

// #1.2 - Que se passe-t-il si on utilise const au lieu de let ?
// -> Une erreur sera levée dans le bloc if car on ne peut pas réassigner une variable const.

/*
// #2
let a = 0; // variable globale a = 0

function funcTwo() {
    a = 5; // modifie la variable globale a à 5
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // Affiche la valeur actuelle de a
}

// #2.1 - Exécution :
funcThree(); // Affiche "inside the funcThree function 0"
funcTwo();   // Modifie a à 5
funcThree(); // Affiche "inside the funcThree function 5"

// #2.2 - Et si on déclare a avec const ?
// -> Une erreur sera levée dans funcTwo car const ne permet pas de réassigner a.


// #3
function funcFour() {
    window.a = "hello"; // Définit une variable globale a dans l'objet window (navigateur)
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // Utilise a définie globalement
}

// #3.1 - Exécution :
funcFour();  // Définit window.a = "hello"
funcFive();  // Affiche "inside the funcFive function hello"


// #4
let a = 1; // Variable globale a = 1

function funcSix() {
    let a = "test"; // Nouvelle variable locale a (ne modifie pas la globale)
    alert(`inside the funcSix function ${a}`); // Affiche "test"
}

// #4.1 - Exécution :
funcSix(); // Affiche "inside the funcSix function test"

// #4.2 - Et si on déclare avec const ?
// -> Cela fonctionne pareil. const crée aussi une variable locale, mais elle ne pourra pas être modifiée dans la fonction (ce qui n’est pas le cas ici).
*/