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
    /*==============/popup-panel=================*/

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
    $('.toolbar-processing .toolbar-item').not('.link').on("click", function(event) {
      event.preventDefault();
      $(this).addClass('active');
      $('.toolbar-item').not(this).removeClass('active');
      $('.filters-version').hide();
      $('.filters-version.'+$(this).attr('data-toolbar')).fadeIn(222);
      $('.filters__title .help').attr('data-popup', $(this).attr('data-toolbar'));
      $('.filters-tools__name .help').attr('data-popup', $(this).attr('data-toolbar'));
    });

    $('.toolbar-processing .toolbar-item').each(function() {
      if($(this).hasClass('active')) {
        $('.filters-version').hide();
        $('.filters-version.'+$(this).attr('data-toolbar')).fadeIn(222);
        $('.filters__title .help').attr('data-popup', $(this).attr('data-toolbar'));
        $('.filters-tools__name .help').attr('data-popup', $(this).attr('data-toolbar'));
      }
      
    });
  /*===========/toolbar=======*/

    /*===========Toolbar (show filters)=======*/
    $('.toolbar-processing .toolbar-item').not('.link').on("click", function(event) {
      if($(window).width() <= 860)
    {
      event.preventDefault();
      $('.processing__filters').fadeIn(333);
      $('.toolbar').fadeOut(111);
      $('.nav').fadeOut(111);
    }
    });
    $('.filters-tools__cancel').on("click", function(event) {
      event.preventDefault();
      if($(window).width() <= 860)
    {
      $('.processing__filters').fadeOut(111);
      $('.toolbar').fadeIn(333);
      $('.nav').fadeIn(333);
    }
    });
  /*===========/toolbar (show filters)=======*/

  /*===========Toolbar active (show filters)=======*/
    $('.toolbar-item.active').not('.toolbar-only-link .toolbar-item').on("click", function(event) {
      if($(window).width() <= 860)
    {
      event.preventDefault();
      $('.processing__filters').fadeIn(333);
      $('.toolbar').fadeOut(111);
      $('.nav').fadeOut(111);
    }
    });
  /*===========/toolbar active (show filters)=======*/

  /*============Table-result (color)===========*/
  $('.table-result__row').not('.multi-model .table-result__row').each(function(i, el){
    color = $(this).find('div:nth-child(3)').html();
    $(this).find('div:nth-child(2)').css('background', color);
  });
  $('.multi-model .table-result__row').each(function(i, el){
    bgcolor = $(this).find('div:nth-child(3)').attr('data-color');
    $(this).find('div:nth-child(2)').css('background', bgcolor);
  });
  /*============/table-result (color)===========*/

  /*===========Palette-color===============*/
    $('.palette-color-box').each(function(i, el){
      BgColor = $(this).find('div:nth-child(3) span').html();
      $(this).css('background', BgColor);
  });
  /*===========/palette-color===============*/

  /*======Table-editor (dropdown)=============*/
  $(".table-editor-open").on("click", function() {
    $(this).next().slideToggle(555);
    $(this).toggleClass('active');
  });
  /*==========/table-editor (dropdown)=========*/

  /*=======Generate-field=======*/
  $(".generate-field-btn").on("click", function() {

    $('.generate-field').append('<div class="filters-input filters-date"><input type="text" placeholder="Выберите дату и время"><svg><use xlink:href="#calendar"></use></svg></div>');
  });
  /*=======/generate-field=======*/

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

/*=========ToolbarScroll=========*/
  window.onload = function () {
          var scr = $(".toolbar-menu");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }
  /*=========/toolbarScroll=========*/