const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.jsx',
  output: {
    path: __dirname + '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  module: {
    loaders: [
      {
        test: /\jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
          cacheDirectory: true,
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders:1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: 'static/media/[name].[hash:8].[ext]',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        }
      }
    ]
  }
}