// Configuration for Gulp tasks

// the project root directory relative from the gulp tasks directory
var rootDir = '../../../';

// the folder for source code
var sourceCode = 'code';

// the destination folder where production ready code will be generated
var destination = 'production';

// supported image extensions
var image_extensions = '/*.{png,jpg,gif,jpeg,svg}';



module.exports = {
  // The destination folder where all the generated files will be copied
  // - the contents of this folder will be uploaded to a static web server like Github Pages
  dest: destination,


  // Global config.json file
  // - this will be loaded every time a .swig file is compiled
  config_json: rootDir + sourceCode + '/config.json',



  // SWIG source files
  // - they will be all compiled
  swig_src: sourceCode + '/**/*.swig',

  // SWIG dest files (same directory)
  // - and put in the same directory where the original .swig file was found
  swig_dest: sourceCode,



  // HTML files to be moved into dest
  html_src: sourceCode + '/pages/**/**/*.html',



  // Webpack config file
  js_webpack_config: rootDir + 'webpack.config.js',

  // JS file destination
  js_dest: destination + '/assets/scripts',



  // SCSS file to compile
  scss_src: sourceCode + '/config.scss',

  // CSS file destination
  scss_dest: destination + '/assets/styles',

  // CSS file name
  scss_dest_name: 'site.min.css',



  // Image destination
  image_dest: destination + '/assets/images',

  // Image extensions
  image_ext: image_extensions,



  // KSS sources
  kss_src: sourceCode + '/**/*.scss',
}
