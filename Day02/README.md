### HTML Web SQL数据库
Web SQL是在浏览器上模拟数据库，可以使用JS来操作SQL完成对数据的读写。
Web SQL 数据库 API 并不是 HTML5 规范的一部分，但是它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。

#### 核心方法
1. **openDatabase**: 这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。
2. **transaction**: 这个方法让我们能够控制一个事务，以及基于这种i情况执行提交或者回滚。
3. **executeSql: 这个方法用于执行实际的SQL查询。

#### 打开数据库
```
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
```

#### 执行查询操作
```
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {  
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
});
```
上面的语句执行后会在 'mydb' 数据库中创建一个名为 LOGS 的表。

#### 插入数据
在执行上面的创建表语句后，我们可以插入一些数据：
```
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "W3Cschool教程")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.w3cschool.cn")');
});
```
我们也可以使用动态值来插入数据：
```
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {  
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
  tx.executeSql('INSERT INTO LOGS 
                        (id,log) VALUES (?, ?'), [e_id, e_log];
});
```
实例中的 e_id 和 e_log 是外部变量，executeSql 会映射数组参数中的每个条目给 "?"。

#### 读取数据
以下实例演示了如何读取数据库中已经存在的数据：
```
var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);

db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "W3Cschool教程")');
   tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.w3cschool.cn")');
});

db.transaction(function (tx) {
   tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
      var len = results.rows.length, i;
      msg = "
查询记录条数: " + len + "

";
      document.querySelector('#status').innerHTML +=  msg;
	
      for (i = 0; i < len; i++){
         alert(results.rows.item(i).log );
      }
	
   }, null);
});
```

#### 删除记录
删除记录使用的格式如下：
```
db.transaction(function (tx) {
    tx.executeSql('DELETE FROM LOGS  WHERE id=1');
});
```
删除指定的数据id也可以是动态的：
```
db.transaction(function(tx) {
    tx.executeSql('DELETE FROM LOGS WHERE id=?', [id]);
});
```

#### 更新记录
更新记录的格式如下：
```
db.transaction(function (tx) {
    tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cn\' WHERE id=2');
});
```

更新指定的数据id也可以是动态的：
```
db.transaction(function(tx) {
    tx.executeSql('UPDATE LOGS SET log=\'www.w3cschool.cn\' WHERE id=?', [id]);
});
```

----
### HTML5 应用程序缓存
使用 HTML5，通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本。这意味着，你可以在没有网络连接的情况下进行访问。

#### 什么是应用程序缓存（Application Cache）？
HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。

应用程序缓存为应用带来三个优势：
1. 离线浏览 - 用户可在应用离线时使用它们
2. 速度 - 已缓存资源加载得更快
3. 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

#### HTML5 Cache Manifest 实例
```
<!DOCTYPE HTML> 
<html manifest="demo.appcache"> 

<body> 
The content of the document...... 
</body> 

</html>
```

#### Cache Manifest基础
如需启用应用程序缓存，需要在文档的\<html>标签中包含manifest属性

每个指定了 manifest 的页面在用户对其访问时都会被缓存。如果未指定 manifest 属性，则页面不会被缓存（除非在 manifest 文件中直接指定了该页面）。

manifest 文件的建议的文件扩展名是：".appcache"。

请注意，manifest 文件需要配置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。

#### Manifest 文件
manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。

manifest 文件可分为三个部分：
- CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存
- NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存
- FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）

#### CACHE MANIFEST
第一行，CACHE MANIFEST，是必需的：
```
CACHE MANIFEST        
/theme.css        
/logo.gif        
/main.js
```
上面的 manifest 文件列出了三个资源：一个 CSS 文件，一个 GIF 图像，以及一个 JavaScript 文件。当 manifest 文件加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然是可用的。

#### NETWORK
下面的 NETWORK 小节规定文件 "login.php" 永远不会被缓存，且离线时是不可用的：
```
NETWORK:        
login.php
```

可以使用星号来指示所有其他其他资源/文件都需要因特网连接：
```
NETWORK:        
*
```

#### FALLBACK
下面的 FALLBACK 小节规定如果无法建立因特网连接，则用 "offline.html" 替代 /html5/ 目录中的所有文件：    

```
FALLBACK:       
/html/ /offline.html
```

**注意**：第一个 URI 是资源，第二个是替补。

#### 更新缓存
一旦应用被缓存，它就会保持缓存直到发生下列情况：
- 用户清空浏览器缓存
- manifest文件被修改
- 由程序来更新应用缓存

#### 关于应用程序缓存的说明
请留心缓存的内容。

一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。
**注意**：浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点5MB）

----
## HTML5 Web Workers
web worker 是运行在后台的 JavaScript，不会影响页面的性能，更好的解释是，你可以使用web worker提供的一种简单的方法来为web内容在后台线程中运行脚本，这些线程在执行任务的过程中并不会干扰用户界面！

#### 什么是Web Worker？
当在 HTML 页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行。

ps.貌似chrome浏览器有安全限制，不支持WebWorker

----
## HTML SSE

#### HTML5服务器发送事件（Server-Sent Events）
Server-Sent Events是基于WebSocket协议的一种服务器向客户端发送事件和数据的单项通讯。

HTML5服务器发送事件允许网页获得来自服务器的更新。

#### Server-Sent事件 - 单向消息传递
Server-Sent 事件指的是网页自动获取来自服务器的更新。

以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。

----
## CSS学习

#### 什么是CSS？
- CSS指层叠样式表（Cascading Style Sheets）的简称
- CSS是一种标记语言，属于浏览器解释型语言，可以由浏览器执行，不需要编译
- CSS是用来表现HTML或XML的标记语言
- CSS是由W3C的CSS工作组发布推荐和维护
- CSS可以让页面变得美观
- CSS语法由三部分构成：选择器、属性和值：selector{property: value}

#### 使用CSS的优势
内容与表现相分离，有了CSS，网页的内容（XHTML）与表现就可以分开了

使用CSS可以减少网页的代码量，增加王爷的浏览速度

#### 如何使用CSS？
有三种方法可以在站点网页上使用样式表：
1. 外联式Linking（也叫外部样式）：将网页链接到外部样式表

当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 标签链接到样式表。 标签在（文档的）头部
```
<head> <link rel="stylesheet" type="text/css" href="mystyle.css"> </head>
```
浏览器会从文件 mystyle.css 中读到样式声明，并根据它来格式文档。

外部样式表可以在任何文本编辑器中进行编辑。文件不能包含任何的 html 标签。样式表应该以 .css 扩展名进行保存。下面是一个样式表文件的例子：
```
hr {color:sienna;}           
p {margin-left:20px;}            
body {background-image:url(/images/back40.gif);}   
```
2. 嵌入式Embedding（也叫内页样式）：在网页上创建嵌入的样式表
当单个文档需要特殊的样式时，就应该使用内部样式表。你可以使用 \<style> 标签在文档头部定义内部样式表，就像这样:
```
<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head>
```

3. 内联式Inline（也叫行内样式）：应用内联样式到各个网页元素

由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。

要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。本例展示如何改变段落的颜色和左外边距：
```
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```

其中，优先级：内联式>嵌入式>外联式

### CSS盒子模型（Box Model）
所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距，边框，填充，和实际内容。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。

下面的图片说明了盒子模型(Box Model)：

![avatar](https://7n.w3cschool.cn/statics/images/course/box-model.gif)

说明：
- Margin（外边距） - 清除边框区域。Margin没有背景颜色，它是完全透明
- Border（边框） - 边框周围的填充和内容。边框是受到盒子的背景颜色影响
- Padding（内边距） - 清除内容周围的区域。会受到框中填充的背景颜色影响
- Content（内容） - 盒子的内容，显示文本和图像

ps.[CSS盒模型科普](https://www.w3cschool.cn/css_series/css_series-6tza24q1.html)

----
ps.这个没啥要写的，大体上在W3C上过一遍直接跳到[HTML5 & CSS实战](https://www.w3cschool.cn/codecamp/list?pename=html5_and_css_camp)玩