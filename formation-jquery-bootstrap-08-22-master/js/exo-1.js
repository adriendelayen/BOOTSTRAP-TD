//1. Définir la valeur d'une zone de saisie
$('#zoneSaisie').val("Test");

//2. Retourner en haut de la page
$('body').animate({scrollTop: 0}, 1000);

//3. Désactiver le menu contextuel sur une page HTML
$('html').on('contextmenu', function (e) {
    e.preventDefault();
});

//4. Désactiver le bouton de soumission de formulaire tant qu'un utilisateur n'a pas coché une case
let btnValider = $('#btnValider');
btnValider.prop('disabled', true);

$('#accepterCGU').on('click', function () {
    if ($(this).is(':checked')) {       // $('#btnValider').is(':disabled')
        btnValider.prop('disabled', false);
    } else {
        btnValider.prop('disabled', true);
    }
});

//5. Faire clignoter un texte
function clignoterTexte() {
    $('.clignote').fadeOut(500);
    $('.clignote').fadeIn(500);
}

setInterval(clignoterTexte, 1000); // Exécuter périodiquement une fonction

//6. Déplacer un élément "div" dans un autre
//detach() enlève l'élément de la page mais le conserve dans le DOM pour être réutilisé
//remove() enlève complètement l'élément ; il disparait de la page et du DOM
$('#div1').detach().appendTo('#div2');

//7. Ajouter les éléments d'une liste (JS) dans une liste non ordonée (HTML)
let langages = ["JavaScript", "C#", "TypeScript"];

langages.forEach(function (l) {
    $('ul').append(`<li>${l}</li>`);
});

//8. Récupérer la valeur d'une zone de saisie
let texte = $('#zoneSaisie').val();

//9. Enlever toutes les classes CSS
$('#testCSS').removeClass();

//10. Distinguer un clic droit d'un clic gauche (évènement)
$(document).on("click", function (e) {
    console.log("Clic gauche");
});

$(document).on("contextmenu", function (e) {
    e.preventDefault();

    console.log("Clic droit");
});

$(document).mousedown(function (e) {
    switch (e.which) {
        case 1:
            console.log("Clic gauche");
            break;
        case 3:
            console.log("Clic droit");
            break;
        default:
            break;
    }
    // équivalent à
    if (e.which == 1) {
        console.log("Clic gauche");
    } else if (e.which == 3) {
        console.log("Clic droit");
    }
})

//11. Enlever l'attribut "disabled"
$('#btnValider').removeAttr('disabled');

//12. Détecter si le contenu d'une zone de saisie a changé
$('input[type=text]').on('input', function () {
    console.log("Saisie changée");
})