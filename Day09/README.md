## webpack不使用配置文件构建
```
webpack ./src/main.js -o ./dist/bundle.js --mode development
``` 

## 使用webpack-dev-server来实现自动打包编译的功能

webpack-dev-server --open --mode development --port 3000 --contentBase src --hot

open: 服务运行后自动打开网页
mode: 指定服务运行模式
port: 指定服务端口
contentBase: 服务器根路径
hot: 是否使用热重载