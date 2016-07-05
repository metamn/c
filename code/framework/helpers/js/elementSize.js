// Element size
//
// Calculate the width and height of an element
// - http://stackoverflow.com/questions/16467220/css3-how-to-calculate-height-and-width-after-scale
//
// $el - the element
// $scaled - if the element was transformed (scaled, etc)

var elementSize = function(el, transformed = false) {
  if (transformed) {
    var width = el.getBoundingClientRect().width;
    var height = el.getBoundingClientRect().height;
  } else {
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  }

  var ret = { width: width, height: height };
  return ret;
}

module.exports = elementSize;
