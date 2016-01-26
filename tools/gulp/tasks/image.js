// Images

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    rename = require('gulp-rename'),
    data = require('gulp-data'),
    fs = require('fs');

// Configuration
var paths = require('./../config');






// Move image to destination
var imageMove = function(file, dest) {
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

        // Get the associated JSON file with size definitions
        splits = fileName.path.split('.');
        jsonFile = splits[0] + '.json';

        // If there is JSON resize the images
        if (fs.existsSync(jsonFile)) {
          json = require(jsonFile);

          // Resize
          sizes = json.image_sizes;
          resize = json.resize;
          if (sizes && resize) {

          } else {
            console.log('No resize needed.');
          }

          // Optimize
          optimize = json.optimize
          if (optimize) {

          } else {
            console.log('No optimization needed.');
          }

          // Move
          destination = json.destination
          if (destination) {
            dest = destination;
          } else {
            dest = paths.image_dest;
          }
          imageMove(fileName.path, dest);
        } else {
          console.log('No associated JSON file found');
        }
      }))
  }
});
