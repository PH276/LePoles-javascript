// alert ('hi')
do {
    var mois = parseInt (prompt ('saisissez'));
} while (isNaN(mois))

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

    default:
        nbJour=0;
}

if (nbJour==0) {
    document.write ('le mois ' + mois + " n'existe pas");
} else {
    document.write ('le mois ' + mois + ' a ' + nbJour + ' jours');
}
