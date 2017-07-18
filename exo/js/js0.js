// alert('hi');
/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */
var prenom="Pascal";
var age=51;
var ageLogin;
var prenomLogin;
// 1 -- Demander son prénom à l'utilisateur avec un prompt
prenomLogin = prompt ('quel est votre prénom ?');

// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
// 2a. Si tout est ok, je continue la vérification avec l'âge
if (prenomLogin == prenom){
    // 2a1. Demande a mon utilisateur son l'âge via un PROMPT
    ageLogin = prompt ('quel est votre âge ?');

    // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
    if (ageLogin!=age){
        alert("L'age ne correspond pas");
    }
    else {
        alert("Bienvenue "+prenomLogin);
    }
// 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
} else{
    alert('votre prénom ne correspond pas')
}
