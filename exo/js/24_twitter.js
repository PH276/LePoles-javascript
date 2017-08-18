var tweetContent = document.getElementById ('tweetContent');
var counterBlock = document.getElementById ('counterBlock');

var decompteur;

function count(e) {

    decompteur = 140 - tweetContent.value.length;
    counterBlock.innerHTML = decompteur;
    if (decompteur < 0){
        return false;

        // counterBlock.classList.add ('red');
    } else if (decompteur >= 0){
        counterBlock.classList.remove ('red');
    }
}

tweetContent.addEventListener('keyup', count);
