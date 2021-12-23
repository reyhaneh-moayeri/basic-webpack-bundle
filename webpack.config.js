const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
// const json5 = require("json5");
module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
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
  //   loader

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
