var select = require('./../../../helpers/js/select.js');
var click = require('./../../../helpers/js/click.js');
var klass = require('./../../../helpers/js/klass.js');

var xa = function(elementID) {
  var elements = select(elementID);

  click(elements, function(element) {
    animateByClass(element);
  });
}

var animateByClass = function(element) {
  klass(element, 'animated', 'toggle');
}

module.exports = xa;
