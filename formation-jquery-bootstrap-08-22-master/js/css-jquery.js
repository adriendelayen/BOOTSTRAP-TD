jQuery(function () {
    $('#getValeurProp').click(function () {
        $('#resGetValeurProp').html($('#getValeurProp').css('color'));
    });

    $('#setValeurPropRed').click(function () {
        $('#resSetValeurProp').css('color', 'red');
    });

    $('#setValeurPropBlack').click(function () {
        $('#resSetValeurProp').css('color', 'black');
    });

    $('#animation01').click(() => {
        $('#blocAnimate01').animate({
            width: "250px",
            fontSize: ["2rem", "linear"]
        },
        "slow", // slow : 600 ms ; normal : 400 ms ; fast : 200 ms
        () => {
            console.log('animation 1 (swing) terminee');
        });

        $('#blocAnimate02').animate({
            width: "250px",
            fontSize: "2rem"
        },
        "slow", // slow : 600 ms ; normal : 400 ms ; fast : 200 ms
        "linear",
        () => {
            console.log('animation 1 (linear) terminee');
        });
    });

    $('#animation01Reset').click(() => {
        $('#blocAnimate01').animate({
            width: "50px",
            fontSize: ["1rem", "linear"]
        },
        "slow", // slow : 600 ms ; normal : 400 ms ; fast : 200 ms
        () => {
            console.log('animation 1 (reset swing) terminee');
        });

        $('#blocAnimate02').animate({
            width: "50px",
            fontSize: "1rem"
        },
        "slow", // slow : 600 ms ; normal : 400 ms ; fast : 200 ms
        "linear",
        () => {
            console.log('animation 1 (reset linear) terminee');
        });
    });

    $('#afficher').on('click', () => {
        $('#troisEtats').animate({
            width: "show"
        });
        // équivalent à
        $('#troisEtats').show();
    });

    $('#cacher').on('click', () => {
        $('#troisEtats').animate({
            width: "hide"
        });
        // équivalent à
        $('#troisEtats').hide();
    });

    $('#inverser').on('click', () => {
        $('#troisEtats').animate({
            width: "toggle"
        });
        // équivalent à
        $('#troisEtats').toggle();
    });
});