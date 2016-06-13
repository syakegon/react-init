var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;
const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: PATHS.app,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        // Babel
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
  ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'title'
    })
  ]

};

// npm start
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
     devtool: 'eval-source-map',
     devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

// npm build
if(TARGET === 'build') {
  module.exports = merge(common, {
  });
}
