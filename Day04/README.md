# JavaScript  
JavaScript ( JS ) 是一种具有函数优先的轻量级解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如 Node.js、 Apache CouchDB 和 Adobe Acrobat。JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

### 示例：
1. 添加一个图像切换器
```
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
```

----

### 变量
在计算机科学中, data(数据)大于一切，因为它对于计算机的意义重大。JavaScript提供七种不同的data types(数据类型)，它们是undefined（未定义）, null（空）, boolean（布尔型）, string（字符串）, symbol(符号), number（数字）, and object（对象）。

### 未定义变量
当 JavaScript 中的变量被声明的时候，它们的初始值为 undefined。如果对一个值为 undefined 的变量进行运算操作的时候，那么结果将会是 NaN，NaN 的意思是 "Not a Number"。如果将一个没有 定义 的变量跟字符串进行连接的时候，你将获得一个字符串"undefined"。

### JavaScript 全等于比较运算符===
全等（===）是相对于相等操作符（==）的一种操作符。与相等操作符不同的是全等比较严格，它会同时比较元素的值和 数据类型。


### html中引入外部js文件为何放在body标签结尾处

script标签可以放在html里面任何位置，放在body后面是等body载入完后，依次往下执行，避免，先载入了js，缺找不到body里面的dom对象而造成js出错，所以一般要用window.onload来判断页面是否载入完成。

----

# 使用Bootstrap设计响应式页面

Bootstrap会自动获取使用者屏幕的大小,并根据屏幕的大小自动调整HTML元素的宽度和高度来适配屏幕,因此称之为--响应式布局。

通过响应式布局,你不再需要为你的Web站点重新设计一个手机版的页面,Bootstrap会自动帮你调整好在手机页上的页面显示,事实上,Bootstrap在任何宽度的设备上都能适应得很好。

使用Bootstrap也非常简单,你只需要把下面的链接添加到你需要使用Bootstrap来进行布局的应用的头部：

```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap /3.3.1/css/bootstrap.min.css"/>
```

----

# Vue.js

### vue-webpack-boilerplate

Usage:
```
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

## 起步

尝试 Vue.js 最简单的方法是使用 [JSFiddle 上的 Hello World 例子](https://jsfiddle.net/chrisvfritz/50wL7mdz/)。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。或者你也可以创建一个 .html 文件，然后通过如下方式引入 Vue：
```
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
或者：
```
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

## 声明式渲染
Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：
```
<div id="app">
  {{ message }}
</div>
```
```
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
## vue指令
- v-bind: 将这个元素节点的 title 特性和 Vue 实例的 message 属性保持一致
- v-if: 条件判断
- v-for: 循环
- v-on: 添加事件监听
- v-model: 实现表单输入和应用状态之间的双向绑定

## vue生命周期
![Aaron Swartz](https://cn.vuejs.org/images/lifecycle.png)
