const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './src/index.html',
          minify: false,
        }),
      ],
   entry: './src/index.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true
   },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader','sass-loader',],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };