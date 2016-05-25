var webpack = require('webpack')

module.exports = {
  entry:{
    'index':'./index.js',
    'index.min': './index.js'
  },
  output: {
    path:__dirname + '/build',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    publicPath:'/build/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: { warnings: false }
    })
    //new webpack.optimize.OccurenceOrderPlugin()
  ]
}
