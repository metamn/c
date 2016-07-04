var select = require('./../../../../helpers/js/select.js');
var l = require('./../../../../helpers/js/loop.js');
var elementSize = require('./../../../../helpers/js/elementSize.js');


// Scale a mockup
var mockupMorphingScale = function(mockup, scale, direction) {
  console.log('Scaling ' + mockup + " " + direction + " to " + scale);
  var mockupSizes = mockupMorphingGetSizes('.hidden-mockups .mockup');
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
