// http://codepen.io/drainpip/pen/pvKobQ

function getScrollTop() {
  if (typeof pageYOffset != 'undefined') {
    //most browsers except IE before #9
    return pageYOffset;
  } else {
    var B = document.body; //IE 'quirks'
    var D = document.documentElement; //IE with doctype
    D = (D.clientHeight) ? D : B;
    return D.scrollTop;
  }
}


function scrollTo(element, duration, easingFunction) {
  var Y = element.getBoundingClientRect().top;
  var start = Date.now(),
      from = getScrollTop();

  if (from == Y) {
    return;
  }

  function min(a, b) {
    return a < b ? a : b;
  }

  function scroll(timestamp) {
    var currentTime = Date.now(),
        time = min(1, ((currentTime - start) / duration)),
        easedT = easingFunction(time),
        topCalc = (easedT * (Y - from)) + from;

    document.documentElement.scrollTop = topCalc;
    document.body.scrollTop = topCalc;

    if (time < 1) {
      requestAnimationFrame(scroll);
    }
    else {
      return;
    }
  }

  requestAnimationFrame(scroll)
}

// options for easing when I call the obove function
var easing = {
  // no easing, no acceleration
  linear: function(t) { return t },
  // accelerating from zero velocity
  easeInQuad: function(t) { return t * t },
  // decelerating to zero velocity
  easeOutQuad: function(t) { return t * (2 - t) },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
  // accelerating from zero velocity
  easeInCubic: function(t) { return t * t * t },
  // decelerating to zero velocity
  easeOutCubic: function(t) { return (--t) * t * t +1 },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function(t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
};
