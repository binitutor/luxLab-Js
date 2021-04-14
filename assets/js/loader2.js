$(document).ready(function() {
    $('#tempoContent').load('../../../pages/create.html');

    $('#create').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');

        $('#tempoContent').load('../../../pages/create.html');

    });

    $('#create-min').click(function(e) {
        e.preventDefault();
        $('#tempoContent').load('../../../pages/create.html');
    });




    $('#decide').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');

        $('#tempoContent').load('../../../pages/decide.html');

    });

    $('#decide-min').click(function(e) {
        e.preventDefault();
        $('#tempoContent').load('../../../pages/decide.html');
    });





});