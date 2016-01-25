// JS
//
// - compile .js files with Webpack, minimize it and move to the destination
//
// Styleguide js

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    onError = require('../utils/onError'),

    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream');


// Configuration
var paths = require('./../config');


var js = function(source, webpack_config, dest) {
  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))
    .pipe(webpack(require(webpack_config)))
    .pipe(uglify())
    .pipe(gulp.dest(dest));
};


// Task for concatenating, minifying and moving .js files for /site
gulp.task('js', function() {
  js(paths.js_src, paths.js_webpack_config, paths.js_dest);
});

// Task for concatenating, minifying and moving .js files for /styleguide
gulp.task('jsSg', function() {
  js(paths.styleguide_js_src, paths.styleguide_js_filename, paths.styleguide_js_dest);
});
