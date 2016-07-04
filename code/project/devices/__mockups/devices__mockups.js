var klass = require('./../../../framework/helpers/js/klass.js');
var changeImage = require('./../../../framework/helpers/js/changeImage.js');
var mockupMorphingScale = require('./../../../framework/design/decorations/mockup/--morphing/mockup--morphing.js');


// Globals
var deviceMockupOldValue = 1;
var deviceMockups = ['mobile', 'tablet', 'laptop'];

var deviceMockupChange = function(mockup, value) {
  console.log('v:' + value + ', ' + deviceMockupOldValue);

  replaceClass(mockup, value);


  // Helpers
  // Change mockup klass
  function replaceClass(mockup, value) {
    switch (true) {
      case (value <= 1.5):
        device = 0;
        break;
      case ((value > 1.5) && (value <= 2.5)):
        device = 1;
        break;
      default:
        device = 2;
    }

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
