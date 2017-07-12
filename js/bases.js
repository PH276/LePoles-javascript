// // syntaxe de base
//
// // commentaired sur une ligne
//
// /*
//  commentaires sur
//  plusieurs lignes
// */
//
// // variables
// var Prenom
//
// Prenom="Mila"
//
// var Prenom="Mila"
//
// // instructions termine par
//
// // inst_1
// // inst_2inst_3
//
// // alert("Super, tu es arrivé sur mon site !")
// // window.alert("Super, tu es arrivé sur mon site !")
//
//
// // Afficher dans la console
//
// console.log(Prenom)
//
// // Afficher dans la page web
//
// document.write(Prenom)
//
// // demander à l'utilisateur une valeur
//
// // window.prompt("on est quel jour ? ", "jour de la semaine")
// // prompt("on est quel jour ? ", "jour de la semaine")
//
// // pour stocker la réponse
// var jour=prompt("on est quel jour ? ", "jour de la semaine")
// console.log(jour)
//
// // JS est sensible à la casse ('case sensitive')
// // mavariable < >maVariable =/= MaVariable
// //               camel acse     snake case
//
// // une variable ne peut pas commencer par un chiffre, ne doit contenir des caractères alpha et ne doit pas être un mot réservé (var, for, ...)
// // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
//
// // une variable peut être déclarée de façon explicite :
// // var a=1
// //  ou implicite :
// a=1

//-------------------------------------------------
// Les types de variables

// chaîne de caracttères (string)
var vacances ="2017"
var dest="Australie"

// Nombre entier (integer ou int)
var annee=2017

// Un nombre décimal (float)
var nombre_a_virgule=-5.32

// un boolean VRAI/FAUX
var unBoolean=false // ou true

// Les constantes

// La déclaration const permet de créer une constante accessible uniquement electure. Contrairement à une variable sa valeur de peut plus être modoidiée par réaffectation plus bas dans le code

// par co,nvention les constantes soont ebn majuscules
const PAYS="France"

// typeof mermet de connaître le type de ma variable
console.log(vacances)
console.log(typeof vacances)
console.log(annee)
console.log(typeof annee)
annee="2017"
console.log(annee)
console.log(typeof annee)

// En JS les variables sont auto-typées

// On peut convertir une variable de type numbre en string et aussi string en numbre avec les fonction natives de JS
// La fonction parseInt() renvoie un entier à partir d'une chaine de caractères

var unChiffre="12"
console.log(unChiffre)
console.log(typeof unChiffre)

// string ==>number
unChiffre=parseInt(typeof unChiffre)
console.log(unChiffre)
console.log(typeof unChiffre)

// Je réaffecte une valeur
unChiffre="12.22"
console.log(unChiffre)
console.log(typeof unChiffre)

//  number==>string
unChiffre=parseFloat(unChiffre)
console.log(unChiffre)
console.log(typeof unChiffre)

// number==>string
var nb_en_lettres=258
console.log(nb_en_lettres)
console.log(typeof nb_en_lettres)

var nb_en_lettres=nb_en_lettres.toString()
console.log(nb_en_lettres)
console.log(typeof nb_en_lettres)
