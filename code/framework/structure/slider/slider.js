var select = require('./../../helpers/js/select.js');
var transform = require('./../../helpers/js/transform.js');
var click = require('./../../helpers/js/click.js');

var slider = function(sliderID, bulletsID) {
  // Slider
  var slider = select(sliderID);

  // Slides
  var slides = select(sliderID + ' .slide');
  var pos = 0;
  var offset = slides[0].offsetWidth;

  // Move out of viewport all inactive slides
  function setTransform() {
    slides.loop(function(slide, i) {
      var webkitValue = 'translate(' + ((i + pos) * offset) + 'px, 0)' + 'translateZ(0)';
      var value = 'translateX(' + ((i + pos) * offset) + 'px)';
      transform(slide, webkitValue, value);
    });
  }

  // Make responsive
  setTransform();
  window.addEventListener('resize', setTransform);


  // Navigation
  var direction = 'prev';
  var slideCount = slides.length;


  // Click on slide
  click(slides, clickSlide);

  function clickSlide(event) {
    (direction == 'prev') ? previousSlide(1) : nextSlide(1);

    if (pos == -(slideCount - 1)) {
      direction = 'next';
    }

    if (pos == 0) {
      direction = 'prev';
    }
  }


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




  // Get previous slide
  // - it moves prev with 'step' slides
  function previousSlide(step) {
    pos = Math.max(pos - step, -(slideCount - 1));
    setTransform();
  }

  // Get next slide
  // - it moves next with 'step' slides
  function nextSlide(step) {
    pos = Math.min(pos + step, 0);
    setTransform();
  }
}


module.exports = slider;
