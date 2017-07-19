 // alert('hi');

 do {
     var chiffre= prompt ('De quel chiffre vous voulez la table de multiplication :', '<choisissez un chiffre de 2 à 9>');
 } while (isNaN(parseInt (chiffre)) || (chiffre < 2) || (chiffre > 9));

for ( var i = 1 ; i <= 10; i++) {
    console.log(chiffre + ' x ' + i + ' = ' + parseInt (chiffre)*i);
}
