
$(document).ready(function () {
  $(".hamburger").click(function () {
    $("body").toggleClass("menu-open");
  });
  AOS.init({
    easing: 'ease-out-sine',
    anchorPlacement: 'top-bottom',
    disable: window.innerWidth < 1200,
    once: true,
    duration: 800
  });
    // variables
    var toTop = $('.to-top');
    // logic
    toTop.on('click', function() {
      $('html, body').animate({
        scrollTop: $('html, body').offset().top,
      });
    });
});
// SLICK SLIDERS BEGINS
$(".slick-slider-1").slick({
  arrows: false,
  dots: true,
  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1
});
$(".slick-slider-2").slick({
  arrows: true,
  dots: false,
  infinite:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
});
$(".slick-slider-3").slick({
  arrows: false,
  dots: false,
  autoplay:true,
  infinite:true,
  slidesToShow: 4,
  slidesToScroll: 1
});
$(".slick-slider-4").slick({
  rows:2,
  arrows: true,
  dots: false,
  infinite: true,
	speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1
});





