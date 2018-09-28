//  1. Promise是一个构造函数，通过new Promise()获取一个实例对象
//  2. resolve（成功之后的回调函数） reject（失败之后的回调函数）
//  3. 实例可以访问到.then()方法
//  4. Promise表示一个异步操作

const fs = require('fs')
var promise = new Promise(function () {
  //这个function内部是具体的异步操作

})