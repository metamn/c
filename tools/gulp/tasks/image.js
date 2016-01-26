// Images

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),
    getJSONData = require('../utils/getJSONData'),

    rename = require('gulp-rename'),
    data = require('gulp-data'),
    fs = require('fs');

// Configuration
var paths = require('./../config');



// Resize an image
var imageResize = function(file, data) {

  sizes = data.image_sizes;
  resize = data.resize;
  if (sizes && resize) {
    imageResize(fileName.path, sizes);
  } else {
    console.log('No resize needed.');
  }
}



// Optimize an image
var imageOptimize = function(file, data) {

  optimize = data.optimize
  if (optimize) {

  } else {
    console.log('No optimization needed.');
  }
}



// Move image to destination
var imageMove = function(file, data) {

  dest = paths.image_dest;
  destination = data.destination
  if (destination) {
    dest = destination;
  }

  return gulp.src(file)
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(dest))
}



gulp.task('image', function() {
  var fileName = process.argv[4];

  if (fileName === undefined ) {
    console.log('Usage: gulp image --file <complete-path-to-image-file>');

  } else {
    return gulp.src(fileName)
      .pipe(plumber({errorHandler: onError}))
      .pipe(data(function(fileName) {
        data = getJSONData(fileName);
        if (data) {
          imageResize(fileName.path, data);
          imageOptimize(fileName.path, data);
          imageMove(fileName.path, data);
        }
      }))
  }
});
