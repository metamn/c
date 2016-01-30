// Select
//
// A shorthand version for `document.querySelectorAll`
// - this construct doesn't support a second argument specifying another container than `document`
// - instead of `element.querySelectorAll('.id')` we should always use `document.querySelectorAll('.element .id')`
//
var select = function(IDs) {
  return document.querySelectorAll(IDs);
}



// Loop
//
// This is a replacement for the `for()` loop
// - https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
//
// It is important to avoid getting array elements by index, like `figures[i]`
// - with `loop` if the `figures` are empty we won't get any error messages;
// - with a `for` loop we will get an error and everything will halt
//
NodeList.prototype.loop = Array.prototype.forEach;



module.exports = select;
