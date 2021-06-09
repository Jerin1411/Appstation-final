
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
$(".slick-slider-2").slick({
  arrows: true,
  dots: false,
  infinite:false,
  slidesToShow: 3,
  slidesToScroll: 1
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
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4
});

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});


