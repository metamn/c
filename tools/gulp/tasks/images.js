// Images

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


var image = function(source, dest) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))
    .pipe(rename(function(path) {
      path.dirname = '';
      //console.log('p:' + path.dirname);
    }))
    .pipe(gulp.dest(dest));
}



gulp.task('images', function() {
  image(paths.image_src, paths.image_dest);
});
