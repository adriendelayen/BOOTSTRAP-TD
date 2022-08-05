jQuery(document).ready(function () {
    console.log("DOM prêt");
});

jQuery(function () {
    console.log("DOM prêt");
});

$(function () {
    console.log("DOM prêt");
});


jQuery(function() {
    let cptClicP = 0;
    let cptClicPSpecial = 0;

    $('#firstBlood').click(function () {
        console.log("Une personne a cliqué sur le bouton First Blood");
    })
    // en js ça donnerait
    document.querySelector('#firstBlood').addEventListener("click", function () {
        //...
    });

    $('#firstBlood').on("click", function () {
        // ...
    });

    $('#activerCompteurs').click(function() {
        $('p:not(.special)').click(function () {
            cptClicP++;
            console.log("compteur p pas special : " + cptClicP);
        });

        // en js ça donnerait

        document.querySelectorAll('p:not(.special)').forEach((p) => {
            p.addEventListener("click", function () {
                cptClicP++;
                console.log("compteur p pas special : " + cptClicP);
            });
        });
        /////////////////////
        $('p.special').click(function () {
            cptClicPSpecial++;
            console.log("compteur p special : " + cptClicPSpecial);
        });
    });

    $('.divLettreCercle').first().click(function () {
        console.log("Div A");
    })

    $('.divLettreCercle').eq(1).click(function () {
        console.log("Div B");
    })

    $('.divLettreCercle').last().click(function () {
        console.log("Div C");
    })

    $('p .lien').css('color', 'red');

    $('#nom').focus(function () {
          console.log("Nom a le focus");
    });

    $('#nom').keyup(function () {
        console.log("On saisie dans Nom");
    });

    $('input[type=submit]').click(function (e) {
        e.preventDefault();
        
        let nom = $('#nom').val();
        let prenom = $('#prenom').val();

        if ("" !== nom && "" !== prenom) {
            console.log("Prénom / Nom OK");
            $('#formContact').submit();
        } else {
            console.log("Prénom / Nom pas OK");
        }
    });

    $('#clickVirtuel').click(function () {
        console.log("clique sur bouton desactive");
    });

    $('#clickVirtuel').trigger('click');

    $('a.retourHaut').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({scrollTop: 0}, 1000);
        //$('html, body').scrollTop(0);
    });

    $('a.allerBas').on('click', function(e) {
        e.preventDefault();

        $('html, body').scrollTop($(document).height());
    });

    $('#formContact').append('<input id="test" name="test" type="text">');

    $('#test').val("Bonjour");


    // Différence entre .attr et .prop
    $('#aTest').prop('href', 'css-jquery.html'); // On modifie le DOM
    $('#inTexteTest').attr('value', "Dawan"); // On modifie l'attribut HTML (non recommandé)

    console.log($('#inTexteTest').val());

    $('#inCbTest').prop('checked', false);
    // En général utiliser prop au lieu de attr
});