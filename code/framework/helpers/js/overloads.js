// A set of overloads for the browser
//



// Add a class for elements in a list meeting a criteria
//
// Usage: `items.addClass(klass, key, value)`
NodeList.prototype.addClass = function(klass, key, value) {
  this.loop(items) {
    if (item.key == value) {
      item.addClass(klass)
    }
  }
}



// Remove a class from all elements in a list
//
// Usage: `items.removeClass(klass)`
NodeList.prototype.removeClass = function(klass) {
  this.loop(items) {
    item.classList.remove(klass)
  }
}



// Get the index of an element from a list
//
// Usage: `items.index(item)`
NodeList.prototype.index = function(element) {
  this.loop(item, i) {
    if (item == element) break;
  }

  return i - 1;
}



// Add a class for an elememt
//
// Usage: `item.addClass()`
Element.prototype.addClass = function(klass) {
  this.classList.add(klass);
}


// Element has a class
//
// This is a replacement for `element.classList.contains()`
//
// Usage: `element.hasClass()`
Element.prototype.hasClass = function(klass) {
  return this.classList.contains(klass);
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
// Usage: `items.loop(item, index)`
NodeList.prototype.loop = Array.prototype.forEach;
