// Configuration for Gulp tasks

// the project root directory relative from the gulp tasks directory
var rootDir = '../../../';

// the folder for source code
var sourceCode = 'code';

// the destination folder where production ready code will be generated
var destination = 'production';

module.exports = {
  // The destination folder where all the generated files will be copied
  // - the contents of this folder will be uploaded to a static web server like Github Pages
  dest: destination,



  // Global config.json file
  // - this will be loaded every time a .swig file is compiled
  config_json: rootDir + sourceCode + '/config.json',



  // Swig source files
  // - they will be all compiled
  swig_src: sourceCode + '/**/*.swig',

  // Swig dest files (same directory)
  // - and put in the same directory where the original .swig file was found
  swig_dest: sourceCode,



  // .html files to be moved into dest
  html_src: sourceCode + '/pages/**/**/*.html',



  // webpack config file
  js_webpack_config: rootDir + 'webpack.config.js',

  // .js file destination
  js_dest: destination + '/assets/scripts',
}
