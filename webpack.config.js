module.exports = {
  // from /site ....
  entry: "./site/site.js",
  output: {
    // ... goes to /dist/assets/scripts
    path: __dirname,
    filename: "site.min.js"
  }
};
