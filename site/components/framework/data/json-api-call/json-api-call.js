// Calls a JSON API via AJAX
// - the container has to have a `data-url` set up to perfom the call
// - the response is sent back via a callback function
var jsonAPICall = function(containerID, callback) {
  var container = document.querySelector(containerID);
  if (!container) return;
  
  var url = container.dataset.url;

  // JSON AJAX Call to an API endpoint
  // - http://www.w3schools.com/json/json_http.asp
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  // Process request
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var result = JSON.parse(xmlhttp.responseText);
      callback(result);
    }
  }
}
