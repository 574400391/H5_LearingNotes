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
  devServer: {
    open: true, //自动打开浏览器
    port: 3000, //设置启动时候的运行端口
    contentBase: 'src', //指定托管的根目录
    hot: true //启用热更新  
  },
  plugins: [ //插件数组

    new webpack.HotModuleReplacementPlugin(), //new一个热更新的模块对象，这是启用热更新的第三步
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
    }]
  }
}