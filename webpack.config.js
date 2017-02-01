var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/sass/master.scss',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  // resolve {
  //   moduleDirectories: ['src'],
  //   extension: ['','.scss']
  // },
  module: {
    loaders: [
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
              'style-loader',
              'css-loader',
              'autoprefixer-loader?browsers=last 3 versions',
              'sass-loader?outputStyle=expanded'
          ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
};
