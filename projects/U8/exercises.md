# 1. IE 盒模型和W3C盒模型有什么区别?
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U8/images/W3.jpeg" alt="Sample"  width="500" height="400">
    <p align="center">
        <em>W3</em>
    </p>
</p>
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U8/images/IE.jpeg" alt="Sample"  width="500" height="400">
    <p align="center">
        <em>W3</em>
    </p>
</p>

见上面两张图，IE的 `height`和`width`包含了`padding`、`content`和`border`三个尺寸
W3C的`height`和`width`尺寸直接等于 `content`的尺寸。

# 2. CSS 的属性`box-sizing`有什么值？分别有什么作用?

```
/* 关键字 值 */
box-sizing: content-box;
box-sizing: border-box;

/* 全局 值 */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```
> content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
> border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。**大多数情况下这使得我们更容易的去设定一个元素的宽高**。

设置标准盒模型用`border-box`
设置IE盒模型用`border-box`

# 3. `line-height: 2`和`line-height: 200%`有什么区别?
`line-height` CSS 属性用于设置多行元素的空间量，比如文本。对于块级元素，它指定元素行盒（line boxes）的最小高度。对于非替代的inline元素，它用于计算行盒（line box）的高度。
数字值 是相对于元素自己的`font-size`进行计算,百分比值根据当前元素的父元素的`font-size`进行计算。
# 4. `inline-block`有什么特性？如何去除缝隙？高度不一样的`inline-block`元素如何顶端对齐?
`inline-block`同时具有行内和块级元素的特性。
> 在CSS中，块级对象元素会单独占一行显示，多个block元素会各自新起一行，并且可以设置width,height属性；而内联对象元素前后不会产生换行，一系列inline元素都在一行内显示，直到该行排满，对inline元素设置width,height属性无效。
> 我们有个时候既希望元素具有宽度高度特性，又具有同行特性，这个时候我们可以使用inline-block。

如何去除缝隙？首先要知乎缝隙是怎么来的。他是由HTML代码中的空格与换行产生的。
解决方法1：

```
<ul class="btnu"><li class="btn acitve"><a  class="btna" href="">项目1</a></li><li class="btn"><a href="" class="btna" >项目2</a></li><li class="btn"><a href="" class="btna" >项目3</a></li></ul>
```
在li元素为`display:inline-block;`的情况下，这样写，可以去除间隙，但是不美观
解决方法2：

```
<ul class="btnu">
                <li class="btn acitve"><a  class="btna" href="">项目1</a></li>
                <li class="btn"><a href="" class="btna" >项目2</a></li>
                <li class="btn"><a href="" class="btna" >项目3</a></li>
            </ul>
```
进行下面的设置就解决了。
```
<style>
    ul{
        font-size: 0; /* 空白字符大小为0 */
    }
    li{
        font-size: 16px; /* 重置 font-size 为16px*/
    }
</style>
```
高度不一样的`inline-block`元素这样顶端对齐:
`vertical-align: top;//top 使元素及其后代元素的顶部与整行的顶部对齐。`
因为：CSS 的属性 vertical-align 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。(对`inline-block`元素同样有效)


# 5. CSS sprite （雪碧图/精灵图）是什么? 动手实现写一个使用图片sprite实现 icon 的Demo
[点击查看-大概就是这么个意思](https://comicparty.github.io/resume/projects/U8/ex5.html)
# 6. 让一个元素"看不见"有几种方式？有什么区别?
如下属性：

```
opacity: 0 ; //透明度为0，整体
visibility: hidden ; //和opacity:0 类似
display:none; //消失，不占用位置
background-color: rgba(0，0，0，0.2) //只是背景色透明
```
# 7. 简述字体图标的原理，动手实现使用 iconfont 实现字体图标的 demo，回复预览地址
简述：理解其实很简单，我们在 浏览器中 看到的字(英文字体、汉字、日语文字、@、!、<等等)， 都是 浏览器 根据 每个字的  unicode码 和 设置的 字体样式 渲染出来的。
 unicode码 是一个人工编制的、具体国际标准的一个码表，他上面收录了许多的文字符号。
当我们想用 某个图标时，如果可以直接打出这个图标的 unicode码 就好了，但是遗憾的是，他没有收集我们需要的图标（笑2333。
那怎么办呢？ 有办法，看下面：

1. 我们可以创建 我们需要使用的图标 的unicode码
2. 为我们 创建的 unicode码 创建对应的字体库(字体库是用来描述这个 unicode码 怎么画出来)
3. 用

所以这个图标，现在就叫做 字体图标 啦！

[点击查看-avbody燥起来！](https://comicparty.github.io/resume/projects/U8/ex7.html)
 


