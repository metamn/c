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


// Create the response using SWIG
Popup.prototype.swig = function(json) {
  var output = "na";

  /* This works
  var tpl = "{{ title }}";
  output = swig.render(tpl, { filename: '/tpl', locals: { title: 'awesome' }});
  */

  /* This works not
  swig.run(popupTemplate, {}, '/popupTemplate.html');
  var tpl = "{% include './popupTemplate.html' %}";
  output = swig.render(tpl, { filename: '/tpl', locals: { title: 'awesome' }});
  */

  return output;
}


// Create the response by manually adding content
Popup.prototype.response = function(item) {
  var res = '';

  res += '<section class="popup">';

  // close
  res += '<div class="popup__close">';
  res += 'close';
  res += '</div>';

  // article
  res += '<article class="list-item">';

  // title
  res += '<h3 class="list-item__title">' + item.title + '</h3>';

  // figure
  var image = item.images[0].name + item.images[0].extension;
  res += '<figure class="figure"><picture class="picture>"';
  res += '<source media="(min-width: 1600px)" srcset="/assets/images/' + image + '_desktop.png, /assets/images/' + image + '_desktop2x.png 2x"></source>';
  res += '</picture></figure>';

  res += '</article>';

  res += '';
  res += '</section>';

  return res;
}



var popup = function(item) {
  var p = new Popup(item);

  if (p.canCall) {
    // Get JSON
    jsonAJAX(p.ajaxURL, function(json) {
      var item = json[p.collection][p.id];

      // Hide all other elements
      p.hideAll('body > *');

      // Create the response
      document.body.innerHTML += p.response(item);
    });
  } else {
    console.log('Not all parameters are set up for the ajax call');
  }
}



module.exports = popup;
