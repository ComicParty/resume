# 1. 浮动元素有什么特征？对父容器、其他浮动元素、普通元素、文字分别有什么影响？
float CSS属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动中移除，尽管仍然保持部分的流动性（与绝对定位相反）。
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/10/images/influence.jpg" alt="Sample"  width="880" height="750">
    <p align="center">
        <em>influence</em>
    </p>
</p>

# 2. 清除浮动指什么？如何清除浮动？ 两种以上方法。
浮动元素会造成其父容器高度坍塌，影响其它元素的定位，因此要清理浮动。
###### 清除前面兄弟元素浮动:

```
clear:both;
clear:left;
clear:right;
```
###### 闭合子元素浮动:
1. 新增一个空元素，对这个元素设置`clear: both`

```
<div class="container">
    <div class="box"></div>
    <span class="clear-box"></span>
</div>
```

```

.box {
    float: left;
}
.clear-box {
    clear: both;
}
```
这样设置后，.box的浮动就会被清除，.container的尺寸会被正常计算，
但是不美观，请看下面一种方法
2.给目标元素，添加一个伪元素，这样也会清除浮动
```
.clearfix::after {
    content:"";
    display:table;
    clear: both;
}
```
3. 给父元素新建一个 BFC(块格式化上下文)

```<div class="container">
    <div class="box"></div>
</div
```

```.container {
    overflow: hidden;
}
.box {
    float: left;
}
```
# 3. 有几种定位方式？分别是如何实现定位的？参考点是什么？使用场景是什么？
定位的几种方式、如何实现、参考点在以下引用中可以找到：

> static:该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
> relative:该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。
> absolute:不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
> fixed:不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先。
> sticky :盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/10/images/position.jpg" alt="Sample"  width="880" height="450">
    <p align="center">
        <em>position</em>
    </p>
</p>

# 4. z-index 有什么作用？ 如何使用？
z-index相当于z轴，有了它，就有了前后之分，在前面的-数值大的-可以看到，在后面-被遮挡住了-就看不到。
z-index 属性只对**定位元素**生效，也就是 position 属性不为 static 的元素。
除了默认值 auto， z-index 可以设置为任意整数，正数，0，负数都可以。
数值大的在上面(auto 数值上相当于0)。
数值相同的，在 HTML 结构中排后面的在上面。

# 5. 实现如下导航栏效果 ：[查看效果-http链接](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/navigation.html)，在下方附上线上预览地址
[点击查看](https://comicparty.github.io/resume/projects/10/exercise5.html)

实用代码
```
text-decoration: none; //a链接的下划线
list-style: none; //列表的样式
cursor: pointer;//鼠标样式
```

# 6. 实现如下效果，回复[预览链接-http](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/code/hunger-ui/alert.html)
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/10/images/ex6-x615y520.jpg" alt="Sample"  width="363" height="277">
    <p align="center">
        <em>效果图</em>
    </p>
</p>

[点击查看](https://comicparty.github.io/resume/projects/10/exercise6.html)

# 7. 把下面的话抄写三遍:
如果用了浮动，其父元素一般(最好)需要清除浮动
如果用了绝对定位，一般(最好)要给参考点设置position:relative

1遍
如果使用了浮动，其父元素最好清除浮动
如果使用了绝对定位，最好给参考点设置position:relative

2如果使用了浮动，它的父元素最好清除浮动。自己想为什么
如果使用了绝对定位，最好要给参考点设置`position:relative;`，如果它找不到有`position:relative;`的参考点，那么会使用默认参考点`<html>`。

3如果使用了float,其父元素最好清除浮动。
如果使用了absolute,最好设置一个`position:relative;`


