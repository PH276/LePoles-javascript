// alert ('hi')
do {
    var mois= parseInt (prompt ('Quel mois choisissez-vous ?', '<saisissez un nombre de 1 à 12>'));
} while (isNaN(mois) || (mois < 1) || (mois > 12));

switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        nbJour=31;
        break;

    case 2 :
        nbJour=28;
        break;

    case 4 :
    case 6 :
    case 9 :
    case 11 :
        nbJour=30;
        break;
}

    document.write ('le mois ' + mois + ' a ' + nbJour + ' jours');
