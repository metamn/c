var transform = require('./../../../framework/helpers/js/transform.js');
var klass = require('./../../../framework/helpers/js/klass.js');
var select = require('./../../../framework/helpers/js/select.js');
var changeImage = require('./../../../framework/helpers/js/changeImage.js');

var deviceMockupOldValue = 1;
var deviceMockups = ['mobile', 'tablet', 'tablet-landscape', 'laptop'];

var deviceMockupChange = function(mockup, value) {
  console.log('v:' + value + ', ' + deviceMockupOldValue);

  switchDevice(Math.trunc(value), Math.trunc(deviceMockupOldValue));


  // Helpers

  // Change mockup device if necessary
  function switchDevice(newValue, oldValue) {
    if (newValue != oldValue) {
      replaceClass('mockup--' + deviceMockups[oldValue - 1], 'mockup--' + deviceMockups[newValue - 1]);
      replaceImage(newValue);
    }
  }

  // Change mockup klass
  function replaceClass(from, to) {
    klass(mockup, from, 'remove');
    klass(mockup, to, 'add');
  }

  // Change mockup image
  function replaceImage(imageID) {
    var sourceImageID = '.devices__mockups .hidden-images .figure:nth-of-type(' + imageID + ')';
    changeImage(sourceImageID, '.devices__mockups .mockup .figure');
  }


  deviceMockupOldValue = value;
}

module.exports = deviceMockupChange;
