var click = require('./../../../helpers/js/click.js');
var select = require('./../../../helpers/js/select.js');
var klass = require('./../../../helpers/js/klass.js');

var iconHamburgerClick = function(triggerID) {
  var trigger = select(triggerID);

  click(trigger, function() {
    klass(trigger[0], 'icon-hamburger--close', 'toggle');
    klass(trigger[0], 'icon-hamburger--open', 'toggle');
  });
}

module.exports = iconHamburgerClick;
