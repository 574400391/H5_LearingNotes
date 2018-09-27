const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
//这个配置文件是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'), //入口,标识要使用webpack打包哪个文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [ //插件数组
    new htmlWebpackPlugin({
      //创建一个在内存中生成HTML页面的插件
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|bmp|gif|jpeg)$/,
        use: ['url-loader']
      },
      {
        test: /\.(ttf|svg|eot|woff|woff2)$/,
        use: ['url-loader']
      }, {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}