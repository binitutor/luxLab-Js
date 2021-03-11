$('#menu-toggle').click( function(e){
    e.preventDefault();
    $('#wrapper').toggleClass('menuDisplayed');
    $('#toggle-btn').toggleClass('btnOpenClose');
});