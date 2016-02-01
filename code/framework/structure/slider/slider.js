var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var transform = require('./../../helpers/js/transform.js');
var click = require('./../../helpers/js/click.js');


// Set up the slider
function Slider(sliderID, bulletsID) {
  // Slider
  this.slider = select(sliderID);

  // Slides
  this.slides = select(sliderID + ' .slide');
  this.pos = 0;
  this.offset = this.slides[0].offsetWidth;

  // Navigation
  this.direction = 'prev';
  this.slideCount = this.slides.length;
  this.bullets = select(bulletsID);
}


// The main function
var slider = function(sliderID, bulletsID) {
  s = new Slider(sliderID, bulletsID);

  // Make responsive
  s.setTransform();
  window.addEventListener('resize', s.setTransform.bind(s)); // without `bind(s)` the object is lost in `addEventListener`

  // Click on slide
  click(s.slides, s.clickSlide.bind(s));

  // Swipe on slide
  s.swipe();

  // Click on bullets
  click(s.bullets, s.clickBullet.bind(s));
}


// Click on a bullet
Slider.prototype.clickBullet = function(event) {
  var bullet = event.target.parentNode; // `this` is the slider object, not the button clicked http://stackoverflow.com/questions/1553661/how-to-get-the-onclick-calling-object

  if (!bullet.hasClass('active')) {
    //current = this.bullets.index(bullet);
    step = current - Math.abs(this.pos);
    (Math.abs(this.pos) < current ) ? this.previousSlide(step) : this.nextSlide(-step);

    //this.bullets.removeClass('active');
    //bullet.addClass('active');
  }
}



// Swipe with Hammer.js
Slider.prototype.swipe = function() {
  that = this;

  that.slides.loop(function(slide) {
    var hammer = new Hammer(slide);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
      velocity: 0.1
    });

    hammer.on("swipeleft", function() {
      that.previousSlide(1);
      //that.bullets.setClass('active', "style['transform']", "translateX(0px)");
    });

    hammer.on("swiperight", function() {
      that.nextSlide(1);
      //that.bullets.setClass('active', "style['transform']", "translateX(0px)");
    });
  });

}


// Click on a slide
Slider.prototype.clickSlide = function() {
  (this.direction == 'prev') ? this.previousSlide(1) : this.nextSlide(1);

  if (this.pos == -(this.slideCount - 1)) {
    this.direction = 'next';
  }

  if (this.pos == 0) {
    this.direction = 'prev';
  }

  //this.bullets.removeClass('active');
  //this.bullets.setClass('active', "style['transform']", "translateX(0px)");
}


// Get previous slide
// - it moves prev with 'step' slides
Slider.prototype.previousSlide = function(step) {
  this.pos = Math.max(this.pos - step, -(this.slideCount - 1));
  this.setTransform();
}


// Get next slide
// - it moves next with 'step' slides
Slider.prototype.nextSlide = function(step) {
  this.pos = Math.min(this.pos + step, 0);
  this.setTransform();
}


// Move out of viewport all inactive slides
Slider.prototype.setTransform = function() {
  that = this; // loop will alter `this`

  that.slides.loop(function(slide, i) {
    var move = (i + that.pos) * that.offset;
    var webkitValue = 'translate(' + move + 'px, 0)' + 'translateZ(0)';
    var value = 'translateX(' + move + 'px)';
    transform(slide, webkitValue, value);
  });
}


module.exports = slider;
