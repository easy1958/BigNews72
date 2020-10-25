$(function() {
  $('.one').on('click',function() {
    $('.login').hide().next().show();
    // console.log(1);
  });
  $('.two').on('click',function() {
    $('.register').hide().prev().show();
    // console.log(1);
  });
})