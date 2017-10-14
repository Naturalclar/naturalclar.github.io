const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.jsx',
  output: {
    path: __dirname + '/assets/js/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    loaders: [
      {
        test:/\jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
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