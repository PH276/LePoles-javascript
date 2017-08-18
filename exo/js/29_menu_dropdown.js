// var dropdownGroup = document.getElementByClassName('dropdown-group')[0];
var myButton = document.getElementById('myButton');
var liste = document.getElementById('dropdown-list');
// var lignes = document.getElementSelectorAll('.dropdown-list li');
// var liens = document.getElementSelectorAll('.dropdown-list li a');

function afficher(){
    if (liste.style.display == 'block') {
        liste.style.display = 'none';
    } else {
        liste.style.display = 'block';
    }
}

myButton.addEventListener("click", afficher);
