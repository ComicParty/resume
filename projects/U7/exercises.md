# 1.  什么是 CSS 继承?哪些属性能继承，哪些不能？
答：CSS继承就是 在父元素中进行的一些CSS样式设置，它的子元素会默认进行同样的设置，这就是CSS继承。每个CSS 属性定义的概述都指出了这个属性是默认继承的("Inherited: Yes") 还是默认不继承的("Inherited: no")。
会被继承的属性：color,font-size，font-weight,line-height，font-family
不会被 继承 的属性：border,padding,margin,background-image

# 2. 块级元素和行内元素分别有哪些？
1.bolck level会默认换行显示,默认display:block;
  inline level只显示它本身的宽度,默认：display:inline;
2.block level 可以设置 上、右、下、左的margin,padding属性；
而inline level的margin属性上、下不生效的，只有左右生效，
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex2spanMargin.jpg" alt="Sample"  width="363" height="277">
    <p align="center">
        <em>行内元素span的 margin设置效果</em>
    </p>
</p>
inline level的padding属性设置后，上、下、左、右视觉上可以看到，但只有padding-right,padding-left会改变它本身的大小和影响其它元素的位置， padding-top,padding-bottom只有显示效果，无实质影响。
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex2spanPadding.jpg" alt="Sample"  width="363" height="277">
    <p align="center">
        <em>行内元素span的 padding设置效果</em>
    </p>
</p>
        [github 设置 markdown图片大小 教程](https://blog.csdn.net/lovechris00/article/details/82379382)
3.block level可以包含 block level和inline level，
而inline level只能包含数据和其它行内元素。

# 3. 如何让块级元素水平居中？如何让行内元素水平居中?如何让 inline-block 元素水平居中？
[点击查看](https://comicparty.github.io/resume/projects/U7/ex3.html)
# 4. 单行文本溢出加 ...如何实现?
[点击查看](https://comicparty.github.io/resume/projects/U7/ex4.html)
# 5. px, em, rem,vw 有什么区别

> px:px 是 pixels（像素）的缩写，是一种绝对单位，用于屏幕显示器上，传统上一个像素对应于计算机屏幕上的一个点，而对于高清屏则对应更多。任何现代显示屏，不管是手机，平板，笔记本还是电视都是由成千上万的像素组成的，所以我们可以使用这些像素来定义长度。
> em:是相对长度单位，这个单位表示元素的font-size的计算值。如果用在font-size 属性本身，它会继承父元素的font-size。不过其参照值并不是固定不变的，而是不同的属性有不同的参照值。
> rem:也是一种相对单位，不过不一样的是 rem 是相对于根元素 html 的 font-size 来计算的，所以其参照物是固定的。（rem的r就是表示root，虽然rem相对em进步了很多，但是由于是新技术，不支持IE8以下（包括IE8）,不过幸喜的是移动端可以放心使用）
> 注意：是em和rem，经常被用来创建可以可伸缩的布局，即使用户改变字体的大小，它也会保持页面垂直方向上的自适应。
> vw：基于视窗的宽度计算，1vw 等于视窗宽度的百分之一
> vh：基于视窗的高度计算，1vh 等于视窗高度的百分之一
> vmin：基于vw和vh中的最小值来计算，1vmin 等于最小值的百分之一
> vmax：基于vw和vh中的最大值来计算，1vmax 等于最大值的百分之一

# 6. 解释下面代码的作用? 字体里\5b8b\4f53代表什么?
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```
1.整体意思是设置body的字体，`font:`后面的内容是简写，拆开来看：
```
body{
    font-size:12px;
    /*字体大小为12px*/
    font-height:1.5;
    /*行高为字体的1.5倍*/
    font-family:tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
    /*字体，先从浏览器中找tahoma，没有就去系统中找，还没有没有就用下一种字体arial，找到就用，找不到，就接着往下找，直到最后一种字体。
    'Hiragino Sans GB'-单引号是因为有空格，需要让浏览器把他们当成一个整体来解释-*/
}
```
2.使用函数`unecsape('')`对\5b8b\4f53进行取反
`unescape('%u5b8b%u4f53');`
得到宋体两个字
# 7. 实现如下效果
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex7.jpg)
# 8. 实现如下效果
![使用github仓库的地址才有效](https://raw.githubusercontent.com/ComicParty/resume/master/projects/U7/images/ex8.jpg)
# 9. 实现如下两个表格效果
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex9.jpg)
# 10. 实现如下三角形
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex10.jpg)


