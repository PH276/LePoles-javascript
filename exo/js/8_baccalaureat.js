// alert('hi')


do {
    note=parseFloat (prompt ('Quel est votre note ? '));
} while (isNaN(note));

if (note < 10){
    document.write("Vous êtes recalé");
} else if (note < 12) {
    document.write("Vous êtes reçu");
} else {
    document.write("Vous êtes reçu avec mention");

}
