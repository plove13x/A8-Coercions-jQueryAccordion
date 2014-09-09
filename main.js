$(function() {
  $('.accordion').on('click', 'header', function() {
   $(this).parent().removeClass("hidden").siblings().addClass("hidden");
  });
});