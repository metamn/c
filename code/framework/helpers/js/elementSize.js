// Element size
//
// Calculate the width and height of an element
// - http://stackoverflow.com/questions/16467220/css3-how-to-calculate-height-and-width-after-scale
//
// $el - the element

var elementSize = function(element) {
  //var width = el.offsetWidth;
  //var height = el.offsetHeight;
  var width = element.getBoundingClientRect().width;
  var height = element.getBoundingClientRect().height;
  var ret = { width: width, height: height };

  return ret;
}

module.exports = elementSize;
