// alert('hi');
do {
    nombre1 = parseInt (prompt ('Saisissez un premier nombre :'));
} while (isNaN (nombre1));

do {
    nombre2 = parseInt (prompt ('Saisissez un nombre à comparer avec le premier :'));
} while (isNaN (nombre2));


if (nombre1 > nombre2){
    alert(nombre1 + ' est supérieur à ' + nombre2);
} else if (nombre1 < nombre2){
    alert(nombre1 + ' est inférieur à ' + nombre2);
} else {
    alert(nombre1 +' est égal à ' + nombre2);
}
