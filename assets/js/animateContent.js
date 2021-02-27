document.addEventListener('DOMContentLoaded', function() {
    var box1 = $('.fade-in-1');
    var box2 = $('.fade-in-2');
    var box3 = $('.fade-in-3');
    var box4 = $('.fade-in-4');

    
    // box1
    box1.animate({
        left: 0,
        opacity: '0'
    });

    box1.animate({
        left: 50,
        opacity: '1'
    });
    // box 2
    box2.animate({
        left: 0,
        opacity: '0'
    });

    box2.animate({
        left: 50,
        opacity: '0.8'
    });

    box2.animate({
        left: 100,
        opacity: '1'
    });

    // box3
    box3.animate({
        left: 0,
        opacity: '0'
    });

    box3.animate({
        left: 50,
        opacity: '0.5'
    });

    box3.animate({
        left: 100,
        opacity: '0.8'
    });

    box3.animate({
        left: 150,
        opacity: '1'
    });

    var box4 = $('.slide-in');
    box4.animate({
        top: 0,
        opacity: '0'
    });
    box4.animate({
        top: 10,
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