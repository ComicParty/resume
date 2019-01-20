# 1.实现一个两栏布局，左侧固定宽度200px，右侧自适应宽度，附上预览链接。效果如下图

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex1.jpg-middle" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>ex1.jpg-middle</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex1.html)

# 2.实现一个三栏布局，两侧固定宽度200px，中间宽度自适应撑满，附上链接。效果如下图

<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex2.jpg-middle" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>ex2.jpg-middle</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex2.html)

# 3.css reset 是什么？css 预编译器是什么？ 后编译器(post css)是什么？
**CSS reset**，又叫做 CSS 重写或者 CSS 重置，用于改写HTML标签的默认样式。
最简单、直白的CSS reset:
```
*{
    mqrgin:0;
    padding:0;
}
``` 
现今建议使用Normalize.css，详见 [U10-normalize.css](https://github.com/ComicParty/resume/tree/master/projects/U10#css-reset)

**css 预编译器**CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。

通俗的说，“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件，以供项目使用。CSS 预处理器为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题”，例如你可以在 CSS 中使用变量、简单的逻辑程序、函数（如右侧代码编辑器中就使用了变量$color）等等在编程语言中的一些基本特性，可以让你的 CSS 更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。
常见的css 预编译器有 :

[Sass](http://sass-lang.com/)：Sass 是一门高于 CSS 的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通 CSS 更加强大的功能。

[LESS](http://lesscss.org/)：Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

[Stylus](http://stylus-lang.com/):Stylus 是一个CSS的预处理框架，2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，所以 Stylus 是一种新型语言，可以创建健壮的、动态的、富有表现力的CSS。比较年轻，其本质上做的事情与 SASS/LESS 等类似

**后编译器(post css)**

> PostCSS 是一款对 CSS 进行处理的工具。它主要依赖插件来进行操作。当你需要某些功能的时候，只需配置相应的插件即可。它有非常非常丰富的插件，可以涵盖你的开发过程的各个方面。即使没有满足你需要的插件，你也完全可以使用 JavaScript 来开发自己的插件就可以了。
> 它可以作为一款 CSS 前置处理器( preprocessor ) 使用, 就像 Sass 和 Less 等一样，使用 postcss-simple-vars, postcss-mixins, postcss-nested, postcss-sass-extend 等插件来实现 Sass 提供的 变量， mixin，选择器嵌套，extend 等功能。如果你不想自己配置，也可以使用一款已经打包好这些功能， 语法与 Sass 相似的插件precss 来实现preprocessor。

[资料来源-认识 PostCSS](https://segmentfault.com/a/1190000010681017)
# 4.实现如下居中方式，并附上 Demo 链接 
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex4.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求：块级元素固定宽度，水平居中</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex4.html)

# 5.实现如下居中方式，并附上 Demo 链接
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex5.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求：大段文字在容器内水平垂直居中</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex5.html)
# 6.实现如下居中方式，并附上 Demo 链接
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex6.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求：并列三个按钮，在父容器内水平居中</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex6.html)

# 7.实现如下居中效果
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex7.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求：图片在容器内水平垂直居中，容器宽高大于图片宽高</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex7.html)

# 8.实现如下居中方式
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex8.jpg-middle" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求： 固定宽高的块在浏览器窗口水平垂直居中</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex8.html)

# 9.实现如下居中方式
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U11/images/ex9.jpg" alt="Sample"  width="340" height="150">
    <p align="center">
        <em>要求： 不定宽高的块在浏览器窗口水平垂直居中</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U11/ex9.html)


