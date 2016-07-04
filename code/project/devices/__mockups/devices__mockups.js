var klass = require('./../../../framework/helpers/js/klass.js');
var changeImage = require('./../../../framework/helpers/js/changeImage.js');
var mockupMorphingScale = require('./../../../framework/design/decorations/mockup/--morphing/mockup--morphing.js');

// Idea
// 1. Get all mockup sizes
// 2. Create a custom scale between them connected to the range
// 3. Scale up / down mockups
// 4. Hide / show mockup components like buttons, etc.

// Globals
var deviceMockupOldValue = 1;
var deviceMockups = ['mobile', 'tablet', 'laptop'];

var deviceMockupChange = function(mockup, value) {
  console.log('v:' + value + ', ' + deviceMockupOldValue);

  // Morph devices
  var m = Math.trunc(value);
  var s = value % 1;
  var d = (value - deviceMockupOldValue > 0) ? "up" : "down"
  mockupMorphingScale(deviceMockups[m - 1], s, d);


  // Switch devices
  switchDevice(Math.trunc(value), Math.trunc(deviceMockupOldValue));

  function switchDevice(newValue, oldValue) {
    if (newValue != oldValue) {
      replaceClass('mockup--' + deviceMockups[oldValue - 1], 'mockup--' + deviceMockups[newValue - 1]);
      replaceImage(newValue);
    }
  }


  // Helpers
  // Change mockup klass
  function replaceClass(from, to) {
    klass(mockup, from, 'remove');
    klass(mockup, to, 'add');
  }

  // Change mockup image
  function replaceImage(imageID) {
    var sourceImageID = '.devices__mockups .hidden-mockups .mockup:nth-of-type(' + imageID + ') .figure';
    changeImage(sourceImageID, '.devices__mockups .mockup .figure');
  }



  deviceMockupOldValue = value;
}

module.exports = deviceMockupChange;
