
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
});
// SLICK SLIDERS BEGINS
$(".slick-slider-1").slick({
  arrows: true,
  dots: false,
  infinite:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
        dots: true
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



