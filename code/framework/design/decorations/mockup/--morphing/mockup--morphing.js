var select = require('./../../../../helpers/js/select.js');
var transform = require('./../../../../helpers/js/transform.js');
var l = require('./../../../../helpers/js/loop.js');
var elementSize = require('./../../../../helpers/js/elementSize.js');
var changeImage = require('./../../../../helpers/js/changeImage.js');


// Globals
var deviceMockups = ['mobile', 'tablet', 'laptop'];
var steps = 10;


// Scale an element via `transform`
//
// $mockup - the element to scale
// $from - the ID of the element to scale from (0 - mobile, 1 - tablet, etc)
// $to - the ID of the element to scale to
// $step - how much to scale (0.1 - 0.99)
//
// Example: (mockup, 0, 1, 0.3, 10);
var mockupMorphingScale = function(mockup, from, to, step) {
  console.log('Scaling ' + from + " to " + to + " with " + step);

  if (step == 0) {
    var figure = select('.mockup .figure')[0];
    figure.style = '';
  }


  var scaleUnit = mockupMorphingGetScalingUnit(from, to, steps);
  var scaleX = 1 + scaleUnit.x * step * steps;
  var scaleY = 1 + scaleUnit.y * step * steps;
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
var mockupMorphingGetScalingUnit = function(from, to, steps) {
  var mockupSizes = mockupMorphingGetSizes('.hidden-mockups .mockup');
  var device1Sizes = mockupSizes[from]
  var device2Sizes = mockupSizes[to];
  var scaleXUnit = (device2Sizes.width / device1Sizes.width - 1) / steps;
  var scaleYUnit = (device2Sizes.height / device1Sizes.height - 1) / steps;

  return { x: scaleXUnit, y: scaleYUnit }
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


// Change a mockup
var mockupMorphingChangeDevice = function(mockup, to) {
  console.log('Changing mockup to ' + to);

  // get the current size
  // - this means we need the figure size
  var figure = select('.mockup .figure')[0];
  var currentSize = elementSize(figure);

  // change class
  mockup.classList = '';
  mockup.classList.add('mockup--morphing');
  mockup.classList.add('mockup--' + deviceMockups[to]);

  // replace image
  var imageID = to + 1
  var sourceImageID = '.devices__mockups .hidden-mockups .mockup:nth-of-type(' + imageID + ') .figure';
  changeImage(sourceImageID, '.devices__mockups .mockup .figure');

  // set original size
  figure.style.width = currentSize.width + 'px';
  figure.style.height = currentSize.height + 'px';
}

module.exports = {
  mockupMorphingChangeDevice: mockupMorphingChangeDevice,
  mockupMorphingScale: mockupMorphingScale
}
