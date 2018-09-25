const http = require('http') //导入http内置模块
const urlModule = require('url') //解析url地址

const server = http.createServer()

server.on('request', function (req, res) {
  // const url = req.url
  const { pathname: url, query} = urlModule.parse(req.url, true)
  console.log(url);
  if (url === '/getscript') {
    var scriptStr = `${query.callback}()`
    res.end(scriptStr) //发送给客户端
  } else {
    res.end('404')
  }
})

server.listen(3000, function () {
  console.log('server listen at http://127.0.0.1:3000');
})