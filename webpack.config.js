module.exports = {
  // from /site ....
  entry: "./code/config.js",
  output: {
    // ... goes to /dist/assets/scripts
    path: __dirname,
    filename: "site.min.js"
  }
};
