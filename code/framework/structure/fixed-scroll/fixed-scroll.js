var _ = require('lodash');
var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var klass = require('./../../helpers/js/klass.js');

var fixedScroll = function(slidesContainerID, slideID) {
  window.addEventListener('scroll',
    _.throttle(_.bind(fixedScrolling, this, slidesContainerID, slideID), 300)
  );
};

var fixedScrolling = function() {
  var slidesContainerID = arguments[0];
  var slideID = arguments[1];

  var slidesSelector = slidesContainerID + ' ' + slideID;
  var slides = select(slidesSelector);

  var slidesContainer = select(slidesContainerID);
  var slidesContainerHeight = slidesContainer[0].offsetHeight;
  var slideHeight = slidesContainerHeight / slides.length;

  var activeSlide = getActiveSlide(slideHeight, slides);

  klass(slides, 'fixed-scroll__slide--active', 'removeAll');
  klass(activeSlide, 'fixed-scroll__slide--active', 'add');
};

function getActiveSlide(slideHeight, slides) {
  var activeSlide = 0;

  for (var i = 0; i < slides.length; i++) {
    if (isScrolledIntoView(slideHeight, slides[i])) {
      activeSlide = i;
      break;
    }
  }

  return slides[activeSlide];
}

// http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
function isScrolledIntoView(h, el) {
  var elemBottom = el.getBoundingClientRect().bottom;
  var isVisible = (elemBottom >= 0) && (elemBottom <= h);
  return isVisible;
}

module.exports = fixedScroll;
