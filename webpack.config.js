const path = require('path')
const webpack = require('webpack') // eslint-disable-line no-unused-vars

module.exports = {
  entry: path.join(__dirname, '/src/main.jsx'),
  output: {
    path: path.join(__dirname, '/assets/'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Utils: path.join(__dirname, '/src/utils/'),
      Styles: path.join(__dirname, '/src/styles/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
        },
      },
    ],
  },
}
