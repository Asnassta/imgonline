$(document).ready(function() {
	  /*======Account (dropdown)=============*/
  $(".account__btn").on("click", function() {
    $(this).next().slideToggle(333);
  });
  /*==========/account (dropdown)=========*/

  	  /*======Lang (dropdown)=============*/
  $(".lang__open").on("click", function() {
    $(this).next().slideToggle(333);
    $(this).toggleClass('active');
  });
  /*==========/lang (dropdown)=========*/

  /*========Showing======*/
  	/*let scrollOffset = $(window).scrollTop();

	checkScrollAnimate(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScrollAnimate(scrollOffset);
	});

	function checkScrollAnimate(scrollOffset) {
		if( scrollOffset >= $("#animate-showing").offset().top + 300) {
			$(".showing-slider-left").addClass("transform-left ");
			$(".showing-slider-right").addClass("transform-right ");
		} else {
			$(".showing-slider-left").removeClass("transform-left ");
			$(".showing-slider-right").removeClass("transform-right ");
		}
	};*/
  /*========/showing======*/

scroll_speed = 2000;
      /*==Showing-slider==*/
  $('.showing-slider-left').slick({
      infinite: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      slidesPerRow: 1,
       speed: scroll_speed,
    
      rows: 1,
      responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 547,
        settings: {
          slidesPerRow: 1,
          rows: 2,
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
      slidesPerRow: 1,
      rows: 1,
      speed: scroll_speed,
      responsive: [
      {
        breakpoint: 766,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 547,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          slidesToShow: 1,
        }
      },
      ]
  });
  /*==/showing-slider==*/
});

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




    // if ($(this).scrollTop() > lastScrollTop)
    // {

    //   var hT = $(fs1).offset().top,
    //         hH = $(fs1).outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if (wS > (hT+hH-wH)){
       
    //     }
     
    //  } 

   }
   lastScrollTop = st;
});