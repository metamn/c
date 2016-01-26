// Image Resize
//
// - create responsive images with a specific height or width for each device together with their retina (2x) version
// - the size of the image is specified in the associated .json file. (image.json for image.png)
//
// Styleguide imageResize

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    rename = require('gulp-rename'),
    data = require('gulp-data'),
    fs = require('fs'),
    imageResize = require('gulp-image-resize'),
    gulpif = require('gulp-if');


// Configuration
var paths = require('./../config');



// Resize a single image with ImageMagick
var _imageResize = function(file, sizeType, size, name) {
  console.log("Resizing " + file + " " + sizeType + " to " + size);
  gulp.src(file)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulpif(sizeType == 'height',
      imageResize({
        height : size,
        sharpen: true,
        imageMagick: true
      }),
      imageResize({
        width : size,
        sharpen: true,
        imageMagick: true
      })
    ))
    .pipe(rename(function (path) { path.basename += "_" + name; }))
    .pipe(gulp.dest(paths.image_resize_dest));
}


// Resize an image
var imageBatchResize = function(file, retina, retina_name) {
  return gulp.src(file)
    .pipe(plumber({errorHandler: onError}))
    .pipe(data(function(file) {

      // Get the associated JSON file with size definitions
      splits = file.path.split('.');
      json_file = splits[0] + '.json';

      // If there is JSON resize the images
      if (fs.existsSync(json_file)) {
        json = require(json_file);
        sizes = json.image_sizes;
        if (sizes) {
          for (i in sizes) {
            // Resize width or height?
            if (typeof sizes[i].height !== 'undefined') {
              size = sizes[i].height;
              sizeType = 'height';
            } else {
              size = sizes[i].width;
              sizeType = 'width';
            }
            _imageResize(file.path, sizeType, size * retina, sizes[i].name + retina_name);
          }
        } else {
          console.log('No resize needed');
        }
      }
    }))
}


// Image resize
// - create different images for different devices
gulp.task('imageResize', function() {
  var fileName = process.argv[4];
  if (fileName === undefined ) {
    console.log('Usage: gulp image --file <complete-path-to-image-file>');
  } else {
    imageBatchResize(fileName, 1, '');
  }
});


// Retina images
// - create 2x images for different devices
gulp.task('imageResize2x', function() {
  var fileName = process.argv[4];

  if (fileName === undefined ) {
    console.log('Usage: gulp image --file <complete-path-to-image-file>');
  } else {
    imageBatchResize(fileName, 2, '2x');
  }
});
