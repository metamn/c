// Select
//
// A shorthand version for document.querySelectorAll
//
var select = function(IDs, container) {
  if (!container) { container = document};
  return container.querySelectorAll(IDs);
}



// Loop
//
// This is a replacement for the for() loop
// - https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
//
NodeList.prototype.loop = Array.prototype.forEach;



module.exports = select;
