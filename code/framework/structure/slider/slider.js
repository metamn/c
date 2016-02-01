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

  if (!bullet.classList.contains('active')) {
    current = bulletIndex(bullet);
    step = current - Math.abs(this.pos);
    (Math.abs(this.pos) < current ) ? this.previousSlide(step) : this.nextSlide(-step);

    removeActiveBulletClass(this.bullets);
    bullet.classList.add('active');
  }
}



// Swipe with Hammer.js
Slider.prototype.swipe = function() {
  _this = this;

  _this.slides.loop(function(slide) {
    var hammer = new Hammer(slide);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
      velocity: 0.1
    });

    hammer.on("swipeleft", function() {
      _this.previousSlide(1);
      setActiveBulletClass(_this.bullets, _this.slides);
    });

    hammer.on("swiperight", function() {
      _this.nextSlide(1);
      setActiveBulletClass(_this.bullets, _this.slides);
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

  removeActiveBulletClass(this.bullets);
  setActiveBulletClass(this.bullets, this.slides);
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
  _this = this; // loop will alter `this`

  _this.slides.loop(function(slide, i) {
    var move = (i + _this.pos) * _this.offset;
    var webkitValue = 'translate(' + move + 'px, 0)' + 'translateZ(0)';
    var value = 'translateX(' + move + 'px)';
    transform(slide, webkitValue, value);
  });
}


// Helpers

// Return the index of the clicked element
function bulletIndex(bullet) {
  var siblings = bullet.parentNode.childNodes;
  for (var i = 0; i < siblings.length; i++) {
    if (bullet == siblings[i]) break;
  }
  return i - 1;
}


// Clear active state for all bullets
function removeActiveBulletClass(bullets) {
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove('active');
  }
}


// Set active state for a bullet
function setActiveBulletClass(bullets, slides) {
  for (var i = 0; i < bullets.length; i++) {
    if (slides[i].style['transform'] == 'translateX(0px)') {
      bullets[i].classList.add('active');
    }
  }
}


module.exports = slider;
