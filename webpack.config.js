const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/component.js"),
    // another: path.resolve(__dirname, "src/another_module"),
    // index: {
    //   import: "./src/index.js",
    //   dependOn: "shared",
    // },
    // another: {
    //   import: "./src/another_module.js",
    //   dependOn: "shared",
    // },
    // shared: "lodash",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
    publicPath: "/",
    // library: {
    //   name: "webpackNumbers",
    //   type: "umd",
    // },
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5000, //default 8080
    // open: true, //lunch the browser
    hot: true, //hot reloading
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin({ parallel: true }),
    ],
    minimize: true,
  },
  //   loader
  //   plugins
  plugins: [
    new htmlWebpackPlugin({
      title: "Just a Demo",
      name: "index.html",
      template: path.resolve(__dirname, "src/temp.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      insert: function (linkTag) {
        var reference = document.querySelector("#some-element");
        if (reference) {
          reference.parentNode.insertBefore(linkTag, reference);
        }
      },
    }),
  ],
};

// webpak by default undrestands json and javascript, and it doesn't know what is images,html,css and ... files are
// loaders : for diffrent file types
// plugins do extra works
