const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    model: "./model3d/model.js",
  },
  devtool: "source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./model3d/build"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "model3d"),
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 1024000,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    minimize: true,
  },
};
