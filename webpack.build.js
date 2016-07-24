/* eslint-disable */

var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config            = {};

config.entry   = { 'app': './src/app' };
config.devtool = 'source-map';
config.output  =
  { path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  };
config.resolve = { modulesDirectories: ['node_modules', 'src'] };
config.module  =
  { loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  };
config.plugins =
  [ new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new HtmlWebpackPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ];

module.exports = config;
