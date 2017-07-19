// alert('hi');
do {
    var nbToursFinis= parseInt (prompt ('Choisissez le nombre de tour déjà fait :'));
} while (isNaN(nbToursFinis));

do {
    var nbToursTotal= parseInt (prompt ('Choisissez le nombre de tour maximum à faire :'));
} while (isNaN(nbToursTotal) || nbToursTotal <= nbToursFinis);

document.write(nbToursFinis + " tour(s) de manège ont déjà été fait" + "<br>" + "<br>");
for (var i = nbToursFinis+1 ; i <= nbToursTotal; i++) {
    document.write("C'est le tour de manège n°" + i + "<br>");
}
