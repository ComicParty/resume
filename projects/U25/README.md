
### 1.补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。

<ul class="ct">
    <li data-img="1.png">鼠标放置查看图片1</li>
    <li data-img="2.png">鼠标放置查看图片2</li>
    <li data-img="3.png">鼠标放置查看图片3</li>
</ul>
<div class="img-preview"></div>
<script>
//你的代码
</script>

[点击查看](https://comicparty.github.io/resume/projects/U25/ex1.html)
### 2.有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容。

```
<ul class="ct">
    <li>这里是</li>
    <li>饥人谷</li>
</ul>
<script>
//todo ...
</script>
```

[点击查看](https://comicparty.github.io/resume/projects/U25/ex2.html)

### 3.实现，点击换色 效果

[点击查看](https://comicparty.github.io/resume/projects/U25/ex3.html)

### 4.如何获取 DOM 计算后的样式？

`Window.getComputedStyle()`方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。
[参考链接—— MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle)
使用getComputedStyle获取元素计算后的样式，不要通过 node.style.属性 获取

```
//使用方法
var node = document.querySelector('p')
var color = window.getComputedStyle(node).color
console.log(color)
```

### 5.写一个函数，批量操作 css。

```
function css(node, styleObj){
//todo ..
  for(var valueKey in styleObj){
    if(valueKey === 'color'){
      styleObj[valueKey] = 'white';
      console.log('white');
      
      node[valueKey]=styleObj[valueKey]
    }else if(valueKey === 'background-color'){
       styleObj[valueKey] = 'black';
       console.log('black');
       
       node[valueKey]=styleObj[valueKey]
    }
    
  }
}
css(document.body, {
  'color': 'red',
  'background-color': '#ccc'
})
```

### 6.列出DOM 元素选取的 API。

```
getElementById()
getElementsByClassName()
getElementsByTagName()
getElementsByName()
querySelector()
querySelectorAll()
```

### 7.如何创建元素？如何添加元素？
创建元素： `createElement()`、`createTextNode()`和`createDocumentFragment()`

修改/添加 元素：
```
appendChild()//在元素末尾添加元素
insertBefore()//在某个元素之前插入元素
replaceChild()//replaceChild()接受两个参数：要插入的元素和要替换的元素
```

