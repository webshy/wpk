
'use strict'

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',  //生成的页面标题<head><title>首页</title></head>
      filename: 'index.html', // dist目录下生成的文件名
      template: './index.html' // 我们原来的index.html，作为模板
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    hot: true
  }

}