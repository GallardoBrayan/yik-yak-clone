var webpack = require("webpack");
path = require("path");
// the entry is the react code i wrote
module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "build/bundle.js",
    sourceMapFilename: "build/bundle.map"
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development"
};
