// Popup
//
// A full screen popup
// All other elements on the page will be hidden
//
// - $item - the only element to show
//
// Other parameters are passed through the `data` attributes of the item:
// - $data - the JSON file where the item data can be found
// - collection - the name of the collection where the item can be found
// - $id - the id of the item from the collection
// - $template - the SWIG template to render the item stored in a JSON file's 'data' attribute
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

  // the JSON file name
  this.json = (item.dataset.data === undefined) ? null : item.dataset.data;

  // site url + JSON data file
  this.dataURL = this.url + this.json + '.json';

  // the collection if items, like articles
  this.collection = (item.dataset.collection === undefined) ? null : item.dataset.collection;

  // the item, like articles[0]
  this.id = (item.dataset.id === undefined) ? null : item.dataset.id;

  // the SWIG template to render put in a JSON file
  this.template = (item.dataset.template === undefined) ? null : item.dataset.template;

  // site.url + template JSON file
  this.templateURL = this.url + this.template + '.json';

  // all params are ok for the call
  this.canCall = (this.url && this.json && this.collection && this.id && this.template);
}


// Hide all elements of a container
Popup.prototype.hideAll = function(containerID) {
  var toHide = select(containerID);

  toHide.loop(function(item) {
    item.style.display = 'none';
  });
}


// Create the response using SWIG
Popup.prototype.swig = function(item, template) {
  var output = "na";

  var tpl = template;
  output = swig.render(tpl, { filename: '/tpl', locals: { item: item }});

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
    // Get JSON data
    jsonAJAX(p.dataURL, function(json) {
      var item = json[p.collection][p.id];
      if (!item) {
        console.log('The item was not found in the data JSON');
        return;
      }

      // Get SWIG template
      jsonAJAX(p.templateURL, function(template) {
        var template = template['data'];
        if (!template) {
          console.log('The template cannot be read');
          return;
        }

        // Hide all other elements
        p.hideAll('body > *');

        // Create the response
        document.body.innerHTML += p.swig(item, template);
      });
    });
  } else {
    console.log('Not all parameters are set up for the ajax call');
  }
}



module.exports = popup;
