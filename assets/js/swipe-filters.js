class Swipe {
  constructor(element) {
      this.xDown = null;
      this.yDown = null;
      this.element = typeof(element) === 'string' ? document.querySelector(element) : element;
 
      this.element.addEventListener('touchstart', function(evt) {
          this.xDown = evt.touches[0].clientX;
          this.yDown = evt.touches[0].clientY;
      }.bind(this), false);
 
  }
 
  onLeft(callback) {
      this.onLeft = callback;
 
      return this;
  }
 
  onRight(callback) {
      this.onRight = callback;
 
      return this;
  }
 
  onUp(callback) {
      this.onUp = callback;
 
      return this;
  }
 
  onDown(callback) {
      this.onDown = callback;
 
      return this;
  }
 
  handleTouchMove(evt) {
      if ( ! this.xDown || ! this.yDown ) {
          return;
      }
 
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
 
      this.xDiff = this.xDown - xUp;
      this.yDiff = this.yDown - yUp;
 
      if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
          if ( this.xDiff > 0 ) {
              this.onLeft();
          } else {
              this.onRight();
          }
      } else {
          if ( this.yDiff > 0 ) {
              this.onUp();
          } else {
              this.onDown();
          }
      }
 
      // Reset values.
      this.xDown = null;
      this.yDown = null;
  }
 
  run() {
      this.element.addEventListener('touchmove', function(evt) {
          this.handleTouchMove(evt).bind(this);
      }.bind(this), false);
  }
}
 

  var swiper = new Swipe('.swipe-open');
  swiper.onUp(function() { 
    if($(window).width() <= 860)
    {
      $('.swipe-content').slideDown(555);
      $('.filters__foot').slideDown(555);
      $('.help').slideDown(555);
      $('.swipe-fast').slideDown(111);
      $('.swipe-hide').fadeOut(111);
      $('body').addClass("hidden");
      $('.filters-toolbar .filters__title').addClass("pb");
    }
  });
  swiper.onDown(function() { 
    if($(window).width() <= 860)
    {
      $('.swipe-content').slideUp(555);
      $('.filters__foot').slideUp(333);
      $('.swipe-fast').slideUp(111);
      $('.help').slideUp(111);
      $('.swipe-hide').fadeIn(111);
      $('body').removeClass("hidden");
      $('.filters-toolbar .filters__title').removeClass("pb");
    }
  });
  swiper.run();

