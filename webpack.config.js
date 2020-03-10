const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    jQuery: 'jquery',
    angular: 'angular',
    ngSanitize: 'angular-sanitize',
    'ods-widgets': 'ods-widgets'
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
    }, ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
