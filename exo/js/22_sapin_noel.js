var etages = prompt ("Choisir le nombre d'étages du sapin");


// branches du sapin
sapin = document.getElementById("sapin");
var i, j, a, p;
for (i=1;i<=etages;i++){
    for (j=0;j<3;j++){
        a = 1+i*(i-1)+2*i*j;
        p = document.createElement('p');
        ch = "";
        for (nb_etoiles = 0; nb_etoiles < a ; nb_etoiles++){
            ch += "*";
        }
        p.textContent = ch;
        sapin.appendChild(p);
    }
}

// déco du sapin et haut du tronc
p = document.createElement('p');
ch="";
// for (j=0; j<i-1;j++){
ch="|O|O|O|O|O";
// }
ch+="***";
ch+="O|O|O|O|O|";
p.textContent = ch;
sapin.appendChild(p);

// bas du tronc
p = document.createElement('p');
// for (j=0; j<i-1;j++){
ch="OOOOOOOOOO";
// }
ch+="***";
ch+="OOOOOOOOOO";
p.textContent = ch;
sapin.appendChild(p);

for (i=0;i<3;i++){
    p = document.createElement('p');
    ch="***";
    p.textContent = ch;
    sapin.appendChild(p);
}
