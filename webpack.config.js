/* eslint-disable */

var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config            = {};

config.entry   = { 'app': './src/app' };
config.devtool = 'eval';
config.output  =
  { path: path.join(__dirname, 'public'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };
config.resolve = { modulesDirectories: ['node_modules', 'src'] };
config.module  =
  { loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  };
config.plugins =
  [ new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    new HtmlWebpackPlugin(),
  ];
config.devServer = { contentBase: './public' };

module.exports = config;
