// Nunjucks templates

// Plugins
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),

    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data'),
    fs = require('fs'),
    path = require('path'),
    onError = require('../utils/onError'),
    getJSONData = require('../utils/getJSONData');


// Configuration
var paths = require('./../config');



var _nunjucks = function(source, dest, config, grabJSON) {
  nunjucksRender.nunjucks.configure(['code'], {watch: false});

  return gulp.src(source)
    .pipe(plumber({errorHandler: onError}))

    // load JSONs
    .pipe(data(getJSONData))
    .pipe(nunjucksRender())

    .pipe(rename({ extname: '' }))
    .pipe(gulp.dest(dest));
}


// Task for compiling .swig files from /site
gulp.task('nunjucks', function() {
  _nunjucks(paths.nunjucks_src, paths.nunjucks_dest, paths.config_json);
});
