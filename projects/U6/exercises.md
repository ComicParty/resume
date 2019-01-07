# 1. CSS 加载方式有几种？
1. 属性（弃用）
`<img src="a.png" width=300px height=300px>`
2. 行内
`<img style="width:30px; height=300px;" src="a.png">`
3. 内嵌

```
<head>
    <style>
        p{
            font-size: 3000px;
        }
        h1,h2{
            color: red;
        }
    </style>
</head>
```
4. 外链

```
<head>
    <link rel="stylesheet" href="./style.css">
    <style>
        /*引入css文件*/
        @import url("hello.css");
        @import url(hello1.css);
</head>
```

# 2. @charset有什么作用？
@charset, 定义样式表使用的字符集.
如：

```
@charset "UTF-8"; 
@charset 'iso-8859-15';
```
注意事项：
1. 它必须是样式表中的第一个元素，而前面不得有任何字符。
2. 因为它不是一个嵌套语句，所以不能在@规则条件组中使用。
3. 如果有多个 @charset @规则被声明，只有第一个会被使用，而且不能在HTML元素或HTML页面的字符集相关 <style> 元素内的样式属性内使用。
@charset在某些 CSS 属性中使用非 ASCII 字符时非常有用，例如 content(伪元素)。
# 3. @import有什么作用？如何使用？
答：引入外部样式表。
<style>
@import url("index.css");
@import url('index.css');
@import url(index.css);
@import 'custom.css';
@import "common.css";
@import url('landscape.css') screen and (orientation:landscape);
</style>
# 4. id 选择器和 class 选择器的使用场景分别是什么？
当某一特定元素，需要单独设置样式可以用id。
对多个元素，有相同的样式设置时，可以使用class。
# 5. CSS选择器常见的有几种？
常见的有5种：
1. 基础选择器
   通用元素选择器、id选择器、类选择器、标签选择器
2. 组合选择器
    子元素选择器、直接相邻选择器、后代选择器等、普通相邻选择器（选择目标元素的所有弟弟）。
3. 属性选择器
4. 伪类选择器
    常用的有：el:link、el:visited、el:active、el:hover、el:focus
5. 伪元素选择器
# 6. 伪类选择器有哪些？伪元素有哪些？
伪类：
    选择器	            含义
E:first-child	匹配作为长子（第一个子女）的元素E
E:link	      匹配所有未被点击的链接
E:visited	   匹配所有已被点击的链接
E:active	      匹配鼠标已经其上按下、还没有释放的E元素
E:hover	      匹配鼠标悬停其上的E元素
E:focus	      匹配获得当前焦点的E元素
E:lang(c)	   匹配lang属性等于c的E元素
E:root	      匹配文档的根元素，对于HTML文档，就是HTML元素
E:nth-child(n)      	匹配其父元素的第n个子元素，第一个编号为1
E:nth-last-child(n)	   匹配其父元素的倒数第n个子元素，第一个编号为1
E:nth-of-type(n)	      与:nth-child()作用类似，但是仅匹配使用同种标签的元素
E:nth-last-of-type(n)	与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
E:last-child	         匹配父元素的最后一个子元素，等同于:nth-last-child(1)
E:first-of-type	    匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
E:last-of-type  	    匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)
E:only-child	       匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)
E:only-of-type	       匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
E:empty	             匹配一个不包含任何子元素的元素，文本节点也被看作子元素
E:not(selector)	     匹配不符合当前选择器的任何元素
                        n的取值
                        1，2，3，4，5
                        2n+1, 2n, 4n-1
                        odd双数, even单数

伪元素：
    选择器	        含义
E::first-line	   匹配E元素内容的第一行
E::first-letter	匹配E元素内容的第一个字母
E::before	      在E元素之前插入生成的内容
E::after	         在E元素之后插入生成的内容

# 7. 以下选择器分别是什么意思?
[github](https://github.com/ComicParty/resume/blob/master/projects/U6/exercise7%E5%AF%B9%E4%B8%8B%E5%88%97CSS%E9%80%89%E6%8B%A9%E5%99%A8%E8%BF%9B%E8%A1%8C%E8%A7%A3%E9%87%8A.css)
# 8. 选择器的优先级是如何计算的？
这个是相当的复杂！有多个标准
根据选择器的组成，优先级从高到低分别是：
1. 在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式
2. 作为style属性写在元素标签上的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器自定义
然后就是：相同的选择器，后写的会覆盖前面写的。
    继承自父元素的样式<浏览器自带样式<元素声明样式
# 9. 运行如下代码，并对结果做出解释
[使用开发者工具进行查看](https://comicparty.github.io/resume/projects/U6/exercise9.html)


