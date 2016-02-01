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
}


// The main function
var slider = function(sliderID, bulletsID) {
  s = new Slider(sliderID, bulletsID);

  // Make responsive
  s.setTransform();
  window.addEventListener('resize', s.setTransform.bind(s)); // without `bind(s)` the object is lost in `addEventListener`


  // Click on slide
  click(s.slides, s.clickSlide.bind(s));


  /*

  // Swipe with Hammer.js
  slides.loop(function(slide) {
    var hammer = new Hammer(slide);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
      velocity: 0.1
    });

    hammer.on("swipeleft", function() {
      previousSlide(1);
    });

    hammer.on("swiperight", function() {
      nextSlide(1);
    });
  });



  // Click on bullets
  var bullets = select(bulletsID);
  click(bullets, clickBullet);

  // - click on a bullet
  function clickBullet(event) {
    active = this.classList.contains('active');

    if (!active) {
      moveSlide(this);
      removeActiveBulletClass();
      this.classList.add('active');
    }
  }

  // - move slide
  function moveSlide(bullet) {
    current = bulletIndex(bullet);
    step = current - Math.abs(pos);

    if (Math.abs(pos) < current ) {
      previousSlide(step);
    } else {
      nextSlide(-step);
    }
  }

  // Return the index of the clicked element
  function bulletIndex(bullet) {
    var siblings = bullet.parentNode.childNodes;
    for (var i = 0; i < siblings.length; i++) {
      if (bullet == siblings[i]) break;
    }
    return i - 1;
  }


  // Clear active state for all bullets
  function removeActiveBulletClass() {
    for (var i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove('active');
    }
  }


  // Set active state for a bullet
  function setActiveBulletClass() {
    for (var i = 0; i < bullets.length; i++) {
      if (slides[i].style['transform'] == 'translateX(0px)') {
        bullets[i].classList.add('active');
      }
    }
  }


  */
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
