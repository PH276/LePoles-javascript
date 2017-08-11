var rectangle = document.getElementsByClassName ('rectangle')[0];
var classRectangle = rectangle.className;
var bouton = document.getElementById ('toggle-rectangle');
var cache = 0;

function surClickBouton(){
    rectangle.classList.toggle('hide'); // .hide définit en CSS
}

function rectangleImportant(){
    rectangle.classList.add ('important'); // .hide définit en CSS
}

function rectangleNonImportant(){
    rectangle.classList.remove ('important');
    rectangle.classList.remove ('good');
}

function rectangleGood(){
    rectangle.classList.toggle ('good');
}

bouton.addEventListener ('click', surClickBouton);

rectangle.addEventListener ('mouseover', rectangleImportant);

rectangle.addEventListener ('mouseout', rectangleNonImportant);

rectangle.addEventListener ('dblclick', rectangleGood);
