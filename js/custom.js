
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
  arrows: false,
  dots: true,
  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1
});



