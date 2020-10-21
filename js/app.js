$(document).ready(function() {
    $('.nav-fuko .menu-icon').click(function() {
     $(".side-menu").addClass("active");
   })
   $('.button-close, .side-menu li a').click(function() {
     $(".side-menu").removeClass("active");
   })
   $('.link-1').click(function() {
     $(".link-1").addClass("active");
      $(".link-2").addClass("active");
   })
//    Do me a Favor
 $('.carousel-flavor').addClass('owl-carousel owl-theme').owlCarousel({
     loop: true,
     center: true,
     navText: ["<img src='images/chevron-left.png'>","<img src='images/chevron-right.png'>"],
     responsive:{
       0: {
        margin: 40,
         stagePadding: 10,
         items: 2,
         dots: true,
         nav: false
       },
       600: {
         items: 1,
         dots: true,
         nav: false
       },
       1000: {
         margin: 50,
         items: 3,
         dots: false,
         nav: true
       }
     }
   })
   $('.carousel-know').addClass('owl-carousel owl-theme').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    responsive:{
      0: {
        items: 1,
        dots: true,
        nav: false
      },
      600: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        items: 1,
        dots: true,
         navText: ["<img src='images/chevron-left.png'>","<img src='images/chevron-right.png'>"],
      }
    }
  })
   $('.carousel-mobile-how').addClass('owl-carousel owl-theme').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    responsive:{
      0: {
        items: 1,
        dots: false,
        nav: false
      },
      600: {
        items: 1,
        dots: true,
        nav: false
      },
      1000: {
        items: 1,
        dots: false,
        nav: false
      }
    }
  })
   /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    // var currentScrollPos = window.pageYOffset;
    // if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    // } else {
    //     document.getElementById("navbar").style.top = "-120px";
    // }
    // prevScrollpos = currentScrollPos;
    // }
 })
 $(document).ready(function(){
   // Add smooth scrolling to all links
   $(".nav-birthday-2 a, .how-to-drink a, .testimonial a img").on('click', function(event) {
 
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 1000, function(){
 
         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });
 });
 /*Animation: Moving Ornament on Scroll*/
$(document).ready(function(){

  $(window).scroll(function(){
    windowTop = $(window).scrollTop();

    $('.move-right').css({
      'transform':'translateX('+(windowTop) * 0.1  +'px)'
    });

    $('.move-left').css({
      'transform':'translateX('+(windowTop) * -0.1 +'px)'
    });

    $('.move-top').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
    $('.move-topcontact').css({
      'transform':'translateY('+(windowTop) * -0.1 +'px)'
    });
  });
});