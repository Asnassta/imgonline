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


  /*===========Filter-version=======*/
    $('select[name="type_size"]').change(function() {
      $('.filters-version').slideUp(222);
      $('.filters-version.'+$(this).val()).slideDown(222);
      $('.filters__title .help').attr('data-popup', $(this).val());
    });
  /*===========/filter-version=======*/


  /*=======Filters-input (subitem)============*/
  $('.filters-radio input[type="radio"]').each(function() { //проверка после перезагрузки
    if($(this).prop("checked")){
      $(this).parent('.filters-radio').addClass('checked');
    } else {
      $(this).parent('.filters-radio').removeClass('checked');
    }
  });
   $('.filters-radio input[type="radio"]').change(function() {
      $(this).parent().parent().find('.filters-subitem').slideUp(222);
      $(this).parent().find('.filters-subitem').slideDown(222);
    });


   $(".filters-reset").on("click", function() {
    $(".filters-radio.checked").find('.filters-subitem').slideDown(222);
    $(".filters-radio").not(".filters-radio.checked").find('.filters-subitem').slideUp(222);
  });
  /*==========/filters-input (subitem)=========*/

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
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup-help."+name_pop).fadeIn(333);
        $(".popup-help."+name_pop+" .popup__inner").fadeIn(333);
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

        /*===============Popup-panel=================*/
    $(".identify-panel-open").on("click", function (event) {
      if($(window).width() > 860)
      {
        event.preventDefault();
        $(".popup-panel").fadeIn(333);
        $(".popup-panel .popup__inner").fadeIn(333);
        $('body').addClass("hidden");
      }
    });
    $(".popup__close,  .closex").on("click", function (event) {
      if($(window).width() > 860)
      {
        event.preventDefault();
        $(".popup-panel").fadeOut('333');
        $(".popup-panel .popup__inner").fadeOut(333);
        $('body').removeClass("hidden");
      }
    });
    /*==============/popup-help=================*/

/*=======Table-result (number)======*/
  $('.table-result__inner').removeClass('one').addClass(function(){
    return ["none", "one"]
       [$(this).children('.table-result__row').length];
  });
/*=======/table-result (number)======*/

      /*=======Personal-file (number)======*/
  $('.personal-file').removeClass('one').addClass(function(){
    return ["none", "one"]
       [$(this).children('.file-box').length];
  });
/*=======/personal-file (number)======*/

  /*======File-check=============*/
  $(".file-check").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
  });
  /*==========/file-check=========*/


  /*===========Toolbar=======*/
    $('.toolbar-item').on("click", function(event) {
      event.preventDefault();
      $(this).addClass('active');
      $('.toolbar-item').not(this).removeClass('active');
      $('.filters-version').hide();
      $('.filters-version.'+$(this).attr('data-toolbar')).fadeIn(222);
      $('.filters__title .help').attr('data-popup', $(this).attr('data-toolbar'));
      $('.filters-tools__name .help').attr('data-popup', $(this).attr('data-toolbar'));
    });
  /*===========/toolbar=======*/

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

