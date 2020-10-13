// $('.slider').slick({
//     dots:true,
// });

$(function(){
  $(".slider").slick({
    speed: 1000,
    dots: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });
});
//ハンバーガーメニュー
$('.menu-btn').on('click', function(){
    $('.slide-menu').toggleClass('is-active');
});

$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});