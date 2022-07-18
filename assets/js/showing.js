$(document).ready(function() {

/*==Showing==*/
scroll_speed = 2000;
      /*==Showing-slider==*/
  $('.showing-slider-left').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
       speed: scroll_speed,
      responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        }
      },
      ]
  });

    $('.showing-slider-right').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: scroll_speed,
      responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
        }
      },
      ]
  });
  /*==/showing-slider==*/
});

/*==Showing==*/
var lastScrollTop = 0;
$(window).scroll(function(event){
    st = $(this).scrollTop();
    fs1 = '.showing .subtitle';
    if (st > lastScrollTop)
    {

      var hT = $(fs1).offset().top,
            hH = $(fs1).outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
          if($(fs1).hasClass('down') == false &&  $(fs1).hasClass('worked') == false)
          {
            $(fs1).removeClass('up');
            $(fs1).addClass('down');
            $(fs1).addClass('worked');
            $('.showing-slider-left').slick('slickNext');
            $('.showing-slider-right').slick('slickPrev');

            setTimeout(function() 
            {
              $(fs1).removeClass('worked');
            }, scroll_speed);
            
          }
        }
     
     } 
   
   else {
      
      if($(fs1).hasClass('down') == true &&  $(fs1).hasClass('worked') == false)
      {
  
        $(fs1).removeClass('down');
        $(fs1).addClass('up');
        $(fs1).addClass('worked');
        $('.showing-slider-left').slick('slickPrev');
        $('.showing-slider-right').slick('slickNext');

        setTimeout(function() 
            {
              $(fs1).removeClass('worked');
            }, scroll_speed);
      }
 

   }
   lastScrollTop = st;
});
/*==/showing==*/