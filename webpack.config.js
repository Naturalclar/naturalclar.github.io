const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders:1 } },
          'postcss-loader',
        ],
      },      
    ]
  }
}