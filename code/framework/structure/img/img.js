// Preloading an image or a set of images
// - it is using the `imagesLoaded` script
// - `containerID` can refer a set of images like `.articles` or just a single image like `.articles .article`
var imagesLoading = function(containerID) {
  var containers = document.querySelectorAll(containerID);

  for (var i = 0; i < containers.length; i++) {
    imageLoading(containers[i]);
  }
}

// Adding the class `img-loaded` for images inside a single container
// - it also adds `figure--loaded` for the parent `figure` container
var imageLoading = function(container) {
  var images = container.querySelectorAll('.img');
  var figures = container.querySelectorAll('.figure');

  imagesLoaded(container, function(instance) {
    for (var i = 0; i < images.length; i++) {
      figures[i].classList.add('figure--loaded');
      images[i].classList.add('img--loaded');
    }
  });
}

module.exports = imagesLoading;
