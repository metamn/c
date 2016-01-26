// Configuration for Gulp tasks


module.exports = {
  // The destination folder where all the generated files will be copied
  // - the contents of this folder will be uploaded to a static web server like Github Pages
  dest: 'production',

  // Global config.json file
  // - this will be loaded every time a .swig file is compiled
  config_json: '../../../code/config.json',



  // Swig source files
  // - they will be all compiled
  swig_src: ['code/**/*.swig'],

  // Swig dest files (same directory)
  // - and put in the same directory where the original .swig file was found
  swig_dest: 'code',


  // .html files to be moved into dest
  html_src: 'code/pages/**/**/*.html',


  // main .js filename, created with Webpack
  // - details in the webpack config file
  js_src: 'production/assets/scripts/site.bundle.js',

  // webpack config file
  js_webpack_config: '../../../webpack.config.js',

  // .js file destination
  js_dest: 'production/assets/scripts',


}
