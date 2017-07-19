// alert ('hi')
do {
    var debutBoucle= parseInt (prompt ('Choisissez un nombre initial :'));
} while (isNaN(debutBoucle));

for (var i = debutBoucle; i < debutBoucle + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    } else {
        console.log(i + " est impair");
    }
}
