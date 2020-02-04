var md = window.matchMedia("(max-width: 1127px)");
var flag = false;
$(function(){
  $(".toggle").click(function(){
    flag= !flag;
    if(flag) {
      $('body').css('overflow', 'hidden');
      $('.toggle-icon').addClass('toggle-icon--active');
      $('.main-nav').addClass('nav-responsive');
      $('.main-nav').css('height', '100%');
      // $("#menu").slideDown(500);
      $('#menu').css('display', 'block');

    }
    else {
      $('.main-nav').removeClass('nav-responsive');
      $('.toggle-icon').removeClass('toggle-icon--active');
      $('body').css('overflow', 'auto');
      // $("#main-nav").slideUp(500);
      $('.main-nav').css('height', '-100%');
      // $('#menu').css('display', 'none');
    }
  });
});

function mdCheck(md) {
  if(md.matches) {
    $(".toggle").css("pointer-events","auto");
    $('#menu').css('display', 'none')
    if(flag) {
      flag = !flag;
    }
  }
  else {
    $('#menu').css('display', 'block')
    $(".toggle").css("pointer-events","none");
    $('.toggle-icon').removeClass('toggle-icon--active');
    $('#menu').removeClass('toggled');
    $('.main-nav').removeClass('nav-responsive');
    $('body').css('overflow', 'auto');
  }
}
md.addListener(mdCheck);