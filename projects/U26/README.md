### 1. 解释以下概念：事件传播机制、阻止传播、取消默认事件、事件代理。
**事件传播机制**分为三种：事件冒泡模型、事件捕获模型、DOM事件流。
场景：一个网页中，只有3个元素  html > body >div.

事件冒泡模型：当事件发生时，以`click`事件为例，点击`div`,`click`事件会先向它的父元素`body`传播，再向父元素的父元素`html`传播。
事件捕获模型:当事件发生时，以`click`事件为例，点击`div`,最先知道的是`html`元素，然后再向下找发现在`body`元素上出现了同样的事件，再找，发现最终目标`div`元素。
DOM事件流:当事件发生时，先发现 事件捕获，当找到目标元素时，再发生事件冒泡。

**阻止传播**`stopPropagation()`方法可以停止事件在DOM层次的传播，即取消进一步的事件捕获或冒泡。

**取消默认事件**要阻止事件的默认行为，可以使用preventDefault()方法，前提是cancelable值为true。
cancelable	类型：Boolean	只读 说明：是否可以取消事件的默认行为

**事件代理**事件委托简单来说就是利用事件冒泡，只指定一个事件处理程序，用来管理某一类型的所有事件。
因为所有浏览器都支持 事件冒泡，所以，可以 利用 冒泡的特性，在目标元素的父元素上面添加事件监听，当事件发生时，可以使用`e.target.classList.contains('这里写类名')`来判断是不是目标元素发生的事件，从而进一步执行动作。

### 2. 写一个 Demo，演示事件传播的过程，演示阻止传播的效果。
[点击查看](https://comicparty.github.io/resume/projects/U26/ex1.html)

### 3. 解释DOM2事件传播机制。
DOM2事件传播是一个事件流，捕获->目标元素->冒泡。是一个来回传播的过程，任一节点的传播被阻止，事件事件流都将停止。

DOM2级事件定义了两个方法用于处理指定和删除事件处理程序的操作：
`addEventListener()`和`removeEventListener()`
所有的DOM节点都包含这两个方法，并且它们都接受三个参数：
1. 事件类型
2. 事件处理方法
3. 布尔参数，如果是true表示在捕获阶段调用事件处理程序，如果是false，则是在事件冒泡阶段处理

### 4. 补全代码，要求：
当点击按钮开头添加时在%3Cli%3E这里是%3C/li%3E元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
当点击每一个元素li时控制台展示该元素的文本内容。

```
<ul class="ct">
  <li>这里是</li>
  <li>饥人谷</li>
  <li>任务班</li>
</ul>
<input class="ipt-add-content" placeholder="添加内容"/>
<button id="btn-add-start">开头添加</button>
<button id="btn-add-end">结尾添加</button>
<script>
//你的代码
</script>
```

[点击查看](https://comicparty.github.io/resume/projects/U26/ex2.html)
### 5.onlick与addEventListener的区别？
1. 区别一：目标元素只能有触发一个onlick事件，而addEventListener却可以有多个
2. 区别二：onclick是DOM0级，addEventListener是DOM2级。
3. 区别三：onclick不能用事件代理，addEventListener可以使用。


