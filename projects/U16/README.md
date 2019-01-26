# 1.如何异步加载脚本？
只需要在引入JS文件的时候 添加 `defer`或`async`就可以了

```
<script src="script.js"></script>
//浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。

<script async src="script.js"></script>
//async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。

<script defer src="script.js"></script>
 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。

```

# 2.ES3、ES5、ES6分别指什么？
ES是ECMAScript的简称，它是ECMA组织发布的浏览器脚本语言的标准。
ES3、ES5、ES6是ECMASciript的版本，它几乎每年都会有新的变化出现。

ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现。在日常场合，这两个词是可以互换的。
1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。
2009年12月，ECMAScript 5.0版正式发布。
2015年6月，ECMAScript 6正式发布，并且更名为“ECMAScript 2015”。

# 3.解释浏览器的渲染机制
* 解析 HTML 标签, 构建 DOM 树
* 解析 CSS 标签, 构建 CSSOM 树
* 把 DOM 和 CSSOM 组合成 渲染树 (render tree)
* 在渲染树的基础上进行布局, 计算每个节点的几何结构
* 把每个节点绘制到屏幕上 (painting)

# 4.repaint 和 reflow 分别指什么

> 一个页面渲染完毕后，随着用户的操作，或者数据变化，网页还会进行重新渲染。根据不同的触发条件，重新渲染分为两种情况：**重排**（reflow）和**重绘**（repaint）。
> 所有对元素**视觉表现属性**的修改，都会导致重绘（repaint）。比如修改了背景颜色、文字颜色等。
> 所有会触发元素**布局**发生变化的修改，都会导致重排（reflow）。比如窗口尺寸发生变化，删除、添加 DOM 元素，修改了影响元素盒子大小的 CSS 属性如 width、 height、 padding 等。
> 通常情况下，重排的影响更大，重排会导致文档局部或全部的重新运算：重新计算元素位置，大小。（改变一个元素的布局，可能会影响很多个元素的布局）
> 不管是重绘还是重排导致的重新渲染，都会阻塞浏览器。重新渲染的的过程中，JavaScript 会被阻塞，用户的交互行为也会被卡住。复杂的 CSS 动画甚至会拖慢 JavaScript 的运行速度。

参考资料：
[ JS 进阶:Repaint 、Reflow 的基本认识和优化 (2)](https://segmentfault.com/a/1190000002629708)
# 5.解释白屏和 FOUC
FOUC(flash of unstyled content)
白屏 有些浏览器 如chrome 会在所有的css或者字体加载完成后，才加载页面，这个时候我们就会看到 白屏现象。firefox浏览器会先展示内容，CSS会后加载，不会出现白屏现象。
FOUC则是在展现真实的网页之前，网页以浏览器样式进行展现，当加载完成外部样式表后，再以设置的样式进行展现，而造成的现象。这通常是因为CSS样式表加载时间过长，和浏览器渲染机制造成的现象
# 6.【动手题】 把视频里关于白屏和无样式内容删除的测试代码下载到本地，动手演示白屏和FOUC 效果。
[GitHub 代码](https://github.com/jirengu-inc/whitescreen-fouc-test)
完成！



