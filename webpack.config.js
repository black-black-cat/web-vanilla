const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pathResolve = (part) => {
  return path.resolve(__dirname, part)
}

module.exports = {
  mode: 'development',
  entry: pathResolve('./js/app.js'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: 'Vanilla',
      inject: true
    })
  ],
  devServer: {
    contentBase: pathResolve('public')
  },
  output: {
    filename: '[name].[hash].js',
    path: pathResolve('dist')
  }
}
