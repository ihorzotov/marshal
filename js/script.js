$(document).ready(function(){
   $('.personal-info__form .input-holder input , textarea').each(function() { if($(this).val().length > 0) $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').hide();
    $(this).change(function() {
      if($(this).val().length > 0)
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').addClass('hold');
       else 
          $('.personal-info__form .input-holder label[for="' + $(this).attr('id') + '"]').removeClass('hold');
    });
  });
});

$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();

    if(winTop >= 10){
      $(".header-sticky").addClass("sticky-header");
    }else{
      $(".header-sticky").removeClass("sticky-header");
    }
  });
});

$(document).ready(function($) {
var holder = $(".input-holder input,textarea")
 holder.focus(function(){
   $(this).parent().addClass("active");

  }).blur(function(){
       $(this).parent().removeClass("active");
  })
});  


var tariffSpoiler = $('.spoiler-button span');

  tariffSpoiler.click(function(){
    $(this).parents('.price-spoiler').toggleClass('active');
  })
$(document).on("click",".js-scroll", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
           top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
});
