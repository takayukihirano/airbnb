var md = window.matchMedia("(max-width: 1127px)");
var flag = false;
$(function(){
  $(".toggle").click(function(){
    flag= !flag;
    if(flag) {
      $(".main-nav").addClass('nav-responsive');
      $(".main-nav").addClass('nav-white');
      $('.toggle-icon').addClass('toggle-icon--active');
      $('body').css('overflow', 'hidden');
      $('#menu').slideDown(650);
    }
    else {
      $('#menu').slideUp(650);
      $(".main-nav").removeClass('nav-responsive', function() {
        $('#menu').css('display', 'none');
      });
      $('.toggle-icon').removeClass('toggle-icon--active');
      $('body').css('overflow', 'auto');
      setTimeout(function () {
        $(".main-nav").removeClass('nav-white');
      }, 550)
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
    $(".main-nav").removeClass('nav-white');
  }
}
md.addListener(mdCheck);