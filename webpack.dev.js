const {merge} = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devtool: "source-map",
  target: "web",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "./dist"),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },
});