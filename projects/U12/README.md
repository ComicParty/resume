# 1.列举CSS编码规范
规范超级无敌巨多，给我10天时间消化消化，我也学不完T_T
[Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

[bootstrap 编码规范](https://codeguide.bootcss.com/)

[命名CSS东西真的很难](https://seesparkbox.com/foundry/naming_css_stuff_is_really_hard)

[Baidu FEX team-CSS编码规范](https://github.com/fex-team/styleguide/blob/master/css.md)

[网易内部的CSS规范](http://nec.netease.com/standard)

[Harry Roberts-CSS规范](https://cssguidelin.es/)

# 2.如何使用伪元素来清楚浮动？补全代码

```
.clearfix::after{
    content:'';
    display:table;
    clear:both;
}
```

# 3.实现如下效果，三角符号用伪元素实现
<p align="center">
    <img src="https://github.com/ComicParty/resume/blob/master/projects/U12/images/dgqe.jpg" alt="Sample"  width="249" height="451">
    <p align="center">
        <em>三角符号用伪元素实现</em>
    </p>
</p>

[已完成-点击查看](https://comicparty.github.io/resume/projects/U12/ex3.html)
ps:突然想到，  利用 背景色（background-color和border可以同时用，但是要同色。）也可以做到三角，但是要在 对角线加个渐变。
PS：用伪元素的时候，给伪元素添加background图片 是否也可以？

