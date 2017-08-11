console.log("Bienvenue");
var nombreAleatoire = parseInt (100 * Math.random () + 1);
console.log(nombreAleatoire);

var saisie;
var compteur = 0;
do {
    compteur++;
    saisie = Number(prompt ("Saisir un nombre entier de 1 à 100 :"));
    if (Number.isNaN(saisie)) {
        console.log("Vous n'avez pas saisi un nombre");
    } else if (saisie > nombreAleatoire) {
        console.log ("Le nombre à trouver est inférieur à " + saisie);
    } else if (saisie < nombreAleatoire) {
        console.log ("Le nombre à trouver est supérieur à " + saisie);
    } else {
        console.log ("vous avez gagné en " + compteur + " tours !");
    }
} while (saisie != nombreAleatoire && compteur <= 6);

if (compteur > 6) {
    console.log("Vous avez perdu. Le nombre à trouver était : " + nombreAleatoire);
}
