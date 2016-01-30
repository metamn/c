// Click
//
// Shorthand for `addEventListener("click")`
//

var select = require('./select.js');



var click = function(items, cb) {
  items.loop(function(item) {
    item.addEventListener("click", cb, false);
  });
}


module.exports = click;
