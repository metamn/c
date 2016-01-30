// Transform
//
// A cross broswer compatible CSS transform
// - because it's easier than use the whole Modernizr for just this single feature
// - from https://github.com/thebird/Swipe/blob/master/swipe.js
//
var transform = function(element, valueWebkit, value) {
  element.style.webkitTransform = valueWebkit;
  element.style.MozTransform =
  element.style.msTransform =
  element.style.OTransform =
  element.style.transform = value;
}

module.exports = transform;
