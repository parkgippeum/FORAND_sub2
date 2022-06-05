$(function() {

  $(document).ready(function() {

    var scrollOffset = $('.nav').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.nav').addClass('scroll-fixed');
      }
      else {
        $('.nav').removeClass('scroll-fixed');
      }
    });
  });
});

/* AOS */
AOS.init({
  duration: 1200
})