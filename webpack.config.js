var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: "_build",
    filename: "bundle.js",
    publicPath: "/static/"
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "src/"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, "src/stylesheets"),
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}