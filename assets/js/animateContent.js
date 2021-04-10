document.addEventListener('DOMContentLoaded', function() {
    var box = $('.fade-in');
    
    // box
    box.animate({
        left: 0,
        opacity: '0'
    });

    box.animate({
        left: 50,
        opacity: '1'
    });
    
      // box.animate({
      //   left: 500,
      //   top: 500,
      //   height: '300px',
      //   width: '300px',
      //   opacity: '0.6'
      // });
});