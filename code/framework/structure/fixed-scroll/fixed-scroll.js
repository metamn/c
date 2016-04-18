var _ = require('lodash');

var fixedScroll = function(slidesID) {
  window.addEventListener('scroll', fixedScrolling);
}

var fixedScrolling = _.throttle(function() {
  console.log('throttle');
}, 300);

module.exports = fixedScroll;
