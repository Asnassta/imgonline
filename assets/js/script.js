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

  /*=====Add-file=======*/
  var dropZone = $('.add-container');

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
     return false;
  });

  dropZone.on('dragover dragenter', function() {
     dropZone.addClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     dropZone.removeClass('dragover');
  });

  dropZone.on('dragleave', function(e) {
     let dx = e.pageX - dropZone.offset().left;
     let dy = e.pageY - dropZone.offset().top;
     if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
          dropZone.removeClass('dragover');
     };
  });

  dropZone.on('drop', function(e) {
     dropZone.removeClass('dragover');
     let files = e.originalEvent.dataTransfer.files;
     sendFiles(files);
  });

  $('#file-input').change(function() {
     let files = this.files;
     sendFiles(files);
  });

  function sendFiles(files) {
     let maxFileSize = 5242880;
     let Data = new FormData();
     $(files).each(function(index, file) {
          if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
               Data.append('images[]', file);
          }
     });
};
  /*=====/add-file=======*/

  /*=======File-box (number)======*/
  $('.file').removeClass('one').addClass(function(){
    return ["none", "one"]
       [$(this).children('.file-box').length];
  });
/*=======/file-box (number)======*/

    /*===============Popup-help=================*/
    $(".help").on("click", function (event) {
        event.preventDefault();
        $(".popup-help").fadeIn(333);
        $(".popup-help .popup__inner").fadeIn(333);
        $('body').addClass("hidden");
        $('.header').addClass("fixed");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup-help").fadeOut('333');
        $(".popup-help .popup__inner").fadeOut(333);
        $('body').removeClass("hidden");
        $('.header').removeClass("fixed");
    });
    /*==============/popup-help=================*/

  /*=================Sliders==========================*/
  /*===========Slider-advertising============*/
  $('.advertising__content').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
     {
       breakpoint: 1301,
        settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
      },
      {
       breakpoint: 992,
        settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        }
      },
      {
       breakpoint: 766,
        settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        }
      },
      {
       breakpoint: 415,
        settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      },
    ]
  });
  /*===========/slider-advertising============*/

  /*=========/sliders==========*/

  /*======Select-styler=============*/
  $(function() {
    $('select').styler();
  });
  /*======/select-styler=============*/

});

