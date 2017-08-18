div = document.getElementById("sapin");
var i, j, a, p;
for (i=1;i<=5;i++){
    for (j=0;j<3;j++){
        a = 1+i*(i-1)+2*i*j;
        p = document.createElement('p');
        ch = "";
        for (k=0;k<a;k++){
            ch += "*";
        }
        p.textContent = ch;
        div.appendChild(p);
    }
}
p = document.createElement('p');
ch="";
// for (j=0; j<i-1;j++){
        ch="| | | | | ";
// }
ch+="***";
ch+=" | | | | | ";
for (j=0; j<i-1;j++){
        ch+=" I";
}
p.textContent = ch;
div.appendChild(p);
