// alert('hi')

// Les boucles

// FOR

// for (/* 3 arguments */) {
    /* code */
// }

// 1. initialisation
// 2. conndition à vérifier
// 3. le pas d'incrémentaion
//

// for (var i = 0; i <= 10; i++) {
//     document.write("<p>Insctruction exécutée : " + i + "</p>");
// }

// WHILE
// utilisée quand on ne connait pas le nombre de tours
// var j = 1;
// while (j <= 10) {
//     document.write("<p>Insctruction exécutée : " + j + "</p>");
//     j++;
// }

// EXO
// J'ai 1000€ sur mon compte
// chaque mois j'ajoute 50€
// Combien de temps me faut-il pour avoir 2000€ sur mon compte

// avec WHILE
var cpt = 1000;
var mois = 0;
while (cpt < 2000) {
    mois++;
    cpt+=50;
}

document.write("<p> J'ai 1000€ sur mon compte : </p>");
document.write("<p> En ajoutant 50€ par mois sur mon compte : </p>");
document.write('<p> Il faut ' + mois +" mois pour avoir 2000€ sur mon compte : </p>");

// avec FOR
var mois = 0;
for (cpt = 1000 ; cpt < 2000; cpt+=50) {
    mois++;
}

document.write("<p> J'ai  1000€ sur mon compte : </p>");
document.write("<p> En ajoutant 50€ par mois sur mon compte : </p>");
document.write('<p> Il faut ' + mois +" mois pour avoir 2000€ sur mon compte : </p>");
