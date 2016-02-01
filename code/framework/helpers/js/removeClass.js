// Remove a class for an elememt
//
// This is a replacement for `element.classList.remove()`
//
function removeClass = function(element, klass) {
  element.classList.remove(klass);
}

module.exports = removeClass;
