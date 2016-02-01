// Click
//
// Shorthand for `addEventListener("click")`
// - it is applied for a set of elements
//



var select = require('./select.js');
var l = require('./loop.js')


var click = function(items, cb) {
  items.loop(function(item) {
    item.addEventListener("click", cb, false);
  });
}


module.exports = click;
