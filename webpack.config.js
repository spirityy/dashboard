var webpack = require('webpack');

module.exports = {
  entry: './public/index.js',

  output: {
    path:__dirname + '/build',
    filename: 'index.js',
    publicPath:'/build/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  node: {
    Buffer: false
  },

  plugins: [
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.DefinePlugin({
    //  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //})
  ]
};
