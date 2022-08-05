
var prenom = "Antoine";
let x = 25;
const MA_CONSTANTE = "Coucou";

let test;


function monAge(test) {
    console.log("mon age est" + test);
}

monAge(x);

console.log(2 ** 3);
console.log(Math.pow(2, 3));

console.log(x++);

let y;

if (!y) {
    console.log("test");
}

let voitures = ["Peugeot", "Ford", "Renault"];


let v2 = voitures[1];

for (indice in voitures) {
    let v = voitures[indice];

    console.log(`voitures[${indice}] = ${voitures[indice]}`);
}

for (v of voitures) {
    console.log(v);
}

voitures.forEach(function (v, indice) {
    console.log(`voitures[${indice}] = ${v}`);
});

voitures.push("Hyundai");


let [p, f, r, h] = voitures;

console.log(p);

// Fonction = méthode qui retourne une valeur
function fonction() {
    let nom = "DELARUE";

    return nom;
}

// Procédure = méthode qui ne retourne pas de valeur
function procedure() {
    let majeur = true;

    console.log(majeur);
}

console.log(fonction());

procedure();

function documentCharge (retourFonction) {
    window.addEventListener("DOMContentLoaded", retourFonction);
}

function recupererBtnOK () {
    return document.querySelector('#btn-ok');
}

documentCharge(function () {
    console.log("DOM prêt");
});

let btn = recupererBtnOK();
btn.addEventListener("click", function () {

});

let paragraphes = document.querySelectorAll('p');

paragraphes.forEach((p) => {
    console.log(p.innerText);
});


document.cookie = "username=Magalie72";
document.cookie = "username=Magalie72; max-age=max-age-in-seconds";
document.cookie = "username=Magalie72; expires=Thu, 18 Aug 2022 15:00:00 UTC";
document.cookie = "username=Magalie72; expires=Thu, 18 Aug 2022 15:00:00 UTC; domain=.site.com";
document.cookie = "username=Magalie72; expires=Thu, 18 Aug 2022 15:00:00 UTC; domain=.site.com; samesite=none"
document.cookie = "username=Magalie72; expires=Thu, 18 Aug 2022 15:00:00 UTC; domain=.site.com; samesite=none; secure"