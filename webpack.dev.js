const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        include: [
          /src/,
          /node_modules\/uao\-js/,
        ],
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
    }),
  ],
};

module.exports = config;
