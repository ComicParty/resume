# 1. BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明。
块格式化上下文（block formatting context 简称 BFC）
-BFC=block formatting context-

> 默认情况下，盒子按照元素在 HTML 中的先后位置从左至右自上而下一个接着一个排列摆放
> 有些元素的盒子被渲染为完整的一行，如h1、p、div；而有些元素的盒子则被渲染为水平排列，直到该行被占满然后换行，如span、a、strong。
> 这是因为不同的盒子使用的是不同的格式化上下文（formatting context）来布局，每个格式化上下文都拥有一套不同的渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用

#### 如何生成BFC：
1. 默认根元素（**html** 元素）会创建一个 BFC
2. float属性不为none；
3. position为absolute或fixed；
4. display为inline-block, flex, 或者inline-flex；
5. overflow不为visible；
#### BFC 有什么作用：
1. 当使用float属性时，会造成父元素的塌陷，这时候可以为父元素生成一个新的BFC--来解决父元素塌陷问题。-当然还是建议使用伪元素的方法解决父元素塌陷-

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/浮动造成的父元素塌陷.jpg" alt="Sample"  width="880" height="1150">
    <p align="center">
        <em>浮动造成的父元素塌陷.jpg</em>
    </p>
</p>

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/生成BFC.jpg" alt="Sample"  width="880" height="1150">
    <p align="center">
        <em>生成BFC.jpg</em>
    </p>
</p>


```
.clearfix{
  *zoom:1;/*生成BFC 仅对ie67有效 */
```
2.margin 合并
有下面这行代码
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <style>
    body{
      background:blue;
    }
    p{
      background:pink;
    }
  </style>
</head>
<body>
    <div>
      <p>fjewo</p>
    </div>
</body>
</html>
```
显示图：

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/div的尺寸.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>div的尺寸.jpg</em>
    </p>
</p>

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/p元素的margin超出了div盒子.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>p元素的margin超出了div盒子.jpg</em>
    </p>
</p>

添加如下代码以 增加BFC：

```
    div{
      overflow:hidden;
    }
```
效果图:

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U10/images/div.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>div.jpg</em>
    </p>
</p>

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U10/images/p.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>p.jpg</em>
    </p>
</p>

# 2.实现下方图中的效果，附上预览链接。

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U10/images/ex3.jpg" alt="Sample"  width="843" height="669">
    <p align="center">
        <em>实现效果</em>
    </p>
</p>

[点击查看](https://comicparty.github.io/resume/projects/U10/exercise2.html)

# 3.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例
#### 在什么场景下会出现外边距合并:
1. 同一BFC中的，相邻元素的margin会合并
2. 同一BFC中，父元素没有padding、border的情况下，其 上margin、下margin会与 最外边子元素的上margin、下margin合并
3. 同一BFC中，只有margin的空元素，它的 上margin 会与 下margin 合并

#### 如何合并:
margin是有尺寸的，合并后的margin 大于等于 （两个margin中的）最小值。
[点击查看 合并](https://comicparty.github.io/resume/projects/U10/exercise3.html)
PS：只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

#### 如何不让相邻元素外边距合并: 
最简单的方法，让他们不相邻，给其中一个元素加一个父元素就好了。
[父元素用overflow:hidden](https://comicparty.github.io/resume/projects/U10/ex3父元素overflow.html) 同样的还有用padding也可以

[ex3父元素用border](https://comicparty.github.io/resume/projects/U10/ex3父ex3父元素用border.html)

#### 父子外边距合并的范例：
[点击查看 合并](https://comicparty.github.io/resume/projects/U10/exercise3.1.html)

# 4.什么是 CSS hack？在哪个网站查看标签(属性)的浏览器兼容情况。

> 由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla Firefox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。
> 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能在不同的浏览器中也能得到我们想要的页面效果。

[browserhacks 查 Hack 的写法](http://browserhacks.com/)
[caniuse.com 查CSS属性兼容](https://caniuse.com/)

# 5.ie6、7的 hack 写法是？

> CSS Hack大致有3种表现形式，**CSS属性前缀法**、**选择器前缀法**以及**IE条件注释法**（即HTML头部引用if IE）Hack，实际项目中CSS Hack大部分是针对IE浏览器不同版本之间的表现差异而引入的。
> 属性前缀法(即类内部Hack)：例如 IE6能识别下划线""和星号" "，IE7能识别星号" "，但不能识别下划线""，IE6~IE10都认识"\9"，但firefox前述三个都不能认识
> 选择器前缀法(即选择器Hack)
> IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <`!--[if IE]>IE浏览器显示的内容 <![endif]-->`，针对IE6及以下版本：`<!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->`。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效

#### ie6、7常见hack写法

```
.box{
  color: red;
  _color: blue; /*ie6*/
  *color: pink; /*ie67*/
  color: yellow\9;  /*ie/edge 6-8*/
}
<!–-[if IE 7]>
<link rel="stylesheet" href="ie7.css" type="text/css" />
<![endif]–->
```

# 6.如下属性，兼容哪些浏览器？

1. inline-block: >=ie8
2. min-width/min-height: >=ie8
3. :before,:after: >=ie8
4. div:hover: >=ie7
5. inline-block: >=ie8
6. background-size: >=ie9
7. 圆角: >= ie9
8. 阴影: >= ie9
9. 动画/渐变: >= ie10

# 7.渐进增强和优雅降级分别是什么意思？
渐进增强(progressive enhancement): 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
优雅降级 (graceful degradation): 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

# 8.以下工具/名词是做什么的？

#### 条件注释
条件注释 (conditional comment) 是于HTML源码中被IE有条件解释的语句。条件注释可被用来向IE提供及隐藏代码。

```
    <!--[if IE 6]>
    <p>You are using Internet Explorer 6.</p>
    <![endif]-->
    <!--[if !IE]><!-->
    <script>alert(1);</script>
    <!--<![endif]-->
    <!--[if IE 8]>
    <link href="ie8only.css" rel="stylesheet">
    <![endif]-->
```
使用了条件注释的页面在 Windows Internet Explorer 9 中可正常工作，但在 Internet Explorer 10 中无法正常工作。 IE10不再支持条件注释)

#### IE Hack
IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!--[if IE]>IE浏览器显示的内容 <![endif]-->，针对IE6及以下版本：<!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效!
#### js 能力检测
这个没学，先简单的回答下
js和css一样，在 浏览器 中会遇到 兼容问题，**js 能力检测**就是检测 浏览器 有没有能力支持 特定的JS代码。
[简书-了解一下](https://www.jianshu.com/p/3362bd4d67b7)
#### html5shiv.js
[HTML5 Shiv](https://github.com/aFarkas/html5shiv)HTML5 Shiv支持在旧版Internet Explorer中使用HTML5分区元素，并为Internet Explorer 6-9，Safari 4.x（和iPhone 3.x）以及Firefox 3.x提供基本的HTML5样式。
#### respond.js
[Respond.js](https://github.com/scottjehl/Respond)此脚本的目标是提供快速轻量级（3kb缩小/ 1kb gzip）脚本，以便在不支持CSS3媒体查询的浏览器中启用响应式Web设计 - 特别是Internet Explorer 8及更低版本。它以这样的方式编写，它可能会修补对其他非支持浏览器的支持（很快就会有更多信息）。
#### css reset
css reset是为了解决 早期的浏览器支持和理解的CSS规范不同，导致渲染页面时效果不一致，而出现的很多兼容性问题。
早期代码如下：`* { margin:0; padding:0 }`
[关于CSS Reset 那些事（一）之 历史演变与Normalize.css](https://segmentfault.com/a/1190000003021766)
#### normalize.css
[normalize.css](https://github.com/necolas/normalize.css):CSS重置的现代替代方案
作用：

> Preserves useful defaults, unlike many CSS resets.
> 保护有用的浏览器默认样式而不是完全去掉它们
> Normalizes styles for a wide range of elements
> 一般化的样式：为大部分HTML元素提供
> Corrects bugs and common browser inconsistencies
> 修复浏览器自身的bug并保证各浏览器的一致性
> Improves usability with subtle improvements
> 优化CSS可用性：用一些小技巧
> Explains what code does using detailed comments
> 解释代码：用注释和详细的文档来

[关于CSS Reset 那些事（一）之 历史演变与Normalize.css](https://segmentfault.com/a/1190000003021766) 这里讲解的很是详细
#### Modernizr
[github-Modernizr](https://github.com/Modernizr/Modernizr)
Modernizr是帮助我们提高开发实践，使用一个非常时髦的方法来帮助探测浏览器是否支持某种新特性，甚至可以加载额外的script脚本。
[JS进阶篇--前端的瑞士军刀Modernizr.js](https://segmentfault.com/a/1190000003820989)
#### postCSS
[github-postcss](https://github.com/postcss/postcss)
PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。
PostCSS 接收一个 CSS 文件并提供了一个 API 来分析、修改它的规则（通过把 CSS 规则转换成一个抽象语法树的方式）。在这之后，这个 API 便可被许多插件利用来做有用的事情，比如寻错或自动添加 CSS vendor 前缀。
# 9.尽可能多的列举浏览器兼容的处理范例
*  使用浮动时，造成的父元素塌陷，我们一般使用 为父元素添加伪元素 的方法解决，代码如下
```
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
```
但是 伪元素大于 等于ie8才能使用！所以用如下方法：

```
.clearfix{
  *zoom: 1; /* 仅对ie67有效 */
}
```
* 让IE8支持HTML5标签
通过 JS 使用 document.createElement 来“欺骗” IE 的 CSS 引擎，让它知道某个标签的存在
下面代码是`<section></section>`标签。
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML5 test</title>
  </head>
  <body>

    <script>
      document.createElement('section');
    </script>

    <style>
      section { color: red; }
    </style>

    <section>
      Hello!
    </section>

  </body>
</html>
```

