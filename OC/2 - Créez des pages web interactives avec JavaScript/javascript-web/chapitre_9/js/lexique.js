var lettres = [
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a')
];

// lettres[0].href="http://oc-jswebsrv.herokuapp.com/api/lexique/A";
lettres[0].href="#";
lettres[0].textContent = "A";
lettres[1].href="#";
lettres[1].textContent = "B";
lettres[2].href="#";
lettres[2].textContent = "C";
lettres[3].href="#";
lettres[3].textContent = "D";
lettres[4].href="#";
lettres[4].textContent = "E";

var mots = document.getElementById('mots');
lettres.forEach(function(lettre){
    mots.insertBefore(lettre, mots);
    mots.insertBefore(document.createTextNode(" | "), mots);
});
mots.insertBefore(document.createTextNode("..."), mots);

// formulaire.addEventListener("submit", function(e){
//     e.preventDefault();
//
//     url = "https://api.github.com/users/"+this.profil.value;
//     ajaxGet(url, function (reponse) {
//         // Transforme la réponse en un tableau d'articles
//         rep = JSON.parse(reponse);
//         document.querySelector('img').src = rep.avatar_url;
//         document.getElementById('nom').textContent = rep.name;
//         document.getElementById('entreprise').textContent = rep.company;
//         document.getElementById('blog').textContent = rep.blog;
//         document.getElementById('blog').href = rep.blog;
//
//
//         console.log(rep.avatar_url);
//         console.log(rep.name);
//         console.log(rep.company);
//         console.log(rep.blog);
//         // console.log(reponse.name);
//     });
//
// });
//
// //var reponse = document.getElementById("reponse");
