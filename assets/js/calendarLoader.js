$(document).ready(function(){
    // default: load weekly
    $('.calendarLoader').load('./pages/book/weekly.html');
    
    // at click daily, load daily calendar view
    $('.daily').click(function(e){
        e.preventDefault();
        $('.calendarLoader').load('./pages/book/daily.html');
    });
    
    // at click weekly, load weekly calendar view
    $('.weekly').click(function(e){
        e.preventDefault();
        $('.calendarLoader').load('./pages/book/weekly.html');
    });   
    
    // at click monthly, load monthly calendar view
    $('.monthly').click(function(e){
        e.preventDefault();
        $('.calendarLoader').load('./pages/book/monthly.html');
    }); 
    
    // at click yearly, load yearly calendar view
    $('.yearly').click(function(e){
        e.preventDefault();
        $('.calendarLoader').load('./pages/book/yearly.html');
    }); 
});