// Popup
//
// A full screen popup
// All other elements on the page will be hidden
//
// $item - the only element to show
//
// Other parameters:
// - $url - a `<meta>` property containing the site url
// - 'home.json' - the JSON file which will be loaded
// - $collection, $id - which item `collection` to display
//
// Styleguide popup


var select = require('./../../helpers/js/select.js');
var l = require('./../../helpers/js/loop.js');
var jsonAJAX = require('./../../helpers/js/jsonAJAX.js');



// The Popup object
function Popup(item) {
  // the site url
  var url = select('meta[property="og:url"]');
  this.url = (url[0].getAttribute('content') === undefined) ? null : url[0].getAttribute('content');

  // the JSON file
  this.json = (item.dataset.json === undefined) ? null : item.dataset.json;

  // site url + JSON file
  this.ajaxURL = this.url + this.json;

  // like articles
  this.collection = (item.dataset.collection === undefined) ? null : item.dataset.collection;

  // like articles[0]
  this.id = (item.dataset.id === undefined) ? null : item.dataset.id;

  // all params are ok for the call
  this.canCall = (this.url && this.json && this.collection && this.id);
}


// Hide all elements of a container
Popup.prototype.hideAll = function(containerID) {
  var toHide = select(containerID);

  toHide.loop(function(item) {
    item.style.display = 'none';
  });
}


// Create the response useing SWIG
Popup.prototype.response = function(json) {
  var tpl = '{{ title }}';
  var output = swig.render(tpl, { filename: '/tpl', locals: { title: 'awesome' }});
  return output;
}



var popup = function(item) {
  var p = new Popup(item);

  if (p.canCall) {
    // Get JSON
    jsonAJAX(p.ajaxURL, function(json) {
      //var title = json[collection][id].title;

      // Hide all other elements
      p.hideAll('body > *');

      // Create the response element
      var section = document.createElement('section');
      section.classList.add('popup');

      // Create the response content
      section.innerHTML = p.response(json);

      // Insert into `body`
      document.body.appendChild(section);
    });
  } else {
    console.log('Not all parameters are set up for the ajax call');
  }
}



module.exports = popup;
