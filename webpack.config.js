const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    'main': './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'assets/js/theme.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    })
  ]
};