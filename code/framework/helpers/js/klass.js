var l = require('./loop.js');

function Klass() {
}

Klass.prototype.removeAll = function(elements, klass, k) {
  elements.loop(function(element) {
    k.remove(element, klass);
  });
}

Klass.prototype.remove = function(element, klass) {
  element.classList.remove(klass);
}

Klass.prototype.addAll = function(elements, klass, k) {
  elements.loop(function(element) {
    k.add(element, klass);
  });
}

Klass.prototype.add = function(element, klass) {
  element.classList.add(klass);
}

Klass.prototype.has = function(element, klass) {
  return element.classList.contains(klass);
}


var klass = function(element, klass, action) {
  var k = new Klass();

  switch (action) {
    case 'add':
      k.add(element, klass);
      break;
    case 'remove':
      k.remove(element, klass);
      break;
    case 'removeAll':
      k.removeAll(element, klass, k);
      break;
    case 'addAll':
      k.addAll(element, klass, k);
      break;
    case 'has':
      k.has(element, klass);
      break;
    default:
  }
}

module.exports = klass;
