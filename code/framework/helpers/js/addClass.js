// Add a class for an elememt
//
// This is a replacement for `element.classList.add()`
//
var addClass = function(element, klass) {
  element.classList.add(klass);
}

module.exports = addClass;
