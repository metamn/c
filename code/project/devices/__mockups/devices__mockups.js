var klass = require('./../../../framework/helpers/js/klass.js');
var changeImage = require('./../../../framework/helpers/js/changeImage.js');
var m = require('./../../../framework/design/decorations/mockup/--morphing/mockup--morphing.js');


// Globals
var deviceMockupOldValue = 1;
var deviceMockups = ['mobile', 'tablet', 'laptop'];
var steps = 10;

var deviceMockupChange = function(mockup, value) {
  console.log('v:' + value + ', ' + deviceMockupOldValue);

  var step = value % 1;

  switch (true) {
    case (value < 1.66):
      device = 0;
      unit = m.mockupMorphingGetScale(0, 1, 1.66, 0);
      break;
    case (value = 1.66):
      device = 1;
      replaceClass(mockup, device);
      unit = m.mockupMorphingGetScale(0, 1, 1.66, 1);
      break;
    case ((value > 1.66) && (value < 2)):
      device = 1;
      unit = m.mockupMorphingGetScale(0, 1, 1.66, 1);
      break;
    case ((value >= 2) && (value < 2.33)):
      device = 1;
      unit = m.mockupMorphingGetScale(1, 2, 2.33, 1);
      break;
    case (value = 2.33):
      device = 2;
      replaceClass(mockup, device);
      unit = m.mockupMorphingGetScale(1, 2, 2.33, 1);
      break;
    case (value > 2.33):
      device = 2;
      unit = m.mockupMorphingGetScale(1, 2, 2.33, 2);
      break;
  }

  m.mockupMorphingScale(mockup, unit, step, steps);



  // Helpers


  // Change mockup klass
  function replaceClass(mockup, device) {
    mockup.classList = '';
    mockup.classList.add('mockup--morphing');
    mockup.classList.add('mockup--' + deviceMockups[device]);
    replaceImage(device + 1);
  }

  // Change mockup image
  function replaceImage(imageID) {
    var sourceImageID = '.devices__mockups .hidden-mockups .mockup:nth-of-type(' + imageID + ') .figure';
    changeImage(sourceImageID, '.devices__mockups .mockup .figure');
  }

  deviceMockupOldValue = value;
}

module.exports = deviceMockupChange;
