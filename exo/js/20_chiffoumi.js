var saisie;
var differentsChoix = ['feuille', 'ciseau', 'pierre'];

indiceChoixOrdinateur = 3 * Math.random();
choixOrdinateur = differentsChoix[indiceChoixOrdinateur];

saisie = toLowerCase(prompt ("Choisissez un de ces 3 mots 'pierre', 'feuille' ou 'ciseau' :"));
var indiceSaisie = differentsChoix.indexOf(saisie);
