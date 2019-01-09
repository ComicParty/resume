# 1.  什么是 CSS 继承?哪些属性能继承，哪些不能？
答：CSS继承就是 在父元素中进行的一些CSS样式设置，它的子元素会默认进行同样的设置，这就是CSS继承。每个CSS 属性定义的概述都指出了这个属性是默认继承的("Inherited: Yes") 还是默认不继承的("Inherited: no")。
会被继承的属性：color,font-size
不会被 继承 的属性：border,padding,margin,background-image

# 2. 块级元素和行内元素分别有哪些？
区别1:bolck level会默认换行显示,inline level只显示它本身的宽度
    2:block level 可以设置 上、右、下、左的margin,padding属性；
      inline level它的margin属性设置上、下是不生效的，只有左右生效，
                    padding设置宽高后，上、下、左、右视觉上可以看到，但是只有padding-right,padding-left会改变它本身的大小和影响其它元素的位置， padding-top,padding-bottom只有显示效果，无实质影响。
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex2spanPadding.jpg" alt="Sample"  width="363" height="277">
    <p align="center">
        <em>行内元素span的 padding设置效果</em>
    </p>
</p>
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex2spanMargin.jpg" alt="Sample"  width="363" height="277">
    <p align="center">
        <em>行内元素span的 margin设置效果</em>
    </p>
</p>

    3:block level可以包含 block level和inline level，而inline level只能包含数据和其它行内元素。
# 3. 如何让块级元素水平居中？如何让行内元素水平居中?如何让 inline-block 元素水平居中？
# 4. 单行文本溢出加 ...如何实现?
# 5. px, em, rem,vw 有什么区别
# 6. 解释下面代码的作用? 字体里\5b8b\4f53代表什么?
```
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```
# 7. 实现如下效果
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex7.jpg)
# 8. 实现如下效果
![使用github仓库的地址才有效](https://raw.githubusercontent.com/ComicParty/resume/master/projects/U7/images/ex8.jpg)
# 9. 实现如下两个表格效果
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex9.jpg)
# 10. 实现如下三角形
![](https://github.com/ComicParty/resume/blob/master/projects/U7/images/ex10.jpg)


