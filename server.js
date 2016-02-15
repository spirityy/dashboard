var express = require('express')
var app = express()

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath:   '/build/',
  stats: {
    colors: true
  }
}))

app.set('port', process.env.PORT || 8000)
app.use(express.static(__dirname))

var fs = require('fs')

app.get('*',function (req,res) {
  fs.readFile(__dirname + '/index.html', 'utf8', function (err, text) {
    res.send(text)
  })
})

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
