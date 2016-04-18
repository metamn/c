var _ = require('lodash');

var fixedScroll = function(slidesContainerID, slideID) {
  window.addEventListener('scroll', _.throttle(_.bind(fixedScrolling, this, slidesContainerID, slideID), 300));
};

var fixedScrolling = function() {
  var slidesContainerID = arguments[0];
  var slideID = arguments[1];
  
  var slidesSelector = slidesContainerID + ' ' + slideID;
  console.log('throttle for ' + slidesSelector);
};

module.exports = fixedScroll;
