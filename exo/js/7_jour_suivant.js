// alert('hi');

var jourDemande;
jourDemande=prompt('Saisissez un jour de semaine (de lundi à dimanche)');


if (jourDemande=="lundi"){
    alert ('Le jour suivant est  : mardi');
}else if (jourDemande=="mardi"){
    alert ('Le jour suivant est  : mercredi');
}else if (jourDemande=="mercredi"){
    alert ('Le jour suivant est  : jeudi');
}else if (jourDemande=="jeudi"){
    alert ('Le jour suivant est  : vendredi');
}else if (jourDemande=="vendredi"){
    alert ('Le jour suivant est  : samedi');
}else if (jourDemande=="samedi"){
    alert ('Le jour suivant est  : dimanche');
}else if (jourDemande=="dimanche"){
    alert ('Le jour suivant est  : lundi');
}else {
    alert ("Le jour saisi n'est pas correct");
}


switch (jourDemande){
    case "lundi" :
    alert ('Le jour suivant est  : mardi');
    break;

    case "mardi" :
    alert ('Le jour suivant est  : mercredi');
    break;

    case "mercredi" :
    alert ('Le jour suivant est  : jeudi');
    break;

    case "jeudi" :
    alert ('Le jour suivant est  : vendredi');
    break;

    case "vendredi" :
    alert ('Le jour suivant est  : samedi');
    break;

    case "samedi" :
    alert ('Le jour suivant est  : dimanche');
    break;

    case "dimanche" :
    alert ('Le jour suivant est  : lundi');
    break;

    default :
    alert ("Le jour saisi n'est pas correct");
}
