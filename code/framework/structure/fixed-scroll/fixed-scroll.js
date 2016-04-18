var _ = require('lodash');
var l = require('./../../helpers/js/loop.js');
var select = require('./../../helpers/js/select.js');
var klass = require('./../../helpers/js/klass.js');

var fixedScroll = function(slidesContainerID, slideID) {
  window.addEventListener('scroll', _.throttle(_.bind(fixedScrolling, this, slidesContainerID, slideID), 300));
};

var fixedScrolling = function() {
  var slidesContainerID = arguments[0];
  var slideID = arguments[1];

  var slidesSelector = slidesContainerID + ' ' + slideID;
  var slides = select(slidesSelector);

  console.log('throttle for ' + slidesSelector + ' ' + slides.length);


  klass(slides, 'fixed-scroll__slide--active', 'removeAll');
  klass(slides[0], 'fixed-scroll__slide--active', 'add');
};

module.exports = fixedScroll;
