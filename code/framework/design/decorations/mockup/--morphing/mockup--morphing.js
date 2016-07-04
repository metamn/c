var select = require('./../../../../helpers/js/select.js');
var transform = require('./../../../../helpers/js/transform.js');
var l = require('./../../../../helpers/js/loop.js');
var elementSize = require('./../../../../helpers/js/elementSize.js');


// Scale a mockup
var mockupMorphingScale = function(mockup, device, scale) {
  console.log('Scaling ' + device + " to " + scale);
  var mockupSizes = mockupMorphingGetSizes('.hidden-mockups .mockup');
  var device1Sizes = mockupSizes[device - 1]
  var device2Sizes = mockupSizes[device];
  if (device2Sizes) {
    var scaleXUnit = (device2Sizes.width / device1Sizes.width - 1) / 10;
    var scaleYUnit = (device2Sizes.height / device1Sizes.height - 1) / 10;
    var scaleX = 1 + scaleXUnit * scale * 10;
    var scaleY = 1 + scaleYUnit * scale * 10;
    transform(mockup, '', 'scale(' + scaleX + ', ' + scaleY + ')');
  } else {
    transform(mockup, 'scale(1, 1)', 'scale(1, 1)');
  }
}

module.exports = mockupMorphingScale;



// Get mockup sizes
//
// It is used to calculate transitions
//
// $containerID - the mockups inside a container. Ex.: '.hidden-mockups .mockup'
//
// Returns an array of Objects
function mockupMorphingGetSizes(mockupsID) {
  var ret = [];

  var mockups = select(mockupsID);
  mockups.loop(function(mockup) {
    var size = elementSize(mockup);
    ret.push(size);
  });

  return ret;
}
