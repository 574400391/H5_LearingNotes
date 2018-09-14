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

----

## HTML5 Canvas

 `<canvas>` 元素是HTML5中的新元素，通过使用该元素，你可以在网页中绘制所需的图形。

 ### Canvas坐标
 canvas是一个二维网格。
 canvas的左上角坐标为(0,0)
 上面的fillRect方法拥有参数(0,0,150,75)。意思是：
 在画布上绘制150x75的矩形，以左上角(0,0)位置为原点。
 （ps.做过Android的同学可以联想view）

 ### Canvas-路径
 在Canvas上画线，我们将使用以下两种方法：
 - moveTo(x,y) 定义线条开始坐标
 - lineTo(x,y) 定义线条结束坐标

----
## HTML5内联SVG

### 什么是SVG？
SVG表示可缩放矢量图形，是基于可扩展标记语言（标准通用标记语言的子集），用于描述二维矢量图形的一种图形格式，它在2003年1月14日成为W3C推荐标准。
- SVG指可伸缩矢量图形（Scalable Vector Graphics）
- SVG用于定义用于网格的基于矢量的图形
- SVG使用XML格式定义图形
- SVG图像在放大或改变尺寸的情况下其图形质量不会有损失
- SVG是万维网联盟的标准
- SVG与DOM和XSL之类的W3C标准是一个整体

### SVG优势
与其他图像格式相比（jpeg、gif等），优势在于：
- SVG图像可以通过文本编辑器来创建和修改
- SVG图像可被搜索、索引、脚本化或压缩
- SVG是可伸缩的
- SVG图像可在任何的分辨率下被高质量地打印
- SVG可在图像质量不下降的情况下被放大

### SVG和Canvas两者间的区别：
- SVG是一种使用XML描述2D的语言
- Canvas通过JavaScript来绘制2D图形
- SVG基于XML，这意味着SVG DOM中的每个元素都是可用的。您可以为某个元素附加JavaScript事件处理器。
- 在SVG中，每个被绘制的图形均被视为对象。如果SVG对象的属性发生变化，那么浏览器能够自动重现图形。
- Canvas是逐像素进行渲染的，在Canvas中，一旦图形被绘制完成，它就不会继续得到浏览器的关注，如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### Canvas与SVG的比较
|Canvas|SVG|
|------|------|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|最适合带有大型渲染区域的应用程序（比如谷歌地图）|
|能够以.png或.jpg格式保存结果图像|复杂度高会减慢渲染速度(任何过度使用DOM的应用都不快)|
|最适合图像密集型的游戏，其中的许多对象会被频繁重绘|不适合游戏应用|

----

## HTML5 MathML

MathML 是数学标记语言，是一种基于XML（标准通用标记语言的子集）的标准，用来在互联网上书写数学符号和公式的置标语言。

----

## HTML5拖放

### 拖放
拖放是一种常见的特性，即抓取对象后拖到另一个位置。
在HTML5中，拖放是标准的一部分，任何元素都能够拖放。

----
## HTML5视频、音频

TODO:暂时略过，后续再补充

----
## HTML5 Input类型

### 密码输入
type属性设置为password
- maxlength - 设置用户可以在密码框中输入的最大字符数
- pattern - 指定用于输入验证的正则表达式模式
- placeholder - 指定一个提示，告诉用户您希望输入的种类
- readonly - 如果存在，则使密码框只读，并且用户无法编辑内容
- required - 指定用户必须输入值以进行输入验证。
- size - 指定元素的宽度，以字符数表示。
- value - 指定密码的初始值。

### 限制数据项输入
H5位输入元素的type属性引入了新值，我们可以从用户收集更多特定数据。
- checkbox - 将输入限制为true/false复选框
- color - 将输入限制为颜色
- date - 将输入限制为日期
- datetime - 将输入限制为具有时区的全球日期和时间
- datetime-local - 将输入限制为不带时区的全局日期和时间
- email - 将输入限制为格式正确的电子邮件地址
- month - 将输入限制为年和月
- number - 将输入限制为整数或者浮点数
- radiobutton - 将输入限制为特定范围
- range - 将输入限制为特定范围
- tel - 将输入限制为格式正确的电话号码
- time - 将输入限制为一天中的时间
- week - 将输入限制为年和周
- url - 将输入限制为完全限定的URL

### 数字输入
type属性的数字值创建一个只接受数字值的输入框
- list - 设置为此元素提供值的datalist元素的id
- min - 为输入验证目的的设置最小值
- max - 设置用于验证目的的最大值
- readonly - 如果存在，则使输入框为只读，并且用户无法编辑内容
- required - 用户必须提供用于输入验证目的的值
- step - 将增量和减量的步长设置为该值
- value - 指定元素的初始值

### 范围输入
我们可以使用输入元素的范围类型来获取数值。

范围输入元素的值限制用户从预定范围中选择值。

范围类型支持与数字类型相同的一组属性。

### 复选框输入
输入元素的复选框类型创建一个复选框，允许用户选择true/false
- checked - 如果应用，请在最初显示时或表单重置时选中复选框
- required - 指定用户必须选中复选框
- value - 设置在选中复选框时提交到服务器的值

### radio输入
输入元素的radio类型创建一组单选按钮，让用户从一组固定的选项中进行选择
- checked - 如果应用，请在最初显示时或表单重置时选中复选框
- required - 指定用户必须选中复选框
- value - 设置在选中复选框时提交到服务器的值

### 电子邮件输入
电子邮件类型值将输入元素配置为仅接受作为有效电子邮件地址的输入。

- list - 设置为元素提供值的数据表元素的ID。
- maxlength - 指定用户可以在文本框中输入的最大长度。
- pattern - 指定用于输入验证的正则表达式模式。
- placeholder - 向用户指定提示。
- readonly - 如果存在，请将文本框设置为只读。
- required - 指定用户必须提供值。
- size - 指定元素的宽度。
- value - 指定元素的初始值。对于电子邮件类型，可以是单个地址，也可以是由逗号分隔的多个地址。

### tel输入
tel类型值将输入元素配置为仅接受输入，其是电话号码。

- list - 设置为元素提供值的数据表元素的ID。
- maxlength - 指定用户可以在文本框中输入的最大长度。
- pattern - 指定用于输入验证的正则表达式模式。
- placeholder - 向用户指定提示。
- readonly - 如果存在，请将文本框设置为只读。
- required - 指定用户必须提供值。
- size - 指定元素的宽度。
- value - 指定元素的初始值。

### url输入
url类型值将输入元素配置为仅接受作为URL的输入。

- list - 设置为元素提供值的数据表元素的ID。
- maxlength - 指定用户可以在文本框中输入的最大长度。
- pattern - 指定用于输入验证的正则表达式模式。
- placeholder - 向用户指定提示。
- readonly - 如果存在，请将文本框设置为只读。
- required - 指定用户必须提供值。
- size - 指定元素的宽度。
- value - 指定元素的初始值。

### 搜索输入
输入元素的搜索类型向用户呈现用于输入搜索词语的单行文本框。

### 隐藏输入
要将数据项发送到服务器而不向用户显示，请使用隐藏的输入元素。

### 图像输入
输入元素的图像类型创建显示图像并在单击时提交表单的按钮。

- alt - 提供元素的文本描述。
- formaction - 对于按钮元素
- formenctype - 对于按钮元素
- formmethod - 对于按钮元素
- formtarget - 对于按钮元素
- formnovalidate - 对于按钮元素
- height - 指定图像的高度（以像素为单位）。
- src - 指定应显示的图像的URL。
- width - 指定图像的宽度（以像素为单位）。

### 文件上传输入
文件输入元素在表单提交期间将文件上传到服务器。

- accept - 指定将接受的MIME类型集。 RFC2046定义MIME类型（http://tools.ietf.org/html/rfc2046）。
- multiple - 指定输入元素可以上传多个文件。在写作的时候，没有一个主流浏览器实现了这个属性。
- required - 指定用户必须提供用于输入验证目的的值。


----
## HTML5 Web存储
在Html5之前，主要是使用cookies存储，cookies的缺点有：需要在请求头上带着数据，存储大小需要在4k之内。

Web存储需要更加安全和快速，这些数据不会被保存到服务器上，但是这些数据只用于用户请求网站数据上，也可以存储大量的数据，而且不影响网站的性能。

数据以键值对存在，web网页的数据只允许该网页访问使用。

### localStorage 和 sessionStorage
客户端存储数据的两个对象为：
- localStorage - 没有时间限制的数据存储
- sessionStorage - 针对一个session的数据存储

在使用web存储前，需要先检查当前浏览器是否支持:
```
if(typeof(Storage)!=="undefined")        
  {        
  // 是的! 支持 localStorage  sessionStorage 对象!         
  // 一些代码.....         
  }        
else        
  {        
  // 抱歉! 不支持 web 存储。         
  }

```

#### localStorage对象
存储的数据没有时间限制
```
localStorage.sitename="W3Cschool在线教程"; 
document.getElementById("result").innerHTML="网站名：" + localStorage.sitename;
```

- 使用 key="sitename" 和 value="W3Cschool在线教程" 创建一个 localStorage 键/值对。
- 检索键值为"sitename" 的值然后将数据插入 id="result"的元素中。

不管是 localStorage，还是 sessionStorage，可使用的API都相同，常用的有如下几个（以localStorage为例）： 

- 保存数据：localStorage.setItem(key,value);
- 读取数据：localStorage.getItem(key);
- 删除单个数据：localStorage.removeItem(key);
- 删除所有数据：localStorage.clear();
- 得到某个索引的key：localStorage.key(index);


#### sessionStorage对象
sessionStorage 方法针对一个 session 进行数据存储。当用户关闭浏览器窗口后，数据会被删除。

