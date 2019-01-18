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
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/div.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>div.jpg</em>
    </p>
</p>

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U9/images/p.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>p.jpg</em>
    </p>
</p>

# 2.实现下方链接中的效果，附上预览链接。
# 3.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例
# 4.什么是 CSS hack？在哪个网站查看标签(属性)的浏览器兼容情况。
ie6、7的 hack 写法是？
如下属性，兼容哪些浏览器？

inline-block:
min-width/min-height
:before,:afte:
div:hover
inline-block
background-size
圆角
阴影
动画/渐变
渐进增强和优雅降级分别是什么意思？
以下工具/名词是做什么的？

条件注释
IE Hack
js 能力检测
html5shiv.js
respond.js
css reset
normalize.css
Modernizr
postCSS
尽可能多的列举浏览器兼容的处理范例

