const path = require('path')
//这个配置文件是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'),//入口,标识要使用webpack打包哪个文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
}