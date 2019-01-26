# 测试1
#1.简单介绍 JavaScript的发展历史。
这个世界讲不清的有很多，历史就是其中之一。——By我

[阮一峰-JS教程](https://wangdoc.com/javascript/)
[ECMAScript 6 简介](http://es6.ruanyifeng.com/#docs/intro)

> JavaScript 因为互联网而生，紧跟着浏览器的出现而问世。回顾它的历史，就要从浏览器的历史讲起。
> 1995年5月，Brendan Eich 只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源。

# 2.介绍浏览器的渲染机制。
**浏览器的渲染机制**大致可以分成下面4个步骤
* 处理 HTML 标记并构建 DOM 树
**文档对象模型（DOM）**浏览器从`<html>`标签开始构建DOM树，接下来是`<head>`和`<body>`（`<html>`标签中，只能 包涵这两个标签），然后是其`<head>`和`<body>`其它标签
* 处理 CSS 标记并构建 CSSOM 树
**“CSS 对象模型”(CSSOM)** 的构建类似于DOM树。因为CSS的某些属性是可以被继承的，所以这些属性可以由 父元素 及联至 子元素。
* 将 DOM 与 CSSOM 合并成一个渲染树
渲染树会网罗网页上所有可见的 DOM 内容，以及每个节点的所有 CSSOM 样式信息。
**渲染树只包含渲染网页所需的节点，如display: none;的元素是不会出现在渲染树种的。**
* 根据渲染树来布局，以计算每个节点的几何信息，再将各个节点绘制到屏幕上
为弄清每个对象在网页上的确切大小和位置，浏览器从渲染树的根节点开始进行遍历。
布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸：所有相对测量值都转换为屏幕上的绝对像素。

# 3.样式、JS 在 HTML 中如何放置？
样式、JS 可以通过 **行内**、**内嵌**、**外链** 这三种方式放置。
PS:样式 还可以 以 **属性**的形式放置在HTML中，但是已经弃用，不推荐使用。

```
<html>
<head>
    <link rel="stylesheet" href="./htmlcss.css">
    <script src="./htmljs.js"></script>
    <style type="text/css">
    /*这里 可以写 内嵌的 CSS样式*/
    </style>
    <script>
    console.log('内嵌引入JS');
    </script>
</head>
<body>
    <div width="900px" style="height:900px;color:red;">
        <input type="button" value="点击直升99级！" onclick="javascript:alert('这是行内js')">
        <p>
        div中 width的写法是 样式以 属性 的方式写入HTML中，不建议使用了！
        </p>
        <p>
        div中 style 的写法是 样式以 行内 的方式写入HTML中，不推荐使用！
        </p>
    </div>
    <!-- script文件在这里放入也是极好的，不影响加载-->
</body>
</html>
```

# 4.JavaScript 定义了几种数据类型？ 哪些是原始类型？哪些是复杂类型？
avaScript 的数据类型，共有六种。
原始类型（primitive type）:**sting**、**number**、**boolean**
特殊值：**null**、**undefined**
复杂类型：**object**
第七种，ES6新增:**symbol**

# 5.如何判断一个变量是否是数字、字符串、布尔、函数？
使用`typeof`运算符可以判断
```
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

```
function f() {}
typeof f
// "function"
```
# 测试2：
```
typeof 1
>"number"

typeof "hello"
>"string"

typeof true
>"boolean"

typeof undefined
>"undefined"

typeof null
>"object"
在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。

typeof []
>"object"

typeof {}
>"object"

typeof function(){}
"function"
```

