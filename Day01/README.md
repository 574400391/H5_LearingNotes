# [开始学习HTML5](https://www.w3cschool.cn/html5/html5-intro.html)

### 为什么要学习H5？
一直在做Android开发，基于项目需求需要将Native的app重构Webapp，之后适配小程序什么的也比较方便，嗯，应该比较方便吧。。。废话不多说，先从H5标签开始。

### 什么是HTML5？
HTML5 是下一代 HTML 标准。

HTML , HTML 4.01的上一个版本诞生于 1999 年。自从那以后，Web 世界已经经历了巨变。

HTML5 仍处于完善之中。然而，大部分现代浏览器已经具备了某些 HTML5 支持。

HTML5 受包括Firefox（火狐浏览器），IE9及其更高版本，Chrome（谷歌浏览器），Safari，Opera等国外主流浏览器的支持；国内的傲游浏览器（Maxthon）， 360浏览器、搜狗浏览器、QQ浏览器、猎豹浏览器等同样具备支持HTML5的能力。

### 最简单的HTML5文档：
```
<!DOCTYPE html>
<html>
    <head>
        <title>文档标题</title>
    </head>
    <body>
        文档内容...
    </body>
<html>
```

### HTML5的改进
- 新元素
- 新属性
- 完全支持CSS3
- Video和Audio
- 2D/3D制图
- 本地存储
- 本地SQL数据
- Web应用

### 将HTML5元素定义为块元素
HTML5 定了 8 个新的 HTML 语义（semantic）  元素。所有这些元素都是块级 元素。

为了能让旧版本的浏览器正确显示这些元素，你可以设置 CSS 的 display 属性值为 block:

```
header, section, footer, aside, nav, main, article, figure {
   display: block; 
}
```

### 为HTML添加新元素
```
<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8">
        <title>为html添加新元素</title>
        <script>document.createElement("myHero")</script>
        <style>
            myHero {
                display: block;
                background-color: #ddd;
                padding: 50px;
                font-size: 30px;
            }
        </style>
    </head>
    <body>
        <h1>我的第一个标题</h1>
        <p>我的第一个段落</p>
        <hero>我的第一个新元素</hero>
    </body>
</html>
```

### Internet Explorer 浏览器问题
你可以使用以上的方法来为 IE 浏览器添加 HTML5 元素，但是：

Internet Explorer 8 及更早 IE 版本的浏览器不支持以上的方式。

我们可以使用 Sjoerd Visscher 创建的 "HTML5 Enabling JavaScript", " shiv" 来解决该问题:

```
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

以上代码是一个注释，作用是在 IE 浏览器的版本小于 IE9 时将读取 html5.js 文件，并解析它。

注意：国内用户请使用百度静态资源库（Google 资源库在国内不稳定）：

```
<!--[if lt IE 9]>
  <script src="http://apps.bdimg.com/libs/html5shiv/3.7/html5shiv.min.js"></script>
<![endif]-->
```

针对IE浏览器html5shiv 是比较好的解决方案。html5shiv主要解决HTML5提出的新的元素不被IE6-8识别，这些新元素不能作为父节点包裹子元素，并且不能应用CSS样式。