# 1.列举CSS编码规范
规范超级无敌巨多，给我10天时间消化消化，我也学不完T_T
[Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

[bootstrap 编码规范](https://codeguide.bootcss.com/)

[命名CSS东西真的很难](https://seesparkbox.com/foundry/naming_css_stuff_is_really_hard)

[Baidu FEX team-CSS编码规范](https://github.com/fex-team/styleguide/blob/master/css.md)

[网易内部的CSS规范](http://nec.netease.com/standard)

[Harry Roberts-CSS规范](https://cssguidelin.es/)

# 2.如何使用伪元素来清除浮动？补全代码

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

```

        body{
            margin-top: 40px;
        }
        .tip{
            width: 300px;
            height: 200px;
            margin-bottom: 40px;
            border:1px solid #e4e4e4;
            position: relative;
        }
        .triangle1::before{
            content: '';
            width: 0;
            height: 0;
            display: inline-block;
            border-top: 10px solid #808080;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #808080;
            position: absolute;
            transform: rotate(45deg);
            top: -10px;
            left: 16px;
        }
        .triangle2::before{
            content: '';
            width: 0;
            height: 0;
            display: inline-block;
            border-top: 10px solid #ff0b0f;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #ff0b0f;
            position: absolute;
            transform: rotate(90deg);
            top: -1px;
            right: -1px;
        }
        .triangle3::before{
            content: '';
            width: 15px;
            height: 15px;
            display: inline-block;
            border-top: 1px solid #e4e4e4;
            border-left: 1px solid #e4e4e4;
            position: absolute;
            transform: rotate(45deg);
            top:-9px;
            left:17px;

            background-color: #fff;
        }
    
```
ps:突然想到，  利用 背景色（background-color和border可以同时用，但是要同色。）也可以做到三角，但是要在 对角线加个渐变。
PS：用伪元素的时候，给伪元素添加background图片 是否也可以？

