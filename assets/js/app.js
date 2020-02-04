var md = window.matchMedia("(max-width: 1127px)");
var flag = false;
$(function(){
  $(".toggle").click(function(){
    flag= !flag;
    if(flag) {
      $(".main-nav").addClass('nav-responsive');
      $('.toggle-icon').addClass('toggle-icon--active');
      $('body').css('overflow', 'hidden');
      $('#menu').slideDown(500);
    }
    else {
      $(".main-nav").removeClass('nav-responsive');
      $('.toggle-icon').removeClass('toggle-icon--active');
      $('body').css('overflow', 'auto');
      $('#menu').css('display', 'none');
    }
  });
});

function mdCheck(md) {
  if(md.matches) {
    $(".toggle").css("pointer-events","auto");
    $('#menu').css('display', 'none');
    if(flag) {
      flag = !flag;
    }
  }
  else {
    $(".toggle").css("pointer-events","none");
    $(".main-nav").removeClass('nav-responsive')
    $('#menu').css('display', 'flex')
    $('.toggle-icon').removeClass('toggle-icon--active');
    $('body').css('overflow', 'auto');
  }
}
md.addListener(mdCheck);