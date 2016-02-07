// Popup
//
// A full screen popup
// All other elements will be hidden
//
// $item - the only element to show
//
// Styleguide popup


var select = require('./../../helpers/js/select.js');
var l = require('./../../helpers/js/loop.js');
var jsonAJAX = require('./../../helpers/js/jsonAJAX.js');


var popup = function(item) {

  // Set up the call
  var url = select('meta[property="og:url"]');
  url = url[0].getAttribute('content') + 'home.json';

  var collection = item.dataset.collection;
  var id = item.dataset.id;

  // Get JSON
  jsonAJAX(url, function(json) {
    var title = json[collection][id].title;

    // Hide all other elements
    var toHide = select('body > *');
    toHide.loop(function(item) {
      item.style.display = 'none';
    });

    // Create the popup element
    var p = document.createElement('section');
    p.classList.add('popup');

    // Create popup content
    p.innerHTML = '<nav class="popup__close"><h3 class="title">Close</h3><div class="button icon-hamburger icon-hamburger--default"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div></nav>' + title;

    // Insert into `body`
    document.body.appendChild(p);
  });
}



module.exports = popup;
