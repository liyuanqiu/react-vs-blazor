const {
  override,
  addWebpackPlugin,
} = require("customize-cra");
var BrotliPlugin = require('brotli-webpack-plugin');

module.exports = override(
  addWebpackPlugin(new BrotliPlugin()),
);