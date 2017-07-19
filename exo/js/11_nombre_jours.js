// alert('hi');

do {
    h=prompt ("Saisissez un nombre d'heure(s) (entre 0 et 23) :");
} while (isNaN(parseInt(h)) || h>23);

do {
    m=parseInt(prompt ("Saisissez un nombre de minute(s) (entre 0 et 59) :"));
} while (isNaN(parseInt(m)) || m>59);

do {
    s=parseInt(prompt ("Saisissez un nombre de seconde(s) (entre 0 et 59) :"));
} while (isNaN(parseInt(s)) || s>59);

heure = h + 'h' + m + ':' + s;
if (s < 59) {
    s++;
} else {
    s=0;
    if (m < 59){
        m++;
    } else {
        m=0;
        if (h < 23) {
            h++;
        }
        else{
            h=0;
        }
    }
}

document.write(heure + ' plus une seconde donne : ' + h + 'h' + m + ':' + s);
