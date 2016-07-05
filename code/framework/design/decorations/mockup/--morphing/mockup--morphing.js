var select = require('./../../../../helpers/js/select.js');
var transform = require('./../../../../helpers/js/transform.js');
var l = require('./../../../../helpers/js/loop.js');
var elementSize = require('./../../../../helpers/js/elementSize.js');


// Scale an element via `transform`
//
// $mockup - the element to scale
// $scaleUnit - the unit of scale
// $scale - how much to scale (coming from a user input perhaps)
// $steps - how many steps are in the transition (according to the range slider)
//
// Example: (mockup, scaleUnit, .3, 10) => scaling 3 steps
var mockupMorphingScale = function(mockup, scaleUnit, scale, steps) {
  var scaleX = 1 + scaleUnit.x * scale * steps;
  var scaleY = 1 + scaleUnit.y * scale * steps;
  transform(mockup, '', 'scale(' + scaleX + ', ' + scaleY + ')');
}


// Get the scaling unit
//
// A scaling unit tells how to scale a device to another through `transform: scale(X, Y)`
// For example if the mobile width is 196px and the tablet width is 388px the difference which is 219px has to be translated to fit `scale()`.
// `scale()` values are integers like `scale(1, 1)` or `scale(2, 2)`
//
// $device1Sizes - the size of the first device
// $device2Sizes - the size of the second device
// $steps - how many steps are in the transition (according to the range slider)
//
// Example: (mobile, tablet, 10) => (0.0979, ...)
// 388 / 196 =  1.979, which means scalex(1) = mobile, scaleX(1,979) is tablet
// (1.979 - 1) / 10 = 0.0979 is each step in the scale; scale 1 up = scalex(1 + 0.0979); scale 9 up = scaleX(1 + 0.0979*9) = scaleX(1,8811); scale 9.9 up = scaleX(1,96921)
//
// Returns an object
var mockupMorphingGetScalingUnit = function($device1Sizes, $device2Sizes, $steps) {
  var scaleXUnit = (device2Sizes.width / device1Sizes.width - 1) / $steps;
  var scaleYUnit = (device2Sizes.height / device1Sizes.height - 1) / $steps;

  return { x: scaleXUnit, y: scaleYUnit }
}



// Get a scale
//
// When scaling from mobile to tablet we scale up mobile to a point then switch the mockup to tablet.
// Then scale up tablet to the original tablet size.
// Example: mobile -> tablet small -> tablet original
// This function returns these scales (mobile -> tablet small, tablet small -> tablet, etc)
//
// $device1 - the ID of the first device, ie 1 for mobile
// $device2 - the ID to the second device, ie 2 for tablet
// $morphingPoint - where the $device1 morphs to $device2, ie 1.67
// $startingPoint - the type of the result returned. If $startinPoint = $device1 we will get back the scale from 1-1.67, if $startinPoint = tablet we will get back the scale for 1.67 - 2
var mockupMorphingGetScale = function($device1, $device2, $morphingPoint, $startingPoint) {
  var mockupSizes = mockupMorphingGetSizes('.hidden-mockups .mockup');
  var device1Sizes = mockupSizes[device1]
  var device2Sizes = mockupSizes[device2];
  var scalingUnit = mockupMorphingGetScalingUnit(device1Sizes, device2Sizes, 10);
}



// Get mockup sizes
//
// Get all mockup sizes (width, height) participating in the transition
//
// $containerID - the mockups inside a container. Ex.: '.hidden-mockups .mockup'
//
// Returns an array of Objects
var mockupMorphingGetSizes = function(mockupsID) {
  var ret = [];

  var mockups = select(mockupsID);
  mockups.loop(function(mockup) {
    var size = elementSize(mockup);
    ret.push(size);
  });

  return ret;
}



module.exports = {
  mockupMorphingGetScale: mockupMorphingGetScale,
  mockupMorphingScale: mockupMorphingScale
}
