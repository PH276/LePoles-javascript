const TVA = 20 / 100;

var ht = prompt ('Saisir un prix HT : ');
document.write ('Prix TTC : '+ht * (1 + TVA));
