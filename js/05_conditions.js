 // alert('hi')

// structure de base IF

if (true) {
    // code
}

var nb1 = 10;

if (nb1 < 50){
    console.log("nb1 est inférieur à 50");
}

//---------------------
if (true) {
    // code si vrai
} else {
    // code si faux
}

if (nb1 > 50) {
    console.log("nb1 est bien supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
}

// exo

// vérifier l'age de l'internaute
// majeur ==> "bienvenue"
// sinon je [1]lui signale et [2] le renvoie vers un autre site
//

// 1 déclarer la l'age de majorité
var majoriteFR=18;

// 2 demande de l'age
var age =parseInt(prompt("Indiquez votre age"));

// 3 condition si majeur
if (age>=majoriteFR) {
    alert ("bienvenue, vous êtes majeur");
} else {
    alert("Allez voir un super site...");
    doument.location.href="http://www.darty.com";
}







//
