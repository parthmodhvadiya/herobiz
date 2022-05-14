$('.owl-slide').owlCarousel(
    {
        lazyLoad:true,
        items:1,
        autoplay: true,
        smartSpeed: 1500,
        nav:true,
        dots: true, 
        loop : true,
      }

    );
    AOS.init({
        disable: function() {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
        }
      });
      $('.owl-slider-1').owlCarousel({
        loop:true,
        margin:10,
        dots: false,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            530:{
              items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })