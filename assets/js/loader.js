$(document).ready(function(){
    $('#book').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/book.html');
    });
    
    $('.book-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/book.html');
    });
    
    
    
    $('#create').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/create.html');
        
    });
    
    $('#create-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/create.html'); 
    });
    
    
    
    
    $('#decide').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/decide.html');
        
    });
    
    $('#decide-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/decide.html');
    });
    
    
    
    
    $('#about').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/about.html');
    });
    
    $('#about-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/about.html');
    });
    
    
    
    $('#contact').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/contact.html');
    });
    
    $('#contact-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/contact.html');
    });
    
    
    
    
    $('#location').click(function(e){
        e.preventDefault();
        $('#wrapper').toggleClass('menuDisplayed');
        $('#toggle-btn').toggleClass('btnOpenClose');
        
        $('#tempoContent').load('./pages/location.html');
    });
    
    $('#location-min').click(function(e){
        e.preventDefault();
        $('#tempoContent').load('./pages/location.html');
    });
});

