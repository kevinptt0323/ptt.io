const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'cheap-module-source-map',
  profile: true,
  watch: true,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      }
    ]
  }
};

module.exports = config;
