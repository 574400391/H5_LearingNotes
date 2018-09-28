//封装读取文件的方法
const fs = require('fs')
const path = require('path')

//path.join(__dirname, './files/1.txt')
function getFileByPath(fPath, successCallBack, errCallBack) {
  fs.readFile(fPath, 'utf-8', (err, dataStr) => {
    if (err) return errCallBack(err)
    successCallBack(dataStr)
  })
}

var result = getFileByPath(path.join(__dirname, './files/1.txt'), (dataStr) => {
    console.log(dataStr);
  },
  (err) => {
    console.log('err :: ' + err.message);
  })