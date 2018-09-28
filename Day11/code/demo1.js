const fs = require('fs')
const path = require('path')

//path.join(__dirname, './files/1.txt')
function getFileByPath(fPath, callBack) {
  fs.readFile(fPath, 'utf-8', (err, dataStr) => {
    if(err) return callBack(err)
    // console.log(dataStr)
    callBack(null, dataStr)
  })
}

var result = getFileByPath(path.join(__dirname, './files/1.txt'), (err, dataStr) => {
  if(err) return console.log('err :: '+err.message);
  console.log(dataStr);
})