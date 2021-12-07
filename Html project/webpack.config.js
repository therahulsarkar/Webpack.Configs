const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
      path: path.resolve(__dirname, 'dist'), //Specifying the final folder 
      filename: 'final.js', //For the main js file 
      publicPath: './', //Path to assets
      assetModuleFilename: 'images/[name][ext][query]'

    }, 
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]

}