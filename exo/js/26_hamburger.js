(function(){
    var bouton = document.querySelector(".c-hamburger");
    var panneau = document.querySelector("#menu-panel");

    bouton.addEventListener("click", function (e){
        e.preventDefault();
        this.classList.toggle("is-active");

        (this.classList.contains('is-active'))?
        panneau.classList.toggle('show'):
        panneau.classList.remove('show');
    });

})();
