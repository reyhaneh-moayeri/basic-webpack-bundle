const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/app.js"),
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    port: 5000, //default 8080
    open: true, //lunch the browser
    hot: true, //hot reloading
    // watchContentBase: true,
  },
  //   loaders
  module: {
    //   will be read from right to left => first css loader and then style loader
    //   css loader => looks for the file , turns it into a module and gives it to the javascript
    //   style-loader => it gives the imported from javascript file and inject it to our html file
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  //   plugins
  plugins: [
    new htmlWebpackPlugin({
      title: "Just a Demo",
      name: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
  ],
};

// webpak by default undrestands json and javascript, and it doesn't know what is images,html,css and ... files are
// loaders : for diffrent file types
// plugins do extra works
