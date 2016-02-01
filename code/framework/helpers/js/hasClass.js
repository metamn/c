// hasClass
//
// A shorthand version for `element.classList.contains`
//
var hasClass = function(element, klass) {
  return element.classList.contains(klass);
}


module.exports = hasClass;
