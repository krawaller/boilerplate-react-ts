/* tslint:disable object-literal-sort-keys */

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  devtool: "eval-source-map",
  entry: __dirname + "/src/index.tsx",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
      exclude: /node_modules/,
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
  ],
};
