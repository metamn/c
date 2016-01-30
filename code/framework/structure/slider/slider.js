var slider = function(slide, bullets) {

  // Slides
  var slides = document.querySelectorAll(slide);
  var slideCount = slides.length;
  var pos = 0;
  var direction = 'prev';

  // - move out of viewport all inactive slides
  function setTransform() {
    for (var i = 0; i < slideCount; i++ ) {
      // We do these manually instead of loading Modernizr which is not used elsewhere
      // - from https://github.com/thebird/Swipe/blob/master/swipe.js
      slides[i].style.webkitTransform = 'translate(' + ((i + pos) * slides[0].offsetWidth) + 'px, 0)' + 'translateZ(0)';

      slides[i].style.MozTransform =
      slides[i].style.msTransform =
      slides[i].style.OTransform =
      slides[i].style.transform = 'translateX(' + ((i + pos) * slides[0].offsetWidth) + 'px)';
    }
  }

  // - initialize slides in a responsive way
  setTransform();
  window.addEventListener('resize', setTransform);


  // Swipe navigation
  // Add swipe to each slide
  for (var i = 0; i < slides.length; i++) {
    var hammer = new Hammer(slides[i]);
    hammer.get('swipe').set({
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 1,
      velocity: 0.1
    });

    hammer.on("swipeleft", function() {
      previousSlide(1);
      removeActiveBulletClass();
      setActiveBulletClass();
    });

    hammer.on("swiperight", function() {
      nextSlide(1);
      removeActiveBulletClass();
      setActiveBulletClass();
    });
  }



  // Bullets navigation
  var bullets = document.querySelectorAll(bullets);

  // - add click event to bullets
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener('click', clickBullet, false);
  }

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



  // Click navigation
  // - add click event on slide
  for (var i = 0; i < bullets.length; i++) {
    slides[i].addEventListener('click', clickSlide, false);
  }

  // - click on a slide
  function clickSlide(event) {
    if (direction == 'prev') {
      previousSlide(1);
    } else {
      nextSlide(1);
    }

    if (pos == -(slideCount - 1)) {
      direction = 'next';
    }
    if (pos == 0) {
      direction = 'prev';
    }

    removeActiveBulletClass();
    setActiveBulletClass();
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


slider('.slider__slides .slide', '.slider__bullets div');
