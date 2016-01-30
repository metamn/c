var select = require('./../../helpers/js/select.js');
var transform = require('./../../helpers/js/transform.js')

var slider = function(sliderID, bulletsID) {
  // Slider
  var slider = select(sliderID);

  // Slides
  var slides = select(sliderID + ' .slide');
  var pos = 0;
  var offset = slides[0].offsetWidth;

  // - move out of viewport all inactive slides
  function setTransform() {
    slides.loop(function(slide, i) {
      var webkitValue = 'translate(' + ((i + pos) * offset) + 'px, 0)' + 'translateZ(0)';
      var value = 'translateX(' + ((i + pos) * offset) + 'px)';
      transform(slide, webkitValue, value);
    });
  }

  // - initialize slides in a responsive way
  setTransform();
  window.addEventListener('resize', setTransform);
}


module.exports = slider;
