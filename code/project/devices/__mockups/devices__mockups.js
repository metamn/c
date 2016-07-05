var m = require('./../../../framework/design/decorations/mockup/--morphing/mockup--morphing.js');


var deviceMockupChange = function(mockup, value) {
  console.log('v:' + value);

  var step = value % 1;

  switch (true) {
    case (value == 1.6):
      m.mockupMorphingChangeDevice(mockup, 1);
      break;
    case (value == 2.3):
      m.mockupMorphingChangeDevice(mockup, 2);
      break;
    case (value <= 2):
      m.mockupMorphingScale(mockup, 0, 1, step);
      break;
    case (value > 2):
      m.mockupMorphingScale(mockup, 1, 2, step);
      break;
  }
}

module.exports = deviceMockupChange;
